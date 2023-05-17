const {findOne} = require("../repositories/pokeneaRepository");


function findOneUseCase(){
    return findOne() ;
}

module.exports = {
    findOneUseCase,
}