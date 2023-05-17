const {ping} = require("../../application/controllers/pingController");
const {findOneController} = require("../../application/controllers/pokeneasController");
const {showPokenea} = require("../../application/controllers/pokeneasController");

function routes(app){    
    app.get('/ping',ping);
    app.get('/api/v1/pokenea',findOneController)
    app.get('/api/v1/show/pokenea',showPokenea)
}

module.exports = {
     routes,
};