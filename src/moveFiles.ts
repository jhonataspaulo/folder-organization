import path from 'path';
import fs from 'fs';

export function moveFiles(directory: string, files: string[], folder: string) {
  const folderDir = path.join(directory, folder);
  if (!fs.existsSync(folderDir)) {
    fs.mkdirSync(folderDir, 0o744);
  }

  files.map(file => {
    const currentFile = path.join(directory, file);
    const destinationFile = path.join(directory, folder, file);
    fs.rename(currentFile, destinationFile, function (err) {
      if (err) {
        throw err;
      } else {
        console.log('Files moved with success');
      }
    });
  });
}
