//import fetch from 'node-fetch'; 

const analysisForm = document.querySelector('#send-message');
const descriptionInput = document.querySelector('.description');
const getAnalysisBtn = document.querySelector('.new-analysis');
const responseP = document.querySelector('.response');

const API = 'https://big-five-personality-insights.p.rapidapi.com/api/big5'

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	},
	body: [{"id":"1","language":"en","text":"mensaje"}]
};

async function fetchData(urlAPI, options){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

getAnalysisBtn.addEventListener('click', function (event) {
    event.preventDefault();
    options.body = `[{"id":"1","language":"en","text":"${descriptionInput.value}"}]`;
    (async () => {
        try {
            const analysis = await fetchData(API, options);
            responseP.innerText = JSON.stringify(analysis[0], undefined, 2);
        } catch (error) {
            console.error(error);
        }
    })();
})
