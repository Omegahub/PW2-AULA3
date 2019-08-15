let comprimento:number = 10;
let largura:number = 10;
let altura:number = 10;

let volume = function(comprimento:number, largura:number, altura:number):number
{
    return(comprimento * largura * altura)
}

console.log(`o volume é ${volume(comprimento,largura,altura)}`)