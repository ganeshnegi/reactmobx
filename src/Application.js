import React from 'react';
import Items from './Items';
import NewItem from './NewItem';
// import CountDown from './CountDown';
import './Application.css'

import uniqueId from 'lodash/uniqueId';

const defaultState = [
    {value:'Pants', id:uniqueId(), packed:true},
    {value:'Jacket', id:uniqueId(), packed:true},
    {value:'Gloves', id:uniqueId(), packed:false},
    {value:'Toothpaste', id:uniqueId(), packed:true},
    {value:'Charger', id:uniqueId(), packed:false},
    {value:'Powerbank', id:uniqueId(), packed:true},
    {value:'Cap', id:uniqueId(), packed:false},
    {value:'Underwear', id:uniqueId(), packed:false},
    {value:'T-shirts', id:uniqueId(), packed:false},
    {value:'Notepad', id:uniqueId(), packed:false},
    {value:'Earphone', id:uniqueId(), packed:false}
]

export default class Application extends React.Component{
    state = {
        items: defaultState
    };

    addItem = (item) => {
        this.setState({items: [item, ...this.state.items]})
    }

    removeItem = (itemToRemove) =>{
        this.setState({
            items: this.state.items.filter(item => item.id !== itemToRemove.id)
        });
    }

    render(){
        const {items} = this.state;
        const packedItems = items.filter(item => item.packed);
        const unPackedItems = items.filter(item => !item.packed);
        return(
            <div className="Application">
                <NewItem  onSubmit={this.addItem}/>
                {/* <CountDown /> */}
                <Items title="Unpacked Items" items={unPackedItems} onRemove={this.removeItem}/>
                <Items title="Packed Items" items={packedItems} onRemove={this.removeItem}/>
                <button className="button full-width">Mark all Unpacked</button>
            </div>
        )
    };
}