import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";



const BaseRouter = () =>(
    <div>
        <Route exact path="/" component={ArticleList}/>
        {/* :ID is the actual thing in here */}
        <Route exact path="/:articleID" component={ArticleDetail}/>
    </div>
);

export default BaseRouter;

