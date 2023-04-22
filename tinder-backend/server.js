import  express  from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://Admin:CZPqfT3PUNal9wwR@cluster0.iuzve9g.mongodb.net/?retryWrites=true&w=majority"

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
});

//API Endpoints
 app.get('/', (req, res) => res.status(200).send("Hello programer"));

app.post('/tinder/cards', (req, res) => {
    const dbcard = req.body;
    
   // const newUser = new Cards({ dbcard });
    // Cards.create(dbcard, (err, data) => {
    //     if (err) {
    //         res.send(err)
    //     } else {
    //         res.send(data)
    //     }
    // })
    Cards.create(dbcard)
        .then((result) => res.send(dbcard))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/tinder/cards', (req, res) => {
    Cards.find()
         .then( Card => res.json(Card))
         .catch(err => res.status(400).json('Error: ' + err));
 });

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));