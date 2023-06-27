// Carne = 400gr por pessoa / + de 6 horas = 650gr
// Cerveja = 1200ml por pessoa / + 6 horas = 2000ml
// Refrigerante/água = 1000ml por pessoa / + 6 horas = 1500ml

// Crianças valem por 0,5


function calcular() {
    let adult = document.querySelector('#adult')
    let child = document.querySelector('#child')
    let hours = document.querySelector('#hours')
    let res = document.querySelector('#res')
    
    if (adult.value.length == 0 || child.value.length == 0 || hours.value.length == 0 ) {
        window.alert('[Error] Por favor, preencha os campos abaixo.')
    } else {
        let adt = Number(adult.value)
        let ch = Number(child.value)
        let hrs = Number(hours.value)

        if (hrs < 6) {
            let meat = (adt + (ch / 2)) * 400
            let beer = adt * 1200
            let water = (adt + (ch / 2)) * 1000
            res.innerHTML = `<p>${meat/1000} kg di Carne</p> 
            <p>${Math.ceil(beer/330)} Lattine di Birra</p> 
            <p>${Math.ceil(water/2000)} Bottiglie di Bibite da 2 litri</p>`
        }

        if (hrs >= 6) {
            let meat = (adt + (ch / 2)) * 650
            let beer = adt * 2000
            let water = (adt + (ch / 2)) * 1500
            res.innerHTML = `<p>${meat/1000} kg di Carne</p> 
            <p>${Math.ceil(beer/330)} Lattine di Birra</p> 
            <p>${Math.ceil(water/2000)} Bottiglie di Bibite da 2 litri</p>`
        }

    }
}