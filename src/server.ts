import { app } from "./app";
import * as dotenv from 'dotenv';

dotenv.config();

app.listen(3333, () => {
    console.log("Server is running in 3333 port.");
})