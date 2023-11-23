import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <Menu mode="horizontal" style={{backgroundColor: "blue", color: "white", padding: "10px", fontSize: "16px"}}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="products" icon={<IoDocumentTextOutline style={{weight: "30px"}}/>}>
      <Link to="/form">Create</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;