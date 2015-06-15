'use strict';

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='h5 gray'>
          TrailerZoo {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}
