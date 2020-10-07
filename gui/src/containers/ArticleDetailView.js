import React, { Fragment } from 'react';
import axios from 'axios';
import { Card } from "antd";
import CustomForm from '../components/Form';

// here custom form is a child. as it is embeded inside this

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        // endpoint of restframework
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            // res, is  the response actually returned
            .then(res => {
                this.setState({
                    article: res.data
                });
            })

    }

    render() {
        return (
            <Fragment>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <br/>
                <CustomForm />
            </Fragment>
        )
    }
}

export default ArticleDetail;
