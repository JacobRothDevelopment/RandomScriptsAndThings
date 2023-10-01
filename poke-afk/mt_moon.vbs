length=100
hold=20
rounds=70
switchDelay=250
sameDelay=1
startDelay = 10000
key1="A"
key2="D"

WScript.Sleep startDelay
Set objShell = CreateObject("WScript.Shell")

Dim x
x=0

Do While x<rounds
	x=x+1
	
	xa=0
	Do While xa<length
		xa=xa+1
		str1 = "{" &  key1 & " " & hold & "}"
		objShell.SendKeys str1
		objShell.SendKeys "1"
		WScript.Sleep sameDelay
	Loop
	WScript.Sleep switchDelay
	
	xb=0
	Do While xb<length
		xb=xb+1
		str2 = "{" &  key2 & " " & hold & "}"
		objShell.SendKeys str2
		objShell.SendKeys "1"
		WScript.Sleep sameDelay
	Loop
	WScript.Sleep switchDelay
Loop 

MsgBox "Finished"