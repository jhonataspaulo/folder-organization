import fs from 'fs';
import path from 'path';
import readline from 'readline';
import {moveImages} from './images';
import {movePdfs} from './pdfs';
import {moveVideos} from './videos';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o endereço do diretório completo: ', directory => {
  if (!directory) {
    rl.close();
  }

  (async () => {
    //Get all files from directory
    const files = await fs.promises.readdir(path.join(directory));

    //---------IMAGES-----------

    //All extensions allowed to images
    const acceptExtensionsImages = ['.jpg', '.png', '.svg'];

    //Get all images from directory with extensions allowed
    const images = files.filter(file =>
      acceptExtensionsImages.includes(path.extname(file))
    );

    //Move all images to folder 'images'
    if (images.length > 0) {
      moveImages(directory, images);
    }

    //---------PDFS-----------

    //Get all pdfs from directory
    const pdfs = files.filter(file => file.endsWith('.pdf'));

    //Move all pdfs to folder 'pdfs'
    if (pdfs.length > 0) {
      movePdfs(directory, pdfs);
    }

    //---------VIDEOS-----------

    //All extensions allowed to videos
    const acceptExtensionsVideos = ['.mp4'];

    //Get all videos from directory
    const videos = files.filter(file =>
      acceptExtensionsVideos.includes(path.extname(file))
    );

    //Move all videos to folder 'videos'
    if (videos.length > 0) {
      moveVideos(directory, videos);
    }

    rl.close();
  })();
});
