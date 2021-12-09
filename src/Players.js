
import {useSelector} from 'react-redux';
import {deletePlayer} from './actions';

import { useDispatch } from "react-redux";
//  import { useState } from 'react';

export function Players(props) {
   const players = useSelector(state => state.players);
    
   const result = players.filter(player => player.position !== "Coach");
   const dispatch = useDispatch();

  //  const [name, setName] = useState(players.entry);

    //filter call
  
    return (
      <div>
    
        <h2 className="sort">All Players</h2>

        
        <table id="players"> 
        <tbody>
          <tr>
            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Number</th>
            <th>Current Team</th>
            <th>Delete Me</th>
           
          </tr>
          </tbody>
        </table>
        
        
          {Object.values(result).map(play => 

          

            <table key={play.id} id="players"> 
                    
                    <tbody>
                        <tr>
                          
                          <td>{play.firstName}</td>
                          <td>{play.lastName}</td>
                          <td>{play.position}</td>
                          <td>{play.age}</td>
                          <td>{play.number}</td>
                          <td>{play.team}</td>
                          <td><button className="btn" onClick={() => dispatch(deletePlayer(play.id))}>Delete</button></td>
                          
                          
                        </tr>
                    </tbody>
                  </table> 
                  
                  
          )}
          {/* <label>Name</label>
          <textarea
        value={name}
        onChange={event => setName(event.target.value)}></textarea> */}

      </div>
        
    );
  }