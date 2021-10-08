import React, { useState } from 'react';

const AddSub = () => {
   const [title, setTitle] = useState('');
   const [prof, setProf] = useState('');
   const [details, setDetails] = useState('');

   const subjectSubmit = (e)=>{
            e.preventDefault();
            const subject = {title, prof, details}
           
            fetch('http://localhost:8000/subjects/4',{
                method:'PUT',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(subject)
            }).then(()=>console.log('Subject Added'))
   }

    return ( <div className="create">
        <h2> Add a New Subject</h2>
        <form onSubmit={subjectSubmit}>
            <label> Subject Title :</label>
            <input
            type= "text"
            required 
            value = {title}
            onChange={(e)=>setTitle(e.target.value)}/> 
            <label> Taught By :</label>
            <input
            type= "text"
            required
            value = {prof}
            onChange={(e)=>setProf(e.target.value)}/> 
            <label> Details :</label>
            <textarea
            required
            value = {details} 
            onChange={(e)=>setDetails(e.target.value)}/>
            <button> Add Subject</button>

        </form>

    </div> );
}
 
export default AddSub;