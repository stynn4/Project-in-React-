import React from 'react';
import scss from '../scss/main.css';
import { Scrollbars } from 'react-custom-scrollbars';

class TextTyper extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentText: this.props.text[0],

        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            let propsText = this.props.text
            let stateText = this.state.currentText

            this.setState({
                currentText: stateText + propsText[stateText.length]
            }, ()=> {
                if(propsText.length <= this.state.currentText.length)
                    clearInterval(this.interval)
            })

        }, 75)

    }

    componentWillUnmount(){
        clearTimeout(this.interval)
    }
    render(){
        return (
            <div className='col-2 textTyper'>
                <Scrollbars customstyle={{overflowX: 'none'}}>
                    {this.state.currentText}
                </Scrollbars>
            </div>
        )
    }
}

export default TextTyper;

