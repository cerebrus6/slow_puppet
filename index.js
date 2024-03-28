// cerebrus6
const fs = require('fs');
const path = require('path');

// Get the current date and time
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD
const formattedTime = currentDate.toTimeString().slice(0, 8).replace(/:/g, '-'); // Format: HH-MM-SS

// Create the backup folder name
const backupFolderName = `backup_${formattedDate}_${formattedTime}`;

// Create the backup folder
fs.mkdir(backupFolderName, (err) => {
    if (err) {
        console.error('Error creating backup folder:', err);
        return;
    }

    console.log(`Backup folder '${backupFolderName}' created successfully.`);

    // Read the current directory
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // Iterate through each file
        files.forEach(file => {
            // Check if the file is a JavaScript file
            if (path.extname(file) === '.js') {
                // Read the file
                fs.readFile(file, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading file ${file}:`, err);
                        return;
                    }

                    // Check if cerebrus6 already exists in the first line
                    const firstLine = data.split('\n')[0];
                    if (firstLine.trim() === '// cerebrus6') {
                        console.log(`'// cerebrus6' already exists in file '${file}'. Skipping.`);
                        return;
                    }

                    // Write the original script to the backup folder
                    fs.writeFile(path.join(backupFolderName, file), data, 'utf8', (err) => {
                        if (err) {
                            console.error(`Error writing file ${file} to backup folder:`, err);
                            return;
                        }
                        console.log(`File '${file}' copied to backup folder.`);
                    });

                    // Add the comment to the beginning of the file
                    var modifiedScript = `// cerebrus6\n${data}`;

                    ///////////////////////////////////////////
                    // Modify the script here
                    ///////////////////////////////////////////
                    // Add the comment to the beginning of the file
                    modifiedScript = modifiedScript.replace(/await delay\(2000\);\nawait browser\.close\(\);/g, 'await browser.close();');
                    modifiedScript = modifiedScript.replace(/await browser.close\(\);/g, 'await delay(2000);\nawait browser.close();');
                    modifiedScript = modifiedScript.replace(/\n\s+}\n\s+{\n/g, '\n}\nawait delay(500);\n{');

                    // Write the modified script back to the original file
                    fs.writeFile(file, modifiedScript, 'utf8', (err) => {
                        if (err) {
                            console.error(`Error writing modified file ${file}:`, err);
                            return;
                        }
                        console.log(`Script '${file}' modified successfully.`);
                    });
                });
            }
        });
    });
});

// Function to introduce a delay
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}
