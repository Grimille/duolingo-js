# @grimille/duolingo-js [WIP - 2021 UPDATE]

Use the Duolingo API and power up your Node.js application (non-official)

## Installation

Use npm to install this dependency.

```bash
npm install @grimille/duolingo-js
```

## Usage

```javascript
const { Duolingo }  = require('@grimille/duolingo-js');

const client = new Duolingo(<username|email>, <password>);

(async() => {
    await client.login();
    // your api code here

})();
```

## Contributing
No contributions for the moment as the API is in working progress.

## License
[MIT](https://choosealicense.com/licenses/mit/)