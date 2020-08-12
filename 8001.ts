import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db'

const app = express();

app.set('port', process.env.PORT || 8001);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use(
  cors({
    origin: '*', //允许访问
    optionsSuccessStatus: 200
  })
);

app.get("/getNote",(req,res)=>{
  db.find({ label: 'note' }, (err:any, doc:any) => {
    if(err) console.log(err)
    if (doc.length === 0) {
      db.insert([{ label: 'note', value: '' }], (err_, doc_) => {});
      res.send({
        note: "",
      })
    } else {
      res.send({
        note: doc.value,
      })
    }
  })
})

app.get("/getNote",(req,res)=>{
  db.find({ label: 'note' }, (err:any, doc:any) => {
    if(err) console.log(err)
    if (doc.length === 0) {
      db.insert([{ label: 'note', value: '' }], (err_, doc_) => {});
      res.send({
        note: "",
      })
    } else {
      res.send({
        note: doc.value,
      })
    }
  })
})

app.use((req, res) => {
  res.status(404).send('Not found')
})

app.listen(app.get('port'));
