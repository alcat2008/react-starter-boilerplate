import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { increase, decrease } from '../actions/count';

import homeStyle from '../styles/views/home.less';

// eslint-disable-next-line
class Home extends React.Component {
  static propTypes = {
    number: React.PropTypes.number,
  };

  render() {
    const { number, actions } = this.props;
    return (
      <div>
        <div className={homeStyle.jump}>
          <Link to="/foo">Go to foo</Link>
        </div>
        <div>
          Some state changes:
          <span className={homeStyle.count}>{number}</span>
          <button onClick={() => actions.increase(1)}>Increase</button>
          <button onClick={() => actions.decrease(1)}>Decrease</button>
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
    ...bindActionCreators({
      increase,
      decrease,
    }, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
