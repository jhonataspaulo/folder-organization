import path from 'path';
import fs from 'fs';

export function movePdfs(directory: string, pdfs: string[]) {
  const pdfsDir = path.join(directory, 'pdfs');
  if (!fs.existsSync(pdfsDir)) {
    fs.mkdirSync(pdfsDir, 0o744);
  }

  pdfs.map(pdf => {
    const currentFile = path.join(directory, pdf);
    const destinationFile = path.join(directory, 'pdfs', pdf);
    fs.rename(currentFile, destinationFile, function (err) {
      if (err) {
        throw err;
      } else {
        console.log('Pdfs moved with success');
      }
    });
  });
}
