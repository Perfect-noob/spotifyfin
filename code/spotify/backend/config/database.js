const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/spotifydb',
  {useNewUrlParser:true},
  {useUnifiedTopology: true }
)
.then( () => console.log('success') );
