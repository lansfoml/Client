function assertResponse(response) {
    if (response.status >= 200 || response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }
  
  
  export function fetchAll() {
    return dispatch => {
      fetch(`https://project2.lansfoml.me:8443/all`)
        .then(assertResponse)
        .then(response => response.json())
        .then(data => {
         
          if (data.ok) {
            dispatch(showPlayers(data.results));

          } else {
            console.error(data);
          }
        });
    };
  }

  export function deletePlayer(id) {
    return dispatch => {
      const options = {
        method: 'DELETE',
      };
      fetch(`https://lansfoml.me:8443/players/${id}`, options)
        .then(assertResponse)
        .then(response => response.json())
        .then(data => {
          if (data.ok) {
            
            dispatch(removePlayer(id));
          }
        });
    };
  }


  export const Action = Object.freeze({
    ShowPlayers: 'ShowPlayers',
    RemovePlayer: 'RemovePlayer',
    StartMemoryEdit: 'StartMemoryEdit',
    CancelMemoryEdit: 'CancelMemoryEdit',
    ReplaceMemory: 'ReplaceMemory',
  });

  
  
  export function showPlayers(players) {
    return {type: Action.ShowPlayers, payload: players};
  }

  export function removePlayer(id) {
    return {type: Action.RemovePlayer, payload: id};
  }

