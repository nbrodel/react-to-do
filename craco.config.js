const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    // ...
    webpack: {
        alias: {
            '@components': resolvePath('./src/components'),
            '@assets': resolvePath('./src/assets'),
            '@store': resolvePath('./src/store'),
            '@consts': resolvePath('./src/consts'),
            '@functions': resolvePath('./src/functions'),
            '@contexts': resolvePath('./src/contexts')
        }
    },
  // ...
}