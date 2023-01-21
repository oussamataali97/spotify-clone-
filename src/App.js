import Login  from "./components/Login";
import { useEffect ,useState} from 'react'
import { getToken, loginUrl } from './utilities/spotify'
import { useNavigate } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from "./context/Datalayer";
import Home from "./components/Home";
function App() {
  const navigate =useNavigate()
  const spotify =new SpotifyWebApi()
    const [{token,user},dispatch]=useDataLayerValue()
    console.log(user
      )

    useEffect(()=>{

        const token=getToken()
        let myToken=token.access_token;
        window.location.hash=''
        if(myToken){
            dispatch({
              type:'SET_TOKEN',
              token:myToken
            })
            window.localStorage.setItem('token',myToken)
            spotify.setAccessToken(myToken)
            //Get User data
            spotify.getMe().then(
              function (data) {
                dispatch({
                  type:'SET_USER',
                  user:data
                })
              },

            );
        }

        spotify.getUserPlaylists().then((playlists)=>{
          dispatch({
            type:'SET_USER_PLAYLISTS',
            playlists:playlists
          })
        })

        spotify.getPlaylist('11v3udOskUFgRggoCrokJO').then(dataplaylist=>{
          dispatch({
            type:'GET_WEEKLY_PLAYLIST',
            payload:dataplaylist
          })
          console.log(dataplaylist,'weekly')
        })

    },[token , dispatch])

  return (
    <div className="App">
        { token ? <Home spotify={spotify}/>:<Login/> }
    </div>
  );
}

export default App;
