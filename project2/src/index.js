import React from 'react';
import ReactDom from 'react-dom'     

function Greeting(){
  return <h3>This is vaibhav pandey and this my component</h3>;
  
}

ReactDom.render(<Greeting/>,document.getElementById('root'))