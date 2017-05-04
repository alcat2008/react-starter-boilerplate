/**
 * Created by alcat on 03/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';


class DbQuery extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']}>
        <div className="detail" key="detail">
          <div className="title">数据库服务</div>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <LinkableCard
            key="startup"
            figure="自定义首页"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default DbQuery;
