import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Tabs, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isEmpty } from 'lodash/lang';

import { getFlows } from '../../../actions/application';

function generateBooleanColumn(title, key) {
  return {
    title,
    key,
    dataIndex: key,
    render: text => (text ? <Icon style={{ color: 'green' }} type="check-circle-o" />
      : <Icon style={{ color: 'red' }} type="close-circle-o" />),
  };
}

const TabPane = Tabs.TabPane;
const TweenOneGroup = TweenOne.TweenOneGroup;

class Flows extends React.Component {
  componentDidMount() {
    this.props.actions.getFlows();
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
    generateBooleanColumn('菜单服务', 'isMenuService'),
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
      // className={body.props.className + ' animated fadeInRight'}
      className={body.props.className}
      // appear={false}
    >
      {body.props.children}
    </TweenOneGroup>);
  }

  render() {
    const { application } = this.props;
    if (isEmpty(application.subdomains)) {
      return null;
    }

    return (
      <QueueAnim type={['right', 'left']}>
        <Tabs defaultActiveKey="0" key="flows-tabs">
          {
            Object.keys(application.subdomains).map((subdomain, index) => {
              if (application.subdomains[subdomain].services.length === 0) {
                return null;
              }

              return (
                <TabPane tab={subdomain} key={index}>
                  <Table
                    style={{ width: '100%' }}
                    pagination={false}
                    columns={this.columns}
                    rowKey="id"
                    getBodyWrapper={this._getBodyWrapper}
                    dataSource={application.subdomains[subdomain].services}
                  />
                </TabPane>
              );
            })
          }
        </Tabs>
      </QueueAnim>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      getFlows
    }, dispatch)
  }
});

export default connect(({ application }) => ({ application }), mapDispatchToProps)(Flows);

