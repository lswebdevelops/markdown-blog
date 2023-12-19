const express = require('express')
const app = express() ;
const articleRouter = require('./routes/articles')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/',(req, res, next )=> {
    const articles = [{
        title: "Test Article",
        createdAt: new Date(),
        description: "Test description"
    },
    {
        title: "Test Article2",
        createdAt: new Date(),
        description: "Test description2"
    }
]
    res.render('index', { articles : articles })
})
app.listen(3000)
