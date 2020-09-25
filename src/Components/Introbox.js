import React,{Component} from 'react';
import './Introbox.css';

class Introbox extends Component
{
  render() {
    return (
        <div className='Introbox'>
            <div className='Introh1'>
                <h1>About The Test</h1>
            </div>
            <div className='intro'>
                <p>This is a test that helps you determine you personality type code.
                Your personality type code determines what behaviour cluster do 
                you possess and how does your cognition works, it helps you 
                figure out the strengths and weaknesses and the reason for them.
                This test is based on Myers Briggs Type Indicator. The theory used
                in this test is reliable and comes from researchers like John Beebe, 
                Linda Berens and Dario Nardi</p>
            </div>
            <div className='startbutton'>
                <button>Start The test</button>            
            </div>  
        </div> 
    );
  }
}

export default Introbox;