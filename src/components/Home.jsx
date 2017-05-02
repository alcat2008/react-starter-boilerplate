import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Element } from 'rc-banner-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { increase, decrease, increaseAsync } from '../actions/count';

const BgElement = Element.BgElement;

// eslint-disable-next-line
class Home extends React.Component {
  static propTypes = {
    number: React.PropTypes.number,
  };

  render() {
    return (
      <OverPack
        className="home"
      >
        <BgElement
          className="bg bg0"
          key="bg"
          id="bg$0"
          scrollParallax={{ y: 300 }}
        />
      </OverPack>
    );
  }
}

const mapStateToProps = state => ({
  number: state.count.number,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      increase,
      decrease,
      increaseAsync,
    }, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
