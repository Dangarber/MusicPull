const axios = require('axios');

axios.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=aae51f94ff1fca06d4905b444dc74b9c&artist=Radiohead&album=OKcomputer&format=json').then(resp => {

    console.log(resp.data);
});   