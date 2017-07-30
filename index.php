<head>
<meta charset="utf-8" />
<title>P.O.W.E.R.</title>
<link rel="shortcut icon" href="/boltlogo.png">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<?php 
foreach (glob("game/*.js") as $filename)
{
    echo '<script type="text/javascript" src='.$filename.'></script>
';
} 

?>
</head>
<body>
<canvas width=600 height=400 id='game'></canvas>
</body>