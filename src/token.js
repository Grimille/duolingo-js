const fs = require('fs-extra');

exports.tokenFileExist = (tokenFile) => {
    return fs.existsSync(tokenFile);
}

exports.readTokenFromFile = (tokenFile) => {
    return fs.readJSONSync(tokenFile);
}

exports.writeTokenToFile = (tokenFile, jwt) => {
    fs.outputJSONSync(tokenFile, jwt);
}