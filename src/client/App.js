import React, { Component } from 'react';
import axios from 'axios';

import List from './List';
import SearchForm from './SearchForm';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      articles:[],
      newData: [],
      error: null,
      q: "test",
      homeLink: "",
        }

  }

  componentDidMount() {
    this.setState({isLoading: true,});

    // Build the api call from these parameters
    let baseUrl = "https://newsapi.org/v2/"
    let endpoint = "everything?"
    let q = "q=" + this.state.q
    let language = "&language=en"
    let pageSize = "&pageSize=" + 3
    let apikey = "&apiKey=9b215697b6e64eee94691526f2a163d3"
    let url = baseUrl + endpoint + q + language + pageSize + apikey;

    // check url in console
    console.log(url)

    axios.get(url)
    // convert data to json and map what we want
    .then(json => json.data.articles.map(res => ({
      author: res.author,
      description: res.description,
      url: res.url,
      urlToImage: res.urlToImage,
      sourceName: res.source.name,
      title: res.title
    })))
    // copy the data into two arrays (original - articles) and mutated
    .then(newData => this.setState({articles: newData, newData: newData}))
    // catch any errors
    .catch(error => this.setState({error}))
      
  }

 onGreet(){
   alert("hello");
 }

 onChangeLinkName(newName){
    this.setState({
      q: newName,
    })
 }

  render() {
    const { newData} = this.state;
    
    return (
      <div className="container">

        <div className="row justify-content-md-center">
          <div className="col">
          <span>in parent: {this.state.q}</span>
           
            <SearchForm 
            greet={this.onGreet}
            changeLink={this.onChangeLinkName.bind(this)}
            />
          
          </div>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-md-auto">
          <List articles={newData}/>
          </div>
        </div>

      </div>
    )
  }
}
