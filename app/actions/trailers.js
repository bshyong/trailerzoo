'use strict';

import data from 'data/trailers.json';

class TrailersActions {
  constructor() {
    this.generateActions(
      'fetchSuccess'
    );
  }
  fetch() {
    const promise: Function = (resolve) => {
      this.alt.getActions('requests').start();
      setTimeout(() => {
        this.actions.fetchSuccess(data);
        this.alt.getActions('requests').success();
        return resolve();
      }, 100)
    };
    this.alt.resolve(promise);
  }
}

export default TrailersActions;
