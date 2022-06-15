import fs from 'fs';
import path from 'path';
import {moveFiles} from './moveFiles';

let DIR = '';
let i = 0;

export const organize = async (directory: string) => {
  if (!DIR) {
    DIR = directory;
  } else {
    if (DIR !== directory) {
      DIR = directory;
    }
  }

  const mainDir = await fs.promises.readdir(path.join(DIR), {
    withFileTypes: true
  });

  const folders = mainDir
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const files = mainDir
    .filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);

  //---------IMAGES-----------

  //All extensions allowed to images
  const acceptExtensionsImages = ['.jpg', '.png', '.svg'];

  //Get all images from directory with extensions allowed
  const images = files.filter(file =>
    acceptExtensionsImages.includes(path.extname(file))
  );

  //Move all images to folder 'images'
  if (images.length > 0) {
    moveFiles(directory, images, 'Images');
  }

  //---------PDFS-----------

  //Get all pdfs from directory
  const pdfs = files.filter(file => file.endsWith('.pdf'));

  //Move all pdfs to folder 'pdfs'
  if (pdfs.length > 0) {
    moveFiles(directory, pdfs, 'Pdfs');
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
    moveFiles(directory, videos, 'Videos');
  }

  if (folders.length > 0) {
    await organize(`${DIR}/${folders[i]}`);
    i < folders.length - 1 ? i++ : (i = 0);
  } else {
    return;
  }
};
