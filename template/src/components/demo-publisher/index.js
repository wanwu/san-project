import './style/index.css';

export default {
    initData(){
        return {
            content: ''
        }
    },
    template: require('./index.html'),
    submit(){
        this.fire('submit', this.data.get('content'));
    }

}
