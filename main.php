<?php
session_start();
require ("connect.php");

ob_start();
?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
	<?php
	try {
		$conn = new PDO("mysql:host=$hostname;dbname=omarazi_Lesson11;charset=latin1", $user, $passwd);
		$_POST['store'];
	} catch (PDOException $ex) {
		echo "failed" . $ex->getMessage();
	}




	// put your code here
	$stmt = $conn->prepare("SELECT * FROM Country");
	$stmt->execute();
	$user = $stmt->fetchAll();

	function getCity() {
		global $user;
		$num = mt_rand(1, 150);
		return strtoupper($user[$num][1]);
	}

	$city = getCity();
	$arr = explode(' ', trim($city));
	if ($_SESSION['user'] == 'admin'){
		echo $arr[0];
	}


	echo "<h2>" . $_SESSION['user'] . "</h2>";
	?>
	<head>
		<title>HangMan</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css"  href="css/main.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="js/js.js" async></script>
	</head>
	<body>

		<img id="hangmanImg" src="imgH/NEWhangmanBlank.png" alt="Hangman">

		<div id='outputID'>
			<span class='output'> </span>
			<span class='output'> </span>

		</div>
		<form id="myForm" method="POST" action="main.php" >
			<input  name='input' id = "input" type="text" value="" placeholder="Type here">
			<input  name='word' type="text" value=<?php echo $city ?> >
			<div id="btns">
				<input name='playAgin' type="Button" value="PLAY AGAIN" >
				<!-- <a href="theHS.php"><input   name='scoreTable' type="Button" value="SEE TABLE SCORE "></a> -->
			</div>
			<input  name='store' type="number" >
		</form>

		<div id = "containerContainerContainer">
			<div id = "containerContainer">

				<div id='container'>
				</div>
			</div>
		</div>
		<div id = "keyboard">
			<div id = "key" onclick="clickKey('A');">A</div>
			<div id = "key" onclick="clickKey('B');">B</div>
			<div id = "key" onclick="clickKey('C');">C</div>
			<div id = "key" onclick="clickKey('D');">D</div>
			<div id = "key" onclick="clickKey('E');">E</div>
			<div id = "key" onclick="clickKey('F');">F</div>
			<div id = "key" onclick="clickKey('G');">G</div>
			<div id = "key" onclick="clickKey('H');">H</div>
			<div id = "key" onclick="clickKey('I');">I</div>
			<div id = "key" onclick="clickKey('J');">J</div>
			<div id = "key" onclick="clickKey('K');">K</div>
			<div id = "key" onclick="clickKey('L');">L</div>
			<div id = "key" onclick="clickKey('M');">M</div>
			<div id = "key" onclick="clickKey('N');">N</div>
			<div id = "key" onclick="clickKey('O');">O</div>
			<div id = "key" onclick="clickKey('P');">P</div>
			<div id = "key" onclick="clickKey('Q');">Q</div>
			<div id = "key" onclick="clickKey('R');">R</div>
			<div id = "key" onclick="clickKey('S');">S</div>
			<div id = "key" onclick="clickKey('T');">T</div>
			<div id = "key" onclick="clickKey('U');">U</div>
			<div id = "key" onclick="clickKey('V');">V</div>
			<div id = "key" onclick="clickKey('W');">W</div>
			<div id = "key" onclick="clickKey('X');">X</div>
			<div id = "key" onclick="clickKey('Y');">Y</div>
			<div id = "key" onclick="clickKey('Z');">Z</div>
		</div>
		<br>
		<br>

		<div id = "clear" onclick="clearText();">
			Clear
		</div>

	</body>

	<script>
             

	<?php
	//echo '<h1>' . $_POST['store'] . '</h1>';


	require ("connect_1.php");

	try {
		$dbConn = new PDO("mysql:host=$hostname;dbname=guthers_hangman", $user, $passwd);
	} catch (PDOException $e) {
		echo 'Connection error: ' . $e->getMessage();
	}











	$user = $_SESSION['user'];

	$command = "SELECT * FROM login WHERE Username = '$user'";
	//. "$command = "SELECT Username, HighScore FROM login ORDER BY HighScore DESC";
	//$dbConn->exec($command);
	$statement = $dbConn->prepare($command);
	$execOk = $statement->execute();
	//$statement = $dbConn->execute($command);
	$var = $statement->fetchAll();

	$nScore = $_POST['store'];
	$cScore = $var[0][2];
	$fScore = $nScore + $cScore;
	$command2 = "UPDATE login SET HighScore='$fScore' WHERE Username='$user'";
	$statement2 = $dbConn->prepare($command2);
	$execOk2 = $statement2->execute();




//	echo '<h1>1' . $var[0][2] . '<h2>';

	/** $command = "SELECT Username, HighScore FROM login ORDER BY HighScore DESC";
	  //$dbConn->exec($command);
	  $statement = $dbConn->prepare($command);
	  $execOk = $statement->execute();
	 * 
	 */
	?>
</html>
