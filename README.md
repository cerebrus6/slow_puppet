This will loop through every js folder in the current directory and:

    1. Show the chromium browser that is hidden in default when exporting from recorder.
    2. Add delays between ever action.
    3. Add delays before exiting the chromium browser.
    4. Create backups before modifying the files.
    5. Add a marker that let's you identify if the file is already mmodified.
    6. Create executable for every modified puppeteer files.

You can copy and run the index-win.exe to the directory where your puppeteer js files are. You can also use the index-linux and index-macos executaables accordingly.

After running, an executable for the puppeteer file will be created. 

Initialization

     npm install

Run using node

    node index

Create executable

    pkg index.js
