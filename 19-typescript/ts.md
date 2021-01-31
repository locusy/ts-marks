# 安装ts
  sudo cnpm i -g typescript

# 查看版本
  tsc -v

# 编译命令行
  tsc --outDir ./dist --target ES6 --watch ./src/1.ts

# 配置文件tsconfig.json放在根目录
  运行：tsc -p tsconfig.json
  或者：tsc

# 
  tsc 20-装饰器.ts --target ES5 -w --experimentalDecorators