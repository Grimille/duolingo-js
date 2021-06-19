const dotenv = require('dotenv');

dotenv.config();

// -- Duolingo -- //
const Duolingo = require('../src/duolingo');
const client = new Duolingo(process.env.DUOLINGO_IDENTIFIER, process.env.DUOLINGO_PASSWORD);

(async () => {
    await client.login();
    
    const grimille = await client.getUserData("Grimille");
    const aleroyke = await client.getUserData('aleroyke');

    console.log(aleroyke);
})();

