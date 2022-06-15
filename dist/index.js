"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readline_1 = __importDefault(require("readline"));
const moveFiles_1 = require("./moveFiles");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Insira o endereço do diretório completo: ', directory => {
    if (!directory) {
        rl.close();
    }
    (async () => {
        //Get all files from directory
        const files = await fs_1.default.promises.readdir(path_1.default.join(directory));
        //---------IMAGES-----------
        //All extensions allowed to images
        const acceptExtensionsImages = ['.jpg', '.png', '.svg'];
        //Get all images from directory with extensions allowed
        const images = files.filter(file => acceptExtensionsImages.includes(path_1.default.extname(file)));
        //Move all images to folder 'images'
        if (images.length > 0) {
            (0, moveFiles_1.moveFiles)(directory, images, 'Images');
        }
        //---------PDFS-----------
        //Get all pdfs from directory
        const pdfs = files.filter(file => file.endsWith('.pdf'));
        //Move all pdfs to folder 'pdfs'
        if (pdfs.length > 0) {
            (0, moveFiles_1.moveFiles)(directory, pdfs, 'Pdfs');
        }
        //---------VIDEOS-----------
        //All extensions allowed to videos
        const acceptExtensionsVideos = ['.mp4'];
        //Get all videos from directory
        const videos = files.filter(file => acceptExtensionsVideos.includes(path_1.default.extname(file)));
        //Move all videos to folder 'videos'
        if (videos.length > 0) {
            (0, moveFiles_1.moveFiles)(directory, videos, 'Videos');
        }
        rl.close();
    })();
});
