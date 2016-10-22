walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node && node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/Donald J. Trump/gi, "The VoidBeast")
		.replace(/Donald John Trump/gi, "The VoidBeast")
		.replace(/Donald J Trump/gi, "The VoidBeast")
		.replace(/donaldjtrump/gi, "voidbeast")
		.replace(/donaldjtrump.com/gi, "voidbeast.com")
		.replace(/trump.com/gi, "voidbeast.com")
		.replace(/realDonaldTrump/gi, "realVoidBeast")
		.replace(/Mr. Trump/gi, "The VoidBeast")
		.replace(/The Donald/gi, "The VoidBeast")
		.replace(/Donald Trump/gi, "VoidBeast")
		.replace(/donald trump/gi, "voidbeast")
		.replace(/DonaldTrump/gi, "VoidBeast")
		.replace(/Donald_Trump/gi, "VoidBeast")
		.replace(/Team Trump/g, "Team VoidBeast")
		.replace(/Mike Pence/g, "NetherBeast")
		.replace(/Pence/g, "NetherBeast")
		.replace(/TRUMP/g, "VoidBeast")
		.replace(/#MAGA/g, "#VOID")
		.replace(/Trump/g, "VoidBeast");

	textNode.nodeValue = v;
}


