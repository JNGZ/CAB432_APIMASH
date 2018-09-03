import React from 'react'

function Card(props){
    const{title, description, url, urlToImage, sourceName} = props
    return(
        <div className="card">

            <a href={props.url} >
                <img className="card-img-top" src={props.urlToImage} alt={props.title}/>
            </a>

            <div className="card-body">
                <h5 className="card-title" >{props.title}</h5>
                <span className="card-text">{props.description}</span>  
            </div>
            
            <div className="card-body">
                <a href={props.url} className="card-link">Read the full story</a>
                <p>Source: {props.sourceName}</p>
            </div>

        </div>
    )
}

export default Card