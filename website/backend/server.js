const express=require('express')
const cors=require('cors');
const axios = require("axios");

const PORT=5000;
const app=express();
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json());


app.post("/run", async (req, res) => {
  try {
    const { code, languageId } = req.body;

    const response = await axios.post(
      "https://ce.judge0.com/submissions?wait=true",
      {
        source_code: code,
        language_id: languageId
      },
      {
        headers: {
    "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
   console.error("JUDGE0 ERROR:", error.response?.data || error.message);
    res.status(500).json({
    error: error.response?.data || error.message
  });
  }
});

app.listen(PORT,()=>{
    console.log(`server runs at port ${PORT}`)
})
