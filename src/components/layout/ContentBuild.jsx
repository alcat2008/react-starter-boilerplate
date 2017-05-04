/* eslint-disable */
import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default class ContentBuild extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content-build',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
      <span>
        <img src={item.img} width="100%" />
      </span>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const dataSource = [
      { img: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '技术', content: '丰富的业务视野，深厚的技术积累，简单组装即可快速搭建金融级应用。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '开发', content: '符合金融及要求的安全可靠、高可用、高性能的服务能力。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '融合', content: '解放业务及技术生产力，推动金融服务底层创新。' },
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMode;
    const queue = isMode ? 'bottom' : 'left';
    const imgAnim = isMode ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper content5-wrapper">
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
            >
              DevOps 持续集成
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              提供系统构建、发布、持续集成、运维管理的一站式解决方案
            </p>
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <img width="100%" src="/devops.png" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}
