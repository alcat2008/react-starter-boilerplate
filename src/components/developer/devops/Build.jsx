/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Build extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">编译构建</div>
        <div className="digest" key="digest">
          <p>编译构建服务，与代码托管无缝对接，提供云端编译构建服务。</p>
          <p>编译构建任务一键创建、配置和执行，实现获取代码、构建、打包等活动自动化，实时监控构建状态，让您更加快速、高效地进行云端编译构建。</p>
        </div>
        <div className="section" key="section">
          <p>编译构建服务具有以下特性：</p>
          <ul>
            <li>支持 Java、JavaScript 等主流编译构建语言</li>
            <li>支持Maven、Ant、Grails等主流构建标准，配置使用简单</li>
            <li>编译构建软件包下载</li>
            <li>编译构建历史记录</li>
            <li>编译构建任务统计</li>
            <li>编译构建定时执行</li>
            <li>安全可靠，资源隔离，网络隔离和安全组规则保护，远离病毒，木马骚扰，防DDoS攻击</li>
            <li>编译构建结果动态和邮件通知</li>
            <li>服务器统一维护，大幅降低成本</li>
          </ul>
        </div>
      </QueueAnim>
    );
  }
}

export default Build;
