import express from 'express';
import payload from 'payload';
import cors from 'cors';
import { UploadImageBucket } from './hooks/uploadImage';
import { config } from './config/configEnvs';

require('dotenv').config();
const app = express();
app.use(
  cors({
    origin:"*",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH']
  })
);

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});


const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here
  config.validateConfig();
  const PORT=process.env.PORT
  app.listen(PORT);
}

start();
