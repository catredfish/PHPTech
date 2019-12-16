function EnvoyerRappelGenerique(){

    // Montre une animation de chargement
    var result = "<div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";
    $("#modal").empty();
    $("#modal").append("<div class=\"modal-backdrop fade in\"></div>" + result);

  var CSRF_TOKEN = $('[name=_token]').val();
  $.ajax({
        type: 'POST',
        url: "/EnvoyerRappelGenerique",
        data: {
          _token: CSRF_TOKEN
        },
        success: function (result) {
          if(result == "success"){
             window.location = "/GestionAteliers?campusSelectionne=" + $("#inputNumeroCampusSelectionne").val() + "&dateSelectionnee=" + $("#inputDateSelectionnee").val() + "&ongletSelectionne=" + $("#inputNumeroOngletSelectionne").val();
          }
        },
        error: function (result){
            window.location = "/VoirMessageErreur";
        }
    });
}
