import React from 'react'
const NewComp = () => {
    const fname = 'Pranav Shastri'
    const jobTitle = 'Technical Trainer '
    const company = 'Wiley'
    const age = 34
    const link = 'https://www.PranavShastri.com'
    
    return ( <div className="details">
                <h1> {fname}</h1>
                <h3>{jobTitle}</h3>
                <h5> Age is {age}</h5>
                <p> I am a trainer in different technoloogies like Java ,
                     Blockchain, Solidity, Hyperledger, Python and Many 
                     more</p>
                <p>{company}</p>
                <a href={link}> For my Profile Click Here</a>
                <p> {Math.random() * 100}</p>
            </div> );
}
 
export default NewComp;