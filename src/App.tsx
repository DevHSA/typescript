import React from 'react';

import TextField from './TextField';

const App: React.FC = () => {
  return (
    
    <div>

      <TextField text='Hello' person={{firstName:'harish', lastName:'Lol'}}  handleChange={ e => {
         console.log("Something")     }}/>

    </div>
  );
}

export default App;
