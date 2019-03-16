import React from 'react';
import './Header.css'
import MenuAppBar from './MenuAppBar';
class Header extends React.Component {
   
   
   
   
    render() {
        return (
            <div>
                <MenuAppBar/>
                <div className="header">
                   <div style={{position:"relative", top:'110px', }}>Minh Chánh </div> 
                </div>
            </div>
        );
    }
}

export default Header;