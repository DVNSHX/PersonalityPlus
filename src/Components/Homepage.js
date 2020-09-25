import React,{Component} from 'react';
import './homepage.css';
import Introbox from './Introbox';

class Homepage extends Component
{
  render() {
    return (
        <div className='bodycontainer'>
            <div className='leftcontainer'>
                <div className='iconcontainer'>
                </div>
            </div>
        <Introbox />
            <div className='imagecontainer'>
            </div>
        </div>
    );
  }
}

export default Homepage;