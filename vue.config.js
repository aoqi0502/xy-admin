
let path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports={
    chainWebpack: (config) => {
        config.externals({
            'vue': 'Vue',
        })
        config.resolve.alias.set('@', resolve('src'))
    },
    lintOnSave: false,
    assetsDir:'static',
    publicPath:'./',
    devServer: {
        hot: true,
        host: 'localhost',
        port: 8080,
        proxy:{
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            symlinks: true,
        },
    }
}
