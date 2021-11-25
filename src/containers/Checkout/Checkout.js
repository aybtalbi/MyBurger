import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route , Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends React.Component {

    CheckoutCancelledHandler = ()=>{
      this.props.history.goBack();
    }
    CheckoutContinuedHandler = ()=>{
      this.props.history.replace("/Checkout/contact-data")  
    }

   

    render(){
        let summary = <Redirect to="/"/> 
       
        if(this.props.ings){
          const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
          summary =  <div>
            {purchasedRedirect}
          <CheckoutSummary 
              ingredients={this.props.ings}
              CheckoutCancelled={this.CheckoutCancelledHandler}
              CheckoutContinued={this.CheckoutContinuedHandler}/>   
              <Route 
                  path ={this.props.match.path +'/contact-data'} 
                  //component = {ContactData} get us history ...... not like render
                  /*render={(props) => <ContactData 
                                 ingredients={this.props.ings}
                                 price = {this.props.price}
                                 {...props} />}*/
                   component = {ContactData}  /> 
                  </div>
        }
       
        return summary;
    }
}


const mapStateToProps = state => {
  return{
    ings : state.burgerBuilder.ingredients,
    purchased : state.order.purchased
  }
}


export default connect(mapStateToProps)(Checkout);