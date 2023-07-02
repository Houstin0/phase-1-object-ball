function gameObject(){
    const teams={
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamdunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamdunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamdunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamdunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamdunks:1,
                }
            }
        }
        ,
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise","purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamdunks:2,
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamdunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamdunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamdunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamdunks:12,
                }
            }
        }
    }

  return teams  
}

console.log(gameObject());

function homeTeamName() {
    let object=gameObject()
    return object.home.teamName
}
console.log(homeTeamName())

//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(name) {
    let object =gameObject()
    for(let team in object){
        const players=object[team].players

        for(let player in players){
        if(player==name){
        return players[player].points
        }
         }
    }
    
}

console.log(numPointsScored("Jason Terry"))

//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.

function shoeSize(name) {
    let object=gameObject()

    for(let team in object){
        const players=object[team].players

        for(let player in players){
            if(player===name){
                return players[player].shoe
            }
        }
    }
}

console.log(shoeSize("Ben Gordon"))

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.

function teamColors(teamName) {
    let object=gameObject()
    for(let item in object){
        if(object[item].teamName===teamName){
            return object[item].colors
        }
    }
}

console.log(teamColors("Charlotte Hornets"));

//Build a function, teamNames, that operates on the game object to return an array of the team names

function teamNames() {
    let object=gameObject()
    let teamArray=[]
    for(let team in object){
        teamArray.push(object[team].teamName)
    }

    return teamArray
}
console.log(teamNames());

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team

function playerNumbers(teamName) {
    let object=gameObject()
    
    for(let team in object){
        if (object[team].teamName===teamName){
            let players=object[team].players
            let jerseyArray=[]
            for(let player in players){
                jerseyArray.push(players[player].number)
            }
            return jerseyArray
        }
    }
}
console.log(playerNumbers("Charlotte Hornets"));

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.

function playerStats(playerName) {
    let game=gameObject()
    for(let team in game){
        let players=game[team].players
        for(let player in players)
        if(player===playerName){
            return players[player]
        }
    }
}
console.log(playerStats("Ben Gordon"));

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.

function bigShoeRebounds() {
    let game=gameObject()
    let largestShoeSize=0
    let reboundCount=0

    for(let team in game){
        let players=game[team].players
        for(let player in players){
            let shoeSize=players[player].shoe
            if(shoeSize>largestShoeSize){
                largestShoeSize=shoeSize;
                reboundCount=players[player].rebounds
            }
        }
    }
    return reboundCount
}
console.log(bigShoeRebounds());