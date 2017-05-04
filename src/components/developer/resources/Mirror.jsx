/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

class Mirror extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">镜像仓库</div>
        <div className="digest" key="digest">
          <p>镜像服务提供简单方便的镜像自助管理功能。用户能通过已有的云服务器或使用外部镜像文件创建私有镜像。</p>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <LinkableCard
            key="docker"
            figure="Nexus"
            detail="高效、健壮的仓库管理工具"
            href="http://192.168.61.91:10001/#browse/search/docker"
            text="查看"
          />
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default Mirror;
