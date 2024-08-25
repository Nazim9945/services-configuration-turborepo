import express from 'express'
import { name, value } from '@repo/common/config'
const app=express()
console.log("we made it to backend sharing file: ",value,name)
app.get('/',(req,res)=>{
res.json({
    mag:"aa gya bhai inside express"
})
})
app.listen(3005)