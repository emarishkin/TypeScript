function strip(x:number | string){
    if(typeof x === 'number'){
        return x.toFixed(1)
    }
    return x.trim()
}

class MyResponse {
    header = 'Response header'
    result = 'Response result'
}
class MyError{
    header = 'Error header'
    massage = 'Error massage'
}
function handle(res:MyResponse | MyError){
    if(res instanceof MyResponse){
        return {
            info:res.header+res.result
        }
    } else{
        return{
            info:res.header+res.massage
        }
    }
}