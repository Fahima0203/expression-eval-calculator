import React, { Component } from 'react'
import Help1 from './help1'

var a1
var a2
var a3
var len=1
var mul_input
var get_input
var indxx = -1

export class Base extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         formula:[],
         new1:false,
         new2:false,
         n_input:0,
         eq:"",
         variable:[],
         values:[],
         flag1:false
      }
    }
    
    new_fn=()=>{
      this.state.n_input=0
        this.setState({new1:true})
    }

    next_fn=()=>
    {
      mul_input= ""
      mul_input=(<>{mul_input}<br/>
      <label>Equation : </label> 
      <input type="text"  onInput={(e)=>{this.setState({eq:e.target.value})}} />
      <button onClick={this.add_formula_fn} >Add</button>
      </>)
      this.setState({new2:true})
    }

    add_formula_fn = ()=>
    {
      var i = 0
      this.state.variable=[]
      for (i=0 ; i<this.state.eq.length ; i++)
        {
          if(this.state.eq[i] >= 'a' && this.state.eq[i]<= 'z')
          {
            var tempp = Help1(this.state.variable,this.state.eq[i])
            if(tempp == true)
            {
              this.state.variable=[...this.state.variable,this.state.eq[i]]
            }
          }
        }
      this.setState({formula:[...this.state.formula,{id:len, equation:this.state.eq, variables:this.state.variable}]})
      len += 1
      this.setState({new1:false,new2:false})
    }

    new_button_fn = (idx)=>
    {
      indxx+=1
      this.setState({new1:false,new2:false})
      get_input=""
      // console.log(indxx)
      if(indxx<this.state.formula[idx-1].variables.length)
      {
        get_input = (<><input  value={this.state.formula[idx-1].equation} /><br/>
        <label>{this.state.formula[idx-1].variables[indxx]} : </label> 
         <input id={indxx} type="number" value={this.state.values[indxx]} onChange={(e)=>{
          this.state.values[indxx] = e.target.value
          console.log(this.state.values[indxx],"-", indxx, this.state.values)
          this.setState({})
        }} />
        <button id={indxx} onClick={()=>this.new_button_fn(idx)} >Next</button></>) 
        this.setState({flag1:true})
      }
      else
      {
        this.setState({flag1:false})
      }
    }

  render() {
    var z = this.state.formula.map(x=> <ul key={x.id} ><ls>
      <button id={x.id} onClick={()=>this.new_button_fn(x.id)} >{x.equation}</button>
      </ls></ul>)
    if(this.state.new1){
        a1=(<div><input id={len} type="number" value={this.state.n_input} onChange={(e)=>{this.setState({n_input:e.target.value})}} />
        <button onClick={this.next_fn} >Next</button></div>)
    }
    else{a1=(<></>)}
    if(this.state.new2){
      a2=mul_input
    }
    else{a2=(<></>)}
    if(this.state.flag1){
      a3=get_input
    }
    else{a3=(<></>)}
    return (<>
      <div>
        <button onClick={this.new_fn} >New</button>
      </div>

      <div>
        {a1}
        {a2}
        {a3}
      </div>
      <div>
        {z}
        {this.state.values}
        {this.state.variable}
      </div>
      </>
    )
  }
}

export default Base
