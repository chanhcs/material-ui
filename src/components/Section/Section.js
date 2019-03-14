import React from 'react';
import './Section.css'
import PaperSheet from './PaperSheet';
import MediaCard from './MediaCard';
import FullWidthTabs from './FullWidthTabs';

class Section extends React.Component {


    render() {
        return (
            <div className="section" >
                <div style={{ position: 'abouste', top: '20px', paddingLeft: '20px', paddingRight: '20px'}} >
                    <PaperSheet />
                </div>
                
                    <div style={{display:'flex', justifyContent:'center', position: 'relative', top: '40px'}} >
                        <MediaCard/>
                        <FullWidthTabs/>
                    </div>
                 
            </div>

        );
    }
}

export default Section;