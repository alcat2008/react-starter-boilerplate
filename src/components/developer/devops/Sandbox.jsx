/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

class Sandbox extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">沙箱测试</div>
        <div className="digest" key="digest">
          <p>沙箱环境是开放平台提供给开发者或者独立软件开发商（ISV）的测试环境。</p>
          <p>沙箱环境提供了多种类型的测试账号与数据，也可以独立注册账号并创建数据，可以在沙箱环境完成大部分API场景的测试工作。</p>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <LinkableCard
            key="sandbox"
            figure="Sandbox"
            detail="安全、隔离的测试环境"
            // href={config.buildHost}
            text="查看"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default Sandbox;
