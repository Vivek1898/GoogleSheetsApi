import { useRef } from 'react';
import { TextField,Button } from '@material-ui/core';
import axios from 'axios';

import './App.css';

function App() {

const nameInputRef=useRef("");
const ageInputRef=useRef("");
const salaryInputRef=useRef("");
const hobbyInputRef=useRef("");

  const handleSubmit = (e)=> {
    e.preventDefault();
    alert("Submitted");
  
  const tableData={
    name:nameInputRef.current.value,
    age:ageInputRef.current.value,
    salary:salaryInputRef.current.value,
    hobby: hobbyInputRef.current.value,
  };
 axios.post("https://sheet.best/api/sheets/30a996e8-6093-475f-83ef-2886a99a4e2b",tableData)
 .then((response)=>{
   console.log(response);
 })
tableData.reset()
}
  return (
    <div className="App">
     <form onSubmit={handleSubmit}> 
     <TextField inputRef={nameInputRef} label='Name'/>
     <TextField inputRef={ageInputRef} label='Age'/>
     <TextField inputRef={salaryInputRef} label='Salary'/>
     <TextField inputRef={hobbyInputRef} label='Hobby'/>
     <Button type='submit'>Submit</Button>

     </form>
    </div>
  );
}

export default App;

