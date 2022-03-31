import * as React from 'react';
import { Link } from 'react-router-dom';

import SelectLang from '../SelectLang';


// import styles from './index.module.scss';

const { memo, useState } = React;


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
            <div className="logo">LOGO</div>
            <div className='content'>
                <div className='menu'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About</Link>
                    <Link to={'/'}>News</Link>
                </div>
                <SelectLang />
            </div>
        </div>
      );
});

export default Index;
