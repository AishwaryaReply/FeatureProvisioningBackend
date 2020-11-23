/**
 * @author Francesco Palma
 * @date Sept 2020
 * This script produce a meta-swagger compatible with iHSF's pipeline and AWS Api Gateway.
 * Two operations are performed:
 * - Removal of the 'example' keyword: required for Api Gateway compatibility
 * - Escape of special keywords such as $ref: required for iHSF's pipeline which does env variable substitution
 */

// All the keywords inserted in this list will not be usable as part
// of applicative responses or requests. BE AWARE
const invalidKeywords = ['example'];

const toEscapeKeywords = ['$ref', '$schema'];
const fs = require('fs');
const logPrefix = 'CleanupSwaggerScript|';

/**
 * Adds .template at the swagger file name before the .json
 * @param {*} swaggerFilename 
 */
function generateTemplateSwaggerName(swaggerFilename) {
    const splittedFilename = swaggerFilename.split('.');
    splittedFilename.splice(splittedFilename.length - 1, 0, 'template');
    const templateFilename = splittedFilename.join('.');
    return templateFilename;
}

const arguments = process.argv.slice(2);
// check empty arguments
if (!arguments || arguments.length <= 0) {
    console.log(logPrefix, 'No arguments provided to the cleanup script');
    return 1;
}

// validate arguments format
const argumentsFormat = new RegExp('swagger.*\.json');
if (arguments.some(filename => argumentsFormat.test(filename) === false)) {
    console.log(logPrefix, 'Invalid swagger name passed');
    return 2;
}

arguments.forEach(swaggerFilename => {
    console.log(logPrefix, 'Cleaning up swagger', swaggerFilename);
    let rawdata = fs.readFileSync(swaggerFilename);
    // process it to remove invalid keywords and escape special keywords
    const swagger = JSON.parse(rawdata, function(key, value) {
        if (invalidKeywords.includes(key)) {
            return undefined;
        }
        // search in to escape keywords array
        const found = toEscapeKeywords.find(value => value === key);
        if (found != undefined) {
            const escapedKey = '\\' + found;
            this[escapedKey] = value;
        } else {
            return value;
        }
    });
    // json stringify escapes backward slash so counter it by running regex
    const stringyfiedSwagger = JSON.stringify(swagger, null, 2).replace(/\\\\/g, '\\');
    // save file
    // generate swagger template name
    const templateFilename = generateTemplateSwaggerName(swaggerFilename);
    fs.writeFileSync(templateFilename, stringyfiedSwagger);
});