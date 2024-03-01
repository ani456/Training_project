const fs = require('fs'); //built in module file system module is imported
const path = require('path');
const filePath = path.resolve(__dirname, 'student.json');
const express = require('express');

const port = 3000;
const app = express();
app.use(express.json());
async function fetchDataUsingFs() {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error, message);
    }
}





app.get('/api/getUsers', async(req, res) => {
    const userReq = req.body;
    const data = await fetchDataUsingFs();
    const userdata = JSON.parse(data).user;

    console.log(typeof(userReq));

});

app.post('/api/findUser', async(req, res) => {
    if (userReq.hasOwnProperty('name')) {
        const filteredData = userdata.filter((user) => user.name === userReq.name);
        return res.json(fileteredData);
    } else if (userReq.hasOwnProperty('age')) {
        const fileteredData = userdata.filter((user) => user.age === userReq.age);
        return res.json(filteredData);
    } else {
        console.log("not found keys");
    }

});





app.listen(port, () => {
    console.log("listening....", port);
})

if (userReq.hasOwnProperty('name')) {
    const filteredData = userdata.filter((user) => user.name === userReq.name);
    return res.json(fileteredData);
} else if (userReq.hasOwnProperty('age')) {
    const fileteredData = userdata.filter((user) => user.age === userReq.age);
    return res.json(filteredData);
} else {
    console.log("not found keys");
}