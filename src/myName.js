import React from 'react';

function MyName({allNames,deleteAdmin}){
    // const names = obj.names
    
    const names = allNames.map(name=>{
        if(name.age>20){
        return(
        <div className='first card' key={name.id}>
            <p>Name: {name.name}</p>
            <p>Age: {name.age}</p>
            <p>Work: {name.work}</p>
            <button className='button is-success' onClick={()=>{deleteAdmin(name.id)}}>Delete</button>
        </div>)
        }
        else{
            return null;
        }
    })
    return(
    <div className='allPanels'>
        {names}
    </div>
    );
    
}

export default MyName