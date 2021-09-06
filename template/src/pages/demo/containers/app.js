/**
 * @file demo
 */
import './app.css';
import {Component} from 'san';
import {getData, publish} from '../service';
import Publisher from '@/components/demo-publisher';
import Comment from '@/components/demo-comment';

export default class App extends Component {
    static template = `
    <div class="wrapper">
        <ui-pub on-submit="submit" username="\{{userInfo.username}}" content="{=content=}"/>
        <ui-comment s-for="item in comments" username="\{{item.username}}" content="\{{item.content}}"/>
    </div>
    `;
    static components = {
        'ui-pub': Publisher,
        'ui-comment': Comment
    };

    initData() {
        return {
            content: '',
            comments: [],
            userInfo: {},
            isLoading: false
        };
    }

    attached() {
        // 获取list数据
        this.getData();
    }
    submit(data) {
        publish({
            username: this.data.get('userInfo.username'),
            content: data
        }).then(({status, data}) => {
            if (status === 200 && data.errno === 0) {
                this.data.push('comments', data.data);
                this.data.set('content', '');
            }
        });
    }
    getData(page) {
        return getData().then(({data, status}) => {
            if (data.errno === 0 && data.data) {
                const {user, comments} = data.data;
                this.data.set('comments', comments);
                this.data.set('userInfo', user);
            }
        });
    }
}
