import React, { Component } from 'react'
import Print from './Print'

export class Travelling extends Component {
    checkItem=(val,edit)=>{
        this.props.travelling.map((item,key)=>{
        if(item===val)
        // alert(key)
        this.props.modifytravelling(val,key,edit)
    })
    }
  render() {
    var sum=this.sum
    sum = this.props.travelling.reduce((sum,{price})=> sum+price ,0)
    return (
      <div>
        <div><h2>Travelling</h2> <div className='nameExp'><span>Total Expense:</span><span>{sum}</span></div></div>
        <hr />
        <Print items={this.props.travelling}
        isItem={this.checkItem}/>
      </div>
    )
  }
}

export default Travelling