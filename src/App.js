
import './App.css';
import { useDispatch } from 'react-redux'
import { GetTeam } from './GetTeam.js'
import { Home } from './Home.js'
import { Coach } from './Coach.js'
import { Players } from './Players.js'
import { useEffect } from 'react';
import { fetchAll} from './actions.js'
import { Route,Routes,useNavigate} from 'react-router-dom';

import {Teams} from './Teams.js'




//?'s: what is a component... how to move table to its own pages using routes ig

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    //const play = new Player(players);
    dispatch(fetchAll());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    
    <div>
      <div className="topnav">
        
      <button className="btn"
        onClick={() => { navigate(`/`);}} >Home</button>
        
      
        <div className="dropdown">
          <button className="btn">Teams</button>
          
            <div className="dropdown-content">
              <Teams/>
            </div>

        </div>
        <button className="btn"
        onClick={() => { navigate(`/players`);}} >All Players</button>
                <button className="btn"
        onClick={() => { navigate(`/coach`);}} >Coaches</button>

        
      </div>

      
      
     
      
      
      
      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/team/:team" element={<GetTeam/>} />
        <Route path="/players" element={<Players />} />
        <Route path="/coach" element={<Coach/>} />
        
      </Routes>


      
    </div>
  );
}

export default App;
