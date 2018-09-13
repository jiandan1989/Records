const os = require('os');

// 本机 Ip
const Ip = os.networkInterfaces().en0.find(item => item.family === 'IPv4').address;

// 端口 8000
const port = 8000;

module.exports = {
  port,
  localIpPort: `http://${Ip}:${port}`,
}
