'use strict';

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="border-top p2">
        <div className='h5 gray'>
          TrailerZoo {new Date().getFullYear()}
        </div>
      </footer>
    );
  }
}
