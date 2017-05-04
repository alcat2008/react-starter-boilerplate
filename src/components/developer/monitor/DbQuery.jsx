/**
 * Created by alcat on 03/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';
import config from '../../../config';

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
            key="mysql"
            figure="MySQL"
            detail="MySQL 管理工具"
            href={config.dbMysql}
            text="查看"
          />
          <LinkableCard
            key="redis"
            figure="Redis"
            href={config.dbRedis}
            detail="Redis 管理工具"
            text="查看"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default DbQuery;
