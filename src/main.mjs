import Fastify from 'fastify'
import mongoose from 'mongoose';


const fastify = Fastify({
  logger: true
})
mongoose.connect("mongodb+srv://bikash:bikash@cluster0.mob1y.mongodb.net/testdb");



// Declare a route
fastify.get('/', (request, reply)=> {
  reply.send({ hello: 'world' })
})

fastify.get('/query',  (request, reply)=> {    
    reply.send(request.query)
  })

fastify.get('/emps',(request,reply)=>{
  const Employee = mongoose.model('employees',new mongoose.Schema({
    empid: Number,
    name: String,
    age: Number,
    nationality: String
  }));
  
  Employee.find((error,docs)=>{
    if(error){
      reply.send(error);
      return;
    }
    reply.send(docs)

  });
})

const PORT = process.env.SERVER_PORT || 3300;
const HOST = process.env.SERVER_HOST || '127.0.0.1';
// Run the server!
fastify.listen(PORT,HOST ,function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})