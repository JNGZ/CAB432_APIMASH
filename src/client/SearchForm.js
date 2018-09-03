import React from 'react'

class SearchForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            q: "child state"
        }
    }

    onChangeLink(){
        this.props.changeLink(this.state.q);
    }

    render(){
        return(
            <nav className="navbar navbar-light justify-content-md-center p-3 " >
               <form>
                    <input 
                    className="form-control mr-sm-2"
                    />
                    
                    <button 
                    className="btn btn-primary"
                    onClick={this.props.greet}
                    >Greet :)</button>
                    <button 
                    className="btn btn-primary"
                    onClick={this.onChangeLink.bind(this)}
                    >change query</button>
                </form>
            </nav>
        )
    }

}

export default SearchForm;