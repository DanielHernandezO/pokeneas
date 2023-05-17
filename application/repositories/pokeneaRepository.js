const {Pokenea} = require('../entities/pokenea')
const faker  = require('faker');

const fakeData = [];

const images = ["https://storage.googleapis.com/pokeneass-storage/Ninjago.png","https://storage.googleapis.com/pokeneass-storage/background.jpg",
                "https://storage.googleapis.com/pokeneass-storage/superheros.jpeg","https://storage.googleapis.com/pokeneass-storage/item.jpg"]
for(let i = 0;i<10;i++){
    const number = Math.floor(Math.random() * images.length);
    const pokenea = new Pokenea(faker.datatype.uuid(),
                                faker.name.firstName(),
                                faker.datatype.number(),
                                faker.random.words(),
                                images[number],
                                faker.lorem.sentence());
    fakeData.push(pokenea);
}

function findOne(){
    const number = Math.floor(Math.random() * 10)
    return fakeData[number]
}

module.exports = {
    findOne,
}