<?php
$regId = $_GET['regId']."\n";

$file = fopen("register_ids.txt", "a+");
fwrite($file, $regId);
fclose($file);
?>