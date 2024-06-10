const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());


app.use(cors());


app.get("/sum", (req, res) => {
    const n1 = parseInt(req.query.a);
    const n2 = parseInt(req.query.b);
    const ans = n1 + n2;
    res.send(ans.toString());
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
