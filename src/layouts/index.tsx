import { memo, FC, PropsWithChildren, Suspense, lazy, useEffect } from 'react';
import {
    Link,
    Outlet,
} from 'react-router-dom';
// import NavigationMenu from '../components/NavigationMenu';
import AppBars from '../components/AppBars';
import AppFoot from '../components/AppFoot';
import {getRootRemSizeNew} from '../utils';

const Layout = memo(() => {
    useEffect(() => {
        getRootRemSizeNew({
            switchFlag: true,
            callback: (size: number) => {
                console.log("sizeVw; ", size);
            }
        });
    }, []);
    return (
        <>
            <AppBars />
            <div 
                className='main'
                style={{
                    paddingTop: 186
                }}
            >
                <Outlet />
            </div>
            <AppFoot />
        </>
    )
});

export default Layout;