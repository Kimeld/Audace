<?php
$url = "https://tonyarchambeau.com/feed/"; /* insérer ici l'adresse du flux RSS de votre choix */
$url2 = "https://www.revue-rms.fr/xml/syndication.rss?r=580102"; /* insérer ici l'adresse du flux RSS de votre choix */
$url3 = "http://www.facteur-info.com/flux-rss-multisource/formation+professionnelle"; /* insérer ici l'adresse du flux RSS de votre choix */
$url4 = "https://www.rhinfo.com/taxonomy/term/17/%2A/feed"; /* insérer ici l'adresse du flux RSS de votre choix */

$rss = simplexml_load_file($url4);
echo '<ul>';
foreach ($rss->channel->item as $item){
$description = $item->description;
$datetime = date_create($item->pubDate);
$date = date_format($datetime, 'd M Y, H\hi');

 echo '<li><a href="'.$item->link.'">'.utf8_decode($item->title).'</a> ('.$date.')('.$item->title.')('.$item->description.')</li>';
}
echo '</ul>';

echo $item->title;

echo $item->title;