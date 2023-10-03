const index = (req, res)=>{
    res.end("This is home page");
}

const store = (req, res)=>{
    res.en('This is store page')
}

module.exports = {index, store}