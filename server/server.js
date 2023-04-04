const express = require('express');
const app = express();
const mySQL = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mySQL.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'rocketmath'

})

db.connect((err) => {
    if(err) {
        console.log(err);
    }else {
        console.log("Successfully Connected to the Database");
    }
})



app.post("/login", (req,res) => {

    console.log(req.body);
    const userName = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;
    const coins = 0;
    const level = 0;
    const rank = "unranked";
    const experience = 1;

    db.query('INSERT INTO users (userName, password, level, `rank`, coins, email, experience) VALUES (?,?,?,?,?,?,?)', [userName, password, level, rank, coins, email, experience], 
    (err, res) => {
        if(err){
            console.log(err)
        }else {
            console.log("Values Successfully Inserted");
        }
    });
})



app.get("/users", (req,res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if(err){
            console.log(err);
        }else {
            res.send(result);
        }
    });
})


app.get('/users/:username', (req,res) => {

    const username = req.params.username;

    db.query('SELECT * FROM users WHERE username = ?', [username], 
    
    (error,results) => {
        if(error) throw error;

        if(results.length > 0){
            res.json(results[0]);
        }else {
            res.sendStatus(404);
        }
    })
})

app.post("/casual", (req,res) => {
    console.log(req.body);

    const userName = req.body.user;
    const correctAnswers = req.body.correct;
    const earnedExperience = req.body.experience;
    
    db.query('SELECT experience, coins, level FROM users WHERE userName = ?', [userName],
        (error, results) => {
            if(error) {
                console.log(error)
            }

            if(results.length > 0) {
                const user = results[0];
                const experience = user.experience;
                const coins = user.coins;
                const level = user.level;
                console.log(`${userName} got ${req.body.actualCorrect} answers correct`)
                console.log(`User ${userName} has experience ${experience} and coins ${coins}`);
                db.query('UPDATE users SET coins = coins + ? WHERE userName = ?', [correctAnswers, userName], 
                    (error, result) => {
                        if(error) {
                            console.log(error);
                        }

                        if(result.affectedRows > 0) {
                            console.log(`User ${userName}'s coins incremented by ${correctAnswers}`);

                        }else {
                            res.sendStatus(404);
                        }
                    }
                )

                const requiredExperience = (level * 20) + 10;
                const userExperience = earnedExperience + experience;
                if(userExperience >= requiredExperience) {

                    const newLevel = level + 1
                    const totalCoins = coins + (newLevel * 5);
                    const newCoins = newLevel * 5;

                    db.query(`UPDATE users SET experience = ?, level = ?, coins = ? WHERE userName = ?`, [1, newLevel, totalCoins, userName],
                        (error, result) => {
                            if (error) {
                                console.log(error);
                            }else {
                                console.log(`User ${userName} leveled up to level ${newLevel} and got ${newCoins}`)
                                res.json( {level: newLevel, coins: newCoins})
                            }
                        }
                    )
                }else {
                    db.query(`UPDATE users SET experience = ? WHERE userName = ?`, [userExperience, userName], 
                        (error, result) => {
                            if(error) {
                                console.log(error)
                            }
                        }
                    )
                }



            }
        }

    )
    

})

app.post("/ranked", (req, res) => {
    
    const username = req.body.user;
    const currentRank = req.body.currentRank;

    var nextRank = "";

    switch(currentRank) {
        case "unranked":
            nextRank = "bronze";
            break;
        case "bronze":
            nextRank = "silver";
            break;
        case "silver":
            nextRank = "gold";
            break;
        case "gold":
            nextRank = "platinum";
            break;
        case "platinum":
            nextRank = "diamond";
            break;
        case "diamond":
            nextRank = "grandmaster"
            break;
        default:
            break;
    }

    db.query("UPDATE users SET `rank` = ? WHERE userName = ?", [nextRank, username],
        (error, results) => {
            if(error) {
                console.log(error);
            }else {
                console.log(`User ${username} rank updated to ${nextRank}`);
            }
        }
    )

})

app.get('/players', (req, res) => {

    //list of all players username and level
    var allPlayers = []
    //list of the top players to be displayed on the leaderboard
    var topPlayers = []

    db.query("SELECT userName, level FROM users", (err, result) => {
        if(err){
            console.log(err);
            res.sendStatus(500);
            return;
        }else {

            result.forEach((currPlayer) => {

                const player = {
                    userName: currPlayer.userName,
                    level: currPlayer.level,
                };
                allPlayers.push(player)
            })

            allPlayers.sort((a,b) => {return b.level - a.level})
            topPlayers = allPlayers.splice(0,3);
            
            console.log(topPlayers);
            res.send(topPlayers);
        }
    })
})



app.listen(3001, () => {
    console.log("Server is running on port 3001");
})



