import app from './app';

app.get('/',(request,response) => {
  response.status(200).json({
    status: 'success'
  });
})

app.listen(2000, () => {
  console.log('Listening on port 3000');
})