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

import HomeImg from '../images/home-code.png';


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


const mapLink = `https://www.google.co.il/maps/place/Dizengoff+St+202,+Tel+Aviv-Yafo/@32.086575,34.7727918,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b89c3bb32c3:0xd1f5765dc6e7458!8m2!3d32.086575!4d34.7749858?hl=en`;

const emailLink = 'mailto:benlevfrank+codeschool@gmail.com?subject=Inquiry About CodeSchoolIL';


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
            <h2> Homegrown Israeli Hi-tech Talent </h2>
            
            <p> Learn to build fullstack JavaScript web apps </p>
            <p> Focus on practical big picture programming skills </p>
          </div>
        </div>

        <Paper style={heroSectionStyle} zDepth={2}>
          <p><b>
            Israel's only Ground-to-Cloud code school
          </b></p>
        </Paper>

        <article className="Above-the-fold">
          <div className="left">
            <p><b>
              Think in JavaScript - Build in JavaScript
            </b></p>
            <p> Build highly interactive websites </p>
            <p> Or deploy your app to the app store! </p>
            <p> Learn to build servers for your online apps </p>
            <p> Or architect a cutting edge Cloud solution! </p>
            <p> Focus on the best practices for any project </p>
          </div>
          <div className="right">
            <img src={HomeImg}/>
          </div>
        </article>
        
        <Paper style={heroSectionStyle} zDepth={2}>
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
              <Link to="/curriculum/react">
                <RaisedButton label="View Available Courses" primary={true}/>
              </Link>
              <hr/>
            </div>
          </div>

          <footer style={{
            width: '100%', height: 200, backgroundColor: 'gray', color: 'white',
            display: 'flex', justifyContent: 'space-around',
          }}>
            <p>
              <a target="_blank"
                 href={mapLink}>
                Company Location
              </a>
            </p>
            <p>&nbsp;</p>
            <p><a target="_blank" href={emailLink}>Contact us</a></p>
          </footer>
        </div>
    );
  }
}

export default Home;
