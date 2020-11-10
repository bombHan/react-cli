import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import config from './config';

class Routes extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <Switch>
        {
          config.map((item, index) => {
            return (
              <Route path={item.path} component={item.component} key={index}/>
            )
          })
        }
        <Redirect from={'/'} to={'/homepage'} />
      </Switch>
    )
  }
}

export default Routes