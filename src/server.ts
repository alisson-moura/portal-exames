import express from 'express'
import {resolve} from 'path'

const app = express();

// set the view engine to ejs - use res.render to load up an ejs view file
app.set('view engine', 'ejs');
app.set('views', resolve(__dirname, '..', 'views'))

// set static files (assets, css, js, etc...)
app.use(express.static(resolve(__dirname, '..', 'public')))

app.listen(80);
console.log('Server is listening on port 80');