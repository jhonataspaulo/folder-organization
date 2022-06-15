"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveImages = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function moveImages(directory, images) {
    const imagesDir = path_1.default.join(directory, 'images');
    if (!fs_1.default.existsSync(imagesDir)) {
        fs_1.default.mkdirSync(imagesDir, 0o744);
    }
    images.map(img => {
        const currentFile = path_1.default.join(directory, img);
        const destinationFile = path_1.default.join(directory, 'images', img);
        fs_1.default.rename(currentFile, destinationFile, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log('Images moved with success');
            }
        });
    });
}
exports.moveImages = moveImages;
