import React, { Component } from 'react'
import Grocery from './Grocery'
import Miscellaneous from './Miscellaneous'
import Travelling from './Travelling'
import Veggies from './Veggies'

export class Expense extends Component {
    state ={
        input:'',
        money:'',
        selectedOption:'',
        groceryArray:[],
        veggiesArray:[],
        travellingArray:[],
        miscellaneousArray:[],
        buttonText:'Add',
        key:'',
        income:'',
        balance:0,
        color:'green',
        totalIncome:0
    }
    inputHandler=(event)=>{
        var inp = event.target.value
        this.setState({
            input:inp
        })
    }
    moneyinputHandler=(event)=>{
        var inp= event.target.value
        if(isNaN(inp)){
            alert('enter a numerical value')
            return
        }
        if(inp<0 || inp==='-'){
            alert('enter a positive expense value')
            this.setState({
                money:0
            })
            return
        }
        this.setState({
            money:Number(inp)
        })
    }
    selectHandler=(event)=>{
        var inp = event.target.value
        this.setState({
            selectedOption:inp
        })
    }
    addHandler = (event)=>{
        if(this.state.input==='' || this.state.money===''){
            alert('enter both expense item and expense money')
            return
        }
        if(this.state.selectedOption==='Grocery'){
            var arr = [...this.state.groceryArray]
            var obj ={
                name:this.state.input,
                price:this.state.money
            }
            var bal = Number(this.state.balance)-Number(this.state.money)
            if(bal<0)
            var color='red'
            else color='green'
            if(this.state.buttonText==='Update'){
                // alert('update')
            arr.splice(this.state.key,0,obj)
            }
            else
            arr = [...arr,obj]
            this.setState({
                groceryArray:arr,
                input:'',
                money:'',
                buttonText:'Add',
                balance:bal,
                color:color
            })
        }
        if(this.state.selectedOption==='Veggies'){
            arr = [...this.state.veggiesArray]
            obj ={
                name:this.state.input,
                price:this.state.money
            }
            bal = Number(this.state.balance)-Number(this.state.money)
            if(bal<0)
            color='red'
            else color='green'
            if(event.target.innerText==='Update'){
                arr.splice(this.state.key,0,obj)
            }
            else
            arr = [...arr,obj]
            this.setState({
                veggiesArray:arr,
                input:'',
                money:'',
                buttonText:'Add',
                balance:bal,
                color:color
            })
        }
        if(this.state.selectedOption==='Travelling'){
            arr = [...this.state.travellingArray]
            obj ={
                name:this.state.input,
                price:this.state.money
            }
            bal = Number(this.state.balance)-Number(this.state.money)
            if(bal<0)
            color='red'
            else color='green'
            if(event.target.innerText==='Update'){
                arr.splice(this.state.key,0,obj)
            }
            else
            arr = [...arr,obj]
            this.setState({
                travellingArray:arr,
                input:'',
                money:'',
                buttonText:'Add',
                balance:bal,
                color:color
            })
        }
        if(this.state.selectedOption==='Miscellaneous'){
            arr = [...this.state.miscellaneousArray]
            obj ={
                name:this.state.input,
                price:this.state.money
            }
            bal = Number(this.state.balance)-Number(this.state.money)
            if(bal<0)
            color='red'
            else color='green'
            if(event.target.innerText==='Update'){
                arr.splice(this.state.key,0,obj)
            }
            else
            arr = [...arr,obj]
            // console.log(arr)
            this.setState({
                miscellaneousArray:arr,
                input:'',
                money:'',
                buttonText:'Add',
                balance:bal,
                color:color
            })
        }
    }
    deleteGrocerryItem =(val,key,edit)=>{
        // alert('dlete')
        var arr = [...this.state.groceryArray]
        arr.splice(key,1)
        console.log(arr)
        this.setState({
            groceryArray:arr
        })
        if(edit==='edit'){
            this.setState({
                input:val.name,
                money:val.price,
                buttonText:'Update',
                key:key,
                selectedOption:'Grocery',
                balance:Number(this.state.balance)+ Number(val.price)
            })
        }
    }
    deleteVeggiesItem =(val,key,edit)=>{
        // alert('dlete')
        var arr = [...this.state.veggiesArray]
        arr.splice(key,1)
        console.log(arr)
        this.setState({
            veggiesArray:arr
        })
        if(edit==='edit'){
            this.setState({
                input:val.name,
                money:val.price,
                buttonText:'Update',
                key:key,
                selectedOption:'Veggies',
                balance:Number(this.state.balance)+ Number(val.price)
            })
        }
    }
    deleteTravellingItem =(val,key,edit)=>{
        // alert('dlete')
        var arr = [...this.state.travellingArray]
        arr.splice(key,1)
        console.log(arr)
        this.setState({
            travellingArray:arr
        })
        if(edit==='edit'){
            this.setState({
                input:val.name,
                money:val.price,
                buttonText:'Update',
                key:key,
                selectedOption:'Travelling',
                balance:Number(this.state.balance)+ Number(val.price)
            })
        }
    }
    deleteMiscItem =(val,key,edit)=>{
        // alert('dlete')
        var arr = [...this.state.miscellaneousArray]
        arr.splice(key,1)
        console.log(arr)
        this.setState({
            miscellaneousArray:arr
        })
        if(edit==='edit'){
            this.setState({
                input:val.name,
                money:val.price,
                buttonText:'Update',
                key:key,
                selectedOption:'Miscellaneous',
                balance:Number(this.state.balance)+ Number(val.price)
            })
        }
    }
    inputIncomeHandler =(event)=>{
        var inp= event.target.value
        if(isNaN(inp)){
            alert('enter a numerical value')
            return
        }
        if(inp<0 || inp==='-'){
            alert('enter a positive income value')
            this.setState({
                income:0
            })
            return
        }
        
        this.setState({
            income:Number(inp)
        })
    }
    incomeHandler= (event)=>{
        var inp = Number(this.state.balance) + Number(this.state.income)
        if(inp>0)
        var color='green'
        else color='red'
        var totalIncome1 = Number(this.state.totalIncome)+ Number(this.state.income)
        this.setState({
            balance:Number(inp),
            income:'',
            color:color,
            totalIncome:totalIncome1
        })
    }
  render() {
    return (
      <div className='expense'>
        <div className='balance'>
        <div className='inputBalance'>
        <input placeholder='Enter Income' onChange={this.inputIncomeHandler} value={this.state.income}/>
        <button onClick={this.incomeHandler}>Add Income</button>
        </div>
        <div className='button'>
        <p style={{backgroundColor:this.state.color}}>Balance: <span>&#8377;{this.state.balance}</span></p>
        <p style={{backgroundColor:'green'}}>Income: <span>&#8377;{this.state.totalIncome}</span></p>
        </div>
      </div>
        <div className='inputselect'>
            <div>
            <input placeholder='enter item name' onChange={this.inputHandler} value={this.state.input}/>
            <input placeholder='enter item price' onChange ={this.moneyinputHandler} value={this.state.money}/>
            </div>
            <div className='option'>
            <select onChange={this.selectHandler}>
                <option>select a category</option>
                <option value='Grocery'>Grocery</option>
                <option value='Veggies'>Veggies</option>
                <option value='Travelling'>Travelling</option>
                <option value='Miscellaneous'>Miscellaneous</option>
            </select>
            <button onClick={this.addHandler}>{this.state.buttonText}</button>
            </div>
        </div>
        <Grocery grocerries={this.state.groceryArray}
        modifygrocerry={this.deleteGrocerryItem}/>
        <Veggies veggies={this.state.veggiesArray}
        modifyveggies={this.deleteVeggiesItem}/>
        <Travelling travelling={this.state.travellingArray}
        modifytravelling={this.deleteTravellingItem}/>
        <Miscellaneous misc={this.state.miscellaneousArray}
        modifymisc={this.deleteMiscItem}/>
      </div>
    )
  }
}

export default Expense