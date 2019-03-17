import React from 'react';
import './Section.css'
import PaperSheet from './PaperSheet';
import MediaCard from './MediaCard';
import FullWidthTabs from './FullWidthTabs';

class Section extends React.Component {


    render() {
        return (
            <div className="section" >
                <div className="paper" >
                    <PaperSheet />
                </div>
                
                    <div className="container"  >
                      
                            <MediaCard/> 
                             <FullWidthTabs/>
                     
                    </div>
                 
            </div>

        );
    }
}

export default Section