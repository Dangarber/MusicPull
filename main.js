const axios = require('axios');

axios.get('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=aae51f94ff1fca06d4905b444dc74b9c&artist=Radiohead&album=OKcomputer&format=json').then(resp => {

    console.log(resp.data);

   .then(package => package.json())
   .then(Artist => showArtist(artist.results));
});   
showArtist = Artist => {
    const ArtistDiv = document.querySelector(‘#Music-  Artist);
    artist.forEach(Artist => {
      const artistElement = document.artistElement(‘p’);
      artistElement.innerText = `artist Name: ${artist.name}`;
      artistDiv.append(artistElement);
    });
  }
  