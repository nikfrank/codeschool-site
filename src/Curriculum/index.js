import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import ReactMd from 'react-markdown';

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


import './Curriculum.css';


// from rawgit.com
const mmtCourseIntructionsUrl = 'https://rawgit.com/nikfrank/learn-tahini-mastermind/master/docs/instructions.md';


class Curriculum extends Component {
  static get namespace(){
    return 'curriculum';
  }

  static get actions(){
    return {
      loadCurriculum: (courseName) => ({
        network: {
          handler: 'LoadCurriculum',
          payload: { courseName },
          nextAction: { type: 'setCurriculum' },
          errAction: { type: 'setCurriculum' },
        },
      }),
    };
  }

  static get reducer(){
    return {
      setCurriculum: (state, { payload }) =>
        state.setIn(['curriculum', 'branches'], fromJS(payload)),
    };
  }

  static get initState(){
    return fromJS({
      curriculum: {
        branches: [],
      },
    });
  }

  componentDidMount(){
    this.props.loadCurriculum();
    window.scrollTo(0, 0);
  }
  
  render() {
    const branches = this.props.subState.getIn(['curriculum', 'branches'], fromJS([])).toJS();
    
    return (
      <div className="Curriculum">

        {
          branches.map( (branch, i) => (
            <div className="Curriculum" key={i}>
              <NumberCircle number={i}/>
              {
                branch.steps.map( ({ filename, codeLang, codeBody, instructions, title }, si) => (
                  <div className="Curriculum-tablets" key={si}>
                    <div className="Curriculum-topic">
                      <div className="topic-header">
                        <span className="topic-title">
                          { title }
                        </span>
                      </div>
                      <div className="topic-body">
                        <ReactMd source={instructions}/>
                      </div>    
                    </div>
                    <div className="Curriculum-code">
                      <Codefile filename={filename}
                                code={codeBody}
                                language={codeLang}
                                syntaxStyle={hopscotch}/>

                    </div>
                  </div>
                ) )
              }
            </div>

          ) )
        }
        
      </div>
    );
  }
}

const tahiniApp = bootApp( [ networkMiddleware( networkHandlers ) ] );

export default tahiniApp.getDevice( Curriculum, [], Curriculum.initState );
