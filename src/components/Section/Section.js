import React from 'react';
import './Section.css'
import PaperSheet from './PaperSheet';
import Cards from './Cards';
import MediaCard from './MediaCard';


class Section extends React.Component {


    render() {
        return (
            <div className="section" >
                <div style={{ position: 'abouste', top: '20px', paddingLeft: '20px', paddingRight: '20px'}} >
                    <PaperSheet />
                </div>

                <div style={{ position: 'relative', top: '40px', left: '20px'}} >
                    <Cards />
                </div>
                
                    <div style={{ position: 'relative', top: '80px', left: '20px' }} >
                        <MediaCard/>
                    </div>
            </div>

        );
    }
}

export default Section;