const mongoose = require('mongoose');
// const connection = "mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority";
const connection = "mongodb+srv://thp_adm:admthp@cluster0.q8dcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true,
                              useUnifiedTopology: true,
                              useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

    //mongodb+srv://thp_adm:<password>@cluster0.q8dcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority