import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

class Basic extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} delay={300} className="service-info">
        <div className="service-detail" key="detail">
          <div className="title">基础配置</div>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom">
          <LinkableCard
            key="startup"
            figure="自定义首页"
          />
          <LinkableCard
            key="protal"
            figure="自定义门户"
          />
          <LinkableCard
            key="privilege"
            figure="自定义权限"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default Basic;
