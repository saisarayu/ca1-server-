const express = require('express')
const port = 3001
const app = express();
const cors= require('cors')

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
res.send('sarayu')
})

app.listen(port, ()=>{
    console.log(`server connected successfully ${port}`)
})

app.post('/info',(req,res)=>{
  try{
  const {username,email,password,dateofbirth}=req.body
  if(!username)
  return res.status(400).json({message:"username can not be empty"})
   if(!email)
    return res.status(400).json({message:"email cannot be empty"})
if(len<8 || len>16)
  return res.status(400).json({message:"password length shouble be greater than 8 or less than 16 "})
return res.status(200).json({message:"sucess"})
}
catch(e){
  console.log(e.message)
}
})
