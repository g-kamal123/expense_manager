import React, { Component } from 'react'
import Print from './Print'

export class Miscellaneous extends Component {
    checkItem=(val,edit)=>{
        this.props.misc.map((item,key)=>{
        if(item===val)
        // alert(key)
        this.props.modifymisc(val,key,edit)
    })
    }
  render() {
    var sum=this.sum
    sum = this.props.misc.reduce((sum,{price})=> sum+price ,0)
    return (
      <div>
        <div><h2>Miscellaneous</h2> <div className='nameExp'><span>Total Expense:</span><span>{sum}</span></div></div>
        <hr />
        <Print items={this.props.misc}
        isItem={this.checkItem}/>
      </div>
    )
  }
}

export default Miscellaneous