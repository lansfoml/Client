
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom'
import {deletePlayer} from './actions';

import { useDispatch } from "react-redux";

export function GetTeam(props) {
   let players = useSelector(state => state.players);
    
    const params = useParams(); 
    const team = params.team;
    
    const dispatch = useDispatch();


     
    const result = players.filter(player => (player.team === team && player.position !== "coach"));
    

    //filter call
  
    return (
      <div>
        <h2>{team}</h2>
       
        
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

      </div>

        
        
    );
  }