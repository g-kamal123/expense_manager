import React, { Component } from 'react'
import Print from './Print'

export class Veggies extends Component {
    checkItem=(val,edit)=>{
        this.props.veggies.map((item,key)=>{
        if(item===val)
        // alert(key)
        this.props.modifyveggies(val,key,edit)
    })
    }
  render() {
    var sum=this.sum
    sum = this.props.veggies.reduce((sum,{price})=> sum+price ,0)
    return (
      <div>
        <div><h2>Veggies</h2> <div className='nameExp'><span>Total Expense:</span><span>{sum}</span></div></div>
        <hr />
        <Print items={this.props.veggies}
        isItem={this.checkItem}/>
      </div>
    )
  }
}

export default Veggies