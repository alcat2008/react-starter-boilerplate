/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Domain extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']}>
        <div className="detail" key="detail">
          <div className="title">域名配置</div>
        </div>
      </QueueAnim>
    );
  }
}

export default Domain;
