import React from 'react';

class CartItem extends React.Component{
    constructor(){
        // whenever we are using constructor in derived class we have to call the super class constructor 
        super();
        this.state ={
            price: 999,
            title:'mobile-phone',
            qty:1,
            img:''
        }
       // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () =>{
        // By doing this way we the value of this is lost because when we call a function with reference ,the value of this gets lost
         console.log('this.state',this.state);
        //To avoid this we have to bind it with object in onClick of + image , this will be pointing to the cartItem class after we write bind
        // we can write the same in constructor when we have multiple event handlers. (or) we can use arrow function
    }
    render(){
        // object de-structering , The properties will be fetched from the state object
        const {price,title,qty}= this.state;
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img alt="Loading" style={styles.image} />

                </div>
                <div className="right-block">
                    <div style={ { fontSize:25,color:'red' } }> { title } </div>
                    <div style={ { color:'#777' } }> Rs:{ price } </div>
                    <div style={ { fontSize:25 } }> Qty:{ qty } </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                         alt="increase" 
                         className="action-icons"
                         src="https://image.flaticon.com/icons/png/512/992/992651.png"
                         onClick={this.increaseQuantity}
                    
                         />

                        <img 
                        alt="decrease" 
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/992/992683.png"
                        />

                        <img 
                        alt="delete" 
                        className="action-icons"
                        src="https://image.flaticon.com/icons/png/512/709/709518.png"
                        />

                    </div>
                
                </div>
            </div>

        );
    }
}

const styles ={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'

    }
}
export default CartItem;