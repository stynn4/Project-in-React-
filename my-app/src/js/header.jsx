import React from 'react';
import {
    NavLink
} from 'react-router-dom';

class Header extends React.Component {
    render(){
        const activeStyle = {
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'rgba(192, 159, 11, 0.7)'
        }
        return (
           
            <div className='row header'>
                <nav>
                    <ul className='container'>
                        <li className='shadow col-1'>
                            <NavLink activeStyle={activeStyle} exact to='/'>React</NavLink>
                        </li>
                        <li className='shadow col-1'>
                            <NavLink activeStyle={activeStyle} to='/section1'>Local Storage</NavLink>
                        </li>
                        <li className='shadow col-1'>
                            <NavLink activeStyle={activeStyle} to='/section2'>JSON Server</NavLink>
                        </li>
                        <li className='shadow col-1'> 
                            <NavLink activeStyle={activeStyle} to='/section3'>NASA API</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;