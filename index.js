const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// ルートパスの設定
app.get('/', (req, res) => {
  res.send('Proxy server is working.');
});

// プロキシミドルウェアの設定
app.use('/api', createProxyMiddleware({ target: 'https://jsonplaceholder.typicode.com', changeOrigin: true }));

// ポート番号を設定（CodeSandboxでは3000が一般的です）
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
