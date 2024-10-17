import React from 'react'

interface compProp{
    name?:string ;
    email?:string ;
    age?:string;
}

const comp :React.FC<compProp> = ({ 
    name = "defaultName",
    email = "defaultEmail",
    age = 11 ,
 }) => {
  return (
    <div>The name is : {name}  <br />
      the email : {email} <br />    
       the age is :  {age} <br />
    </div>
  )
}

export default comp