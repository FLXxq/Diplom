import React from 'react';
import './style.css'

const Layout = (props) => {
    const {children} = props
    return (
        <div className='layout'>
            {children}
        </div>
    );
};

export default Layout;