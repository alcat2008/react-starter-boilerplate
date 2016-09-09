import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/count';

// eslint-disable-next-line
function Home({ number, increase, decrease }) {
  return (
    <div>
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
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
