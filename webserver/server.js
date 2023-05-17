function startServer(app,port){
    app.listen(port, ()=>{
        console.log(`Example app listening on port ${port}`);
    });
}

module.exports = {
    startServer,
};