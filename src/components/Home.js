import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { increase, decrease } from '../actions/count';

import homeStyle from '../styles/views/home.less';

// eslint-disable-next-line
function Home({ number, increase, decrease }) {
  return (
    <div>
      <div className={homeStyle.jump}>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div>
        Some state changes:
        {number}
        <button onClick={() => increase(1)}>Increase</button>
        <button onClick={() => decrease(1)}>Decrease</button>
      </div>
    </div>
  );
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({
  number: state.count.number,
});

export default connect(
  mapStateToProps,
  { increase, decrease }
)(Home);
