import { getBrowser } from "./anvisa.js";

export async function getMedicationOnDetail(idProduto:number): Promise<any> {
    
    const browser = await getBrowser();

    const page = await browser.newPage();

    await page.goto('https://consultas.anvisa.gov.br/', { waitUntil: 'networkidle0' });

    const result = await page.evaluate(async (id: number) => {

        const url = `https://consultas.anvisa.gov.br/api/consulta/bulario/${id}?column=&count=10&order=asc&page=1`;

        const response = await fetch(url, {
            headers: {
                'Authorization': 'Guest',
                'Accept': 'application/json, text/plain, */*'
            }
        });

        return response.json();
    }, idProduto);

    await page.close();

    return result;
}