import {Component} from "react";


export class Item extends Component{
    render() {
        return(
            <div className='item'>
                <img src={this.props.item.images} onClick={() => this.props.onShowItem(this.props.item)} alt=""/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.description}</p>
                <div className='all'>
                    <b>{this.props.item.price}$</b>
                    <div onClick={()=>this.props.onAdd(this.props.item)} className='add-to-card'>
                        +
                    </div>
                </div>
            </div>
        )
    }
}