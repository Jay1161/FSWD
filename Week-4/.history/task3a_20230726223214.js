function arePathsSameFile(filePath1, filePath2) {
  // Convert the relative file paths to absolute file paths using path.resolve()
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);

  try {
    // Get the file stats for each file using fs.statSync()
    const stats1 = fs.statSync(absolutePath1);
    const stats2 = fs.statSync(absolutePath2);

    // Check if the device ID and inode number of both files match
    return stats1.ino === stats2.ino && stats1.dev === stats2.dev;
  } catch (error) {
    // If there's an error accessing either file, return false (indicating they are not the same)
    return false;
  }
}
