import RobotForm from './RobotForm';
import React, {useState} from 'react';
import {v4} from 'uuid'

const RobotList = () => {
    const [robots, setRobots] = useState([
        { name: 'John', type: 'toy', mass:'1kg', id:1},
        { name: 'Jake', type: 'toy', mass:'1kg', id:2},
        { name: 'X AE A-XII', type: 'Elon Musk kid', mass:'5kg', id:3}
    ]);

    const addRobot = (name, type, mass) => {
        setRobots([...robots, {name, type, mass, id: v4() }]);
    }
    return(
        <div className="robot-list">
            <ul>
                {robots.map(robot => {
                    return(<li key={robot.id}>{robot.name} 
                    - {robot.type} - {robot.mass}</li>);
                })}
            </ul>
            <RobotForm addRobot={addRobot}/>
        </div>
       
    )
}

export default RobotList;