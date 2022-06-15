"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movePdfs = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function movePdfs(directory, pdfs) {
    const pdfsDir = path_1.default.join(directory, 'pdfs');
    if (!fs_1.default.existsSync(pdfsDir)) {
        fs_1.default.mkdirSync(pdfsDir, 0o744);
    }
    pdfs.map(pdf => {
        const currentFile = path_1.default.join(directory, pdf);
        const destinationFile = path_1.default.join(directory, 'pdfs', pdf);
        fs_1.default.rename(currentFile, destinationFile, function (err) {
            if (err) {
                throw err;
            }
            else {
                console.log('Pdfs moved with success');
            }
        });
    });
}
exports.movePdfs = movePdfs;
