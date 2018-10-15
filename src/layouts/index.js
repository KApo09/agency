import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import {StyleRoot} from 'radium';

import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import './custom.css';

const TemplateWrapper = ({ children }) =>
  <StyleRoot>
    <div>
      <Helmet
        title="Amsel Labs - quality developers for you"
        meta={[
          { name: 'description', content: 'Freelance design by Amsel labs' },
          { name: 'keywords', content: 'freelance, development, amsel, labs, react, web, app' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
        ]}
      />
      <div>
        {children()}
      </div>
    </div>
  </StyleRoot>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;