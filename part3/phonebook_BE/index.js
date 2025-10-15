// LIBRARY IMPORTS
const express = require('express');
const morgan = require('morgan');

// VARIABLE DECLARATIONS
const app = express();

let persons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

// APP.USE DECLARATIONS

// Express JSON Parser
app.use(express.json());

// Morgan config

// Custom req.body token
morgan.token('post-body', function (req) { return req.method === "POST" ? JSON.stringify(req.body) : " " });

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-body'));

// HELPER FUNCTIONS

const genId = (len) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// GET REQUESTS

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/info/', (request, response) => {
  response.send(`
    <div>    
      <p>Phonebook has info for ${persons.length} </p>
      <p>${Date()}</p>
    </div>
  `);
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const person = persons.find(person => person.id === id);
  
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

// DELETE REQUEST

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  persons = persons.filter(person => person.id !== id);

  response.status(204).end();
})

// POST REQUEST

app.post('/api/persons/', (request, response) => {
  const body = request.body;
  const name = persons.find((person) => person.name === body.name); 

  if (!body.name) {
    return response.status(400).json({
      error: 'Name missing'
    });
  } else if (!body.number) {
    return response.status(400).json({
      error: 'Phone number missing'
    })
  } else if (name) {
    return response.status(400).json({
      error: 'name must be unique'
    });
  }

  const person = {
    id: genId(6),
    name: body.name,
    number: body.number
  };

  persons = persons.concat(person);
  
  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
