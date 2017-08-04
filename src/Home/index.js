import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

import { Link } from 'react-router-dom';


import NumberCircle from '../pure/NumberCircle';
import Codefile from '../pure/Codefile';

import { heroSectionStyle } from '../style/layout.css';
import './Home.css';

import hopscotch from 'react-syntax-highlighter/dist/styles/hopscotch'; 


const jsCodeExample = `()=>{
  console.log('yo watup?');
}`;

const jsFnExample =
  `export const americanizeFrench =
  (word)=>
    word.replace('é', 'e');`;

const jsTestExample =
  `import { americanizeFrench } from './lib';

it('should take out those pesky accents!', ()=>{
  const testWord = 'résumé';
  const result = americanizeFrench( testWord );

  expect( result ).toEqual( 'resume' );
});`;



class Home extends Component {
  state = {
    currentStep: 0
  }

  setStep = (step)=>{
    this.setState({ currentStep: step });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-overlay">
            <h2>Welcome to React</h2>
            <p> look how cool this course is nu</p>
          </div>
        </div>
        
        <Paper style={heroSectionStyle} zDepth={3}>
          <p className="App-intro">
            Curriculum in Fullstack Test Driven <code>JavaScript</code>
          </p>
        </Paper>

        <div className="Curr">
          <div className="Curr-tablets">
            <div className="Curr-topic">
              <div className="topic-body">

                <Stepper activeStep={this.state.currentStep}
                         orientation="vertical">
                  <Step>
                    <StepLabel onClick={()=> this.setStep(0)}>
                      Modern JavaScript
                    </StepLabel>
                    <StepContent>
                      <p>
                        Functions everywhere!
                      </p>
                      <p>
                        Testing everything!
                      </p>
                    </StepContent>
                  </Step>

                  <Step>
                    <StepLabel onClick={()=> this.setStep(1)}>
                      ReactJS
                    </StepLabel>
                    <StepContent>
                      <p>
                        Facebook's framework for highly testable, highly functional views
                      </p>
                    </StepContent>
                  </Step>

                  
                  <Step>
                    <StepLabel onClick={()=> this.setStep(2)}>
                      NodeJS
                    </StepLabel>
                    <StepContent>
                      <p>
                        Use Javascript to write your server or cloud!
                      </p>
                    </StepContent>
                  </Step>

                </Stepper>

                
              </div>    
            </div>
            
            <div className="Curr-code">
              {
                [
                  <Codefile filename="index.js"
                            code={jsCodeExample}
                            syntaxStyle={hopscotch}/>,

                  <Codefile filename="lib.js"
                            code={jsFnExample}
                            syntaxStyle={hopscotch}/>,
                  
                  <Codefile filename="test.js"
                            code={jsTestExample}
                            syntaxStyle={hopscotch}/>,
                ][this.state.currentStep]
              }
            </div>
          </div>

          <div className="Curr-learn-more">
            <hr/>
            <Link to="/course/blah">
              <RaisedButton label="Learn More" primary={true}/>
            </Link>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
