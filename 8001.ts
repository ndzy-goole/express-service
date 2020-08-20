import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db';
import route from './route';

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

app.use('/', route.utils.infoUtils);

app.get('/getNote', (req, res) => {
  db.find({ label: 'note' }, (err: any, doc: any) => {
    if (err) console.log(err);
    if (doc.length === 0) {
      db.insert({ label: 'note', value: '' }, (err_, doc_) => {});
      res.send({
        msg: 'ok',
        note: ''
      });
    } else {
      res.send({
        msg: 'ok',
        note: doc[0].value
      });
    }
  });
});

app.post('/updateNote', (req, res) => {
  const note = req.body.note;

  db.update({ label: 'note' }, { $set: { value: note } }, {}, () => {});
  res.send({
    msg: 'ok'
  });
});

app.listen(app.get('port'));
