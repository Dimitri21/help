<?php 

$s = "localhost";
$u = "root";
$p = "";
$d = "absent";

$con = new mysqli($s, $u, $p, $d);

if ($con->connect_error) {
    die("Connection failed: ". $con->connect_error);
}
