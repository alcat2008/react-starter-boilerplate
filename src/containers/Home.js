import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { increase, decrease, increaseAsync, increaseByRequest } from '../actions/count';

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
        </div>
        <div className={homeStyle.operator}>
          <button className="btn-hover" onClick={() => actions.increase(1)}>Increase</button>
          <button className="btn-hover" onClick={() => actions.decrease(1)}>Decrease</button>
          <button className="btn-hover" onClick={() => actions.increaseAsync(1)}>Increase Async</button>
          <button className="btn-hover" onClick={() => actions.increaseByRequest(10)}>Increase by Request</button>
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
      increaseAsync,
      increaseByRequest,
    }, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
