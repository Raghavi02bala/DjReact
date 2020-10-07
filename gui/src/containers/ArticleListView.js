import React from 'react';
import  Articles  from "../components/Article";
import axios from 'axios';
import CustomForm from '../components/Form'

// parent and article is it's child

class ArticleList extends React.Component{
    state = {
        articles: []
    }

    componentDidMount(){
        // endpoint of restframework
        axios.get('http://127.0.0.1:8000/api/')
        // res, is  the response actually returned
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })       

    }

    hello(){
        alert("Hello");
    }

    render(){
        return(
            <div>
                {/* article is child component */}
            <Articles data={this.state.articles}/>
            <br/>
            <h2>Create an Article</h2>
            <CustomForm/>
            </div>
        )
    }
}

export default ArticleList;
