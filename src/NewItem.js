import React from 'react';
import uniqueId from 'lodash/uniqueId';

export default class NewItem extends React.Component{
    state = {
        value: ''
    }

    handleChange = event =>{
        const value = event.target.value;
        this.setState({ value });
    }

    handleSubmit(event){
        event.preventDefault();
        const {onSubmit} = this.props;
        const {value} = this.state;

        onSubmit({value, id:uniqueId(), packed:false});
        this.setState({value: ''})
    }

    render(){
        const { value } = this.state;
        return(
            <form className="NewItem" onSubmit={(this.handleSubmit.bind(this))}>
                <input type="text" value={value} onChange={this.handleChange}/>
                <input type="submit" />
            </form>
        )
    };
}