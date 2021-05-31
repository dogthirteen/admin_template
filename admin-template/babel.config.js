/*
 * @Author: your name
 * @Date: 2021-03-22 08:36:44
 * @LastEditTime: 2021-05-31 16:33:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \admin_template\admin-template\babel.config.js
 */
const prodPlugin = [];

if (process.env.NODE_ENV === 'production') {
  // 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
  prodPlugin.push([
    'transform-remove-console',
    {
      // 保留 console.error 与 console.warn
      exclude: ['error', 'warn'],
    },
  ]);
}


module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [...prodPlugin],
  sourceType: 'unambiguous'
}
