/**
 * @file store 文件
 */

import {store} from '@/lib/Store';
import {builder} from 'san-update';

import {getData, publish} from '../service';

store.initData({
    comments: [],
    userInfo: {},
    publisher: {
        isLoading: false
    }
}).addActions({
    submit(data, {dispatch}) {
        dispatch('togglePublisherState');
        return publish({
            username: this.getState('userInfo.username'),
            content: data
        }).then(({status, data}) => {
            if (status === 200 && data.errno === 0) {
                dispatch('updateComments', data.data);
                dispatch('togglePublisherState');
            }

        });
    },
    togglePublisherState(n, {getState}) {
        return builder().set('publisher.isLoading', !getState('publisher.isLoading'));
    },
    updateComments(data) {
        return builder().push('comments', data);
    },
    setCommentData(data) {
        return builder().set('comments', data);
    },
    setUserData(user) {
        return builder().set('userInfo', user);
    },
    getData(page, {dispatch}) {
        return getData().then(({data, status}) => {
            if (data.errno === 0 && data.data) {
                const {user, comments} = data.data;
                dispatch('setCommentData', comments);
                dispatch('setUserData', user);
            }

        });
    }
});
