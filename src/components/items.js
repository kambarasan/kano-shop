import {Component} from "react";
import {Item} from "./item";


export class Items extends Component{
    render() {
        return(
            <div className='main'>
                {
                    this.props.items.map(el=>(
                        <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
                    ))
                }
            </div>
        )
    }
}