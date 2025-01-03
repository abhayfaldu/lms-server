import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

// create server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
