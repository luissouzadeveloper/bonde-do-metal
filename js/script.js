// Pegando a hora do sistema e dando alerta!
let agora = new Date();
let hora = agora.getHours();
let min = agora.getMinutes();
alert(`Agora são exatamente ${hora} horas e ${min} minutos`)

if (hora > 6 && hora < 12) {
    alert('Olá caro(a) leitor! Bom dia');
} else
    if (hora < 18) {
        alert('Olá caro(a) leitor! Boa tarde')
    } else
        if (hora < 23) {
            alert('Olá caro(a) leitor! Boa noite');
        }


