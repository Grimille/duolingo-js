const dotenv = require('dotenv');

dotenv.config();

// -- Duolingo -- //
const Duolingo = require('../src/duolingo');
const client = new Duolingo(process.env.DUOLINGO_IDENTIFIER, process.env.DUOLINGO_PASSWORD);

client.login();
