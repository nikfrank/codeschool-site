import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/light';

import { codeblockStyle } from  '../style/codeblock.css';

const hrStyle = {
  display: 'inline-block',
  width: '80%',
  marginLeft: 5,
  verticalAlign: 'middle',

  backgroundColor: 'lightgray',
};

const filenameStyle = {
  fontSize: '12px',
  color: 'gray',
  fontStyle: 'italic',
};

export default ({ filename, code, syntaxStyle })=> (
  <div className="code-file">
    <div style={filenameStyle}>
      { filename }
      <hr style={hrStyle}/>
    </div>
    <SyntaxHighlighter language='javascript'
                       customStyle={codeblockStyle}
                       showLineNumbers={true}
                       style={syntaxStyle}>
      {code}
    </SyntaxHighlighter>
  </div>
);
