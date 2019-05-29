import {Map as map} from 'immutable'

const initialState = map({
    active: false
})

function loading(state = initialState , action) {
    switch(action.type){
        case 'LOADING':
            return state.set('active', action.payload.value)
        default:
            return state
    }
}

export default loading;