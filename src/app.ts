//Deixar importação de dependencias npm aqui.
import express from 'express';
import type { Request, Response} from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk'

//deixar importação de itens node aqui.
import { expectFailure } from 'node:test';
import { error } from 'node:console';

//Deixar importação de funções de aquivos aqui.
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

   try{const name = req.query.name as string;
    //buscar resultado em anvisa.ts
   const result = await serchForMedication(name);
    //devolução da resposta em formato json.
   res.json(result);} 
    
    catch(error){
        console.log(chalk.red(`Erro => ${error}`))
        res.status(500).json({erro: `Falha ao buscar medicamento`})
    };
});

app.listen(PORT, () => {
    console.log(chalk.green.bgBlack.italic(` Server running on port => ${PORT} `))
});

export default app;