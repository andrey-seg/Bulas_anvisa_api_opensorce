import puppeteerExtraImport from "puppeteer-extra";
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

const puppeteerExtra = puppeteerExtraImport as any;
let browserInstance: any = null;

async function getBrowser() {
    if(!browserInstance){
        browserInstance = await puppeteerExtra.launch();
    };
    return browserInstance;
}

puppeteerExtra.use(StealthPlugin());

export async function serchForMedication(medicationName:string): Promise<any> {
    console.log('Nome recebido:', medicationName);

    const browser = await getBrowser();
    const page = await browser.newPage();
     
    await page.goto('https://consultas.anvisa.gov.br/', { waitUntil: 'networkidle0'});
    
    const result = await page.evaluate(async (name: string) => {
        const url = `https://consultas.anvisa.gov.br/api/consulta/bulario?column=&count=10&filter[nomeProduto]=${encodeURIComponent(name)}&order=asc&page=1`;

        const response = await fetch(url, {
            headers: {
                'Authorization': 'Guest',
                'Accept': 'application/json, text/plain, */*'
            }
        });

        const text = await response.text();
        return { status: response.status, body: text.slice(0, 300) };
    }, medicationName);
    console.log(result)

    await page.close();

    return result;
};