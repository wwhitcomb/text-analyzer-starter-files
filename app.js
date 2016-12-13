function getTokens(rawString) {
	return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getTokensSent(rawString) {
	return rawString.toLowerCase().split(/!.?/).filter(Boolean).sort();
}

function GetUniqueWordCount(textArray) {
	var uniqueWords = [];
	for (var i = 0; i < textArray.length; i++) {
		if (uniqueWords.length == 0) {
			uniqueWords.push(textArray[i]);
		}
		else {
			var doesExist = false;
			for (var j = 0; j < uniqueWords.length; j++) {
				if (uniqueWords[j] == textArray[i]) {
					doesExist = true;
					break;
				}
			}
			if (!doesExist) {
				uniqueWords.push(textArray[i]);
			}
		}
	}
	return uniqueWords.length.toString();
}

function GetAvgWordLength(textArray) {
	var charTotal = 0;
	for(var i = 0; i < textArray.length; i++) {
		charTotal += textArray[i].length;
	}
	
	var finalResult = (charTotal / textArray.length); 
	return finalResult.toFixed(2);
}

function GetAvgSentenceLength(sentArray) {
	var sentTotal = 0;
	for(var i = 0; i < sentArray.length; i++) {
		sentTotal += sentArray[i].length;
	}
	
	var finalResult = (sentTotal / sentArray.length); 
	return finalResult.toFixed(2);
}

$(document).ready(function () {
	$(".js-text-form").submit(function (event) {
		event.preventDefault();
		var textArray = getTokens($('#user-text').val());
		var sentArray = getTokensSent($('#user-text').val());
		$(".wordcount").text(textArray.length);
		$(".uniquewordcount").text(GetUniqueWordCount(textArray));
		$(".avgwordlength").text(GetAvgWordLength(textArray));
		$(".avgsentencelength").text(GetAvgSentenceLength(sentArray));
		$(".text-report").removeClass("hidden");
	});
});