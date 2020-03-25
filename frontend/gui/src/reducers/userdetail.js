import { GET_USERINFO,ADD_USERINFO,EDIT_USERINFO,
    DELETE_USERINFO,GET_USERINFO_BY_ID } from '../actions/types';


const initialstate = {
    userdetail: [],
    userdetail_by_id: {},
    length : 0,
}

export default function(state = initialstate,action)
{
    switch(action.type){
        case GET_USERINFO:
            return{
                ...state,
                userdetail: action.payload,
                length: action.payload.length
            };

        case GET_USERINFO_BY_ID:
            return{
                ...state,
                userdetail_by_id: action.payload,
                length: action.payload.length
            };

        case ADD_USERINFO:
        case EDIT_USERINFO:
        case DELETE_USERINFO:
            return{
                ...state,
                userdetail: [...state.userdetail,action.payload]
            };
      
        default:
            return state;
    }

}
