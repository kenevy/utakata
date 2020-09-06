import React from 'react';
import {Layout, Input, Avatar, Menu, Dropdown} from 'antd';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import MyMenu from './Menu';

import styles from './index.module.scss';

const {Header, Sider, Content} = Layout;
const {Search} = Input;

export default class MyLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    const {collapsed} = this.state;
    const {children} = this.props;
    return (
      <Layout>
        <Sider className={styles.sider} trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo}/>
          <MyMenu/>
        </Sider>
        <Layout className={styles['site-layout']} style={{paddingLeft: collapsed ? '81px' : '203px'}}>
          <Header className={styles['site-layout-header']} style={{left: collapsed ? '81px' : '203px', padding: 0}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: this.toggle,
            })}
            <div className={styles.headerContent}>
              <Search
                size='small'
                placeholder="input search text"
                onSearch={(value: string) => console.log(value)}
                style={{width: 200}}
              />
              <Dropdown overlay={
                <Menu>
                  <Menu.Item>
                    <ExportOutlined/>
                    退出
                  </Menu.Item>
                </Menu>
              }>
                <div className={styles.user} >
                  Admin
                  <Avatar className={styles.avatar} size='small' icon={<UserOutlined/>} />
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content
            className={styles['layout-content']}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}