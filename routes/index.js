var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/NBA', function(req, res) {
  console.log("In Pokemon");
  res.send(teams);
  
});

var teams = [
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
        sf:
        [
        {
          name: 'D\'Angelo Russell',
          overall: 87,
        }  
        ],
        sg:
        [
        {
          name: 'Klay Thompson',
          overall: 89,
        }  
        ],
        pf:
                [
        {
          name: 'Draymond Green',
          overall: 86,
        }  
        ],
        c:
                [
        {
          name: 'Willie Cauley-Stein',
          overall: 79,
        }  
        ],
      }
      ],
          'LA Lakers': [
      {
        pg:
        [
        {
          name: 'Lebron James',
          overall: 97,
        }  
        ],
        sf:
        [
        {
          name: 'Kyle Kuzma',
          overall: 82,
        }  
        ],
        sg:
        [
        {
          name: 'Danny Green',
          overall: 77,
        }  
        ],
        pf:
                [
        {
          name: 'Anthony Davis',
          overall: 94,
        }  
        ],
        c:
                [
        {
          name: 'DeMarcus Cousins',
          overall: 81,
        }  
        ],
      }
      ],
          'Toranto Raptors': [
      {
        pg:
        [
        {
          name: 'Kyle Lowry',
          overall: 85,
        }  
        ],
        sf:
        [
        {
          name: 'Pascal Siakam',
          overall: 87,
        }  
        ],
        sg:
        [
        {
          name: 'Norman Powell',
          overall: 74,
        }  
        ],
        pf:
                [
        {
          name: 'Serge Ibaka',
          overall: 81,
        }  
        ],
        c:
                [
        {
          name: 'Marc Gasol',
          overall: 82,
        }  
        ],
      }
      ],
          'Boston Celtics': [
      {
        pg:
        [
        {
          name: 'Kemba Walker',
          overall: 88,
        }  
        ],
        sf:
        [
        {
          name: 'Jaylen Brown',
          overall: 79,
        }  
        ],
        sg:
        [
        {
          name: 'Marcus Smart',
          overall: 82,
        }  
        ],
        pf:
                [
        {
          name: 'Jayson Tatum',
          overall: 85,
        }  
        ],
        c:
                [
        {
          name: 'Enes Kantar',
          overall: 80,
        }  
        ],
      }
      ],
  }
];

module.exports = router;
