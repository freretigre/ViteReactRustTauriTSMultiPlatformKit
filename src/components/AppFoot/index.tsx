import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown } from 'antd';
import {
    UnorderedListOutlined,
    DownOutlined,
  } from '@ant-design/icons';
  
import SelectLang from '../SelectLang';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const { memo, useState } = React;
const { Header, Content, Footer } = Layout;


const Index = memo(() => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [ln, setLn] = React.useState<string>('LN');

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      

      return (
        <div>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </div>
      );
});

export default Index;
