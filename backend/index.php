<?php

include 'data.php';

//var_dump($data);

require_once 'Celebrity.php';



//make objects from data 

$celebrities = [];

foreach ($data as $celebrity_array) {
    $celebrity = new Celebrity;
    $celebrity->loadFromArray($celebrity_array);
    $celebrities[] = $celebrity;
}

header('Content-type: application/json');

echo json_encode($celebrities);



//var_dump($celebrities);