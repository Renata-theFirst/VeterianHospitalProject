import React from 'react';
import ReactDOM from 'react-router-dom'; 

import './News.css';

class NewArticle extends React.Component {
    constructor(props){
        super(props);
    //     // this.article = 'абра-кадабра';
    //     // this.date = date;
     }
    render() {
        return React.createElement('p', this.props.who, null);
    }
}

ReactDOM.render(
    React.createElement(NewArticle, {who:'Hello'}, null),
    document.getElementById('news')
);




