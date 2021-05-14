// ======== Require framwork ========= \\
require('dotenv').config();

const express = require('express');
const hdbs = require('express-handlebars');
const path  = require('path');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

// ========= App Use and Set ================= \\
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true
}));
app.engine('.hbs',hdbs({
    extname : '.hbs',
    helpers:{
        sum: (a, b ) => a + b
    }
}))

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));




// ====== Require local file ======= \\
const db = require('./config/db/index');
const router = require('./router/main');


// ====== Connect db ======= \\
db.connect();
// ====== Get Route ======= \\
router(app);

app.listen(port, () => console.log(`App listen ${port}`) )


