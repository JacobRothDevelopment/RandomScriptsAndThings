
Set colArgs = WScript.Arguments.Named
arg1 = colArgs.Item("one")

ExecuteGlobal CreateObject("Scripting.FileSystemObject").OpenTextFile("util.vbs").ReadAll

MsgBox "Test Finished " & arg1