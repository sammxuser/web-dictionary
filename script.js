// search word

const searchTerm = 'pop';

// endpoint
const api_url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${searchTerm}`;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1dbe95569cmshde0c9cbb7739d93p1c7bd9jsn9f62a0b7ea30',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
  },
};
