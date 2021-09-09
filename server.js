const app = require('./app')
const cors = require('cors');

const port = 3000
app.use(cors())

app.listen(port, () => console.log(`server is listening on ${port}`))

app.get("/test", (req, res) => {
    // set timeout for better visibility //
    setTimeout(() => {
        test={'key': 'value'}
        res.end(JSON.stringify(test));
    }, 2500)
  })