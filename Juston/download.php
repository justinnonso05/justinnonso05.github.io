<?php
$file = $_GET['file'];
$filename = basename($file);

header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . $filename . '"');
header('Content-Length: ' . filesize($file));

readfile($file);
exit;
?>
