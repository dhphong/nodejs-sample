'user strict';
const db = require('./db.js')

const ToDo = (todo) => {
    this.name = todo.name;
    this.expired = todo.expired;
};

ToDo.getAll = async (limit) => {
    // db.query("SELECT * FROM todo", function (err, res) {

    //     if (err) {
    //         console.log("error: ", err);
    //     }
    //     else {
    //         console.log('tasks : ', res);
    //     }
    // });
    try {
        let res = await db.query(`SELECT * FROM todo LIMIT ${limit}`);
        console.log(res);
        return res;
    } catch (err) {
        throw new ServerError({
            status: 500,
            error: 'db error'
        });
    }
};

module.exports = ToDo;