import {useState} from 'react';

const Home = () => {
    const [fname, setFname] = useState("Harry");

const clicked=(e)=>{  
   setFname("Rahul")
   console.log(fname)
}

const clickedme=(nm,e)=>{
   setFname(nm)
}
    return ( <div className="home">
            <h2> This is the home page</h2>
            <p>The Name is {fname}</p>
            <button onClick={clicked}> CLick Me</button>
            <button onClick={(e)=>{clickedme('Pranav',e)}}> CLick Me Name</button>
            </div> );
}
 
export default Home;