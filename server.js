const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'goro': {
        moveset: "Fireball and Goro Grab",
        fatality: "Dragon Fangs"
    },
    'johnny cage': {
        moveset: "Green Shadow Kick and Straight Forceball",
        fatality: "Triple Punch Decapitation"
    },
    'sub-zero': {
        moveset: "Ice Blast and Ice Shower",
        fatality: "Snowball Grenade"
    },
    'scorpion': {
        moveset: "Demon Fire and Spine Rip",
        fatality: "Dragon Fangs"
    },
    'sonya blade': {
        moveset: "Armed Forces andInverted Bicycle Kick",
        fatality: "Fire Kiss"
    },
    'unknown': {
        moveset: "unknown",
        fatality: "unknown"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/characters/:characterName', (request, response) => {
    const name = request.params.characterName.toLowerCase()
    // console.log(name)
    if (characters[name]) {
        response.json(characters[name])
    } else {
        response.json(characters['unknown'])
    }
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})