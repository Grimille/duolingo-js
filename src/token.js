const fs = require('fs');

exports.tokenFileExist = (tokenFile) => {
    return fs.existsSync(tokenFile);
}

exports.readTokenFromFile = (tokenFile) => {
    return fs.readFileSync(tokenFile, 'utf8');
}