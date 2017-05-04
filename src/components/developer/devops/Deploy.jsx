/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Deploy extends React.Component {
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
      </QueueAnim>
    );
  }
}

export default Deploy;
