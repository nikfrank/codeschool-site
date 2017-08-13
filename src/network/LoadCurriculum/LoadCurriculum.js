import mock from './mock';
import parseInstructions from './parse';

const { fetch } = global;

export default class LoadCurriculum {
  constructor(next, done, err, { Fetcher }){
    this.next = next;
    this.done = done;
    this.err = err;
  }

  handleRequest( action ){
    fetch('https://rawgit.com/nikfrank/learn-tahini-mastermind/master/docs/instructions.md').then( res =>{
      res.text().then( text => {

        this.next({ payload: parseInstructions(text) });
        this.done();
      });
    });
    
  }
};


export const LoadCurriculumMock = class LoadCurriculumMock {
  constructor( next, done ){
    this.next = next;
    this.done = done;
  }

  handleRequest(){
    this.next({ payload: parseInstructions(mock) });
    this.done();
  }
}
