import React, {useState} from 'react'


const TeamMember = props =>{
    console.log(props)
    return(
        <div className='teamList'>
            {props.person.map(person =>(
                <div key={person.id} className='person'>
                    <div>{
                    person.gender === 'female' ? <img src={person.img} alt='avatar' width='100' height='100'/>
                    : person.gender === 'neutral' ? <img src={person.imgN} alt='avatar' width='120' height='100'/>:<img src={person.imgM} alt='avatar' width='100' height='100'/>}</div>
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