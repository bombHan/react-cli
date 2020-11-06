import React, { Component } from 'react';
import { Button } from 'antd';
import Children from './Children'
import './index.scss'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: 'test',
      number: 1,
    }
  }

  componentDidMount() {
    console.log('test页面',this.props)
  }
  gohome = () => {
    this.props.history.push({ pathname: '/homepage',search: 'aaa=111&bbb=222' })
  }
  changeNumber = (value) => {
    this.setState({
      number: value
    })
  }
	render() {
		return (
      <div className="test">
        {this.state.data}aaaaaa
        <Button onClick={this.gohome}>go home</Button>
        <br/>
        
        <Children number={this.state.number} changeNumber={this.changeNumber}/>
      </div>
		);
	}
}
export default Homepage;
