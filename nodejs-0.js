const arguments = process.argv.slice(2);

function alanHesapla(R){
    console.log(Math.PI*(R*R));
}

alanHesapla((arguments[0]*1))