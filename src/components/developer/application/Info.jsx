import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { Tag, Card, Steps } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { LinkableCard } from '../../layout';

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
      <QueueAnim type={['right', 'left']} delay={300} className="service-info">
        <div className="service-detail" key="detail">
          <div className="title">{serviceData.comment}</div>
          <p>ID： {serviceData.id}</p>
          <p>模块： {serviceData.subdomain}</p>
          <p>
            {serviceData.isMenuService && <Tag> 菜单服务 </Tag>}
            {serviceData.isWorkflow && <Tag> 流程 </Tag>}
          </p>
        </div>
        <div className="service-status" key="status">
          <Card title="处理进度" bordered={false}>
            <Steps current={1} >
              <Step title="创建项目" description="创建项目" />
              <Step title="定制中" description="定制中" />
              <Step title="提交审核" description="提交审核" />
              <Step title="上线" description="上线" />
            </Steps>
          </Card>
        </div>
        <QueueAnim className="linkable-container" key="tool" type="bottom">
          <LinkableCard
            key="dsl"
            figure="自定义 DSL"
            href={config.dslHost + 'service/' + serviceData.subdomain + '/' + serviceData.id + '?mode=inner'}
          />
          <LinkableCard
            key="flow"
            figure="自定义流程"
            href={config.flowHost}
          />
          <LinkableCard
            key="logic"
            figure="自定义逻辑"
            href={config.ideHost}
            text="编辑"
          />
          <LinkableCard
            key="dict"
            figure="自定义数据字典"
            href={config.dslHost + 'dictionary?mode=inner'}
          />
          <LinkableCard
            key="template"
            figure="自定义模板"
          />
          <LinkableCard
            key="rule"
            figure="自定义规则"
          />
          <LinkableCard
            key="entity"
            figure="自定义实体"
          />
        </QueueAnim>
      </QueueAnim>
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

