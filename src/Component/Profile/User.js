import React from 'react'
import Profile from './Profile';
function User() {
    const users={fullName:"Dabbaghi Walid", bio: "Student", profession :"FULL STACK DEVELOPER" , image:"immmg.jpg"};
    const HandleName = (a)=>{
        alert(a)
    }
    return (
    <div > 
        
    <Profile full={users.fullName} bi={users.bio} profes={users.profession} img={users.image} funct={HandleName}/>

    </div>
    ) 
}

export default User