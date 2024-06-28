import {createProxyMiddleware} from "http-proxy-middleware";
import {Application} from "express";

module.exports = function(app: Application) {
    app.use('/api', createProxyMiddleware({
        target: 'http://api.autonitro.com.br',
        changeOrigin: true,
        pathRewrite: {
            '/api': '',  // remove o prefixo '/api' da URL, se necessário
        },
    }));
};

