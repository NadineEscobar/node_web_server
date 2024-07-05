// require('dotenv').config();
// const { get } = require('env-var');

// const envs = {
//     PORT: get('PORT').required().asPortNumber(),
//     PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
// }

// module.exports = {
//     envs
// }

import env from 'dotenv';
import { get } from 'env-var';

env.config();

export const env = {
    PORT: envvar.get('PORT').required().asPortNumbre(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}