import React from 'react';


export default class Filter extends React.Component{
    state = {

    }

    handleChange(){

    }
    
    render(){
        const {searchTerm} = this.props
        return(
            <input type="text" value = {searchTerm} onChange={this.handleChange}/>
        )
    };
}