/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Repos extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']}>
        <div className="detail" key="detail">
          <div className="title">代码托管</div>
        </div>
      </QueueAnim>
    );
  }
}

export default Repos;
