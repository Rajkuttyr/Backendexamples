function logReqResonConsole(req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
   
    next();
}
function logReqResonConsoleForRequestMethod(methodName){
    return function(req,res,next){
        if(req.method === methodName){
            console.log(`Req :${req.method} :${req.path}`);
            next();

        }
                

    }
}
module.exports = {logReqResonConsole,
    logReqResonConsoleForRequestMethod
}
