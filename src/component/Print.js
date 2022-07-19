import React, { Component } from 'react'

export class Print extends Component {
    deleteHandler= (val,edit)=>{
        // alert(edit);
        this.props.isItem(val,edit)
    }
  render() {
    return (
      <div className='print'>
        <ul>
            {
                this.props.items.map((item)=>
                <li><span className='name'>{item.name}</span><span className='price'>&#8377;{item.price}</span> 
                <div className='editdel'><button className='edit' onClick={()=>this.deleteHandler(item,this.edit='edit')}>Edit</button><button className='del' onClick={(event)=>this.deleteHandler(item)}>Delete</button></div></li>)
            }
        </ul>
      </div>
    )
  }
}

export default Print