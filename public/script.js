
document.getElementById("next").addEventListener('click', function (e){
	if (document.getElementById("male").checked){

			e.preventDefault();
		
		var test = document.createElement("div");
		
		test.innerHTML = '<section> <p>Coucou</p> <input type="text" placeholder="Nom"  id="nom"/> <input type="text" placeholder="Prénom" id="prenom"/> </section> <section> <p>Description de loeuvre</p> <textarea placeholder="Décrivez précisément loeuvre dont vous souhaitez céder les droits dauteurs." id="description"></textarea> </section> <section> <p>Importez le fichier de loeuvre<i id ="option"> (optionnel)</i></p> <input type="file" id="f2"> </section> <section id="prixcom"> <div class="form-group"> <p><b>Prix et commission<b/></p> <input type="number" placeholder="Prix en euros" id="prix" min="0" required data-pristine-required-message="Il faut que vous donniez un prix." data-pristine-min-message="Il faut que vous indiquiez un chiffre positif de commission" class="form-control" /> <input type="number" placeholder="% commission sur 2ndes ventes" id="royalties" min="0" max="100"  required  data-pristine-required-message="Il faut que vous indiquiez un % de commission" data-pristine-max-message="Le chiffre doit être inférieur ou égal à 100." data-pristine-min-message="Le chiffre doit être égal ou supérieur à 0." class="form-control"  /> </div> </section>'

		var toast = document.createElement("div");

		toast.innerHTML='<object type="text/html" data="mint.html" ></object>';
		
		document.getElementById("apartir").innerHTML = ''
		
	}
})