import React from 'react';
import './Aside.css'
import SwipeImages from './SwipeImages';
class Aside extends React.Component {
   
   
   
   
    render() {
        return (
            <div className="aside">
                <div style={{ position: 'relative', top:'20px',  display: 'flex', justifyContent: 'center'}}>
                     <SwipeImages/>
                </div>
            </div>

        );
    }
}

export default Aside;