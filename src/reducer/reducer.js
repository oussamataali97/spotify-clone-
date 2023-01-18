
export const initialState = {
    token:'',
    user:null,
    playlists :[],
    weeklyPlaylist :[],
    playing:false,
    item:null
}

const reducer = (state,action)=>{
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }

        case 'SET_USER_PLAYLISTS' :
            return{
                ...state,
                playlists:action.playlists
            }
        case 'GET_WEEKLY_PLAYLIST':
            return {
                ...state,
                weeklyPlaylist:action.payload
            }
    default:
    return state
}

}

export default reducer