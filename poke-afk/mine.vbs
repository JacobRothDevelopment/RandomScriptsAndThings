' rounds=20
rounds=90
sameDelay=20000
startDelay = 10000

WScript.Sleep startDelay
Set objShell = CreateObject("WScript.Shell")

Dim x
x=0

Do While x<rounds
	x=x+1
	
	objShell.SendKeys " "
	objShell.SendKeys "4"
	objShell.SendKeys "4"
	WScript.Sleep sameDelay
Loop 

MsgBox "Finished"