import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = ({
    isDev,
    isTsx,
}: BuildBabelLoaderProps) => ({
    test: isTsx ? /\.(jsx|tsx)$/i : /\.(js|ts)$/i,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    'i18next-extract',
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true,
                    },
                ],
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTsx,
                    },
                ],
                isTsx && [
                    babelRemovePropsPlugin,
                    {
                        props: ['data-testid'],
                    },
                ],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
