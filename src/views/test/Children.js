import React, { Component } from 'react';

class Children extends Component {
  constructor(props) {
    super(props)
  }
  inputChange =(e) => {
    console.log(e)
    this.props.changeNumber(e.target.value)
  }
  render() {
    return (
      <div className="children">
        <br/>
        现在是子组件:
        <br/>
        父组件中的number：{this.props.number}
        <br/>
        时时改变父组件的number：<input type="text" onChange={this.inputChange}/>

      </div>
    );
  }
}

export default Children;