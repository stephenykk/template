const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '.'),
  // 运行 jest 的时候寻找测试文件的路径
  testMatch: ['**/tests/**/*.[jt]s?(x)'],
  // 忽略
  testPathIgnorePatterns: ['/node_modules/'],
  // 包含
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}'],
  // 测试文件中导入文件的后缀，配置.vue
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    // 告诉 Jest 处理 *.vue 文件
    'vue'
  ],
  // 转换：通过正则配置匹配的文件，交给哪个模块处理
  transform: {
    // 用 vue-jest 处理 *.vue 文件
    // '.*\\.(vue)$': 'vue-jest',
    // 用 babel-jest 处理 js
    '.*\\.([tj]s)$': 'babel-jest',
    // '^.+\\.tsx?$': 'ts-jest'
  },
  // 支持源代码中相同的 @ -> src 别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testURL: 'http://localhost/'
};
