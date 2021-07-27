const createError = require('http-errors');
const express = require('express');
var mongoose = require('mongoose');
//routes
const userRouter = require('./routes/users');
const newsManagementRouter = require('./routes/newsManagement');
const softwareReviewRouter = require('./routes/softwareReview');
const hardwareReviewRouter = require('./routes/hardwareReview');
const opinionPublishingRouter = require('./routes/opinionPublishing');
const loginRouter = require('./routes/login')

const PORT = process.env.PORT || 3001;


//MongoDB connection
const uri = 'mongodb+srv://simphiwe:simphiwe123@cluster0.tguue.mongodb.net/credential-manager?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
mongoose.connection.on('error', function() {
  console.log('Connection to Mongo established.');
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});
mongoose.connection.once('open', function() {
  console.log("Successfully connected to the database");
})



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

//routes
// app.get('/', (req, res) => {
//     res.send('you reached the server')
// })
app.use('/users', userRouter)
app.use('/news-management', newsManagementRouter)
app.use('/software-review', softwareReviewRouter)
app.use('/hardware-review', hardwareReviewRouter)
app.use('/opinion-publishing', opinionPublishingRouter)
app.use('/login', loginRouter)





app.listen(PORT, () => console.log('listening on port: ' + PORT))