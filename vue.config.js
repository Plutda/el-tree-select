/*
 * @moduleName:
 * @Author: dawdler
 * @LastModifiedBy: dawdler
 * @Date: 2019-01-30 16:02:54
 * @LastEditTime: 2022-02-16 16:03:49
 */
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    filenameHashing: false,
    productionSourceMap: false,
    lintOnSave: true,
    chainWebpack: config => {
        if (isProduction) {
            // 忽略打包
            config.externals({
                vue: 'Vue',
                'element-ui': 'ElementUI'
            });
            // config
            //     .plugin('webpack-bundle-analyzer')
            //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            //     .tap(args => [...args, { analyzerPort: 8999 }])
        };
    },
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false
    },
    devServer: {
        open: true,
        port: 9999,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
    pluginOptions: {
        storybook: {
            allowedPlugins: ['define']
        }
    }
};
