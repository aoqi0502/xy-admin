module.exports={
    chainWebpack: (config) => {
        config.externals({
            'vue': 'Vue',
        })
    },
    lintOnSave: false,
    assetsDir:'static',
    publicPath:'./',
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy:{
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
}
