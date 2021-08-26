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
     //  this.testing();
    }



    // outside of event handler react doesn't perform batching
    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve("done");
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         //setState acts as synchronous call
    //         this.setState({qty : 100 });

    //        // if we write same above line 3 times the model gets rendered thrice because it is a synchronous call now
    //         console.log('state',this.state);
    //     });
    // }

   


    increaseQuantity = () =>{
        // By doing this way ,the value of this is lost because when we call a function with reference ,the value of this gets lost
      //   console.log('this.state',this.state);
      
      //To avoid this we have to bind it with object in onClick of (+) image , this will be pointing to the cartItem class after we write bind
        // we can write the same in constructor when we have multiple event handlers. (or) we can use arrow function
        

        // To increase the qty we have to set state 
        // Calling the setstate we can re render our component with a new value
     

        //setState form 1 -- object form  // even we call this setState it will only called once.Because of React does --Batching

        /*  this.setState({
            qty:this.state.qty +1 
        }); */

        // setState form 2 - if prev state is required use this //If we call this way of it will be called as many times you write.


        // this.setState((prevState)=>{
        //     return {
        //         qty:prevState.qty +1
        //     }

        // });
        // set state is asynchronous so we don't know when the call get finishes even though the qty is 3 it still showss 2
        //So we pass another argument in setState method

        this.setState((prevState)=>{
            return {
                qty:prevState.qty +1
            }
    
        },()=>{
            console.log('this.state',this.state);
        });

    

    }

    decreaseQuantity = ()=>{
        const{ qty } = this.state;
        if(qty === 0){
            return;
        }
        this.setState({
            qty:this.state.qty -1 // react will take this object and it will merge with our state object i.e. shallow merging which means it will change the qty .

        });
    }
    render(){
        // object de-structering , The properties will be fetched from the state object
        const {price,title,qty}= this.state;

        console.log('render');
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style={styles.image} />

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
                        onClick={this.decreaseQuantity}
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