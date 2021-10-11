<?php
require('lib/common.php');
$offset = ((isset($_GET['page']) ? $_GET['page'] : 1) - 1) * 20;

// currently selects all uploaded videos
if(isset($_GET['subscriptions'])) {
	$query = implode(', ', array_column(fetchArray(query("SELECT user FROM subscriptions WHERE id = ?", [$userdata['id']])), 'user'));
	if($query != null) {
		$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, v.views, v.videolength, v.tags, v.author FROM videos v JOIN users u ON v.author = u.id WHERE v.author IN(".$query.") ORDER BY v.id DESC LIMIT 20 OFFSET ?", [$offset]);
		$pageCount = ceil(fetch("SELECT COUNT(*) FROM videos WHERE author IN(".$query.")")['COUNT(*)'] / 20);
		$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST'].'/browse.php?subscriptions&page=';
	} else {
		$videoData = null;
		$pageCount = 0;
		$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST'].'/browse.php?subscriptions&page=';
	}	
} else {
	$videoData = query("SELECT $userfields v.video_id, v.title, v.description, v.time, v.views, v.author FROM videos v JOIN users u ON v.author = u.id ORDER BY v.id DESC LIMIT 20 OFFSET ?", [$offset]);
	$pageCount = ceil(fetch("SELECT COUNT(*) FROM videos")['COUNT(*)'] / 20);
	$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST'].'/browse.php?page=';
}

$twig = twigloader();

echo $twig->render('browse.twig', [
	'videos' => $videoData,
	'currentPage' => (isset($_GET['page']) ? $_GET['page'] : 1),
	'pageCount' => $pageCount,
	'url' => $url
]);