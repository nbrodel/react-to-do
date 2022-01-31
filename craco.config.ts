import { resolve } from 'path';

const resolvePath = (p: string) => resolve(__dirname, p)

export const webpack = {
    alias: {
        '@components': resolvePath('./src/components'),
        '@assets': resolvePath('./src/assets'),
        '@store': resolvePath('./src/store'),
        '@consts': resolvePath('./src/consts'),
        '@functions': resolvePath('./src/functions'),
        '@contexts': resolvePath('./src/contexts')
    }
};