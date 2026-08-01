import express from 'express';
import type { Request, Response} from 'express';
import dotenv from 'dotenv';
import { expectFailure } from 'node:test';
import chalk from 'chalk'
import serchForMedication from './integrations/anvisa.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Forma do express interpretar aquivos json.
app.use(express.json());

//Rota de teste paraconfirmar que servidor está rodando,
app.get('/health', (req: Request, res: Response) => {
    res.json({status: 'ok'});
});

app.get('/medication', async (req: Request, res: Response) => {
   const name = req.query.name;
   
})

app.listen(PORT, () => {
    console.log(chalk.green.bgBlack.italic(` Server running on port => ${PORT} `))
});

export default app;