const { response } = require('express')
const express = require('express')
const consing = require('consign')


module.exports = () => {
    const app = express()   

    consing()
     .include('controllers')
     .into(app)

     return app
}
