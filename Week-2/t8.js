const fs = require('fs');
const path = require('path');

function createFoldersRecursive(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

function createFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function createFileStructureFromJSON(jsonFilePath) {
  try {
    const data = fs.readFileSync(jsonFilePath);
    const jsonData = JSON.parse(data);

    if (jsonData && jsonData.folders && jsonData.files) {
      const rootDir = path.dirname(jsonFilePath);

      jsonData.folders.forEach((folder) => {
        const folderPath = path.join(rootDir, folder);
        createFoldersRecursive(folderPath);
      });

      jsonData.files.forEach((fileObj) => {
        const { name, folder } = fileObj;
        const folderPath = path.join(rootDir, folder);
        const filePath = path.join(folderPath, name);
        createFoldersRecursive(folderPath);
        createFile(filePath, '');
      });

      console.log('File/Folder structure created successfully.');
    } else {
      console.error('Invalid JSON data format.');
    }
  } catch (err) {
    console.error('Error while processing the JSON file:', err);
  }
}
createFileStructureFromJSON('structure.json');