let findPerson=(first,last)=>{
    let litere="qwertyuiopasdfghjklzxcvbnm";
    let cnt=0;
    for(let i=0;i<people.length;i++)
        if((people[i].firstName===first && people[i].lastName===last))
            // || (people[i].firstName.toLocaleLowerCase===first.toLocaleLowerCase && people[i].lastName.toLocaleLowerCase===last.toLocaleLowerCase)
            // || (people[i].firstName.toLocaleLowerCase===first.toLocaleLowerCase && people[i].lastName===last)
            // ||  (people[i].firstName===first && people[i].lastName.toLocaleLowerCase===last.toLocaleLowerCase))
            return people[i];
        else{
            cnt++;
        }

            // for(let i=0;i<people.length;i++){
            //     for(let j=0;j<people[i].firstName.length;i++)
            //         if(litere.includes(people[i].firstName[j])===false)
            //             return "nope";
            //     for(let j=0;j<people[i].lastName.length;i++)
            //         if(litere.includes(people[i].lastName[j])===false)
            //             return "nope";
                
            // }
            if(cnt===people.length)
                return false;
            

            
        }

let addAvocat=(avocats, pers)=>{
    let str=`<section class="avocat om">
    <p>${pers.firstName}</p>
    <p>${pers.lastName}</p>
    <p>${pers.sediu}</p>
    </section>`;
    avocats.push(str);
}

let addMedic=(medics, pers)=>{
    let str=`<section class="medic om">
    <p>${pers.firstName}</p>
    <p>${pers.lastName}</p>
    <p>${pers.sediu}</p>
    </section>`;
    medics.push(str);
}

let arrayToString=(arr)=>{
    let txt="";
    for(let i=0;i<arr.length;i++)
        txt+=arr[i];

    return txt;
}


