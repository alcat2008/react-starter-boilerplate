/**
 * Created by alcat on 03/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

class Logs extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']}>
        <div className="detail" key="detail">
          <div className="title">日志服务</div>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <LinkableCard
            key="kibana"
            figure="kibana"
            detail="对日志进行高效的搜索、可视化、分析等各种操作"
            href="http://120.26.102.213:5601/"
            text="查看"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default Logs;
