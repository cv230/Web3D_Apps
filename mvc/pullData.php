<?php
require_once "config.php";

function datagrabber()
{
    $conn = connDB();
    if(is_string($conn)){
        return "connection has failed : $conn";
    }

    $sql = "SELECT * FROM drinks";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function indidatagrabber($drink)
{
    $conn = connDB();
    if(is_string($conn)){
        return 'connection has failed : $conn';
    }

    $sql = "SELECT * FROM individualDrinks";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

}