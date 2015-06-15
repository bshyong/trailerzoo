'use strict';

import React from 'react';
import ListenerMixin from 'alt/mixins/ListenerMixin';
import {IntlMixin} from 'react-intl';

export default class HomePage extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func
  }

  static propTypes = {
    flux: React.PropTypes.object.isRequired
  }

  _getIntlMessage = IntlMixin.getIntlMessage

  state = this.props.flux
    .getStore('users')
    .getState();

  componentWillMount() {
    this.props.flux
      .getActions('page-title')
      .set(this._getIntlMessage('users.page-title'));

    this.props.flux
      .getActions('users')
      .fetch();
  }

  componentDidMount() {
    this.props.flux
      .getStore('users')
      .listen(this._handleStoreChange);
  }

  componentWillUnmount() {
    this.props.flux
      .getStore('users')
      .unlisten(this._handleStoreChange);
  }

  render() {
    return (
      <div>
        <h2 className='center'>
          Trailers
        </h2>
      </div>
    );
  }
}
