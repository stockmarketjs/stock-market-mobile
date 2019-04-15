// 作为配置文件，直接导出配置对象即可
module.exports = {
    devServer: {
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: process.env.PORT || 8081,
        // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://127.0.0.1:3000/',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}