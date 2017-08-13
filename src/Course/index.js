import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';


import hopscotch from 'react-syntax-highlighter/dist/styles/hopscotch'; 

import { fromJS } from 'immutable';

import {
  bootApp,
  networkMiddleware,
} from 'tahini';

import networkHandlers from '../network/';


import NumberCircle from '../pure/NumberCircle';
import Codefile from '../pure/Codefile';

import { heroSectionStyle } from '../style/layout.css';


import './Course.css';


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


class CourseLanding extends Component {
  static get namespace(){
    return 'course';
  }

  static get actions(){
    return {
    };
  }

  static get reducer(){
    return {
    };
  }

  static get initState(){
    return fromJS({
    });
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="CourseLanding">
        <Paper style={heroSectionStyle} zDepth={3}>
          <p className="App-intro">
            CourseLanding in Fullstack Test Driven <code>JavaScript</code>
          </p>
        </Paper>

        <div className="Course">
          <div className="Course-tablets">
            <div className="Course-topic">
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
            
            <div className="Course-code">
              <Codefile filename="index.js"
                        code={jsCodeExample}
                        syntaxStyle={hopscotch}/>

              <Codefile filename="lib.js"
                        code={jsFnExample}
                        syntaxStyle={hopscotch}/>

            </div>
          </div>
        </div>

        <div className="Course">
          <div className="Course-tablets">
            
            <div className="Course-topic">
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

            <div className="Course-code">

              <Codefile filename="test.js"
                        code={jsTestExample}
                        syntaxStyle={hopscotch}/>
              
            </div>
            
          </div>
        </div>


        <div className="Course">
          <div className="Course-tablets">
            <div className="Course-topic">
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
            
            <div className="Course-code">
              <Codefile filename="./bash"
                        code={gitCodeExample}
                        syntaxStyle={hopscotch}/>


            </div>
          </div>
        </div>

        <Link to="/curriculum/blah">
          <RaisedButton label="View Curriculum" primary={true}/>
        </Link>
        
      </div>
    );
  }
}

const tahiniApp = bootApp( [ networkMiddleware( networkHandlers ) ] );

export default tahiniApp.getDevice( CourseLanding, [], CourseLanding.initState );
