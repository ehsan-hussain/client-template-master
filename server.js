
const express = require('express');
const mongoose = require('mongoose');
const app = express()

app.use(express.json())


const postRouter = require ('./routes/postes');
app.use('/post' , verifytoken, postRouter);

app.lisen(process.env.PORT || 5000);

mongoose.connect( `mongodb+srv://ehsan:husby16430@cluster0.ayyilrp.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlPareser: true, useUnifiedTopology: true},
() => {
    console.log(' DB connected');
}

)

app.listen(process.env.PORT || 5000);