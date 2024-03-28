// cerebrus6
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');
const logFilePath = 'error.log';

// Promisify fs functions
const mkdirAsync = promisify(fs.mkdir);
const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const appendFileAsync = promisify(fs.appendFile);

// Get the current date and time
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
const formattedTime = currentDate.toTimeString().slice(0, 8).replace(/:/g, '-'); // Format: HH-MM-SS

// Create the backup folder name
const backupFolderName = `backup_${formattedDate}_${formattedTime}`;

async function createBackupFolder(folder) {
    try {
        // Check if the backup folder already exists
        await fs.access(folder);

        // console.log(`Backup folder '${folder}' already exists. Skipping creation.`);
    } catch (error) {
        // Backup folder doesn't exist, create it
        await mkdirAsync(folder);
        console.log(`Backup folder '${folder}' created successfully.`);
    }
}

// Asynchronous function to modify scripts
async function modifyScripts() {
    try {
        // Read the current directory
        const files = await readdirAsync(process.cwd());

        // Iterate through each file
        for (const file of files) {
            // Check if the file is a JavaScript file
            if (path.extname(file) === '.js') {
                // Read the file
                const data = await readFileAsync(file, 'utf8');

                // Check if cerebrus6 already exists in the first line
                const firstLine = data.split('\n')[0];
                if (firstLine.trim() === '// cerebrus6') {
                    console.log(`'File '${file} is already modified'. Skipping.`);
                    continue;
                }

                await createBackupFolder(backupFolderName);

                // Write the original script to the backup folder
                await writeFileAsync(path.join(backupFolderName, file), data, 'utf8');
                console.log(`File '${file}' copied to backup folder.`);

                // Add the comment to the beginning of the file
                let modifiedScript = `// cerebrus6\n${data}\n`;

                // Modify the script here
                modifiedScript = modifiedScript.replace(/await puppeteer.launch\(\);/g, 'await puppeteer.launch({ headless: false });');
                modifiedScript = modifiedScript.replace(/await delay\(2000\);\nawait browser\.close\(\);/g, 'await browser.close();');
                modifiedScript = modifiedScript.replace(/await browser.close\(\);/g, 'await delay(2000);\nawait browser.close();');
                modifiedScript = modifiedScript.replace(/\n\s+}\n\s+{\n/g, '\n}\nawait delay(500);\n{');

                // Write the modified script back to the original file
                await writeFileAsync(file, modifiedScript, 'utf8');
                console.log(`File '${file}' modified successfully.`);

                // Make executable
                const command = `pkg ${file}`;
                const { stdout } = await execAsync(command);
                console.log(`Command executed successfully:\n${stdout}`);
            }
        }
    } catch (error) {
        console.error(`An error occurred: ${error}`);

        // Write error to file
        await appendFileAsync(logFilePath, `${error}\n`);
    }
}

// Promisify exec function
const execAsync = promisify(exec);

// Run the function
modifyScripts();