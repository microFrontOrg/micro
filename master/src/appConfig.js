/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-09 11:08:00
 * @lastEditTime: Do not edit
 */
const container = '#container';
const getActiveRule = function (url) {
  return location => location.pathname.startsWith(url);
}
const apps = [
  {
    name: 'app1',
    port: 2001,
    entry: '//localhost:2001',
    container: container,
    activeRule: getActiveRule('/app1')
  },
  {
    name: 'app2',
    port: 2002,
    entry: '//localhost:2002',
    container: container,
    activeRule: getActiveRule('/app2')
  }
]

export default apps;