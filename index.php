<?php

$name = $_GET['name'];

// asd 

$flag = false;

$names = [
    0 => 'llp',
    1 => 'kjj',
    2 => 'psx'
];

foreach ($names as $key => $value) {
    if ($name == $value) {
        $flag =  true;
        break;
    }
}

echo json_encode($flag);