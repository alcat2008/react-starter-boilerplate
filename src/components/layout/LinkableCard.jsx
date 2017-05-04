import React from 'react';
import { message } from 'antd';

class LinkableCard extends React.Component {
  static propTypes = {
    src: React.PropTypes.string,
    figure: React.PropTypes.string,
    detail: React.PropTypes.string,
    href: React.PropTypes.string,
    text: React.PropTypes.string,
  }

  static defaultProps = {
    src: 'https://zos.alipayobjects.com/rmsportal/LHOwsfdUrDkSWYThlSqF.png',
    detail: '接入API为用户提供服务',
    text: '创建',
  }

  _validateHref = () => {
    if (!this.props.href) {
      message.warning('此功能尚未上线，敬请期待 ...');
    }
  }

  render() {
    const { src, figure, detail, href, text } = this.props;
    return (
      <div className="linkable-card">
        <figure>
          <img src={src} alt={figure} />
          <figcaption>{figure}</figcaption>
        </figure>
        <p>{detail}</p>
        <div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={this._validateHref}
          >{text}</a>
        </div>
      </div>
    );
  }
}

export default LinkableCard;
