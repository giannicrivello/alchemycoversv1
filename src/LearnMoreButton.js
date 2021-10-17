import React from 'react';
import './LearnMoreButton.css';

export default class LearnMoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: false}

        this.handleScroll = this.handleScroll.bind(this);

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        setTimeout(() => this.setState({scroll: true}), 1000)
    }
    render() {
        const scroll = this.state.scroll;

        if(scroll) {
            return(
            <div className='learnmore-button' onScroll={this.handleScroll}>
               <img src='https://assets.website-files.com/609179603d60ed597c1ebefa/60920d679994fad21c30585e_circular-text.svg'/>
           </div>

            )
        } else {
            return ''
        }
    }
}