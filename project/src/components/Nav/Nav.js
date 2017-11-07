import React, {Component} from 'react';
import './Nav.css'


export default class Nav extends Component{
    constructor(){
        super()
        this.state={
          color: 'white',
          bg: [{'background-color': 'black',
          top: '-250px'
            
                
                

        }],
         flagCondition: 'false'
        }
      }



flagChanger(){
    if(this.state.flagCondition === 'false'){
        this.setState({flagCondition: 'true'})
        this.setState({bg: [{'background-color': 'black'}]})
    } else {this.setState ({flagCondition: 'false'})
        this.setState({bg: [{'background-color': 'black', top: '-250px'}]})
}
    console.log(this.state.flagCondition)
}






render(){
    return(

        <div>
            <div className="navflex">

                <p className="test"> Start Bootstrap </p>


                
                <ul className="listflex">
                    <li>SERVICES </li>
                    <li>PORTFOLIO </li>
                    <li>ABOUT </li>
                    <li>TEAM </li>
                    <li>CONTACT </li>
                </ul>

             
            <img className="hide" src={require("../../img/rszhmb.png")} onClick={ () => this.flagChanger()}/>
            <div style={this.state.bg[0]} className="bar">
            <p>SERVICES</p>
            <p>PORTFOLIO</p>
            <p>ABOUT</p>
            <p>TEAM</p>
            <p>CONTACT</p>
            </div>   


            </div>
            </div>



    )
}


}