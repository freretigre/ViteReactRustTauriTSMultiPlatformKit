import {memo} from 'react';

import styles from "./index.module.scss";


const Index = memo(() => {
    
    return (
        <div className={styles.normal}>
            <h1>以下是使用PX2REM</h1>
            <div className='cardsvw'>
                使用PX2REM
            </div>
        </div>
    );
})

export default Index;