import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';


import NumberCircle from './pure/NumberCircle';
import Codefile from './pure/Codefile';

import { heroSectionStyle } from './style/layout.css';
import './App.css';



import {
  registerLanguage
} from 'react-syntax-highlighter/dist/light';

import jsSyntax from 'react-syntax-highlighter/dist/languages/javascript';
import hopscotch from 'react-syntax-highlighter/dist/styles/hopscotch'; 

registerLanguage('javascript', jsSyntax);


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

class App extends Component {
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
              <div className="topic-header">
                <NumberCircle number={1}/>
                <span>Modern Javascript</span>
              </div>
              <div className="topic-body">
                <p>
                  All the latest greatest features in JavaScript
                </p>
                <p>
                  Focus on functions
                </p>
                <p>
                  Learn to use the tests
                </p>
              </div>    
            </div>
            
            <div className="Curr-code">
              <Codefile filename="index.js"
                        code={jsCodeExample}
                        syntaxStyle={hopscotch}/>

              <Codefile filename="lib.js"
                        code={jsFnExample}
                        syntaxStyle={hopscotch}/>

              <Codefile filename="test.js"
                        code={jsTestExample}
                        syntaxStyle={hopscotch}/>
              
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

export default App;
