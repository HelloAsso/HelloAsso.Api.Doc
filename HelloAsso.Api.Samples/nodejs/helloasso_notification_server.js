/*

  Small node.js sample to build a server read to receive API notification 

*/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// Entry point of webserver
app.get('/', (req, res) => {
    res.send('I\'m alive and waiting post request on /campaigns, /payments')
})

// This url will be called when a campaign is created/updated
// use setTimeout to answer as fast as possible
app.post('/campaigns', (req, res) => {
    setTimeout(() => {
        manageCampaignUpdate(req.body)
    }, 0)

    console.log('POST on /campaigns receive');
    res.send("POST on /campaigns receive")
})

// This url will be called when new payment validated
// use setTimeout to answer as fast as possible
app.post('/payments', (req, res) => {
    setTimeout(() => {
        manageNewPayment(req.body)
    }, 0)

    console.log('POST on /payments receive');
    res.send("POST on /payments receive")
})

app.listen(3000, () => {
    console.log('Your HelloAsso notification receiver is ready !')
})

// Your implementation here
var manageCampaignUpdate = (params) => {
    console.log('Here all parameter you can use :')
    console.log('id : ' + params.id)
    console.log('date : ' + params.date)
    console.log('url : ' + params.url)
    console.log('type : ' + params.type)
    console.log('notification_type : ' + params.notification_type)
}

var manageNewPayment = (params) => {
    console.log('Here all parameter you can use :')
    console.log('id : ' + params.id)
    console.log('date : ' + params.date)
    console.log('amount : ' + params.amount)
    console.log('url : ' + params.url)
    console.log('payer_first_name : ' + params.payer_first_name)
    console.log('payer_last_name : ' + params.payer_last_name)
    console.log('url_receipt : ' + params.url_receipt)
    console.log('url_tax_receipt : ' + params.url_tax_receipt)
}

