<?php
$pdo=new PDO("mysql:dbname=sistema;host=127.0.0.1","root","");

//seleccionar eventos
$accion= (isset($_GET['accion']))?$_GET['accion']:'leer';

switch($accion){
    case 'agregar':
        $sentenciaSQL = $pdo->prepare("INSERT INTO eventos(title,descripcion,color,textColor,start,end) VALUES(:title,:descripcion,:color,:textColor,:start,:end)");

        $respuesta=$sentenciaSQL->execute(array(
            
            "title" =>$_POST['title'],
            "descripcion" => $_POST['descripcion'],
            "color" =>$_POST['color'],
            "textColor" =>$_POST['textColor'],
            "start" =>$_POST['start'],
            "end" =>$_POST['end']

        ));
        echo json_encode($respuesta);
        break;
    case 'eliminar':
            $respuesta=false;
            if(isset($_POST['id'])){
                $sentenciaSQL= $pdo->prepare("DELETE  FROM eventos WHERE ID=:ID");
                $respuesta= $sentenciaSQL->execute(array("ID"=>$_POST['id']));
            }
            echo json_encode($respuesta);
        break;
        
    case 'modificar':
        $sentenciaSQL = $pdo->prepare("UPDATE eventos SET
        title=:title,
        descripcion=:descripcion,
        color=:color,
        textColor=:textColor,
        start=:start,
        end=:end
        WHERE ID=:ID
        ");

        $respuesta=$sentenciaSQL->execute(array(
            "ID" =>$_POST['id'],
            "title" => $_POST['title'],
            "descripcion" => $_POST['descripcion'],
            "color" => $_POST['color'],
            "textColor" => $_POST['textColor'],
            "start" => $_POST['start'],
            "end" => $_POST['end']

        ));
        echo json_encode($respuesta);

        break;
    
}

$sentenciaSQL= $pdo->prepare("SELECT * FROM eventos");
$sentenciaSQL->execute();

$resultado= $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($resultado);

 ?>