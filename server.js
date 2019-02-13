const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const spawn = require('child_process').spawn;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// app.post('/testDataset', (req, res) => {
//   console.log(req.body);
//   let pythonProcess = spawn('python',["./algorithms/test.py", 'arg1', 'arg2', 'arg3']);

//   pythonProcess.stdout.on('data', (data) => {
//     console.log(data);
//   });

// })