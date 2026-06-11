<?php
header('Content-Type: application/json');

$stats = [
  "chapitres_valides" => 0,
  "score_qcm" => 0,
  "progression" => "0%"
];

echo json_encode($stats);
?>
