import mock from './mock';
import parseInstructions from './parse';

const { fetch } = global;


const domain = 'https://rawgit.com/nikfrank';

//const domain = 'http://localhost:8000';

const course = 'learn-tahini-mastermind';

const filename = 'master/docs/instructions.md';
// const filename = 'docs/instructions.md';

export default class LoadCurriculum {
  constructor(next, done, err, { Fetcher }){
    this.next = next;
    this.done = done;
    this.err = err;
  }

  handleRequest( action ){
    fetch(domain + '/' + course + '/' + filename).then( res =>{
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
