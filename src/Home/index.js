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


const jsCodeExample = `const yoWatup = ()=> {
  console.log('yo watup?');
  return 'yo watup?';
});`;

const jsTestExample = `it('tests its code', ()=> {
  expect( yoWatup() ).toEqual( 'yo watup?' );
};`

const reactExample =
  `export const class HomePage extends Component {
  render(){
    return (
      <div>React is great eh!</div>
    );
  }
};`;

const nodeExample =
  `const app = require('express')();

app.get('/', (req, res)=> {
  res.json({ nm: 'hbu?' });
});

app.listen( process.env.PORT, ()=> {
  console.log('Example app listening on '+
               process.env.PORT);
});`;



class Home extends Component {
  state = {
    currentStep: 0
  }

  setStep = (step)=>{
    this.setState({ currentStep: step });
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-overlay">
            <h2> look how cool this course is nu</h2>
            
            <p> Israel's something leading codeSchool modern web dev </p>
            <p> for us by us, not some corporate shill eh! </p>
          </div>
        </div>

        <Paper style={heroSectionStyle} zDepth={3}>
          <p>
            Homegrown Israeli hi-tech talent acceleration
          </p>
        </Paper>

        <article className="Above-the-fold">
          <p>Section about how this is the only real place to learn</p>
          <p> look how many hashtags we have ####### </p>
          <p> look how many hashtags we have ####### </p>
          <p> look how many hashtags we have ####### </p>
          <p> Maybe a youtube video here eh? </p>
          <p> look how many hashtags we have ####### </p>
          <p> look how many hashtags we have ####### </p>
        </article>
        
        <Paper style={heroSectionStyle} zDepth={3}>
          <p className="App-intro">
            Curriculum in Fullstack Test Driven <code>JavaScript</code>
          </p>
        </Paper>

        <div className="Landing-Course">
          <div className="Course-tablets">
            <div className="Course-topic">
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
            
            <div className="Course-code">
              {
                [
                  <div>
                    <Codefile filename="index.js"
                              code={jsCodeExample}
                              syntaxStyle={hopscotch}/>
                    <Codefile filename="test.js"
                              code={jsTestExample}
                              syntaxStyle={hopscotch}/>
                  </div>,

                  <Codefile filename="lib.js"
                            code={reactExample}
                            syntaxStyle={hopscotch}/>,
                  
                  <Codefile filename="test.js"
                            code={nodeExample}
                            syntaxStyle={hopscotch}/>,
                ][this.state.currentStep]
              }
                  </div>
            </div>

            <div className="Course-learn-more">
              <hr/>
              <Link to="/course/blah">
                <RaisedButton label="Learn More" primary={true}/>
              </Link>
              <hr/>
            </div>
          </div>

          <footer style={{
            width: '100%', height: 200, backgroundColor: 'gray', color: 'white',
            display: 'flex', justifyContent: 'space-around',
          }}>
            <p>Company location</p>
            <p>Links to stuff</p>
            <p>Contact us or whatever</p>
          </footer>
        </div>
    );
  }
}

export default Home;
