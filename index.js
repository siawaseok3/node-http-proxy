/*!
 * Caron dimonio, con occhi di bragia
 * loro accennando, tutte le raccoglie;
 * batte col remo qualunque s’adagia 
 *
 * Charon the demon, with the eyes of glede,
 * Beckoning to them, collects them all together,
 * Beats with his oar whoever lags behind
 *          
 *          Dante - The Divine Comedy (Canto III)
 */

// 必要なパッケージをインポート
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// プロキシミドルウェアの設定
app.use('/api', createProxyMiddleware({ target: 'https://api.example.com', changeOrigin: true }));

// サーバーの起動
app.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
