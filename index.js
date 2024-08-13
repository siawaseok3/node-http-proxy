const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// プロキシミドルウェアの設定
app.use('/api', createProxyMiddleware({ target: 'https://api.example.com', changeOrigin: true }));

// ポート番号を設定（CodeSandboxでは3000が一般的です）
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
