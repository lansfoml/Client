
import {useSelector} from 'react-redux';
import {deletePlayer} from './actions';
import { useDispatch } from "react-redux";

export function Coach(props) {
   let players = useSelector(state => state.players);
    
     
    const result = players.filter(player => player.position === "Coach");
    
    const dispatch = useDispatch();

    //filter call
  
    return (
      <div>
        <h2>Coaches</h2>
       
        
        <table id="coaches"> 
        <tbody>
          <tr>
            
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Age</th>
            <th>Current Team</th>
            <th>Delete Me</th>
           
          </tr>
          </tbody>
        </table>
        
        
          {Object.values(result).map(coach => 

            <table key={coach.id} id="coaches"> 
                    
                    <tbody>
                        <tr>
                          
                          <td>{coach.firstName}</td>
                          <td>{coach.lastName}</td>
                          <td>{coach.position}</td>
                          <td>{coach.age}</td>
                          <td>{coach.team}</td>
                          <td><button className="btn" onClick={() => dispatch(deletePlayer(coach.id))}>Delete</button></td>
                          
                        </tr>
                    </tbody>
                  </table> 
          
                    
                    
          )}

      </div>

        
        
    );
  }