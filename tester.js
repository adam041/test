function runOnLoad(strURL) {
//download json containing configs on load

// 	var strURL = "https://api.myjson.com/bins/2hdtt";	//Note: replace with intranet link once in production
	
	$.getJSON(strURL, function(result) {
		loadConfigs(result);
	});
}
 

function loadConfigs(json) {
//loads empty select elements on web page using corresponding JSON data

var allSelectElements = "";
allSelectElements = document.getElementsByTagName("select");

for (var i = 0; i < allSelectElements.length; ++i) {	
	
	if (allSelectElements[i].length === 0) {
		//if select element has no options, fill them in
		console.log("Loading select options for " + allSelectElements[i].id);
		allSelectElements[i].innerHTML = drawSelect("french", json);		
		// need to programmatically choose list - how does select#Three get 'french'
		}
}

}

function drawSelect(strName,objJson) {    
	
//target for output
    //var objElement = document.getElementById(strElementId);
 	
 	var arrOptions = [];  	//write buffer
 	var strLine = "";		//line of HTML to be pushed to arrOptions
 	
 
//write contents of object to console, for testing
for (var i = 0; i < objJson.lists[strName].length; ++i) {
	strLine = "";
	
	if (objJson.lists[strName][i].selected === true) {
		strLine = "<option selected ";
		} else {
			strLine = "<option ";
	}
		
	if (objJson.lists[strName][i].display === undefined) {
	  		strLine += "value='" + objJson.lists[strName][i].value + "'>" + objJson.lists[strName][i].value + "</option>";
		} else { 
  			strLine += "value='" + objJson.lists[strName][i].value + "'>" + objJson.lists[strName][i].display + "</option>";
	}
	
	arrOptions.push(strLine);

}

//write to DOM
	//objElement.innerHTML = arrOptions.join('\n');
	
	return arrOptions.join('\n');
}
