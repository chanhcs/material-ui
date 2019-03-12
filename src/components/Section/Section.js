import React from 'react';
import './Section.css'
import PaperSheet from './PaperSheet';
import Cards from './Cards';


class Section extends React.Component {


    render() {
        return (
            <div className="section" >
                <div style={{ position: 'relative', top: '20px', paddingLeft: '20px', paddingRight: '20px'}} >
                    <PaperSheet />
                </div>

                <div style={{ position: 'relative', top: '40px', paddingLeft: '20px', paddingRight: '20px' }} >
                    <Cards />
                </div>
                

            </div>

        );
    }
}

export default Section;