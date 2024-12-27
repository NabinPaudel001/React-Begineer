import React from 'react';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Nabin"/>
      <Message/>
      <Counter/> */}

      <FunctionClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
