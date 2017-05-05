
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SubPage extends React.Component {
  render() {
    return (
      <div>I am page {this.props.params.index}!</div>
    );
  }
}

export default SubPage;
