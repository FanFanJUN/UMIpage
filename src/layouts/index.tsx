import React, { Fragment } from 'react';
import styles from './index.css';
// import { Menu, Icon } from 'antd';
import { Layout, Icon } from 'antd';


// const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.Component {
  state = {
    current: 'mail',
  };

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };
  // getMenu = () => {
  //   return (
  //     <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
  //       <Menu.Item key="mail">
  //         <Icon type="mail" />
  //         Navigation One
  //       </Menu.Item>
  //       <Menu.Item key="app">
  //         <Icon type="appstore" />
  //         Navigation Two
  //       </Menu.Item>
  //       <SubMenu
  //         title={
  //           <span className="submenu-title-wrapper">
  //             <Icon type="setting" />
  //             Navigation Three - Submenu
  //           </span>
  //         }
  //       >
  //         <Menu.ItemGroup title="Item 1">
  //           <Menu.Item key="setting:1">Option 1</Menu.Item>
  //           <Menu.Item key="setting:2">Option 2</Menu.Item>
  //         </Menu.ItemGroup>
  //         <Menu.ItemGroup title="Item 2">
  //           <Menu.Item key="setting:3">Option 3</Menu.Item>
  //           <Menu.Item key="setting:4">Option 4</Menu.Item>
  //         </Menu.ItemGroup>
  //       </SubMenu>
  //       <Menu.Item key="alipay">
  //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //           Navigation Four - Link
  //         </a>
  //       </Menu.Item>
  //     </Menu>
  //   );
  // }

  render() {
    return (
      <div style={{padding: '1px 1px', height: '100%', backgroundColor: '#F0F2F5'}}>
      <Layout>
        <Header style={{textAlign: 'center'}}>
          <span style={{fontSize: '20px', fontWeight: 'bold'}}>
          知识页签
          </span>
          <span>
          <a href="https://github.com/FanFanJUN" target="_blank" style={{marginLeft: '10px'}} title="访问GitHub"><Icon type="github"></Icon></a>
          </span>
          <span>数风流人物，还看今朝！</span>
          </Header>
        <Content style={{height:'100%', overflowY: 'auto'}}>{this.props.children}</Content>
        <Footer style={{ bottom: '0', height: '10px', position: 'absolute',left: '0px', width : '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <span>
              Copyright <Icon type="copyright" /> {new Date().getFullYear()} created by UMI
        </span></div>
        </Footer>
      </Layout>
      </div>
    );
  }
}

export default BasicLayout;
