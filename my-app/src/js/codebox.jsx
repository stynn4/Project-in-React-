import React from 'react';
import scss from '../scss/main.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSavannaDark } from 'react-syntax-highlighter/styles/hljs';
import { Scrollbars } from 'react-custom-scrollbars';


// bottom section of eventBox with code
class CodeBox extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            codeMax: false
        }
    }

    maximizeCodeBox = () => {
        this.setState({
            codeMax: true
        })
/*
        if(typeof this.props.clickMethod === 'function'){
            this.props.clickMethod();
        }*/
    }

    minimizeCodeBox = () => {
        this.setState({
            codeMax: false
        })
/*
        if(typeof this.props.clickMethod === 'function'){
            this.props.clickMethod();
        }*/
    }

    render(){
        //let code;
        if(this.state.codeMax){
            return <CodeMin/>
        } else {
            return <CodeMax/>
        }
    }
}

class CodeMin extends React.Component {
    render(){
        return(
            <div className='row'>
                <div className='col-6 codeBoxMin'>
                <Scrollbars>
                    <SyntaxHighlighter  
                    language='javascript' 
                    style={atelierSavannaDark}
                    customstyle={{background: 'rgb(30, 30, 30)', 
                    height: '20vh'}}
                    showLineNumbers={true}
                    lineNumberStyle={{color: 'rgba(120, 120, 120, 0.3)',
                    margin: '0 15px'}}>
                        {this.props.brokenCode}
                    </SyntaxHighlighter>
                </Scrollbars>
                    <button onClick={this.maximizeCodeBox}>
                        zobacz kod
                    </button>
                </div>    
            </div>
        )
    }
}

class CodeMax extends React.Component {
    render(){
        return(
            <div className='row'>
                <div className='col-6 codeBoxMax'>
                <Scrollbars>
                    <SyntaxHighlighter  
                    language='javascript' 
                    style={atelierSavannaDark}
                    customstyle={{background: 'rgb(30, 30, 30)', 
                    height: '20vh'}}
                    showLineNumbers={true}
                    lineNumberStyle={{color: 'rgba(120, 120, 120, 0.3)',
                    margin: '0 15px'}}>
                        {this.props.fullCode}
                    </SyntaxHighlighter>
                </Scrollbars>
                    <button onClick={this.minimizeCodeBox}>
                        ukryj kod
                    </button>
                </div>    
            </div>
        )
    }
}
/*
        return (
            <div className='row'>
                <div className={this.state.className}>
                <Scrollbars>
                    <SyntaxHighlighter  
                    language='javascript' 
                    style={atelierSavannaDark}
                    customstyle={{background: 'rgb(30, 30, 30)', height: '20vh'}}
                    showLineNumbers={true}
                    lineNumberStyle={{color: 'rgba(120, 120, 120, 0.3)',
                    margin: '0 15px'}}>
                        {this.props.fullCode}
                    </SyntaxHighlighter>
                </Scrollbars>
                    <button onClick={this.showCode}>
                        zobacz kod
                    </button>
                </div>
                
            </div>
        )
    }   
}*/

export default CodeBox;

/*
<div className={this.state.className}>
                    <Scrollbars>
                    <SyntaxHighlighter 
                    language='javascript' 
                    style={atelierSavannaDark} 
                    customStyle={{overflowX: 'none', 
                    background: 'rgb(40, 40, 40)'}}
                    showLineNumbers={true}
                    lineNumberStyle={{color: 'rgba(120, 120, 120, 0.3)', margin: '0 15px'}}>
                    {this.props.fullCode}
                    </SyntaxHighlighter>
                    </Scrollbars>
                    <button onClick={this.hideCode}>
                        ukryj kod
                    </button>
                </div>
                */

                /*
    showCode = () => {
        // hide apiBoxes in EventBox
        if(typeof this.props.clickMethod === 'function'){
            this.props.clickMethod();
        }
        // maximize codeBox 
        this.setState({
            className: 'col-6 codeBoxMax',
            button: 'ukryj kod'
        })



    }

    hideCode = () => {
        this.setState({
            className: 'col-6 codeBoxMin',
            button: 'zobacz kod'
        })
    }
*/