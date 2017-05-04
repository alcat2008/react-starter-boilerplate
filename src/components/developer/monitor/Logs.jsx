/**
 * Created by alcat on 03/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

class Logs extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">日志服务</div>
        <div className="digest" key="digest">
          <p>提供日志自动采集和分析，支持对应用日志、访问日志进行格式化展示，支持包括错误码分析、URI日志分析、关键字筛查、慢日志分析在内的多种查询分析手段。</p>
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
