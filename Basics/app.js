const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./helpers/path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin',adminRouter.routes)
app.use('/',shopRouter)

app.use((req, res, next)=>{
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000)