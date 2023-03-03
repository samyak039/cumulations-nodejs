const axios = require('axios');

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    for (let user of response.data) {
      // console.log('=> ~ axios.get ~ user:', user);
    }
  })
  .catch(console.error);

axios
  .post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      title: 'Foo',
      body: 'Bar',
      userId: 1,
    },
    { headers: { 'Content-Type': 'application/json' } }
  )
  .then((response) => {
    console.log(
      '=> ~ JSON.stringify ~ response:',
      response.status,
      response.statusText,
      response.data
    );
  })
  .catch(console.error);
