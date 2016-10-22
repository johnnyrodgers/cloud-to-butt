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

	v = v.replace(/Donald J. Trump/gi, "The VoidBeast");
	v = v.replace(/Donald John Trump/gi, "The VoidBeast");
	v = v.replace(/Donald J Trump/gi, "The VoidBeast");
	v = v.replace(/donaldjtrump/gi, "voidbeast");
	v = v.replace(/donaldjtrump.com/gi, "voidbeast.com");
	v = v.replace(/trump.com/gi, "voidbeast.com");
	v = v.replace(/realDonaldTrump/gi, "realVoidBeast");
	v = v.replace(/Mr. Trump/gi, "The VoidBeast");
	v = v.replace(/The Donald/gi, "The VoidBeast");
	v = v.replace(/Donald Trump/gi, "VoidBeast");
	v = v.replace(/donald trump/gi, "voidbeast");
	v = v.replace(/DonaldTrump/gi, "VoidBeast");
	v = v.replace(/Donald_Trump/gi, "VoidBeast");
	v = v.replace(/Team Trump/g, "Team VoidBeast");
	v = v.replace(/Mike Pence/g, "NetherBeast");
	v = v.replace(/Pence/g, "NetherBeast");
	v = v.replace(/TRUMP/g, "VoidBeast");
	v = v.replace(/#MAGA/g, "#VOID");
	v = v.replace(/Trump/g, "VoidBeast");

	textNode.nodeValue = v;
}


