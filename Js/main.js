const Nota = [ 2, 5, 7, 1, 8, 9, 10]
    for (let i = 0; i < 7; i++) {
        if ( Nota[i] < 4 ) {
            console.log(`Tu Nota es un ${Nota[i]}, tenes que estudiar mas. \n desaprobado`)
        }
            else if ( Nota < 7 ) {
                console.log(`Tu Nota es un ${Nota[i]}, falto mas practica. \n desaprobado`)
            }
                else if ( Nota[i] == 7 ) {
                    console.log('Tu Nota es un 7, esta bien \n aprobado')
                }
                    else if ( Nota[i] > 7 && Nota[i] < 10 ) {
                        console.log(`Tu Nota es un ${Nota[i]}, muy bien hecho!. \n aprobado`)
                    }
                        else {
                            console.log('Tu Nota es un 10, muy sobresaliente. \n aprobado')
                        } 
}