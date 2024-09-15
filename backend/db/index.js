import mongoose from 'mongoose';
export const  connectDB = async()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log('Database connected');
    }catch(err){
        console.log(err);
    }
}

