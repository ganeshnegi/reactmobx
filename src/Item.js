import React from 'react';

export default class Item extends React.Component{

    itemChanged(event){

    }
    
    render(){
        const {item, onRemove} = this.props;
        const count = item.length
        console.log(item)
        return(
            <article className="Item">
                <label htmlFor={item.id}>
                    <input type="checkbox" checked={item.packed} id={item.id} 
                    onChange={(e) => {this.itemChanged}} />
                    {item.value}
                </label>
                <button className="Item-remove" onClick={onRemove}>
                    Remove
                </button>
        </article>
        )
    };
}
