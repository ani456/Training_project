// async function fetchData() {
//     try {
//         const response = await fetch('student.json');
//         const data = await response.json();
//         const container = document.getElementById('data');
//         for (const student of data) {
//             const studentInfo = document.createElement('p');
//             studentInfo.textContent = `Name: ${student.Name}, Age: ${student.Age}, Department: ${student.Department}, Rollno: ${student.Rollno}`;
//             container.appendChild(studentInfo);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// fetchData();


const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
//API
//http://localhost:3000
app.post('/api/user', async(req, res) => {
    //  const userReq = req.body;
    //   const data =await fetchDataUsingFs();
    //const userdata = JSON.parse(data).users;

    // const filteredData = userdata.filter(user)=> user.name === userReq.name);
    // return res.json(filteredData);

    //listen(port, ()=>{
    //  console.log("listening...".port)
    // })


    // async function fetchDataUsingFs() {
    //     try {
    //         // Read file synchronously
    //         const data = fs.readFileSync(filePath, 'utf-8');
    //         console.log(data); //Display the file data
    //     } catch (error) {
    //         console.error('Error fetching data:', error.message)
    //     }
    // }


    const data = req.body;

    const sum = data.num1 + data.num2;
    console.log(sum);
    return res.json(sum);
    //res.json(JSON.parse(data).users);
});


app.post('/api/getuser', async(req, res) => {
    //   const data =await fetchDataUsingFs();
    // console.log(req.body);
    const data = req.body;
    const product = data.num1 * data.num2;
    console.log(product);
    return res.json(product);
});

console.log("testing....")
app.listen(port, () => {
    console.log("listening...", port)
});