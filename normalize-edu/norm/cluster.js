var _0x4c59=['\x20destroyed!','\x20code:\x20','\x20signal:\x20','splice','SIGINT','kill','SIGKILL','Cluster','__awaiter','next','throw','done','then','apply','defineProperty','./api','cluster','options','models','_workers','masterHasExited','numCPUs','cpus','length','init','Master\x20pid:\x20','pid','\x20is\x20online!','fork','regenerate','setOnExitListener','setupMaster','workers','master','_master','data_broker','interval_worker','http_responder','push','role','API','keys','onReady','bootstrap','forEach','cmd','notifyRequest','log','procId','online','listening','exit','process','Process\x20PID:\x20'];(function(_0x35ab1e,_0x2d4539){var _0x5d87ee=function(_0x25825a){while(--_0x25825a){_0x35ab1e['push'](_0x35ab1e['shift']());}};_0x5d87ee(++_0x2d4539);}(_0x4c59,0x14c));var _0x46ec=function(_0x42c025,_0x4f8387){_0x42c025=_0x42c025-0x0;var _0x1e7ac0=_0x4c59[_0x42c025];return _0x1e7ac0;};'use strict';var __awaiter=this&&this[_0x46ec('0x0')]||function(_0x8d8fbe,_0x4d9627,_0x3238bb,_0x524329){return new(_0x3238bb||(_0x3238bb=Promise))(function(_0x498e52,_0x4a6148){function _0x31e0fd(_0x1faa9c){try{_0x476d3a(_0x524329[_0x46ec('0x1')](_0x1faa9c));}catch(_0x45ee95){_0x4a6148(_0x45ee95);}}function _0x44a005(_0x25c885){try{_0x476d3a(_0x524329[_0x46ec('0x2')](_0x25c885));}catch(_0x2d5f51){_0x4a6148(_0x2d5f51);}}function _0x476d3a(_0x1b04cc){_0x1b04cc[_0x46ec('0x3')]?_0x498e52(_0x1b04cc['value']):new _0x3238bb(function(_0x498e52){_0x498e52(_0x1b04cc['value']);})[_0x46ec('0x4')](_0x31e0fd,_0x44a005);}_0x476d3a((_0x524329=_0x524329[_0x46ec('0x5')](_0x8d8fbe,_0x4d9627||[]))['next']());});};Object[_0x46ec('0x6')](exports,'__esModule',{'value':!![]});const api_1=require(_0x46ec('0x7'));const cluster=require(_0x46ec('0x8'));const os=require('os');const appMode=!![];class Cluster{constructor(_0x5d3b28,_0x1616ac){this[_0x46ec('0x9')]=_0x5d3b28;this[_0x46ec('0xa')]=_0x1616ac;this[_0x46ec('0xb')]=[];this[_0x46ec('0xc')]=![];this[_0x46ec('0xd')]=os[_0x46ec('0xe')]()[_0x46ec('0xf')]||0x1;this[_0x46ec('0x10')](cluster,_0x5d3b28);}['init'](_0x57e818,_0x35128a){if(_0x57e818['isMaster']){console['log'](_0x46ec('0x11')+process[_0x46ec('0x12')]+_0x46ec('0x13'));this[_0x46ec('0x14')](this['numCPUs']);this['logActivities'](_0x57e818);this[_0x46ec('0x15')](_0x57e818);this[_0x46ec('0x16')](_0x57e818,process);}else{this[_0x46ec('0x17')](_0x57e818,_0x35128a);}}get[_0x46ec('0x18')](){return this[_0x46ec('0xb')];}get[_0x46ec('0x19')](){return this[_0x46ec('0x1a')];}[_0x46ec('0x14')](_0x455e4d){for(let _0x2ad6eb=0x0;_0x2ad6eb<_0x455e4d;_0x2ad6eb++){let _0x5b0a88={'role':_0x2ad6eb==0x0?_0x46ec('0x1b'):_0x2ad6eb==0x1?_0x46ec('0x1c'):_0x46ec('0x1d'),'debug':appMode};this[_0x46ec('0xb')][_0x46ec('0x1e')]({'role':_0x5b0a88[_0x46ec('0x1f')],'cluster':cluster[_0x46ec('0x14')](_0x5b0a88)});}}[_0x46ec('0x17')](_0x3b550e,_0x5d1098){this['_master']=new api_1[(_0x46ec('0x20'))](_0x5d1098);const _0x2a5bac=this[_0x46ec('0xa')]!=null&&Object[_0x46ec('0x21')](this[_0x46ec('0xa')])[_0x46ec('0xf')]>0x0;if(_0x2a5bac){this[_0x46ec('0x1a')][_0x46ec('0x22')](_0x364c80=>__awaiter(this,void 0x0,void 0x0,function*(){const _0x401af6=yield _0x364c80[_0x46ec('0x23')](this[_0x46ec('0xa')]!=null?this[_0x46ec('0xa')]:{},!![]);_0x401af6?_0x364c80['spawn']():_0x364c80['spawn']();}));}}['logActivities'](_0x4f4304){Object[_0x46ec('0x21')](_0x4f4304[_0x46ec('0x18')])[_0x46ec('0x24')](_0x180811=>{_0x4f4304['workers'][_0x180811]['on']('message',(_0xe06e42,_0x496167)=>{if(_0xe06e42[_0x46ec('0x25')]&&_0xe06e42[_0x46ec('0x25')]==_0x46ec('0x26')){}if(_0xe06e42[_0x46ec('0x25')]&&_0xe06e42[_0x46ec('0x25')]=='shutdown'){console[_0x46ec('0x27')]('Received\x20shutdown\x20instructions\x20from\x20master!');}console['log']('Getting\x20message\x20from\x20process\x20:\x20',_0xe06e42[_0x46ec('0x28')]);});_0x4f4304['workers'][_0x180811]['on'](_0x46ec('0x29'),()=>{});_0x4f4304['workers'][_0x180811]['on'](_0x46ec('0x2a'),_0x5112d2=>{});});}['regenerate'](_0x8f0ee6){_0x8f0ee6['on'](_0x46ec('0x2b'),(_0x42dec1,_0x2fa20b,_0x6415f6)=>{this[_0x46ec('0xb')][_0x46ec('0x24')]((_0x2a2ca9,_0x4ace0b,_0x437893)=>{if(_0x2a2ca9[_0x46ec('0x8')][_0x46ec('0x2c')]['pid']===_0x42dec1[_0x46ec('0x2c')]['pid']){console[_0x46ec('0x27')](_0x46ec('0x2d')+_0x2a2ca9['cluster']['process'][_0x46ec('0x12')]+_0x46ec('0x2e'),_0x46ec('0x2f'),_0x2fa20b,_0x46ec('0x30'),_0x6415f6);this[_0x46ec('0xb')][_0x46ec('0x31')](_0x4ace0b,0x1);let _0x40a8db={'role':_0x2a2ca9[_0x46ec('0x1f')],'debug':appMode};!this['masterHasExited']?this[_0x46ec('0xb')][_0x46ec('0x1e')]({'role':_0x2a2ca9[_0x46ec('0x1f')],'cluster':_0x8f0ee6[_0x46ec('0x14')](_0x40a8db)}):![];}});});}[_0x46ec('0x16')](_0x12b32c,_0x1920c8){_0x1920c8['on'](_0x46ec('0x32'),()=>{this[_0x46ec('0xb')]['forEach']((_0x3e395c,_0x48d7d0,_0x1059f3)=>{console[_0x46ec('0x27')]('destroying\x20'+_0x3e395c[_0x46ec('0x8')][_0x46ec('0x2c')][_0x46ec('0x12')]);this['_workers'][_0x48d7d0][_0x46ec('0x8')][_0x46ec('0x33')](_0x46ec('0x34'));});this[_0x46ec('0xc')]=!![];_0x1920c8[_0x46ec('0x2b')]();});_0x12b32c['on'](_0x46ec('0x2a'),(_0x312c1b,_0x482085)=>{});}}exports[_0x46ec('0x35')]=Cluster;