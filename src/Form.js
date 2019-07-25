import React from 'react';
import disableAll from './disable-all';

function Form(props) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input value={props.title} name="name" />
      <button onClick={() => alert('submitted')}>Submit</button>
    </div>
  );
}

export default disableAll(Form);
