import React from 'react';
import { Menu } from 'antd';
import PathLogo from 'assets/svg/logo-full.svg';

const Header = () => (
  <Menu mode="horizontal" style={{padding: '1rem 0'}}>
    <Menu.Item key="paths">
      <img src={PathLogo} alt="village path logo" />
    </Menu.Item>
  </Menu>
);
export default Header;