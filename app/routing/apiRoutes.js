const friendList = require('../data/friends.js');
const fs = require('fs')

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendList);
    })

    app.post('/api/friends', (req,res) => {
        let data = req.body;
        for (var i=0; i < data.scores.length; i++){
        data.scores[i] = parseInt(data.scores[i]);
        }
        console.log(data)
        friendList.push(data);
        res.json(friendList)
        
        fs.writeFile('friends.js', JSON.stringify(friendList), function(err){
            if(err) throw err;
            console.log(JSON.stringify(data))
            console.log('file updated')
        })
    })
};

