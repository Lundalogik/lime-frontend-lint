/* eslint-env node */
const gentlyCopy = require('gently-copy');

const filesToCopy = ['.prettierrc'];
const userPath = process.env.INIT_CWD;

gentlyCopy(filesToCopy, userPath);
