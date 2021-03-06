import React from 'react';
import scss from '../scss/main.css';


class Home extends React.Component {
    render(){
        return (
            <div className='col-6 home'>
                <p>react</p>
                <Underline firstLineTime={1} 
                border={'10px solid rgba(45, 130, 130, 0.3)'}
                secondLineTime={1.5} 
                thirdLineTime={2.0} 
                fourthLineTime={2.5}
                fifthLineTime={2.9}
                sixthLineTime={3.1}
                />
            </div>
        )
    }
}

class Underline extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            line: 1
        }
    }
    
    componentDidMount(){
        
       
        this.firstLine = setTimeout(()=>{
            this.setState({
                line: 1
            })
        }, this.props.firstLineTime * 1000)

        this.secondLine = setTimeout(()=>{
            this.setState({
                line: 2
            })
        }, (this.props.secondLineTime) * 1000)

        this.thirdLine = setTimeout(()=>{
            this.setState({
                line:3
            })
        }, this.props.thirdLineTime * 1000)

        this.fourthLine = setTimeout(()=>{
            this.setState({
                line:4
            })
        }, this.props.fourthLineTime * 1000)

        this.fifthLine = setTimeout(()=>{
            this.setState({
                line: 5
            })
        }, this.props.fifthLineTime * 1000)

        this.sixthLine = setTimeout(()=>{
            this.setState({
                line: 6
            })
        }, this.props.sixthLineTime * 1000)

    }

    componentWillUnmount(){
       
        clearTimeout(this.firstLine)
        clearTimeout(this.secondLine)
        clearTimeout(this.thirdLine)
        clearTimeout(this.fourthLine)
        clearTimeout(this.fifthLine)
        clearTimeout(this.sixthLine)
    }


    render(){

        let firstLine = {
            borderBottom: ''
        }
        if(this.state.line === 1){
            firstLine = {
                borderBottom: this.props.border
            }
        }
        let secondLine = {
            borderBottom: ''
        }
        if(this.state.line === 2){

            firstLine = {
                borderBottom: this.props.border
            }
            secondLine = {
                borderBottom: this.props.border
            }
        }

        let thirdLine = {
            borderBottom: ''
        }
        if(this.state.line === 3){

            firstLine = {
                borderBottom: this.props.border
            }
            secondLine = {
                borderBottom: this.props.border
            }
            thirdLine = {
                borderBottom: this.props.border
            }
        }

        let fourthLine = {
            borderBottom: ''
        }
        if(this.state.line === 4){

            firstLine = {
                borderBottom: this.props.border
            }
            secondLine = {
                borderBottom: this.props.border
            }
            thirdLine = {
                borderBottom: this.props.border
            }
            fourthLine = {
                borderBottom: this.props.border
            }
        }

        let fifthLine = {
            borderBottom: ''
        }
        if(this.state.line === 5){

            firstLine = {
                borderBottom: this.props.border
            }
            secondLine = {
                borderBottom: this.props.border
            }
            thirdLine = {
                borderBottom: this.props.border
            }
            fourthLine = {
                borderBottom: this.props.border
            }
            fifthLine = {
                borderBottom: this.props.border
            }
        }

        let sixthLine = {
            borderBottom: ''
        }
        if(this.state.line === 6){

            firstLine = {
                borderBottom: this.props.border
            }
            secondLine = {
                borderBottom: this.props.border
            }
            thirdLine = {
                borderBottom: this.props.border
            }
            fourthLine = {
                borderBottom: this.props.border
            }
            fifthLine = {
                borderBottom: this.props.border
            }
            sixthLine = {
                borderBottom: this.props.border
            }

        }

        const lines = [firstLine, secondLine, thirdLine, fourthLine, fifthLine, sixthLine]
        
        return (

            <div className='underline'>
                {
                    lines.map((item, index) => {
                        return (
                            <div key={index} style={item}/>
                        )
                    }) 
                }
            </div>
          
        )
    }
}


export default Home;