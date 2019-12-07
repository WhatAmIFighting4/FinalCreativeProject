/*global axios*/
var app = new Vue({
  el: '#app',
  data: {
    data: [],
    team1: [],
    team2: [],
    id1: '',
    id2: '',
    gamewinner: '',
    pgWinner: '',
    pfWinner: '',
    cWinner: '',
    sgWinner: '',
    sfWinner: '',
    pg1: '',
    pg2: '',
    sg1: '',
    sg2: '',
    pf1: '',
    pf2: '',
    sf1: '',
    sf2: '',
    c1: '',
    c2: '',
    team1tracker: 0,
    team2tracker: 0,
    simComplete: false,
  },
   created: function() {
    this.compareTeams();
  },
  methods: {
    async selectPG(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pg1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['pg'][0][this.pg1][0].name;
        let OVR = this.data[0]['pg'][0][this.pg1][0].overall;
        let r1 = await axios.post('/api/teams', {
          name: name,
          OVR: OVR,
        });
        this.id1 = r1.data._id;
    },
    async selectPG1(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pg1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['pg'][0][this.pg1][0].name;
        let OVR = this.data[0]['pg'][0][this.pg1][0].overall;
        let r1 = await axios.post('/api/teams', {
          name: name,
          OVR: OVR,
        });
        this.id2 = r1.data._id;
    },
        async selectSG(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pg1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['sg'][0][this.sg1][0].name;
        let OVR = this.data[0]['sg'][0][this.sg1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id1 + "/sg", {
          name: name,
          OVR: OVR,
        });
    },
    async selectSG1(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.sg1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['sg'][0][this.sg1][0].name;
        let OVR = this.data[0]['sg'][0][this.sg1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id2 + "/sg", {
          name: name,
          OVR: OVR,
        });
    },
        async selectPF(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pf1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['pf'][0][this.pf1][0].name;
        let OVR = this.data[0]['pf'][0][this.pf1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id1 + "/pf", {
          name: name,
          OVR: OVR,
        });
    },
        async selectPF1(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pf1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['pf'][0][this.pf1][0].name;
        let OVR = this.data[0]['pf'][0][this.pf1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id2 + "/pf", {
          name: name,
          OVR: OVR,
        });
    },
        async selectSF(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pf1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['sf'][0][this.sf1][0].name;
        let OVR = this.data[0]['sf'][0][this.sf1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id1 + "/sf", {
          name: name,
          OVR: OVR,
        });
    },
        async selectSF1(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pf1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['sf'][0][this.sf1][0].name;
        let OVR = this.data[0]['sf'][0][this.sf1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id2 + "/sf", {
          name: name,
          OVR: OVR,
        });
    },
        async selectC(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pf1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['c'][0][this.c1][0].name;
        let OVR = this.data[0]['c'][0][this.c1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id1 + "/c", {
          name: name,
          OVR: OVR,
        });
    },
        async selectC1(){
        var url = "http://cs260.renbergbyu.com:4200/NBA";
        let response = await axios.get(url);
        //console.log(this.pf1);
        this.data = response.data;
        console.log(this.data);
        let name = this.data[0]['c'][0][this.c1][0].name;
        let OVR = this.data[0]['c'][0][this.c1][0].overall;
        let r1 = await axios.put('/api/teams/' + this.id2 + "/c", {
          name: name,
          OVR: OVR,
        });
    },
    async compareTeams() {
      var url = "http://cs260.renbergbyu.com:4200/api/Team/";
      try {
        this.team1 = await axios.get(url + this.id1);
        this.team2 = await axios.get(url + this.id2);
        console.log(this.team1);
        console.log(this.team2);
        this.pg1= this.team1.data.pgName;
        this.pg2=this.team2.data.pgName;
        this.sg1=this.team1.data.sgName;
        this.sg2=this.team2.data.sgName;
        this.pf1=this.team1.data.pfName;
        this.pf2=this.team2.data.pfName;
        this.sf1=this.team1.data.sfName;
        this.sf2=this.team2.data.sfName;
        this.c1=this.team1.data.cName;
        this.c2=this.team2.data.cName;
        if(this.team1.data.pgOVR > this.team2.data.pgOVR)
        {
          this.pgWinner = 'The Point Guard Winner is: ' + this.team1.data.pgName;
          ++this.team1tracker;
        }
        else if(this.team1.data.pgOVR < this.team2.data.pgOVR)
        {
          this.pgWinner = 'The Point Guard Winner is: ' + this.team2.data.pgName;
          ++this.team2tracker;
        }
        else
        {
          this.pgWinner = 'The players are equal';
        }
        
        if(this.team1.data.sgOVR > this.team2.data.sgOVR)
        {
          this.sgWinner = 'The Shooting Guard Winner is: ' + this.team1.data.sgName;
          ++this.team1tracker;
        }
        else if(this.team1.data.sgOVR < this.team2.data.sgOVR)
        {
          this.sgWinner = 'The Shooting Guard Winner is: ' + this.team2.data.sgName;
          ++this.team2tracker;
        }
        else
        {
          this.sgWinner = 'The players are equal';
        }
        
        if(this.team1.data.pfOVR > this.team2.data.pfOVR)
        {
          this.pfWinner = 'The Power Forward Winner is: ' + this.team1.data.pfName;
          ++this.team1tracker;
        }
        else if(this.team1.data.pfOVR < this.team2.data.pfOVR)
        {
          this.pfWinner = 'The Power Forward Winner is: ' + this.team2.data.pfName;
          ++this.team2tracker;
        }
        else
        {
          this.pfWinner = 'The players are equal';
        }
        
        if(this.team1.data.sfOVR > this.team2.data.sfOVR)
        {
          this.sfWinner = 'The Small Forward Winner is: ' + this.team1.data.sfName;
          ++this.team1tracker;
        }
        else if(this.team1.data.sfOVR < this.team2.data.sfOVR)
        {
          this.sfWinner = 'The Small Forward Winner is: ' + this.team2.data.sfName;
          ++this.team2tracker;
        }
        else
        {
          this.sfWinner = 'The players are equal';
        }
        
        if(this.team1.data.cOVR > this.team2.data.cOVR)
        {
          this.cWinner = 'The Center Winner is: ' + this.team1.data.cName;
          ++this.team1tracker;
        }
        else if(this.team1.data.cOVR < this.team2.data.cOVR)
        {
          this.cWinner = 'The Center Winner is: ' + this.team2.data.cName;
          ++this.team2tracker;
        }
        else
        {
          this.cWinner = 'The players are equal';
        }
        
        if(this.team1tracker > this.team2tracker)
        {
          this.gamewinner = 'The winner of the game is player 1';
        }
        else if(this.team1tracker < this.team2tracker)
        {
          this.gamewinner = 'The winner of the game is player 2';
        }
        else
        {
          this.gamewinner = 'The game is too close to determine';
        }
      console.log(this.pg1);
      this.simComplete = true;
      }
      catch (error) {
        console.log(error);
      }
    },
  },
 /* watch: {
    team1() {
      this.compareTeams();
      this.team1tracker = 0;
      this.team2tracker = 0;
    },
    team2() {
      this.compareTeams();
      this.team1tracker = 0;
      this.team2tracker = 0;
    },
  },*/
});
