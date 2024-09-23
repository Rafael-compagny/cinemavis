// initialisation du buffer clavier
var myCode = new Array();
for(i=0;i<10;i++)
{
	myCode[i]=0;
}

// initialisation du konami code (à l'envers cause empilage)
var kCode = new Array(65,66,39,37,39,37,40,40,38,38);

// empiler la dernière touche saisie
function stackArray(array, value)
{
	for(i=9;i>0;i--)
	{
		array[i] = array[i-1];
	}
	array[0] = value;
}

// tester les différences entre le code et la saisie
function testArray(a,b)
{
	for(i=0;i<a.length;i++)
	{
		if (a[i]!=b[i])
			return false;
	}
	return true;
}

// action!
function konami()
{
	window.location.href="";;
}

// interception de saisie
$(document).keyup(function(event) {
	stackArray(myCode,event.keyCode);
	
	// si c'est la dernière lettre "a" du code
	if (event.keyCode==65 && testArray(myCode,kCode))
	{
		konami();
	}
});