import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

class IndexPage extends PureComponent {
  state = {
    style: {
      color: 'white',
    }
  };

  onMouseEnter = () => {
    this.setState({
      style: {
        color: 'black',
        cursor: 'pointer',
      }
    });
  };

  onMouseLeave = () => {
    this.setState({
      style: {
        color: 'white',
        pointer: 'inherit',
      }
    });
  };

  render() {
    return (
      <Layout>
        <h1>Hi people.</h1>
        <p>{'Welcome to my '}
          <a href={'https://www.gatsbyjs.org/docs'} target={'_blank'}>GatsbyJS</a>
          {' site.'}
        </p>
        <p>You can build your own too.</p>
        <p
          style={this.state.style}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}>
          Even if you are not a talented full stack developer like me.
        </p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <p>{'You can find some personal and technical stuff '}
          <a href={'https://github.com/atoulous'} target={'_blank'}>here</a>
          {'.'}
        </p>
        <p>
          {'Or find me '}
          <a href={'https://www.linkedin.com/in/aymeric-toulouse-19a768b7'} target={'_blank'}>here</a>
          {'.'}
        </p>
        {/*<Link to="/page-2">Go to page 2</Link>*/}
      </Layout>
    );
  }
}

export default IndexPage;
