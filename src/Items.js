import React from 'react';
import Item from './Item';
import Filter from './Filter';
import './Application.css';
export default class Items extends React.Component{
    state = {}

    updateList(item){}

    render(){
        const {title, items, onRemove, toggleItem} = this.props;
        return(
            <div className="Items">
                <h3>{title} <span>({items.length})</span></h3>
                <Filter searchTerm={''} onChange={this.updateSearchTerm} />

                {items
                    .filter(item => 
                        item.value.toLowerCase().includes(''.toLowerCase()),
                    )
                    .map(item => (
                        <Item item={item} key={item.id} onCheckOff={() => toggleItem(item)} onRemove={() => onRemove(item)}/>)
                    )
                }
            </div>
        )
    };
}