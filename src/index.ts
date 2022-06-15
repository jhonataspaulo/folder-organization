import fs from 'fs';
import path from 'path';
import readline from 'readline';
import {organize} from './organize';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira o endereço do diretório completo: ', async directory => {
  if (!directory) {
    rl.close();
  }
  await organize(directory);
  rl.close();
});
