const mongoose = require('mongoose');

const connectDb = async (url) => {
    return await mongoose.connect(url)
    .then(res => {
        if(process.env.MODE === "development") {
            console.log(`local Mongodb connected successfully`);
        }
        if(process.env.MODE === "production") {
            console.log(`cloud Mongodb connected successfully`);
        }
        
    }).catch(err => console.log(err))
}

module.exports = connectDb;