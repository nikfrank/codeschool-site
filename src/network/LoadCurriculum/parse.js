export default text => {
  // split on ## branch
  const branches = text.split('## branch').slice(1);
  
  return branches.map( (branch, bi) => ({
    title: 'branch title',
    steps: branch.split('### solution-step').map( (step, si) => {
      
      const [ title, content ] = step.split('## instructions');
      const [ instructions, codeFile='' ] = content.split('## code\n');
      const [ filename='', code='' ] = codeFile.split(/\n```/);
      
      const firstLine = code.indexOf('\n');
      
      const codeLang = code.slice( 0, Math.max(firstLine, 0) );
      
      const codeBody = code.slice( firstLine + 1 );
      
      return { filename, codeLang, codeBody, instructions, title, open: false};
    })
  }) );
  
  //  take ## instructions
  //  take ## code
  //  take [ ### solution-step, .. ]
  //   take ## instructions
  //   take ## code

  // instructions are returned as { md: text }
  // code returned as { code: '...', lang: 'js', filename: '...' }
};
