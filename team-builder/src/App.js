import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './css/index.css';
import TeamMember from './Components/TeamMember'
import Menu from './Components/Menu';
import Form from './Components/Form'
import avatar from './img/avatar.png'
import mavatar from './img/mavatar.png'
import nAvatar from './img/neutralAvatar.png'
import Footer from './Components/Footer'

function App() {


  const [person, setPerson] = useState([
    {
        id: 1,
        img: `${avatar}`,
        imgM: `${mavatar}`,
        imgN: `${nAvatar}`,
        firstName:'David',
        lastName:'Tennant', 
        email: 'doctorwho@gmail.com',
        role: 'Time Traveler',
        gender: 'Male'

    }
  ]);

  const addPerson = newP =>{
    const newPerson ={
      id: Date.now(),
      img: `${avatar}`,
      imgM: `${mavatar}`,
      imgN: `${nAvatar}`,
      firstName: newP.firstName,
      lastName: newP.lastName,
      email: newP.email,
      role: newP.role,
      gender: newP.gender
    };
    const newPersonCollection = [...person, newPerson]
    setPerson(newPersonCollection)
  }

  return (

    <div className="App">
      <header>
        <nav>
          <Menu />
        </nav>
      </header>
      <div className='body'>
        <Form addPerson={addPerson}/>
        <TeamMember person={person} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
