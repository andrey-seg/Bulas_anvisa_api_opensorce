import { getBrowser } from "./anvisa.js";

export async function downloadBulaPdf(token: string): Promise<Buffer>{

    const browser = await getBrowser();
    const page = await browser.newPage();

    await page.goto('https://consultas.anvisa.gov.br/', { waitUntil: 'networkidle0' });

    const base64Pdf = await page.evaluate(async (bulaToken: string) => {

        const url = `https://consultas.anvisa.gov.br/api/consulta/medicamentos/arquivo/bula/parecer/${bulaToken}/?Authorization=`;

        const response = await fetch(url, {
            headers: {
                'Authorization': 'Guest',
                'Accept': 'application/pdf'
            }
        });

        const arrayBuffer = await response.arrayBuffer();

        const bytes = new Uint8Array(arrayBuffer);

        let binaryString = '';
        for(let i = 0; i < bytes.length; i++){
            binaryString += String.fromCharCode(bytes[i]!);
        };

        const base64 = btoa(binaryString);

        return base64;
    }, token);

    await page.close();

    const pdfBuffer = Buffer.from(base64Pdf, 'base64');

    return pdfBuffer;
};