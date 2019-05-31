$(document).ready(function(){
 
	$(window).scroll(
	function () {//Au scroll dans la fenetre on déclenche la fonction
	if ($(this).scrollTop() > 0) { //si on a défini de plus de 187 px du haut vers le bas
  $('#navigation').removeClass("menu-transparent");
	$('#navigation').addClass("menu-bleu"); //on ajoute la classe "fixgauche" à <div id="gauche">
	} else {
	$('#navigation').removeClass("menu-bleu");
  $('#navigation').addClass("menu-transparent");//sinon on retire la classe "fixgauche" à <div id="gauche">
						}
					}
				);			 
	
  
});