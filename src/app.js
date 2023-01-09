import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

//settings
app.set('port', process.env.PORT || 3001);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(helmet());


//routes 
app.use('/v1', require('./routes/index'));

export default app;
