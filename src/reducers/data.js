import dataSch from '../schemas/NormalizeData';
import { fromJS } from 'immutable';

const initialState = fromJS ({
    entities: dataSch.entities,
    categories: dataSch.result.categories,
    soundtracks: dataSch.result.soundtracks,
    youtubers: dataSch.result.youtubers,
    search: '',
})


function data(state = initialState, action){
    switch(action.type){
        case 'SEARCH_ENTITIES': {
            // let results = [];
            // if (action.payload.query){
            //     state.data.categories.forEach(category => {
            //         results = results.concat(
            //             category.playlist.filter(
            //                 game => game.title.toLowerCase().includes(action.payload.query.toLowerCase())
            //             )
            //         )
            //     });
            // }
            // return {
            //     ...state,
            //     search: results
            // }
            return state.set('search', action.payload.query)
        }
        default:
            return state
    }
}

export default data;