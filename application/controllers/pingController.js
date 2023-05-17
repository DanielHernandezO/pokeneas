const ping = (req,res,next) => {
    return res.json("pong");
}

module.exports ={
    ping,
};