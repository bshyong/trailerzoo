'use strict';

import React from 'react';
import debug from 'debug'
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
    .getStore('trailers')
    .getState();

  componentWillMount() {
    this.props.flux
      .getActions('page-title')
      .set(this._getIntlMessage('users.page-title'));

    this.props.flux
      .getActions('trailers')
      .fetch();
  }

  componentDidMount() {
    this.props.flux
      .getStore('trailers')
      .listen(this._handleStoreChange);
  }

  componentWillUnmount() {
    this.props.flux
      .getStore('trailers')
      .unlisten(this._handleStoreChange);
  }

  _handleStoreChange = this._handleStoreChange.bind(this)
  _handleStoreChange(state: Object) {
    return this.setState(state);
  }

  render() {
    return (
      <div>
        <h2 className='center'>
          Trailers
        </h2>
        {this.renderTrailers()}
      </div>
    );
  }

  renderTrailers() {
    return this.state.trailers.map((trailer, index) => {
      return (
        <div className="center" key={trailer.id}>
          <h4>{trailer.title}</h4>
          <img src={trailer.thumbnailUrl} alt={trailer.title} />
          <p>
            {trailer.publishedAt}
          </p>
        </div>
      )
    })
  }
}
