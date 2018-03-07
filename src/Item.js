import React from 'react';
import './Application.css'

export default class Item extends React.Component{

    itemChanged(event){

    }
    
    render(){
        const {item, onRemove, onCheckOff} = this.props;
        const count = item.length
        console.log(item)
        return(
            <article className="Item">
                <label htmlFor={item.id}>
                    <input type="checkbox" checked={item.packed} id={item.id} onChange={onCheckOff} />
                    {item.value}
                </label>
                <button className="Item-remove" onClick={onRemove}>
                    Remove
                </button>
        </article>
        )
    };
}
