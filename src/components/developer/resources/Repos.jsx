/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

class Repos extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">代码托管</div>
        <div className="digest" key="digest">
          <p>开发者使用代码仓库管理应用的源代码，可以通过指定代码仓库分支直接编译部署到测试环境。</p>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <LinkableCard
            key="gitlab"
            figure="GibLab"
            detail="集代码托管、测试、部署于一体的开源 git 仓库管理软件"
            href="http://192.168.61.91:18001/"
            text="查看"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default Repos;
