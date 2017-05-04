/**
 * Created by alcat on 03/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';


class DbQuery extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">数据库服务</div>
        <div className="digest" key="digest">
          <p>特别提供针对数据库的可视化查询、分析工具，实时掌握数据库及应用状态。</p>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <LinkableCard
            key="startup"
            figure="数据库查询工具"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default DbQuery;
