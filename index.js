var http = require('http')

var server = http.createServer(function(req, res){
    const words = [  
        {
            "id": 1,
            "motFrançais": "manger",
            "motAnglais": "to eat",
            "defAnglais": "come and eat",
            "defFrançais": "action de se nourir"
        },
        {
            "id": 2,
            "motFrançais": "courir",
            "motAnglais": "to run",
            "defAnglais": "come  and run",
            "defFrançais": "action de filer"
        }
    ]

    var getInformation = ""
    var getWord = ""
    var getLanguage = ""
    var dataResponse = ""
     req.on("data", function(chunk){
       getInformation += chunk
       getWord = JSON.parse(getInformation).mot
       getLanguage = JSON.parse(getInformation).langue

       if(getLanguage == "français"){
        dataResponse = words.filter(function(item) {
            return item.motFrançais == getWord
        })
       }else{
        dataResponse = words.filter(function(item) {
            return item.motAnglais == getWord
        })
       }
        })
     /*        req.on('end', () => {
              const requestData = JSON.parse(data);
              const { getWord } = requestData;
        
              const translation = words[getWord.toLowerCase()] || 'Traduction non trouvée.';
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ translation }));
            });
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Endpoint non trouvé');
          }
    }) */ 

    req.on("end", function(){
        if(dataResponse.length == 0){
            res.end(JSON.stringify("Ce mot n'existe pas!"))
        }else{
            if(getLanguage == "français"){
                res.end(JSON.stringify(dataResponse[0].defAnglais))
            }else{
                res.end(JSON.stringify(dataResponse[0].defFrançais)) 
            }
        }
    }) 

})

server.listen(8000, function (){
    console.log("Server is running at 8000")
})