'use strict';

import React from 'react';
import {Link} from 'react-router';
import {IntlMixin} from 'react-intl';

import imageResolver from 'utils/image-resolver';
import Spinner from 'components/shared/spinner';
import LangPicker from 'components/shared/lang-picker';

// Load styles for the header
// and load the `react-logo.png` image
// for the `<img src='' />` element
let reactLogo;
if (process.env.BROWSER) {
  reactLogo = require('images/react-logo.png');
}
else {
  reactLogo = imageResolver('images/react-logo.png');
}

export default class Header extends React.Component {
  static propTypes: {
    flux: React.PropTypes.object.isRequired
  }

  _getIntlMessage = IntlMixin.getIntlMessage

  render() {
    return (
      <div className="flex flex-center border-bottom">
        <div className="flex-auto">
          <Link to="home" className="button py2 button-transparent">
            TrailerZoo
          </Link>
        </div>
        <div>
          <form>
            <input id="search" type="text" className="field-light" />
            <button className="button">Search</button>
          </form>
        </div>
      </div>
    );
  }
}
