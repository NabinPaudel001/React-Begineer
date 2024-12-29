import React from 'react';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Nabin"/>
      <Message/>
      <Counter/> */}
{/* 
      <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent />
    </div>
  );
}

export default App;
