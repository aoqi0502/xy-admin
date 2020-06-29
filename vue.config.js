module.exports={
    assetsDir:'static',
    publicPath:'./',
    devServer: {
        host: 'localhost',
        port: 8080,
        // proxy: {
        //     '/mall': {
        //         // target: process.env.VUE_APP_BASE_URL_MALL,
        //         changeOrigin: true,
        //         ws: true,
        //         pathRewrite: {
        //             '^/mall': ''
        //         }
        //     },
        // },
    },
}
