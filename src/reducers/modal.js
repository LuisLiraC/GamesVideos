import { fromJS } from 'immutable';

const initialState = fromJS ({
    visibility: false,
    gameId: null
})

function modal(state = initialState, action){
    switch(action.type){
        case 'OPEN_MODAL':
            return state.merge({
                visibility: true,
                gameId: action.payload.gameId
            })
        case 'CLOSE_MODAL':
            return state.set('visibility', false)
        default:
            return state
    }
}
export default modal;