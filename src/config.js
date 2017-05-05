const DEFAULT_IP = window.location.hostname;
// const DEFAULT_IP = '127.0.0.1';
// const DEFAULT_IP = '192.168.64.73';

const config = {
  host: 'http://' + DEFAULT_IP + ':3003/',
  socket: 'http://' + DEFAULT_IP + ':3003/',
  dslHost: 'http://' + DEFAULT_IP + ':81/#/',
  flowHost: 'http://' + DEFAULT_IP + ':82/modeler.html',
  // ideHost: 'http://192.168.61.84:9090/dashboard/#/ide/che/wksp-java',
  ideHost: 'http://' + DEFAULT_IP + ':8181/',
  gitHost: 'http://sanbox.izirong.com:18001/demo-plugins/demo-plugin',
  dbMysql: 'http://sanbox.izirong.com/',
  dbRedis: 'http://sanbox.izirong.com:8081/',
  logHost: 'http://120.26.102.213:5601/app/kibana',
  mirrorHost: 'http://192.168.61.91:10001/#browse/search/docker',
  buildHost: 'http://192.168.64.152:8080/',
};

export default config;
