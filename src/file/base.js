import React, { Component } from 'react'

var a1
var a2
var len=1
var mul_input
export class Base extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         formula:[],
         new1:false,
         new2:false,
         n_input:0,
         eq:""
      }
    }
    
    new_fn=()=>{
      this.state.n_input=0
        this.setState({new1:true})
    }
    
    add_formula_fn=()=>{
      this.setState({formula:[...this.state.formula,{id:len,equation:this.state.eq}]})
      len += 1
      this.setState({new1:false,new2:false})
    }

    next_fn=()=>{
      mul_input= ""
        for (var i=0 ; i<this.state.n_input ; i++)
        {
            mul_input = (<>{mul_input}<br/>
            <label>{i+1} :</label>
            <input type="text" />
            </>)
        }
        mul_input=(<>{mul_input}<br/>
        <label>Equations : </label> 
        <input type="text"  onInput={(e)=>{this.setState({eq:e.target.value})
        console.log(this.state.eq)}} />
        <button onClick={this.add_formula_fn} >Add</button>
        </>)
        this.setState({new2:true})
    }

  render() {
    var z = this.state.formula.map(x=> <ul><ls>
      <button id={x.id} >{x.id}</button>
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
    return (<>
      <div>
        <button onClick={this.new_fn} >New</button>
      </div>

      <div>
        {a1}
        {a2}
      </div>
      <div>
        {z}
      </div>
      </>
    )
  }
}

export default Base
