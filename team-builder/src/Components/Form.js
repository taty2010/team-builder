import React, {useState} from 'react'


const Form = ({addPerson, memberToEdit})=>{
    const [person, setPerson] = useState({
    firstName:'',
    lastName:'', 
    email: '',
    role: ''
    })

    const handleChanges = event => {
        console.log('event', event.target.value)
        setPerson({...person, [event.target.name]:event.target.value})
    }

    const submitForm = event =>{
        event.preventDefault()
        addPerson(person);
        
        setPerson({firstName:'',
        lastName:'', 
        email: '',
        role: ''})
    };

    console.log('person', person)
    return(
    <div className='formBody'>
        <h1>Create Your Team</h1>
    <form onSubmit={submitForm}>
        <label htmlFor='firstName'>First Name</label>
            <input 
            id="firstName" 
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChanges}
             value={person.firstName}
            />

        <label htmlFor='lastName'>
        Last Name 
        </label>
            <input 
            id="lastName"  
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChanges}
            value={person.lastName}
            />

        <label htmlFor='email'>
        Email 
        </label>
            <input 
            id="email"  
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChanges}
            value={person.email}
            />
       
        <label htmlFor='role'>
        Role 
        </label>
            <textarea 
            id="role"  
            placeholder="Role Description"
            name="role"
            onChange={handleChanges}
            value={person.role}
            />

        <button type="submit">Add Person</button>
    </form>
    </div>
    )
}

export default Form;