const sql = require("./sql/populate.js");

//select
post_ids = {
    name: "likes",
    columns_list: ['post_id'],
    mult_rows: false
};

x = sql.makeSelect(post_ids.name, post_ids.columns_list);
console.log(x);


con = sql.connection();


sql.query(con, x);

function modSelectFunction2(i) {
    console.log('yyy ' + i);
    i = JSON.parse(JSON.stringify(i));
    console.log( i);
    //z = i;
}

post_ids.columns_list = '*';
x = sql.makeSelect(post_ids.name, post_ids.columns_list);

sql.query(con, x, modSelectFunction2 );

sql.end(con);