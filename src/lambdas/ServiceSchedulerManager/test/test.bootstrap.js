/**
 * Stub gcv-logger during test so to speed up process, since message printing is
 * heavy. Only mocha/chai messages and errors will be printed out.
 */
const logger = require('gcv-logger');

const emptyFn = () => { }

Object.keys(logger).forEach(key => {
    if (typeof logger[key] === 'function' && logger[key].name !== 'error') {
        logger[key] = emptyFn;
    }
})