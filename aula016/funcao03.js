//recursive function

function factorial(num) {
    if(num == 1) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
    /*O que acontece quando você chama factorial(5):
        5 * factorial(4)

        5 * (4 * factorial(3))

        5 * (4 * (3 * factorial(2)))

        5 * (4 * (3 * (2 * factorial(1))))

        5 * (4 * (3 * (2 * 1)))

    Resultado: 120 */
}

console.log(factorial(5))