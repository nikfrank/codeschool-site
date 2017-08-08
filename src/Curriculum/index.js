import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import hopscotch from 'react-syntax-highlighter/dist/styles/hopscotch'; 

import NumberCircle from '../pure/NumberCircle';
import Codefile from '../pure/Codefile';

import { heroSectionStyle } from '../style/layout.css';


import './Curriculum.css';


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


const gitCodeExample =
  `git clone https://github.com/nikfrank/js-course
cd js-course
npm install
npm run test`;

// from rawgit.com
const mmtCourseIntructionsUrl = 'https://rawgit.com/nikfrank/learn-tahini-mastermind/master/docs/instructions.md';


class Curriculum extends Component {
  render() {
    return (
      <div className="Curriculum">
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
                <span className="topic-title">
                  Modern Javascript
                </span>
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

            </div>
          </div>
        </div>

        <div className="Curr">
          <div className="Curr-tablets">
            
            <div className="Curr-topic">
              <div className="topic-header">
                <NumberCircle number={2}/>
                <span className="topic-title">
                  Test Driven
                </span>
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

              <Codefile filename="test.js"
                        code={jsTestExample}
                        syntaxStyle={hopscotch}/>
              
            </div>
            
          </div>
        </div>


        <div className="Curr">
          <div className="Curr-tablets">
            <div className="Curr-topic">
              <div className="topic-header">
                <NumberCircle number={3}/>
                <span className="topic-title">
                  Work on your own!
                </span>
              </div>
              <div className="topic-body">
                <p>
                  All resources available on Github
                </p>
                <p>
                  Just clone, build and test
                </p>
                <p>
                  (testing is learning!)
                </p>
              </div>    
            </div>
            
            <div className="Curr-code">
              <Codefile filename="./bash"
                        code={gitCodeExample}
                        syntaxStyle={hopscotch}/>


            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Curriculum;
