import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Table, Tabs, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

import { getServices } from '../../../actions/application';

function generateBooleanColumn(title, key) {
  return {
    title,
    key,
    dataIndex: key,
    render: text => (text ? <Icon style={{ color: 'green' }} type="check-circle-o" />
      : <Icon style={{ color: 'red' }} type="close-circle-o" />),
  };
}

// const Anim = {
//   enter: [
//     { x: 30, backgroundColor: '#fffeee', duration: 0 },
//     {
//       duration: 100,
//       type: 'from',
//       delay: 100,
//       ease: 'easeOutQuad'
//     },
//     { x: 0, duration: 100, ease: 'easeOutQuad' },
//     { delay: 1000, backgroundColor: '#fff' },
//   ],
//   leave: [
//     { backgroundColor: '#fffeee' },
//     { duration: 100, opacity: 0, x: 50 },
//     { height: 0, duration: 100, ease: 'easeOutQuad' },
//   ]
// };
const TabPane = Tabs.TabPane;

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
    generateBooleanColumn('菜单服务', 'isMenuService'),
    {
      title: '服务文件',
      key: 'files',
      dataIndex: 'files',
      render: text => (text instanceof Array) && text.join(', ')
    },
  ];


  _getBodyWrapper = (body) => {
    return (<QueueAnim
      component="tbody"
      className={body.props.className + ' animated fadeInRight'}
      // enter={Anim.enter}
      // leave={Anim.leave}
      appear={false}
    >
      {body.props.children}
    </QueueAnim>);
  }

  render() {
    const { application } = this.props;
    return (
      <Tabs defaultActiveKey="0">
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
                  // getBodyWrapper={this._getBodyWrapper}
                  dataSource={application.subdomains[subdomain].services}
                />
              </TabPane>
            );
          })
        }
      </Tabs>
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

