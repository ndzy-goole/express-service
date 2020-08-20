import * as express from 'express';
import moment from 'moment';

const infoUtils = express.Router();
infoUtils.use(function (req, res, next) {
  console.log(
    `${moment(new Date()).format('YYYY-MM-DD, HH:mm:ss')}-----${
      req.path
    }-------${req.method}`
  );
  next();
});

export default infoUtils;
