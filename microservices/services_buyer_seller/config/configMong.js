const mongoose = require("mongoose");

let uri;
if (process.env.NODE_ENV === 'production') {
    uri = process.env.URI_MONGODB;
} else if (process.env.NODE_ENV === 'development') {
    uri = 'mongodb://localhost:27017/Apa_CariDB';
} else {
    uri = 'mongodb://localhost:27017/Apa_CariDB-test';
}

// const uri = process.env.URI_MONGODB_LOCALHOST || "development";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(uri, options, (err, db) => {
    if (err) {
        console.error(err)
        db.close();
    } else {
        console.log('Apa_CariDB connected');
    }
})