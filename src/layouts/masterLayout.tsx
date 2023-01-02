import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Button, Layout, Menu, Space} from 'antd';
import React from 'react';
import {GiHamburgerMenu} from "react-icons/all";
import Search from "antd/es/input/Search";

const {Header, Content, Sider} = Layout;

// const items1: MenuProps['items'] = ['TRANG CHỦ', 'GIỚI THIỆU', 'LIÊN HỆ'].map(key => ({
//   key,
//   label: `nav ${key}`,
// }));
const items1 = [
  {label: 'TRANG CHỦ', key: 'item-1'}, // remember to pass the key prop
  {label: 'GIỚI THIỆU', key: 'item-2'},
  {label: 'LIÊN HỆ', key: 'item-3'},
];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const MasterLayout: React.FC = () => (
  <Layout>
    <Header className="header justify-between">
      <Space>
        <img src={"./src/assets/images/logo.png"} className="logo w-[86px] h-[23px]"/>
        <Button type="default" className={"bg-[#424B59] text-white flex items-center space-x-2"}>
          Menu <GiHamburgerMenu/>
        </Button>
      </Space>
      <div className="search">
        <Search placeholder="input search text" style={{ width: 200 }} />
      </div>

      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1}/>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%', borderRight: 0}}
          items={items2}
        />
      </Sider>
      <Layout style={{padding: '0 24px 24px'}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MasterLayout;
