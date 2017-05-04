/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Deploy extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']}>
        <div className="detail" key="detail">
          <div className="title">部署服务</div>
        </div>
      </QueueAnim>
    );
  }
}

export default Deploy;
