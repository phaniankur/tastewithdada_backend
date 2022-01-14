const express = require('express')
const { google } = require("googleapis")

const router = express.Router()

console.log('Daysale hit')

router.post('/daily', async(req,res)=>{

    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    })

    //create client instancce
    const client = await auth.getClient();

    //instance of google sheet api

    const googleSheets = google.sheets({ version: "v4", auth: client });


    const spreadsheetId = "1fXK7l-FNlxNZuHIPIRkfZNCQeXmKIiWt11BJeeOUWyM"

    // //get metadata
    // const metaData = await googleSheets.spreadsheets.get({
    //     auth,
    //     spreadsheetId,
    // })

    // //Read rows FROM sheet

    // const getRows = await googleSheets.spreadsheets.values.get({
    //     auth,
    //     spreadsheetId,
    //     range: "Subs!A:B"
    // })

    //Write rows TO sheet
    const { month, openDate, gasUseDate, gasPrice, electricity, Firoz, Sanjeeb, chickenPrice, chickenInKG, coal, dailyExpense, dailySale } = req.body;
    let d = new Date();
    let year = d.getFullYear();
    const sheetName = month + year;
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: `${sheetName}!A:L`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [openDate, gasUseDate, gasPrice, electricity, Firoz, Sanjeeb, chickenPrice, chickenInKG, coal, dailyExpense, dailySale]
            ],

        }
    })
    // await googleSheets.spreadsheets.values.batchUpdate({
    //     auth,
    //     spreadsheetId,
    //     // range: `${month}!B:M`,
    //     resource: {
    //       valueInputOption: "USER_ENTERED",
    //         data: [
    //           {
    //             range: 'test1!B:B',
    //             values: [[openDate]]
    //           },
    //           {
    //             range: 'test1!H:H',
    //             values: [[chickenPrice]]
    //           },
    //           {
    //             range: 'test1!J:J',
    //             values: [[dailyExpense]]
    //           },
    //           {
    //             range: 'test1!K:K',
    //             values: [[dailySale]]
    //           },
    //             // [gasUseDate, gasPrice, electricity, Firoz, Sanjeeb, chickenPrice, chickenInKG, dailyExpense, dailySale]
    //         ],

    //     }
    // })

    res.send('Day Sale Saved')
})

router.post('/createMonth', async (req, res)=>{

    const auth = new google.auth.GoogleAuth({
         keyFile: "credentials.json",
         scopes: "https://www.googleapis.com/auth/spreadsheets",
    })

    //create client instancce
   const client = await auth.getClient();
   const spreadsheetId = "1fXK7l-FNlxNZuHIPIRkfZNCQeXmKIiWt11BJeeOUWyM"
   const {month} = req.body;

//     //instance of google sheet api

  const googleSheets = google.sheets({ version: "v4", auth: client });

  await googleSheets.spreadsheets.batchUpdate({
    auth,
    spreadsheetId,
    requestBody: {
        requests: [{
          addSheet: {
            properties: {
              title: month,
            }
          }
        }]
      }
})
res.send('New Sheet Created')
})

// router.post('/', async(req, res) => {
//     const contacts = new Contact({
//         name: req.body.name,
//         tech: req.body.tech,
//         sub: req.body.sub
//     })
//     try{
//        const data = await contacts.save()
//        res.json(data)
//     }catch(err){
//         res.send(err)
//     }
// })

module.exports = router