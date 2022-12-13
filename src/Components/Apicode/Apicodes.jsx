import React from 'react'

export default function Apicodes() {



           
const [respApiGame, setApiGame] = useState([0]);

async function getApiGame(  ) {
  const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {platform: 'pc'},
      headers: {
        'X-RapidAPI-Key': '18ed92c0e8mshc528884bcf732bdp1634f8jsn9463ef451ea9',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
  };
  let { data } = await axios.request(options);
  let newData = { ...respApiGame };
  newData = data;
  setApiGame(newData);
  console.log(newData, " oen");
}

useEffect(() => {
  getApiGame();
}, []);


  return (
    <>
    
    
    </>
  )
}
