const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('public'));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const teamSchema = new mongoose.Schema({
      pgName: String,
      pgOVR: Number,
      sgName: String,
      sgOVR: Number,
      pfName: String,
      pfOVR: Number,
      sfName: String,
      sfOVR: Number,
      cName: String,
      cOVR: Number,    
});

// Create a model for items in the museum.
const Team = mongoose.model('Team', teamSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/teams', async (req, res) => {
  const team = new Team({
    pgName: req.body.name,
    pgOVR: req.body.OVR,
  });
  try {
    await team.save();
    console.log(team);
    res.send(team);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/teams/:id/sg', async (req,res) => {
  try{
    console.log(req.params);
    let team = await Team.findOne({_id:req.params.id});
    team.sgName = req.body.name;
    team.sgOVR = req.body.OVR;
    team.save();
    console.log(req.body);
    res.send(team);
  }catch(error){
    console.log(error);
  }
});

app.put('/api/teams/:id/pf', async (req,res) => {
  try{
    console.log(req.params);
    let team = await Team.findOne({_id:req.params.id});
    team.pfName = req.body.name;
    team.pfOVR = req.body.OVR;
    team.save();
    console.log(req.body);
    res.send(team);
  }catch(error){
    console.log(error);
  }
});

app.put('/api/teams/:id/sf', async (req,res) => {
  try{
    console.log(req.params);
    let team = await Team.findOne({_id:req.params.id});
    team.sfName = req.body.name;
    team.sfOVR = req.body.OVR;
    team.save();
    console.log(req.body);
    res.send(team);
  }catch(error){
    console.log(error);
  }
});

app.put('/api/teams/:id/c', async (req,res) => {
  try{
    console.log(req.params);
    let team = await Team.findOne({_id:req.params.id});
    team.cName = req.body.name;
    team.cOVR = req.body.OVR;
    team.save();
    console.log(req.body);
    res.send(team);
  }catch(error){
    console.log(error);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/Team/:id', async (req, res) => {
    let team = await Team.findOne({_id:req.params.id});
    res.send(team);
});

app.delete('/api/items/:id', async (req,res) => {
  try{
    console.log(req.params);
    let team = await Team.deleteOne({_id:req.params.id});
    res.send(team);
  }catch(error){
    console.log(error);
  }
});

app.get('/NBA', function(req, res) {
  res.send(players);
  
});

var players = [
  {
    pg: [
      {
        'Steph Curry':
        [
        {
          name: 'Steph Curry',
          overall: 95,
        }  
        ],
        'Lebron James':
        [
        {
          name: 'Lebron James',
          overall: 97,
        }  
        ],
        'Kyle Lowry':
        [
        {
          name: 'Kyle Lowry',
          overall: 85,
        }  
        ],
        'Kemba Walker':
        [
        {
          name: 'Kemba Walker',
          overall: 88,
        }  
        ],
      }
    ],
    sg: [
        {
        'Klay Thompson':
        [
        {
          name: 'Klay Thompson',
          overall: 89,
        }  
        ],
        'Danny Green':
        [
        {
          name: 'Danny Green',
          overall: 77,
        }  
        ],
        'Norman Powell':
        [
        {
          name: 'Norman Powell',
          overall: 74,
        }  
        ],
        'Marcus Smart':
        [
        {
          name: 'Marcus Smart',
          overall: 82,
        }  
        ],
        }
    ],
    sf: [
        {
        'D\'Angelo Russell':
        [
        {
          name: 'D\'Angelo Russell',
          overall: 87,
        }  
        ],
        'Kyle Kuzma':
        [
        {
          name: 'Kyle Kuzma',
          overall: 82,
        }  
        ],
        'Pascal Siakam':
        [
        {
          name: 'Pascal Siakam',
          overall: 87,
        }  
        ],
        'Jaylen Brown':
        [
        {
          name: 'Jaylen Brown',
          overall: 79,
        }  
        ],
        }
    ],
    pf: [
        {
        'Draymond Green':[
        {
          name: 'Draymond Green',
          overall: 86,
        }  
        ],
        'Anthony Davis':[
        {
          name: 'Anthony Davis',
          overall: 94,
        }  
        ],
        'Serge Ibaka':[
        {
          name: 'Serge Ibaka',
          overall: 81,
        }  
        ],
        'Jayson Tatum':[
        {
          name: 'Jayson Tatum',
          overall: 85,
        }  
        ],
        }
    ],
    c: [
        {
        'Willie Cauley-Stein':[
        {
          name: 'Willie Cauley-Stein',
          overall: 79,
        }  
        ],  
        'DeMarcus Cousins':[
        {
          name: 'DeMarcus Cousins',
          overall: 81,
        }  
        ],
        'Marc Gasol':[
        {
          name: 'Marc Gasol',
          overall: 82,
        }  
        ],
        'Enes Kantar':[
        {
          name: 'Enes Kantar',
          overall: 80,
        }  
        ],
        }
    ],
  }
];


app.listen(4200, () => console.log('Server listening on port 4200!'));