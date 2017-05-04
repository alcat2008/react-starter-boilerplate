/**
 * Created by alcat on 04/05/2017.
 */

import React from 'react';
import QueueAnim from 'rc-queue-anim';

class Domain extends React.Component {
  render() {
    return (
      <QueueAnim type={['right', 'left']} className="description">
        <div className="title" key="title">域名配置</div>
        <div className="digest" key="digest">
          <p>平台自动为开发者创建的服务或产品分配临时的域名，供测试或生产环境使用。</p>
          <p>同时，也支持域名绑定，将产品绑定到特定域名之上。</p>
        </div>
      </QueueAnim>
    );
  }
}

export default Domain;
