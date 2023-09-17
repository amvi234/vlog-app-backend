import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-pgjbpbz-shard-00-00.ekqqr7x.mongodb.net:27017,ac-pgjbpbz-shard-00-01.ekqqr7x.mongodb.net:27017,ac-pgjbpbz-shard-00-02.ekqqr7x.mongodb.net:27017/?ssl=true&replicaSet=atlas-bfvynl-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;