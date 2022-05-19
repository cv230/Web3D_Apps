<?php
function connDB(){
    try
    {
        return new PDO("sqlite:../Assets/DB/drinks_dataBase.db", "", "");
    }
    catch(PDOException $e)
    {
        return $e->getMessage();
    }
}





