var n1 = 6;
var n2 = 10;
//let n3:number = 5;
/*let fmedia = function(nota1:number, nota2:number, nota3:number) :number
{
    return (nota1 + nota2 + nota3)/3
}*/
var fmedia = function (nota1, nota2, nota3) {
    if (nota3 === void 0) { nota3 = 5; }
    return (nota1 + nota2 + nota3) / 3;
};
console.log("a media " + fmedia(n1, n2));
