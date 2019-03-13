import React from 'react';
import './Aside.css'
import SwipeImages from './SwipeImages';
import rain from './rain.jpg'
import star from './star.jpg'
import NestedList from './NestedList'
class Aside extends React.Component { 
     
    render() {
        return (
            <div className="aside" >
               <div>
                  <NestedList/>
               </div>

              <div style={{position:'relative', top:'900px',display:'flex', justifyContent:'center'}}>
                <SwipeImages/>
              </div>
              
               
             
             
            </div>
            );

        }

}

export default Aside;