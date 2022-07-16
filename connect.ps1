param(
	[string]$server_in = ""
)

$hash = @{
	key = "command";
}

if($server_in -eq "show") {
	echo $hash
	return
}

$command = $hash[$server_in]

if($command -eq $null) {
	echo "Invalid input '$server_in'" "use './connect show' to see all registered servers"
	return
}

# if index and command are fine, then good to go
echo "Connecting ... "
Invoke-Expression $command

