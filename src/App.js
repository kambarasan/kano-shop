import React from 'react';
import Header from "./components/Header";
import {Items} from "./components/items";
import Footer from "./components/Footer";
import {ShowFullItem} from "./components/showFullItem";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            orders:[],
            items:[
                {
                    id:1,
                    title:"Handcrafted Steel Chicken",
                    price:892,
                    description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    images:"https://api.lorem.space/image/watch?w=640&h=480&r=5401"
                },
                {
                    id:2,
                    title:"Handcrafted Steel Chicken",
                    price:800,
                    description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    images:"https://api.lorem.space/image/watch?w=640&h=480&r=9750"
                },
                {
                    id:3,
                    title:"Handcrafted Steel Chicken",
                    price:892,
                    description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    images:"https://api.lorem.space/image/watch?w=640&h=480&r=6633"
                },
                {
                    id:4,
                    title:"Handcrafted Steel Chicken",
                    price:892,
                    description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    images:"https://api.lorem.space/image/watch?w=640&h=480&r=6633"
                },
                {
                    id:5,
                    title:"Handcrafted Steel Chicken",
                    price:892,
                    description:"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                    images:"https://api.lorem.space/image/watch?w=640&h=480&r=6633"
                }
            ],
            showFullItem:false,
            fullItem:{}
        }
        this.addToOrder=this.addToOrder.bind(this)
        this.deleteOrder=this.deleteOrder.bind(this)
        this.onShowItem=this.onShowItem.bind(this)

    }

       render() {
           return (
               <div>

                   <div className='wrapper'>
                       <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                       <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder}/>

                       {
                           this.state.showFullItem && <ShowFullItem  onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>
                       }
                       <Footer/>
                   </div>
               </div>
           );

}

         onShowItem(item){
        this.setState({fullItem:item})
        this.setState({showFullItem: !this.state.showFullItem})
         }
         deleteOrder(id){
             this.setState({orders:this.state.orders.filter(el=>el.id!==id) })
         }
        addToOrder(item){

        let isArray = false
        this.state.orders.forEach(el=>{
            if (el.id===item.id){
                isArray = true
            }
        })
            if (!isArray)
        this.setState({orders: [...this.state.orders,item]})
        }


};

export default App;