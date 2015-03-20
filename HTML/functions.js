function focus_Personagem(){
				$(".imagem").css({opacity:0.8});
				$(".personagem").on("mouseover","img", function(){
					$(".imagem").css({opacity:0.75});
					$(this).css({opacity:1});
				});
				$(".personagem").on("mouseout","img", function(){
					$(".imagem").css({opacity:0.8});
				});
			}