'use strict';

import {isEmpty} from 'lodash';

class TrailersStore {

  constructor() {
    this.bindActions(this.alt.getActions('trailers'));
    this.trailers = [];
  }

  onFetchSuccess(data) {
    const trailers = data.trailers
    if (isEmpty(this.trailers)) {
      return this.setState({trailers: trailers});
    }
    else {
      // TODO: merge users here and set state
      return this.setState({trailers: trailers});
    }
  }

}

export default TrailersStore;
