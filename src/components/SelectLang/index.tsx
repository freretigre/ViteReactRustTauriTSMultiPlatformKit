import {memo, ReactChild, ReactFragment, ReactPortal, useState, } from 'react';
import { Button, Layout, Menu, Dropdown } from 'antd';
import {
    DownOutlined,
  } from '@ant-design/icons';

import styles from './index.module.scss';

const { Header, Content, Footer } = Layout;


type SyntheticBaseEvent = /*unresolved*/ any


const SelectLangNew = memo(() => {
    const [locale, setLocale] = useState("zh-CN");
    const [ln, setLn] = useState<string>('LN');
  
    const handleDropdown = (e: any) => {
        console.log("国际化语言切换: ", e);
        if(e.key === '0'){
            setLocale('zh-CN');
            setLn('CN');
        }else{
            setLn('EN');
            setLocale('en-US');
        }
    }

    const menu = (
        <Menu
        onClick={handleDropdown}
        >
          <Menu.Item key="0">
            <a rel="noopener noreferrer">CN</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a rel="noopener noreferrer">EN</a>
          </Menu.Item>
        </Menu>
    );

   

    return (
        <div className={styles.normal}>
             <Dropdown overlay={menu}>
                <a className="ant-dropdown-link">{ln} <DownOutlined /></a>
            </Dropdown>
        </div>
    );
});

export default SelectLangNew;
