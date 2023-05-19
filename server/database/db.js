import mongoose from 'mongoose';


export default async function Connection(username, password){
    const URL=`mongodb+srv://${username}:${password}@ecommerce-web.swcrdjo.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true , useNewUrlParser: true });
        console.log("database connection established");
    } catch (error) {
        console.log("eroor while connecting to server"); 
    }

}