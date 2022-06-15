"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFiles = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function moveFiles(directory, files, folder) {
    const folderDir = path_1.default.join(directory, folder);
    if (!fs_1.default.existsSync(folderDir)) {
        fs_1.default.mkdirSync(folderDir, 0o744);
    }
    files.map(file => {
        const currentFile = path_1.default.join(directory, file);
        const destinationFile = path_1.default.join(directory, folder, file);
        fs_1.default.rename(currentFile, destinationFile, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log('Files moved with success');
            }
        });
    });
}
exports.moveFiles = moveFiles;
