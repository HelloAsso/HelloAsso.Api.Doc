<?php

/*

This little snippet can be used in wordpress with plugin like "Insert PHP Code Snippet" or in pure PHP web site
in order to add your helloasso statistics on your personnal/organization website

*/

$APIKEY = "";
$APIPASSWORD = "";

$curl = curl_init();

curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_USERPWD, $APIKEY . ":" . $APIPASSWORD);

// You have to customize this url if you want specific action: https://api.helloasso.com/ressources#liste-actions
// The best practice is to set recent <from> parameter and iniate $sum and $nb with past transaction 
curl_setopt($curl, CURLOPT_URL, "https://api.helloasso.com/v3/actions.json");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

$json = json_decode(curl_exec($curl));
curl_close($curl);

$sum = 0;
$nb = 0;

foreach ($json->resources as $payment) {
	$sum += $payment->amount;
	$nb++;
}

echo "<div class=\"amount\">" . $sum . "</div><div class=\"count\">" . $nb . "</div>";

?>