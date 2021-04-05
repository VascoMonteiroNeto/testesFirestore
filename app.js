const cafeList = document.querySelector('#cafe-list');

lista =db.collection('dadosEscola').doc('GO').collection('escolas').where("escola", "!=", false);
console.log(lista.get());
// create element & render
// function renderEstados(doc){
//     let li = document.createElement('li');
//     let estado = document.createElement('span');
//     let municipio = document.createElement('span');

//     li.setAttribute('data-id', doc.id);
//     estado.textContent = doc.data().estado;
//     municipio.textContent = doc.data().municipio;

//     li.appendChild(estado);
//     li.appendChild(municipio);

//     cafeList.appendChild(li);
    

// }

// db.collection('dadosEscola').doc

// db.collection('dadosEscola').get().then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//         renderEstados(doc);
//     })
// })
function retornaVal(){
    v = doc.data().escola;
    return v;            
}

db.collection('dadosEscola').doc('GO').collection('escolas').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            retornaVal(doc);
        })
    })
    
// =================================================

function renderEstados(doc){
        let li = document.createElement('li');
        let estado = document.createElement('span');
        let municipio = document.createElement('span');
    
        li.setAttribute('data-id', doc.id);
        estado.textContent = doc.data().escola;
        municipio.textContent = doc.data().endereco;
    
        li.appendChild(estado);
        li.appendChild(municipio);
    
        cafeList.appendChild(li);


        // li.addEventListener( 'click', function(){
        //     renderEstados()
        //   } );
    }
    
    // db.collection('dadosEscola').doc
    estado='MG';

    db.collection('dadosEscola').doc().collection('escolas').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            renderEstados(doc);
        })
    })



    console.log(v);




// function showall(estado){
//     mensagem =  db.collection('dadosEscola').doc(estado).collection('escolas')
// }
// // var messageRef = db.collection('rooms').doc('roomA')
// //                 .collection('messages').doc('message1');
// var docRef = db.collection("cities").doc("SF");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });


//FUNÇÃO QUE MUDA AUTOMATICAMENTE O MUNICIPIO DE ACORDO COM O ESTADO SELECIONADO
function populateMun(est, mun){
    var est = document.getElementById(est);
    var mun = document.getElementById(mun);

    mun.innerHTML="  ";

    if(est.value =='MG'){
        var optionArray = ["Uberaba|Uberaba"];
    } else
    if(est.value=='GO'){
        console.log(est.value);
        var optionArray = ["Pirenópolis|Pirenópolis"];
    }
    for(var option in optionArray){
        var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		mun.options.add(newOption);
    }
}

// function populateMun(mun, esc){
//     var esc = document.getElementById(esc);
//     var mun = document.getElementById(mun);

//     esc.innerHTML="  ";

//     if(mun.value =='Pirenópolis'){
//         var optionArray = ["Uberaba|Uberaba"];
//     } else
//     if(mun.value=='GO'){
//         console.log(mun.value);
//         var optionArray = ["Pirenópolis|Pirenópolis"];
//     }
//     for(var option in optionArray){
//         var pair = optionArray[option].split("|");
// 		var newOption = document.createElement("option");
// 		newOption.value = pair[0];
// 		newOption.innerHTML = pair[1];
// 		esc.options.add(newOption);
//     }
// }
