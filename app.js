let buton=document.querySelector('.cazeaza');
let avocati=document.querySelector('.ania');
let medici=document.querySelector('.mioara');
let avcs=[];
let mdcs=[];
let del=`<section class="delimiter om">
<p>Prenume</p>
<p>Nume</p>
<p>Sediu</p>
</section>
</section>`;
avcs.push(del);
mdcs.push(del);


buton.addEventListener('click', ()=>{
    let num=prompt("Introdu numele");
    let pren=prompt("introdu prenumele");

    let pers=findPerson(num,pren);
    console.log(num);
    console.log(pren);
    console.log(pers);
    if(pers===false)
        alert("Persoana nu a fost gasita!");
    // else if(pers==="nope")
    //     alert("numele/prenumele contine caractere ilegale");
    else if(pers.job==="avocat"){
        addAvocat(avcs,pers);
        avocati.innerHTML=arrayToString(avcs);
    }
    else if(pers.job==="medic"){
        addMedic(mdcs,pers);
        medici.innerHTML=arrayToString(mdcs);
    }
    else if(pers.job!=="medic" && pers.job!=="avocat")
        alert("Doar medicii si avocatii au voie in hotelul nostru");


})
