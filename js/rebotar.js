const pelotas = document.querySelectorAll('.encabezado__imagen')
function rebotar(pelota) {     
    
    
    function generarValores() {
        let nrx = Math.floor(Math.random() * 250);
        let nry = Math.floor(Math.random() * 80);
        let nrx1 = Math.floor(Math.random() * 250);
        let nry1 = Math.floor(Math.random() * 80);
        let nrx2 = Math.floor(Math.random() * 250);
        let nry2 = Math.floor(Math.random() * 80);
        console.log(nrx, nry);
        
        const keyframes = [
            { transform: `translate(0, 0)` },
            { transform: `translate(${nrx}px, ${nry}px)` },
            { transform: `translate(${nrx1}px, ${nry1}px)` },
            { transform: `translate(${nrx2}px, ${nry2}px)` },
            { transform: `translate(0, 0)` }
        ];
        
        const options = {
            duration: 9000,
            iterations: 1,

        };

        return { keyframes, options };
    }

    function animar() {
        let { keyframes, options } = generarValores();
        let animacion = pelota.animate(keyframes, options);
        
        animacion.onfinish = animar; // Llama a animar de nuevo cuando termine
    }

    animar(); }

rebotar(pelotas[0])  
rebotar(pelotas[1])
rebotar(pelotas[2])
rebotar(pelotas[3])
rebotar(pelotas[4])
rebotar(pelotas[5])
console.log(pelotas[0])