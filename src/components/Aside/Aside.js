import React from 'react';
import './Aside.css'
import SwipeImages from './SwipeImages';
import NestedList from './NestedList'


class Aside extends React.Component { 
     
    render() {
        return (
            <div className="aside" >
               <div className="list" style={{position:'relative', right:'20px'}} >
                  <NestedList/>
               </div>

              <div style={{position:'relative', top:'650px',display:'flex', justifyContent:'center'}}>
                <SwipeImages/>
              </div>
              
               
             
             
            </div>
            );

        }

}

export default Aside;