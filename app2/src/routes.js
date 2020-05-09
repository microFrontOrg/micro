/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-09 10:28:33
 * @lastEditTime: Do not edit
 */

import Test from './Test';
import Aaa from './Aaa';

const AppName = 'app2'

const routes = [
  {
    path: `/${AppName}/Aaa`,
    component: Aaa
  },
  {
    path: `/${AppName}/Test`,
    component: Test
  }
]

export default routes;