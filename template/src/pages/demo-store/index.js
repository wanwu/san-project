
/**
 * @file demo store
 * 这是一个 san-store 版本的示例
 * 1. ui 组件只关心自己的状态（data）不关心外面是否有 store
 *      ui 组件通过自定义事件跟父组件通信，https://baidu.github.io/san/tutorial/event/#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6
 * 2. store 中调用 service，其他地方不得调用
 * 3. 容器组件引入 store，connect 之后通过 actions直接调用 store 的 action
 * 3. 容器如果需要获取store某个值的变化，使用 watch 功能，参考loading 效果实现清空 content 内容
 */
import App from '@/lib/App';
import AppComponent from './containers/app';

// eslint-disable-next-line babel/new-cap
App(AppComponent, '#app');
