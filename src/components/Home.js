import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { increase, decrease } from '../actions/count';

import homeStyle from '../styles/views/home.less';

// eslint-disable-next-line
class Home extends React.Component {
  static propTypes = {
    number: React.PropTypes.number,
  };

  render() {
    const { number } = this.props;
    return (
      <div>
        <div className={homeStyle.jump}>
          <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
        </div>
        <div>
          Some state changes:
          {number}
          <button onClick={() => this.props.actions.increase(1)}>Increase</button>
          <button onClick={() => this.props.actions.decrease(1)}>Decrease</button>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({
  number: state.count.number,
});

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({ increase, decrease }, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
