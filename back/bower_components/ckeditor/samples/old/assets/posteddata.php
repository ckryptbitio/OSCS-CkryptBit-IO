<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Sample &mdash; CKEditor</title>
	<link rel="stylesheet" href="sample.css">
</head>
<body>
	<h1 class="samples">
		CKEditor &mdash; Posted Data
	</h1>
	<table border="1" cellspacing="0" id="outputSample">
		<colgroup><col width="120"></colgroup>
		<thead>
			<tr>
				<th><?php echo htmlspecialchars('Field Name'); ?></th>
				<th><?php echo htmlspecialchars('Value'); ?></th>
			</tr>
		</thead>
		<?php
		error_reporting(E_ALL);
		ini_set('display_errors', 1);

		if ($_SERVER['REQUEST_METHOD'] === 'POST')
		{
			$data = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

			if (!empty($data))
			{
				foreach ($data as $key => $value)
				{
					echo '<tr>';
					echo '<th style="vertical-align: top">' . htmlspecialchars($key) . '</th>';
		
