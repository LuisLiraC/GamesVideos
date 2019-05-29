import API from '../api.json';
import {normalize, schema} from 'normalizr';

//--------------------------- Creación de cada objeto
const game = new schema.Entity('game', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

const song = new schema.Entity('song', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value})
})

const youtuber = new schema.Entity('youtuber', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value})
})

//--------------------------- Creación de playlist
const category = new schema.Entity('categories', {
    playlist: new schema.Array(game)
});

//--------------------------- Creación de esquema
const soundtracks = {
    soundtracks: new schema.Array(song)
}

const youtubers = {
    youtubers: new schema.Array(youtuber)
}

const categories = {
    categories: new schema.Array(category)
}

//--------------------------- Normalización de data
const normalizedData = normalize(API, categories, youtubers, soundtracks)

export default normalizedData;

