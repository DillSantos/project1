function fiboPares(numerosPares) {

    let fibonacci = new Array(0, 1)
    for (let i = 2; i < 50; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
        while (fibonacci[i] % 2 == 0) {
            console.log(fibonacci[i])
            break
        }
    }

}
fiboPares()