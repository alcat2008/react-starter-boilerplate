import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { Tag, Card, Steps } from 'antd';

import { getInfo } from '../../../actions/application';
import config from '../../../config';

const { Step } = Steps;

// const customDot = (dot, { status, index }) => (
//   <Popover content={<span>状态 {index} : {status}</span>}>
//     {dot}
//   </Popover>
// );


class Info extends React.Component {
  componentDidMount() {
    const { params } = this.props;
    this.props.actions.getInfo(params);
  }

  render() {
    const { info } = this.props.application;
    const serviceData = info.domainService;
    if (!serviceData) return null;

    return (
      <div className="service-info">
        <div className="service-detail">
          <div className="title">{serviceData.comment}</div>
          <p>ID： {serviceData.id}</p>
          <p>子域： {serviceData.subdomain}</p>
          <p>
            {serviceData.isMenuService && <Tag> 菜单服务 </Tag>}
            {serviceData.isWorkflow && <Tag> 流程 </Tag>}
          </p>
        </div>
        <div className="service-status">
          <Card title="处理进度" bordered={false}>
            <Steps current={1} >
              <Step title="创建项目" description="创建项目" />
              <Step title="定制中" description="定制中" />
              <Step title="提交审核" description="提交审核" />
              <Step title="上线" description="上线" />
            </Steps>
          </Card>
        </div>
        <div className="service-tool">
          <div className="service-card">
            <figure>
              <img src="https://zos.alipayobjects.com/rmsportal/LHOwsfdUrDkSWYThlSqF.png" alt="自定义 DSL" />
              <figcaption>自定义 DSL</figcaption>
            </figure>
            <p>接入API为用户提供服务</p>
            <div>
              <a
                href={config.dslHost + serviceData.subdomain + '/' + serviceData.id + '?mode=inner'}
                target="_blank"
                rel="noopener noreferrer"
              >创建</a>
            </div>
          </div>
          <div className="service-card">
            <figure>
              <img src="https://zos.alipayobjects.com/rmsportal/LHOwsfdUrDkSWYThlSqF.png" alt="自定义 DSL" />
              <figcaption>自定义流程</figcaption>
            </figure>
            <p>接入API为用户提供服务</p>
            <div>
              <a
                href={config.flowHost}
                target="_blank"
                rel="noopener noreferrer"
              >创建</a>
            </div>
          </div>
          <div className="service-card">
            <figure>
              <img src="https://zos.alipayobjects.com/rmsportal/LHOwsfdUrDkSWYThlSqF.png" alt="自定义 DSL" />
              <figcaption>自定义逻辑</figcaption>
            </figure>
            <p>接入API为用户提供服务</p>
            <div>
              <a
                href={config.ideHost}
                target="_blank"
                rel="noopener noreferrer"
              >编辑</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      getInfo,
    }, dispatch)
  }
});

export default connect(({ application }) => ({ application }), mapDispatchToProps)(Info);

