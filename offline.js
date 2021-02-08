alert('hi');
embedded_svc.addEventHandler("afterMaximize", function(data) {
alert('bye');
    var topDiv = document.createElement('div');
    var topDivText = document.createTextNode("We are currently unavailable for chat.");
    topDiv.appendChild(topDivText);
    topDiv.setAttribute('class', "offline-chat-content");
    topDiv.appendChild(document.createElement('br'));
    topDiv.appendChild(document.createElement('br'));
	topDiv.appendChild(document.createTextNode("Please visit the "));

    var linkElement = document.createElement('a');
	var linkText = document.createTextNode("Residential Claims Center");
    linkElement.setAttribute('href', "https://www.gaf.com/en-us/about-us/contact/residential-claims-center");
    linkElement.appendChild(linkText);
    topDiv.appendChild(linkElement);

	topDiv.appendChild(document.createTextNode(" to start a claim or check the status of an existing claim."));

	var offlineContentNode = document.querySelectorAll(".offlineSupportUI .formContent");
    offlineContentNode[0].appendChild(topDiv);
});