const getAllPlayersFromAPI = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getNFLPlayerList`, {
        headers: {
          'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }, 
      }
    )
      console.log(res.data.body)
      let playerData = res.data.body
      playerData = playerData.filter(player => player.pos === 'QB' || player.pos === 'RB' || player.pos === 'WR' || player.pos === 'TE')
      setPlayers(playerData)
    } catch (error) {
      console.error(error)
    }
  }


const uploadPlayers = async () => {
    await players.forEach(player => {
      axios.post('http://localhost:3001/players', {
        espnID: player.espnID,
        name: player.espnName,
        image: player.espnHeadshot,
        position: player.pos,
        team: player.team,
        age: player.age      
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    })
  }


  const getRookies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/getNFLPlayerList`, {
        headers: {
          'x-rapidapi-key': '426ae3acd0msh3d3c5c1d0c82ea5p1b3459jsn490eccaf5ec5',
          'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
        }, 
      }
    )
      console.log(res.data.body)
      let playerData = res.data.body
      let rookiePlayerData = playerData.filter(player => player.exp === 'R' && (player.pos === 'QB' || player.pos === 'RB' || player.pos === 'WR' || player.pos === 'TE'))
      setRookies(rookiePlayerData)
    } catch (error) {
      console.error(error)
    }
  }


  const makeRookies = async () => {
    await rookies.forEach(rookie => {
      const res = axios.put(`http://localhost:3001/players/espn/${rookie.espnID}`, {
        isRookie: true
      })
    })
    console.log('Rookies set')  
  }
