//we defining here all are modules we use different functions as modules

const fs = require('fs'); // to validate or read file 
const path = require('path'); //path to retrieve dynamicaally
const filePath = path.resolve('user-password.json');


const express = require('express'); //using express module here
const axios = require('axios'); //
const cors = require('cors');

const PORT = 3000; //declartion of environment variables
const app = express(); //application  creation name
app.use(express.json()); //format 
app.use(cors()); //enablinig cors defines the  diffent endponts  from where 
// requests can be accepted 


async function fetchDataUsingFs() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(data);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error fetching data', error.message);
    }
}

app.post('/app/findUser', async(req, res) => {
        const userReq = req.body;
        const newdata = await fetchDataUsingFs();
        const userdata = userReq.users;

        if (userReq.hasOwnProperty('name')) {
            const filteredData = userdata.filter((user) => user.username === userReq.username);
            return res.json(fileteredData);
        } else if (userReq.hasOwnProperty('age')) {
            const fileteredData = userdata.filter((user) => user.name === userReq.age);
            return res.json(filteredData);
        } else {
            console.log("not found keys");
        }
    }


)
app.listen(PORT, () => {
    console.log("listening....", PORT);
})