let fibonaci = [0, 1]
for (i = 2; i <= 20; i++){
    fibonaci[i] = fibonaci[i-2] + fibonaci[i-1]
}
console.log(fibonaci)