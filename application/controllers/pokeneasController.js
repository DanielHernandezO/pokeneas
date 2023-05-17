const {findOneUseCase} = require("../use_cases/findOne");
const os = require("os")
const {Pokenea} = require('../entities/pokenea')

const findOneController = (req,res,next) => {
    var pockenea = findOneUseCase();
    return res.json(pockenea);
}

const showPokenea = (req,res,next) => {
    const pokenea = findOneUseCase();
    const phrase = pokenea.phrase;
    const image = pokenea.image;
    const host = os.hostname();
    return res.render('pokenea',{phrase,image,host});
}

module.exports = {
    findOneController,
    showPokenea,
}