import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Layout, Menu, Space } from 'antd';
import React from 'react';
import { AiOutlineTwitter, FaFacebookF, GiHamburgerMenu, ImInstagram, IoMdMail } from "react-icons/all";
import Search from "antd/es/input/Search";
import { HiPhone } from 'react-icons/hi2';
import { MenuJapanese, MenuSoftSkill } from '@mockdata/MenuStudyRoute';


const { Header, Content, Sider } = Layout;

const items1 = [
  { label: 'TRANG CHỦ', key: 'item-1' }, // remember to pass the key prop
  { label: 'GIỚI THIỆU', key: 'item-2' },
  { label: 'LIÊN HỆ', key: 'item-3' },
];

interface IMasterLayoutProps {
  children: React.ReactNode
}

const MasterLayout: React.FC<IMasterLayoutProps> = ({children}) => (
  <Layout>
    <div className='header1 flex justify-between items-center '>
      <div className="contact flex">
        <div className="mail flex items-center">
          <IoMdMail />
          <a href="">THAO@JP.COM</a>
        </div>

        <div className="phone flex items-center ml-[27px]  ">
          <HiPhone />
          <a href="" className=''>964-622-3903</a>
        </div>
      </div>

      <div className="social flex">
        <AiOutlineTwitter />
        <FaFacebookF className='mx-[11.62px]' />
        <ImInstagram />
      </div>
    </div>

    <Header className="header justify-between">
      <Space>
        <img src={"./src/assets/images/logo.png"} className="logo w-[86px] h-[23px]" />
        <Button type="default" className={"bg-[#424B59] text-white flex items-center space-x-2"}>
          Menu <GiHamburgerMenu />
        </Button>
      </Space>
      <div className="search">
        <Search placeholder="input search text" style={{ width: 200 }} />
      </div>

      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={336} className="site-layout-background px-2 custom-sider ">
        <h2 className='text-[21px] font-bold text-[#505D68] '>Tiếng Nhật</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={MenuJapanese}
        />

        <h2 className='text-[21px] font-bold text-[#505D68] '>Kỹ năng mềm</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={MenuSoftSkill}
        />

      </Sider>
      <Layout style={{ padding: '0 0 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MasterLayout;
