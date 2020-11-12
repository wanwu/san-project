/**
 * @file 容器组件
 * @author {{author}}
 */

import {Component} from 'san';
{{#if_eq cssPreprocessor "less"}}
import './app.less';
{{/if_eq}}
{{#if_eq cssPreprocessor "sass"}}
import './app.scss';
{{/if_eq}}
{{#if_eq cssPreprocessor "stylus"}}
import './app.styl';
{{/if_eq}}
import logo from '@assets/logo.svg';
export default class App extends Component {

    static template = `
    <div class="main">
        <img class="logo" src="\{\{logo}}"/>
        <h1>\{\{title}}</h1>
        <h2>Hello world, I am OK~</h2>
    </div>

    `;

    initData(){
        return {
            logo,
            title: 'San CLI'
        }
    }
}

