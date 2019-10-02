<?php

include_once 'koneksi.php';
$json = file_get_contents('php://input');
$obj = json_decode($json, true); //supaya bisa masuk kesini

$hari = $obj["hari"];//nanti di ambil sesuai namma field
$shift = $obj["shift"];
$lokasi = $lokasi["lokasi"]

$query = mysqli_query($link, "SELECT DISTINCT PJ, NAMA_ASISTEN FROM jadwal_asisten INNER JOIN asisten ON jadwal_asisten.NIA = asisten.NIA INNER JOIN jadwal_praktikum ON jadwal_asisten.HARI = jadwal_praktikum.HARI AND jadwal_asisten.SHIFT = jadwal_praktikum.SHIFT AND jadwal_asisten.LOKASI = jadwal_praktikum.LOKASI WHERE jadwal_asisten.HARI = '$hari' AND jadwal_asisten.SHIFT = '$shift' AND jadwal_asisten.LOKASI = '$lokasi');
$rows = array();
while($r = mysqli_fetch_assoc($query)) {
    $rows[] = $r;
}
if(!empty($rows)){
    echo json_encode($rows);    
}else{
    echo json_encode('Data Tidak Ditemukan');
}


?>