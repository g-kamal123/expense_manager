import React, { Component } from 'react'
import Print from './Print'

export class Grocery extends Component {
    checkItem=(val,edit)=>{
        this.props.grocerries.map((item,key)=>{
        if(item===val)
        // alert(key)
        this.props.modifygrocerry(val,key,edit)
    })
    }
  render() {
    var sum=this.sum
    sum = this.props.grocerries.reduce((sum,{price})=> sum+price ,0)
    return (
      <div className='grocery'>
        <div><h2>Grocery</h2> <div className='nameExp'><span>Total Expense:</span><span>{sum}</span></div></div>
        <hr />
        <Print items={this.props.grocerries}
        isItem={this.checkItem}/>
      </div>
    )
  }
}

export default Grocery