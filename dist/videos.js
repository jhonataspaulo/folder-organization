"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveVideos = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function moveVideos(directory, videos) {
    const videosDir = path_1.default.join(directory, 'videos');
    if (!fs_1.default.existsSync(videosDir)) {
        fs_1.default.mkdirSync(videosDir, 0o744);
    }
    videos.map(video => {
        const currentFile = path_1.default.join(directory, video);
        const destinationFile = path_1.default.join(directory, 'videos', video);
        fs_1.default.rename(currentFile, destinationFile, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log('Videos moved with success');
            }
        });
    });
}
exports.moveVideos = moveVideos;
