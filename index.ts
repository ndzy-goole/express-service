// import * as path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.set('port', process.env.PORT || 8888);

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

app.use('/a', function (req, res) {
  res.send({ ok: '111' });
});

app.listen(app.get('port'), () => {
  console.log(` app listening on port ${app.get('port')}!`);
});
