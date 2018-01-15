$(function(){
		//Declaração das variáveis auxiliares
		var i=0;
    var selected=0;    
    var tamanho_altura = 48;
    var tamanho_largura = 209;
    var cor_atual = "";    
    var imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
    +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
    
    //O menu de Edição inicializa como Hidden
    $("aside").hide();
    
    //Método para o button Adicionar Botão
    $('#btnAdd').on('click',function(){       
    
    	//Cria um elemento DIV dinamicamente no HTML
      var el=$('<div class="adicionar">').attr({id:i}); 
      
      //Cria um elemento FORM atrelado ao DIV dinamicamente no HTML
      var form=$('<form>').attr({id:'teste', 
      action:'https://pagseguro.uol.com.br/checkout/v2/donation.html', 
      method:'post',
      value:'Dynamic Button',
      //onmouseover: 'alert('+i+')'
      }).appendTo(el);
      
      ////Cria vários elementos de INPUT atrelados ao FORM dinamicamente no HTML
      //~
      var form_input_currency = $('<input/>').attr({type:'hidden', 
      name:'currency', value:'BRL'}).appendTo(form);
      //~
      var form_input_email = $('<input/>').attr({type:'hidden', 
      name:'receiverEmail', 	
      value:'quenixserra@gmail.com'}).appendTo(form);
      //~
      var form_input_iot = $('<input/>').attr({type:'hidden', 
      name:'iot', value:'button'}).appendTo(form);
      //~
      var form_input_image = $('<input/>').attr({type:'image',
      src:'https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/209x48-doar-assina.gif', 
      name:'submit', 
      alt:'Pague com PagSeguro - é rápido, grátis e seguro!',
      }).appendTo(form);
 			
      //Adiciona ao SECTION os elementos criados
			$("section").append(el);
      
      //Increment
      i++;
    });
    
    //OnClick no Botão PagSeguro gerado
    $(document).on('click', '.adicionar', function(){
    	event.preventDefault(); //Evento para quando clicar no botão gerado não ativar o Action
    	$("aside").show(); //Mostra a janela de edição
    	$selected = $(this).attr("id"); //atribui uma variável auxiliar para manipular o DOM
		});
    
    //Fechar a janela de Edição
    $('#btnFechar').on('click', function(){
    	$("aside").hide();
		});
    
    //Apagar um botão PagSeguro criado
    $('#btnRemover').on('click', function(){
    	$("#"+$selected).remove();
      $("aside").hide();
		});
 
 		//Sessão para os eventos de controle de cor do botão PagSeguro
 		$('#verde').on('click', function(){
    	cor_atual = "";      
      imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif"       
    	$("#"+$selected).children("form").children("input").attr("src", imagem_aux);
    });
    //~
    $('#laranja').on('click', function(){
    	cor_atual = "laranja-";
      imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
    	$("#"+$selected).children("form").children("input").attr("src", imagem_aux);
    });
    //~
     $('#preto').on('click', function(){
    	cor_atual = "preto-";
      imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
    	$("#"+$selected).children("form").children("input").attr("src", imagem_aux);
    });
    //~
     $('#cinza').on('click', function(){
    	cor_atual = "cinza-";
      imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
    	$("#"+$selected).children("form").children("input").attr("src", imagem_aux);
    });
    //~
    $('#azul').on('click', function(){
    	cor_atual = "azul-";
      imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
    	$("#"+$selected).children("form").children("input").attr("src", imagem_aux);
    });
    //~
    $('#roxo').on('click', function(){
    	cor_atual = "roxo-";
      imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      +tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
    	$("#"+$selected).children("form").children("input").attr("src", imagem_aux);
    });

    //Controla o tamanho do botão gerado
    $('#tamanho').on('change', function(){
    	var tamanho = $(".tamanho option:selected").text();      
    	if(tamanho == "Pequeno"){
      	tamanho_largura = 94;
        tamanho_altura = 52;
        imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      	+tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
        $("#"+$selected).children("form").children("input").attr("src", imagem_aux);
       }else{
       	tamanho_largura = 209;
        tamanho_altura = 48;
        imagem_aux = "https://stc.pagseguro.uol.com.br/public/img/botoes/doacoes/"
      	+tamanho_largura+"x"+tamanho_altura+"-doar-"+cor_atual+"assina.gif" 
        $("#"+$selected).children("form").children("input").attr("src", imagem_aux);  
       }  
    })
});

//Fim. Created by Leonardo Vasques | quenixserra@gmail.com


    
