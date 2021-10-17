import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {
    render() {
        const options = ['Home', 'About Us', 'Schedule']
        const listOptions = options.map((option) => <p className='nav-options' key={option.toString()}>{option}</p>)
            return(
                <div className='nav'>
                    <div className='nav-options'>
                    {listOptions}


                    </div>
                </div>
            )
        }
}