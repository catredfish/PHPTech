<?php

namespace App\Model;

use Illuminate\Support\Facades\DB;
use App\Constantes;
use App\compte;

class InscriptionAtelierViewModel {

    //Propriété
    private $atelier;
    private $listeConferenciers = array();

    //Constructeur
    public function __construct($idAtelier) {
        //Trouve l'atelier correspondant
        $this->atelier = DB::table("ateliers")->where('id','=',$idAtelier)->get()[0];
    }
    //Fonction permettant de retourner une liste d'ateliers
    public function getAtelier(){
        return $this->atelier;
    }
}
