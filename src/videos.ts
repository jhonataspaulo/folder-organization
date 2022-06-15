import path from 'path';
import fs from 'fs';

export function moveVideos(directory: string, videos: string[]) {
  const videosDir = path.join(directory, 'videos');
  if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir, 0o744);
  }

  videos.map(video => {
    const currentFile = path.join(directory, video);
    const destinationFile = path.join(directory, 'videos', video);
    fs.rename(currentFile, destinationFile, function (err) {
      if (err) {
        throw err;
      } else {
        console.log('Videos moved with success');
      }
    });
  });
}
