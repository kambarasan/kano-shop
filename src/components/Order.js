import React, {Component} from 'react';
import { FaTrash } from "react-icons/fa";

export class Order extends Component{
    render() {
        return(
            <div className='mei'>
                <img src={this.props.mei.images}  alt=""/>
                <h2>{this.props.mei.title}</h2>
                <b>{this.props.mei.price}$</b>
                <FaTrash onClick={()=>this.props.onDelete(this.props.mei.id)} className='delete-icon'/>
            </div>
        )
    }
}