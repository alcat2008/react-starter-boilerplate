import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { Element } from 'rc-banner-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { increase, decrease, increaseAsync } from '../actions/count';

const BgElement = Element.BgElement;

// eslint-disable-next-line
class Home extends React.Component {
  static defaultProps = {
    className: 'home',
  };

  render() {
    const props = { ...this.props };
    return (
      <OverPack
        className="home"
      >
        <BgElement
          className="bg bg0"
          key="bg"
          id="bg$0"
          // scrollParallax={{ y: 300 }}
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${props.className}-title`}
          key="text"
          id={`${props.id}-wrapperBlock0`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-titleBlock0`}
          >极致开放，构建生态</span>
          <p
            key="content"
            id={`${props.id}-contentBlock0`}
          >
            爱租赁开放平台为您提供极致的开放体验。针对移动互联网场景的定制化 SaaS 云服务，采用 Docker 容器技术封装应用运行环境，并且针对互联网应用提供系统构建、发布、持续集成、运维管理的一站式解决方案。
          </p>
          <Button
            type="ghost"
            key="button"
            id={`${props.id}-buttonBlock0`}
          >
            更多...
          </Button>
        </QueueAnim>
      </OverPack>
    );
  }
}

const mapStateToProps = state => ({
  number: state.count.number,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      increase,
      decrease,
      increaseAsync,
    }, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
