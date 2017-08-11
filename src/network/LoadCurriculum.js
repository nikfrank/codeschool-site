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

        this.next({ payload: text });
        this.done();
      });
    });
    
  }
};
