# @grimille/duolingo-js  [2021 UPDATE]

Use the Duolingo API and power up your Node.js application (non-official)
This is WIP, feel free to contact me for additions or any issues.

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
    const logged = await client.login(); // True / false
    const user = await client.getUserData("Grimille");

    // your code here
})();
```
## Todos

- Implement new API calls (Buy a freeze… 👀)
- More testing and more support
- Tell me your needs

## Contributing
No contributions for the moment as the API is in working progress.

## License
[MIT](https://choosealicense.com/licenses/mit/)