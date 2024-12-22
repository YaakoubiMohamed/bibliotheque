const express = require('express');
const bodyParser = require('body-parser');


const auteurRoutes = require('./routes/auteurRoutes');
const livreRoutes = require('./routes/livreRoutes');
const { connexion } = require('./config/db');
const {syncModels } = require('./models')

const app = express();
app.use(bodyParser.json());



app.use('/api', livreRoutes);
app.use('/api',auteurRoutes);

const PORT= 4000;

app.listen(PORT, async () =>{
    console.log('app is running on port', PORT);
    await connexion();
})

// {
//     "titre":"introduction web 2.0",
//     "description":"formaton web",
//     "date_publication":"2024-12-22 21:54:23",
//     "theme":"informatique",
//     "auteur_id":2
//   }




