
/**
 * @file demo normal
 * 这是一个 san-normal 版本(没有 san-store)的示例
 * 1. ui 组件只关心自己的状态（data）不关心外面是否有 store
 *      ui 组件通过自定义事件跟父组件通信，https://baidu.github.io/san/tutorial/event/#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6
 * 2. 容器组件中调用 service，ui 组件中不得调用
 *
 */

import AppComponent from './containers/app';
import App from '@/lib/App';

// eslint-disable-next-line @babel/new-cap
App(AppComponent, '#app');
