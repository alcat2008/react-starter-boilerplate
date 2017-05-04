/* eslint-disable */

import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

class Footer extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'footer',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    return (
      <footer>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          className="copyright"
          id={`${props.id}-content`}
        >
        <span>
          Copyright © 2016 The Project by <a href="http://www.izirong.com/" target="_blank">izirong</a>. All Rights Reserved
        </span>
        </TweenOne>
      </footer>
    );
  }
}

export default Footer;
