import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const LayoutRender = ({ data, children }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} headerColor={data.site.siteMetadata.headerColor} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
);

const SiteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        headerColor,
      }
    }
  }
`;

const QueryComponent = ({ children }) => (
  <StaticQuery
    query={SiteTitleQuery}
    render={data => <LayoutRender data={data}>{children}</LayoutRender>}
  />
);

QueryComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QueryComponent;
