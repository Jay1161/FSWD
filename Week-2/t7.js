const fs = require('fs');

function createFileBackup() {
  const sourceFile = 'Jay.txt';
  const backupFile = 'Jay1.txt';
  fs.copyFile(sourceFile, backupFile, (err) => {
    if (err) {
      console.error('Error creating file backup:', err);
    } else {
      console.log('File backup created successfully.');
    }
}); }

function restoreFileFromBackup() {
  const backupFile = 'Jay.txt';
  const restoredFile = 'Jay1.txt';
  fs.copyFile(backupFile, restoredFile, (err) => {
    if (err) {
      console.error('Error restoring file from backup:', err);
    } else {
      console.log('File restored from backup successfully.');
    }
}); }

createFileBackup();
fs.writeFile(backupFile, sourceFile, (err) => {
  if (err) {
    console.error('Error modifying the original file:', err);
  } else {
    console.log('Original file modified.');
restoreFileFromBackup();
  }
});