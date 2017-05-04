/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class DbSchema extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">DB Schema</div>
        <div className="digest" key="digest">
          <p>为方便开发者，平台将测试数据自动置于 DB Schema 中。</p>
          <p>同时，也支持数据导出，并连接到开发者提供的数据库。</p>
        </div>
      </QueueAnim>
    );
  }
}

export default DbSchema;
