import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

import SearchBar from './SearchBar';
import List from './List';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles:[],
      newData: [],
      error: null,
    }
  }

  componentDidMount() {
    this.setState({isLoading: true,});
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9b215697b6e64eee94691526f2a163d3";
    


    axios.get(url)
    // convert data to json and map what we want
    .then(json => json.data.articles.map(res => ({
      author: `${res.author}`,
      description: `${res.description}`,
      id: res.source.id
    })))
    // copy the data into two arrays (original - articles) and mutated
    .then(newData => this.setState({articles: newData, newData: newData}))
    .catch(error => this.setState({error}))
      
  }

  filterNames(e){
    this.state.articles.filter(article => 
      article.id.toLowerCase().includes(e.target.value.toLowerCase()))
  }

 

  render() {
    const { newData, isLoading} = this.state;

    return (
      <div className="Card">
        <div className="header">Article List</div>
        <SearchBar searchFunc={(e)=> this.filterNames(e)}/>
        <List articles={newData}/>
      </div>
    )
  }
}
