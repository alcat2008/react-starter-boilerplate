import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Switch } from 'antd';
import TweenOne from 'rc-tween-one';

import { getServices } from '../../../actions/application';

const TweenOneGroup = TweenOne.TweenOneGroup;

const Anim = {
  enter: [
    { x: 30, backgroundColor: '#fffeee', duration: 0 },
    {
      duration: 100,
      type: 'from',
      delay: 100,
      ease: 'easeOutQuad'
    },
    { x: 0, duration: 100, ease: 'easeOutQuad' },
    { delay: 1000, backgroundColor: '#fff' },
  ],
  leave: [
    { backgroundColor: '#fffeee' },
    { duration: 100, opacity: 0, x: 50 },
    { height: 0, duration: 100, ease: 'easeOutQuad' },
  ]
};

class Services extends React.Component {
  componentDidMount() {
    // this.props.actions.getServices()
    //   .then(response => {
    //     this.setState({ subdomains: response });
    //   });
    this.props.actions.getServices();
  }

  columns = [
    {
      title: '服务名',
      key: 'serviceName',
      dataIndex: 'serviceName',
      render: (text, record) => (
        <Link to={'/developer/application/service/' + record.subdomain + '/' + record.id}>{text}</Link>
      )
    },
    { title: '主实体',
      key: 'mainEntity',
      dataIndex: 'mainEntity',
      render: text => text && text.entity.name,
    },
    {
      title: '备注',
      key: 'comment',
      dataIndex: 'comment',
      // render: (text, record, index) => (
      //   <EditableCell
      //     value={text}
      //     onChange={(e) => this._updateComment(index, e)}
      //   />
      // ),
    },
    { title: '关联服务', key: 'refService', dataIndex: 'refService' },
    { title: '菜单服务',
      key: 'isMenuService',
      dataIndex: 'isMenuService',
      render: (text) => (
        <Switch
          checkedChildren={'开'}
          unCheckedChildren={'关'}
          checked={text}
          // onChange={(e) => this._menuServiceChange(index, e)}
        />
      ),
    },
    {
      title: '服务文件',
      key: 'files',
      dataIndex: 'files',
      render: text => (text instanceof Array) && text.join(', ')
    },
  ];


  _getBodyWrapper = (body) => {
    return (<TweenOneGroup
      component="tbody"
      className={body.props.className + ' animated fadeInRight'}
      enter={Anim.enter}
      leave={Anim.leave}
      appear={false}
    >
      {body.props.children}
    </TweenOneGroup>);
  }

  render() {
    const { application } = this.props;

    let serviceList = [];
    Object.keys(application.subdomains).forEach(subdomain => {
      serviceList = serviceList.concat(application.subdomains[subdomain].services);
    });

    return (
      <div>
        <Table
          style={{ width: '100%' }}
          pagination={false}
          columns={this.columns}
          rowKey="id"
          getBodyWrapper={this._getBodyWrapper}
          dataSource={serviceList}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      getServices
    }, dispatch)
  }
});

export default connect(({ application }) => ({ application }), mapDispatchToProps)(Services);

