 const team = {
  _players: [
    {
      firstName: 'Rashid',
      lastName: 'Khan',
      age: 22 },
      {
      firstName: 'Mujeeb',
      lastName: 'Rahman',
      age: 20 },
      {
      firstName: 'Faisal',
      lastName: 'Khan',
      age: 18
    }
  ],
  _games: [
    {
      opponent: 'Pakistan',
      teamScore: 100,
      opponentScore: 80
    },
    { 
    opponent: 'India',
    teamScore: 90,
    opponentScore: 50,
    },
    { 
    opponent: 'Sri Lanka',
    teamScore: 110,
    opponentScore: 70
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    return this.players.push(player);
  },
  addGame(opponent, teamScore, opponentScore) {
    const game = {
      opponent,
      teamScore,
      opponentScore,
    };
    return this.games.push(game);
  },
};
//add the players below as you wish.
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//add the opponent teams name and score below.
team.addGame('England', 90, 50);
team.addGame('Australia', 40, 90);
team.addGame('USA', 60, 70);


//check your results.
console.log(team.players);
console.log(team.games);



/* TWITTER HANDLE: 
    -------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————
*/
