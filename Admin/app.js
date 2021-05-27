const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const http = require('http');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const port =  '3000';
app.set('port', port);
const server = http.createServer(app);
// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).render('pages/404');
});

server.listen(port, ()=>{
    console.log('working !!')
});
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
}
    function onListening() {
        const addr = server.address();
        //const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
        //console.log(`Listening on 3000`);
      }
server.on('error', onError);
server.on('listening', onListening);


module.exports = app;
