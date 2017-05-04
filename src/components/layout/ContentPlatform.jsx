/* eslint-disable */
import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const BgElement = Element.BgElement;
export default class ContentPlatform extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content-platform',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const follow = !isMode ? {
      delay: 1000,
      minMove: 0.1,
      data: [
        { id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX'] },
        { id: `${props.id}-wrapperBlock0`, value: -15, type: 'x' },
      ],
    } : null;
    const childrenToRender = (<Element
      key="0"
      prefixCls="banner-user-elem"
      followParallax={follow}
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
          >
            极致开放，构建生态
          </span>
        <p
          key="content"
          id={`${props.id}-contentBlock0`}
        >
          安硕开放平台为您提供极致的开放体验。针对移动互联网场景的定制化 SaaS 云服务，采用 Docker 容器技术封装应用运行环境，并且针对互联网应用提供系统构建、发布、持续集成、运维管理的一站式解决方案。
        </p>
        <Button
          type="ghost"
          key="button"
          id={`${props.id}-buttonBlock0`}
        >
          更多...
        </Button>
      </QueueAnim>
    </Element>);

    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}
