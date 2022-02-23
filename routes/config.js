var index = require('./index')
var blog = require('./blog')
var user = require('./users')
const { model } = require('mongoose')

module.exports = app=>{
    app.use('/',index)
    app.use('/blog',blog)
    app.use('/user',user)
}

