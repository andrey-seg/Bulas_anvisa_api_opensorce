
# Bulas ANVISA API (Open Source)

API Open Source para consulta e extração de informações de bulas de medicamentos registradas na ANVISA (Agência Nacional de Vigilância Sanitária).

## Sobre o Projeto

Este projeto fornece uma interface simples e eficiente para consultar dados de medicamentos e obter links ou documentos de bulas diretamente da base de dados da ANVISA. O objetivo principal é facilitar o acesso a dados públicos de saúde para desenvolvedores, pesquisadores e aplicações de terceiros.

## Funcionalidades

* Pesquisa de medicamentos por nome ou termo genérico.
* Obtenção de detalhes técnicos e registro do medicamento.
* Download / Link direto para download de bulas para pacientes e profissionais de saúde.
* Listagem e filtragem de medicamentos por categorias.
* Respostas estruturadas em formato JSON para fácil integração.

## Tecnologias Utilizadas

* Linguagem / Runtime: Node.js / TypeScript
* Framework: Express / FastAPI / Puppeter
* Integração: Web Scraping / Consumo de endpoints públicos da ANVISA

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

* Node.js (versão 16 ou superior) ou Python (3.8 ou superior)
* Git

## Instalação e Execução

1. Clone o repositório:
   git clone [https://github.com/andrey-seg/Bulas_anvisa_api_opensorce.git](https://www.google.com/search?q=https://github.com/andrey-seg/Bulas_anvisa_api_opensorce.git)
2. Acesse o diretório do projeto:
   cd Bulas_anvisa_api_opensorce
3. Instale as dependências:

* Para projetos em Node.js: npm install
* Para projetos em Python: pip install -r requirements.txt

4. Inicie a aplicação:

* Para Node.js: npm start
* Para Python: python main.py

A API estará acessível em http://localhost:3000 (ou na porta configurada).

## Rotas Principais (Endpoints)

* GET / : Verifica o status da API (Health Check)
* GET /pesquisar?nome={nome} : Busca medicamentos pelo nome
* GET /medicamento/{id} : Retorna dados detalhados de um medicamento pelo ID/Processo
* GET /bula/{id} : Retorna o link ou arquivo PDF da bula

## Exemplo de Resposta

{
"sucesso": true,
"dados": [
{
"id": "25351...",
"nomeProduto": "Exemplo",
"razaoSocial": "Laboratório Exemplo S.A.",
"numeroRegistro": "123456789",
"urlBulaPaciente": "https://...",
"urlBulaProfissional": "https://..."
}
]
}

## Como Contribuir

1. Faça um Fork do repositório.
2. Crie uma branch para a sua funcionalidade: git checkout -b feature/nova-funcionalidade
3. Faça commit das suas alterações: git commit -m 'Adiciona nova funcionalidade'
4. Faça Push para a branch: git push origin feature/nova-funcionalidade
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

Desenvolvido por andrey-seg ([https://github.com/andrey-seg](https://www.google.com/search?q=https://github.com/andrey-seg)).
