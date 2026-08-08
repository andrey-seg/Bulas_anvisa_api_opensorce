async function serchForMedication(medicationName:string): Promise<any> {

    const anvisaUrl = `https://consultas.anvisa.gov.br/api/consulta/bulario?column=&count=10&filter[nomeProduto]=${encodeURIComponent(medicationName)}&order=asc&page=1`;

    const response = await fetch(anvisaUrl, {
        headers: {
            'Authorization': 'Guest',
            'Accept': 'application/json, text/plain, */*',
            'Referer': 'https://consultas.anvisa.gov.br/',
            'User-Agent': 'Mozilla/5.0 ...'
        }
    });

    if(!response.ok){
        throw new Error(`Erro in serch for medication: ${response.status}`)
    }

    const responseData = await response.json();
    return responseData;
};

export default serchForMedication;