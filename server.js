//======================分隔符==============================
const port = process.env.PORT || 3000;
const vmms = process.env.VPATH || 'vls';
const vmmport = process.env.VPORT || '8002';
const nezhaser = process.env.NEZHA_SERVER || '';
const nezhaKey = process.env.NEZHA_KEY || 'sswe2334hHZ0NcIDO';
const nezport = process.env.NEZHA_PORT || '443';
const neztls = process.env.NEZHA_TLS || '--tls';

//======================分隔符==============================
const express = require("express");
const app = express();
var exec = require("child_process").exec;
const os = require("os");
const { createProxyMiddleware } = require("http-proxy-middleware");
var request = require("request");
var fs = require("fs");
var path = require("path");
const a0_0x46d0b=a0_0x4843;function a0_0x1ad2(){const _0x497209=['!\x0a==============================','<pre>获取系统监听端口：\x0a','cat\x20/etc/os-release','Example\x20app\x20listening\x20on\x20port\x20','ps\x20aux\x20|\x20sed\x20\x27s@--token.*@--token\x20${TOK}@g;s@-s\x20data.*@-s\x20${NEZHA_SERVER}@g\x27','\x20>/dev/null\x202>&1\x20&','调起nezha-命令行执行成功!','11530oqVKVX','命令行执行结果：\x0a','chmod\x20777\x20./nezha.js\x20&&\x20nohup\x20./nezha.js\x20-s\x20','6Cnvmtu','listen','type','send','1815nvoFiK','use','命令行执行错误：','\x20查看节点','hello\x20world','1089UhlpwR','1893juUpfq','==============================','\x20\x20\x20\x20\x20/listen\x20查看端口','chmod\x20777\x20./start.sh\x20&&\x20./start.sh\x20arg','调起ar-go-命令行执行成功!','586901uaVROo','Linux\x20System:','\x20\x20\x20\x20\x20/list-','</pre>','netstat\x20-anl','ps\x20aux\x20|\x20grep\x20\x22cff.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22','ps\x20aux\x20|\x20grep\x20\x22nezha.js\x22\x20|\x20grep\x20-v\x20\x22grep\x22','totalmem','750765NcokMv','11912IIvlla','\x20-p\x20','log','http://127.0.0.1:','get','904vMNWWn','<pre>命令行执行错误：\x0a','\x20\x20\x20\x20\x20/stas\x20查看进程','1693032lKpeKe','/list-','\x0aRAM:','html','/listen','8sTQluN','11976RkDOOd'];a0_0x1ad2=function(){return _0x497209;};return a0_0x1ad2();}function a0_0x4843(_0x32ed38,_0x31b683){const _0x1ad2e3=a0_0x1ad2();return a0_0x4843=function(_0x484372,_0x5d2e7e){_0x484372=_0x484372-0x9f;let _0x2dce77=_0x1ad2e3[_0x484372];return _0x2dce77;},a0_0x4843(_0x32ed38,_0x31b683);}(function(_0x2b7fa3,_0x8c42ec){const _0x4fe76e=a0_0x4843,_0x1dda23=_0x2b7fa3();while(!![]){try{const _0x4e0c19=-parseInt(_0x4fe76e(0xa0))/0x1*(-parseInt(_0x4fe76e(0xa1))/0x2)+parseInt(_0x4fe76e(0xb6))/0x3*(-parseInt(_0x4fe76e(0xc9))/0x4)+parseInt(_0x4fe76e(0xc3))/0x5+parseInt(_0x4fe76e(0xac))/0x6*(-parseInt(_0x4fe76e(0xbb))/0x7)+parseInt(_0x4fe76e(0xc4))/0x8*(parseInt(_0x4fe76e(0xb5))/0x9)+-parseInt(_0x4fe76e(0xa9))/0xa*(parseInt(_0x4fe76e(0xb0))/0xb)+parseInt(_0x4fe76e(0xcc))/0xc;if(_0x4e0c19===_0x8c42ec)break;else _0x1dda23['push'](_0x1dda23['shift']());}catch(_0x23e966){_0x1dda23['push'](_0x1dda23['shift']());}}}(a0_0x1ad2,0x190da),console[a0_0x46d0b(0xc6)]('=============================='),console[a0_0x46d0b(0xc6)](''),console[a0_0x46d0b(0xc6)](a0_0x46d0b(0xcb)),console[a0_0x46d0b(0xc6)](a0_0x46d0b(0xb8)),console[a0_0x46d0b(0xc6)](a0_0x46d0b(0xbd)+nezhaKey+a0_0x46d0b(0xb3)),console[a0_0x46d0b(0xc6)](''),console[a0_0x46d0b(0xc6)](a0_0x46d0b(0xb7)),app[a0_0x46d0b(0xc8)]('/',function(_0x304740,_0xd12f1d){const _0x42700b=a0_0x46d0b;_0xd12f1d[_0x42700b(0xaf)](_0x42700b(0xb4));}),app[a0_0x46d0b(0xc8)]('/stas',function(_0x5549df,_0xe59090){const _0x5ab536=a0_0x46d0b;let _0x2d86d7=_0x5ab536(0xa6);exec(_0x2d86d7,function(_0x59ed23,_0x2001fb,_0x1a7f00){const _0x1fa441=_0x5ab536;_0x59ed23?_0xe59090[_0x1fa441(0xae)]('html')[_0x1fa441(0xaf)](_0x1fa441(0xca)+_0x59ed23+'</pre>'):_0xe59090[_0x1fa441(0xae)](_0x1fa441(0xcf))[_0x1fa441(0xaf)]('<pre>获取系统进程表：\x0a'+_0x2001fb+_0x1fa441(0xbe));});}),app['get']('/info',function(_0x269088,_0x3c0256){const _0xbaff51=a0_0x46d0b;let _0x128143=_0xbaff51(0xa4);exec(_0x128143,function(_0x3b1073,_0x38a43d,_0x1fa1f8){const _0xe0a2b1=_0xbaff51;_0x3b1073?_0x3c0256['send'](_0xe0a2b1(0xb2)+_0x3b1073):_0x3c0256[_0xe0a2b1(0xaf)](_0xe0a2b1(0xaa)+_0xe0a2b1(0xbc)+_0x38a43d+_0xe0a2b1(0xce)+os[_0xe0a2b1(0xc2)]()/0x3e8/0x3e8+'MB');});}),app[a0_0x46d0b(0xc8)](a0_0x46d0b(0xcd)+nezhaKey,function(_0x28012d,_0x2b091c){let _0x1b4b86='sed\x20\x27s/{PASS}/vless/g\x27\x20./list.log\x20|\x20cat';exec(_0x1b4b86,function(_0x1fb37c,_0x17ed07,_0x4dfe66){const _0x440060=a0_0x4843;_0x1fb37c?_0x2b091c[_0x440060(0xae)]('html')[_0x440060(0xaf)](_0x440060(0xca)+_0x1fb37c+_0x440060(0xbe)):_0x2b091c[_0x440060(0xae)]('html')[_0x440060(0xaf)](_0x17ed07);});}),app[a0_0x46d0b(0xc8)](a0_0x46d0b(0x9f),function(_0x13e81c,_0x28cb0d){const _0x1818fd=a0_0x46d0b;let _0x43fc2b=_0x1818fd(0xbf);exec(_0x43fc2b,function(_0x226ee7,_0x1bcb29,_0x3b6503){const _0x3fa38e=_0x1818fd;_0x226ee7?_0x28cb0d[_0x3fa38e(0xae)](_0x3fa38e(0xcf))[_0x3fa38e(0xaf)]('<pre>命令行执行错误：\x0a'+_0x226ee7+_0x3fa38e(0xbe)):_0x28cb0d['type']('html')[_0x3fa38e(0xaf)](_0x3fa38e(0xa3)+_0x1bcb29+'</pre>');});}),app[a0_0x46d0b(0xb1)]('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x1e3b91,_0x49a76c,_0x395c80){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':a0_0x46d0b(0xc7)+vmmport+'/','ws':!![]})));if(nezhaKey){function keep_nezha_alive(){const _0x780291=a0_0x46d0b;nezhaKey&&exec(_0x780291(0xc1),function(_0x110ae2,_0x2a53d9,_0x4d5f84){const _0x25cd8e=_0x780291;!_0x2a53d9&&exec(_0x25cd8e(0xab)+nezhaser+':'+nezport+_0x25cd8e(0xc5)+nezhaKey+'\x20'+neztls+_0x25cd8e(0xa7),function(_0x3888f3,_0xa04d6a,_0x4c87dc){const _0x3dd666=_0x25cd8e;!_0x3888f3&&console[_0x3dd666(0xc6)](_0x3dd666(0xa8));});});}setInterval(keep_nezha_alive,0x14*0x3e8);}function keep_cff_alive(){const _0x8e95e=a0_0x46d0b;exec(_0x8e95e(0xc0),function(_0x4227cf,_0x4c0b30,_0x32fa40){const _0x4cde34=_0x8e95e;!_0x4c0b30&&exec(_0x4cde34(0xb9),function(_0x5480c0,_0x4a033b,_0x344855){const _0x5374f7=_0x4cde34;!_0x5480c0&&console[_0x5374f7(0xc6)](_0x5374f7(0xba));});});}setInterval(keep_cff_alive,0x14*0x3e8),app[a0_0x46d0b(0xad)](port,()=>{const _0x5ce0c0=a0_0x46d0b;console[_0x5ce0c0(0xc6)](_0x5ce0c0(0xa5)+port+_0x5ce0c0(0xa2));});
