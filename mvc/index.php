<?php
//date.timezone == America/Argentina/Cordoba;
// Obtenemos el controlador que queremos cargar
$nombre_controlador = $_REQUEST['_c_'];

// Creamos el controlador
require_once "ctrlrs/$nombre_controlador.ctrlr";
require_once "ctrlrs/servicios.ctrlr";
require_once "ctrlrs/data.base.ctrlr";
require_once "ctrlrs/session.ctrlr";
$session = new SessionCtrlr();
$session->Index();

//if ($_POST["login"] != "1") {
//    $session->ValidateSession();
//}

//Pasa el nombre del controlador a una frase con espacios
$nombre_controlador = str_replace("_", " ", $nombre_controlador);
//Convierte a maysculas la primera letra de cada palabra
$nombre_clase_controlador .= str_replace(" ", "", ucwords(" " . $nombre_controlador)) . "Ctrlr";

$_controller = new $nombre_clase_controlador;

// ***************************************************************
// Obtenemos la accion a ejecutar
$_accion = isset($_REQUEST['_a_']) ? $_REQUEST['_a_'] : 'index';

//Pasa el nombre de accion a una frase con espacios
$nombre_accion = str_replace("_", " ", $_accion);
//Convierte a maysculas la primera letra de cada palabra
$nombre_metodo_accion .= str_replace(" ", "", ucwords(" $nombre_accion"));

// Llama la accion
$_controller->$nombre_metodo_accion();
?>
