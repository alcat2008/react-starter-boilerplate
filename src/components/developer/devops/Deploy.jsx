/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Card, Steps, Popover } from 'antd';
import { LinkableCard } from '../../layout';

const Step = Steps.Step;

class Deploy extends React.Component {
  _customDot = (dot, { status, index }) => {
    let content = status;
    switch (index) {
      case 0:
        content = '已完成';
        break;
      case 1:
        content = (
          <LinkableCard
            key="deploy"
            figure="DevOps"
            detail="一键式自动化部署并提交审核"
            // href={config.buildHost}
            text="提交审核"
          />
        );
        break;
      case 2:
      case 3:
        content = '等待中';
        break;
      default:
        content = status;
    }

    return (
      <Popover content={<span>步骤 {index}: {content}</span>}>
        {dot}
      </Popover>
    );
  }

  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">部署服务</div>
        <div className="digest" key="digest">
          <p>部署管理服务，提供一键式自动化部署，过程可视化，支持主流编程语言和技术栈，支持并行部署和流水线无缝集成，实现部署环境标准化和部署过程自动化。</p>
        </div>
        <div className="section" key="section">
          <p>部署管理服务具有以下特性：</p>
          <ul>
            <li>一键式创建新部署任务，简单方便</li>
            <li>预定义主流编程语言部署模板和示例程序，包括Tomcat、Java、Jetty、Python 和 NodeJS</li>
            <li>一个部署任务同时部署到多台主机和主机组，部署日志可以分主机查看</li>
            <li>支持自定义部署模板，可以由编译构建归档自定义部署模板到发布仓库，也可以手工上传自定义模板</li>
            <li>部署任务支持自定义环境变量和动态执行时参数配置</li>
            <li>支持无缝集成流水线，支持流水线执行参数</li>
          </ul>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom" delay={100}>
          <Card title="应用状态" style={{ width: '100%' }}>
            <Steps current={1} progressDot={this._customDot}>
              <Step title="创建" description="初始化完成" />
              <Step title="定制中" description="项目进行中" />
              <Step title="审核中" description="提交审核，等待平台确认" />
              <Step title="上线" description="集成到主系统" />
            </Steps>
          </Card>
        </QueueAnim>
      </QueueAnim>
    );
  }
}

export default Deploy;
