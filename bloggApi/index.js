const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require('./routes/categories')
const multer = require('multer')

dotenv.config();
app.use(express.json());

app.use('/benoy', (req, res) => {
    res.send('Hello World');
})



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to MongoDB successfully"))
    .catch(err => console.log(err));



//storing image files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, 'hamstrings.jpeg');

    },
});
const upload = multer({ storage: storage })

//uploading image file without creating router directly in index.js
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded');
});

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use('/api/categories', categoryRoute);



app.listen('5000', () => {
    console.log('listening on port 5000');
})

