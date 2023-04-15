require("dotenv").config()
const express = require("express")

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


app.get("/", async (req, res) => {
	res.send("hello world")
})

app.listen(port, () => {
	console.log(`currently listening on port ${port}`)
})
