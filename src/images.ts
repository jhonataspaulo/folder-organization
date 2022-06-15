import path from 'path';
import fs from 'fs';

export function moveImages(directory: string, images: string[]) {
  const imagesDir = path.join(directory, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, 0o744);
  }

  images.map(img => {
    const currentFile = path.join(directory, img);
    const destinationFile = path.join(directory, 'images', img);
    fs.rename(currentFile, destinationFile, function (err) {
      if (err) {
        throw err;
      } else {
        console.log('Images moved with success');
      }
    });
  });
}
