
//Retorna a string resposta

function answerFunc(npc, answer){

	return text[npc].answer[answer][0];

}

//Retorna a string fala

function speachFunc(npc, speach){

	return text[npc].speach[speach][0];
}

//Retorna a lista de itens

/*function list(){

	$(".item").remove();

	for(prop in avatar){
		if(avatar[prop] === true){
			$("table.list").append('<tr class="item"><td>'+prop+'</td></tr>');
		}
	}
}*/


//Implementa o diálogo entre npc e personagem

function dialog(npc, x){

	var speach = text[npc].speach;
	var answer = text[npc].answer;

	//Criando a tag de fala
	$('div.speach').append('<p class="dialog">'+speachFunc(npc, x)+'</p>');


	//Criando os botões de resposta
	for(var i=0; i<speach[x][1].length; i++){
		
		$('table.answer').append('<tr class="dialog"><td><button data-id="'+speach[x][1][i]+'">'+answerFunc(npc, speach[x][1][i])+'</button></td></tr>');
	
	}
	
}

function action(option, person){

	var action = {

		exit: function(person){

			if(person!=0){
				$("#chat").hide();
			}

			$(".person").show();
		},

		map: function(person){

			if(person===1 || person===2){
				locations[1]=true;
				console.log(locations[1]);
			}

		},

		give: function(person){

			if(person===1){
				itens[1]=false;
			}


		},

		close: function(person){

			avatar.first[person] = 2;

		}



	}

	if(action.hasOwnProperty(option)){
		action[option](person);
	}


}

