function calcular() {
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = document.querySelector('#price').innerHTML;
    document.querySelector('#res_total').innerHTML = cantidad*precio;
    document.querySelector('#res_cant').innerHTML = cantidad;
    document.querySelector('#res_color').style.backgroundColor = color;
}

