function promedio(){
    var ingles=document.calculo.ingles.value;
    var leng=document.calculo.leng.value;
    var mate=document.calculo.mate.value;
    var progra=document.calculo.progra.value;
    /*promedio de notas*/
    var promedio=(parseFloat(ingles)+parseFloat(leng)+parseFloat(mate)+parseFloat(progra))/4;
    document.getElementById('promedio').innerHTML=promedio;
}