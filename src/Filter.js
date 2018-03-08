import React from 'react';


export default class Filter extends React.Component{

    handleChange = (e) =>{
        const {onChange} = this.props;
        onChange(e.target.value)
    }
    
    render(){
        const {searchTerm} = this.props
        return(
            <input type="text" value = {searchTerm} onChange={this.handleChange}/>
        )
    };
}