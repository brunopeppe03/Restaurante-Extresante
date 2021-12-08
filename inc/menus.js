let conn = require('./db');

module.exports = {
    getMenus(){

        return new Promise((resolve, reject)=>{

        conn.query(`
        SELECT * FROM tb menus ORDEM BY title
        
      `
      , (err, results)=>{
    
        if (err) {
          reject(err);
        }
    
       resolve(results);


        });
    
    })

  }

};