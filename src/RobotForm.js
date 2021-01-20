import './App.css';
import React, {useState} from 'react';
import RobotList from './RobotList';

const RobotForm = ({addRobot}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [mass, setMass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addRobot(name, type, mass);
    setName('');
    setType('');
    setMass('');
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <div className="content">
      <label>Robot name:</label>
      <input type="text" value={name} required onChange={(e) => setName(e.target.value)}/>
      <br/>
      <br/>
      <label>Robot type:</label>
      <input type="text" value={type} required onChange={(e) => setType(e.target.value)}/>
      <br/>
      <br/>
      <label>Robot mass:</label>
      <input type="text" value={mass} required onChange={(e) => setMass(e.target.value)}/>
      <br/>
      <br/>
      <input type="submit" value="add"/>
      </div>
    </form>


  );
}

export default RobotForm;
