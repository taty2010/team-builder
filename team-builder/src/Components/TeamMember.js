import React, {useState} from 'react'


const TeamMember = props =>{
    console.log(props)
    return(
        <div className='teamList'>
            {props.person.map(person =>(
                <div key={person.id} className='person'>
                    <img src={person.img} alt='avatar' width='100' height='100'/>
                    <h2>{`${person.firstName}  ${person.lastName}`}</h2>
                    <h3>{person.role}</h3>
                    <p>{person.email}</p>
                    <button>Edit</button>
                </div>
            ))

            }
        </div>
    )
}

export default TeamMember