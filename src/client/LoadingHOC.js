import React, {Component} from 'react'

const LoadingHOC = (WrappedState) => {
    return(
        class LoadingHOC extends Component{
            render(){
                return <WrappedState {...this.props}/>
            }
        }
    )
}

export default LoadingHOC