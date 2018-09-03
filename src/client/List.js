import React, {Component} from 'react'
import Card from './Card'


function List(props){
    const{articles} = props

    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-5">
                {articles.map(article =>
                        <Card 
                        key={articles.indexOf(article)} 
                        title={article.title} 
                        description={article.description} 
                        url={article.url} 
                        urlToImage={article.urlToImage}
                        sourceName={article.sourceName}/>    
                )}
                </div>
            </div>
        </div>
    )
}

export default List