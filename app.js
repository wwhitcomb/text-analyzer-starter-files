function getTokens(rawString) {
	return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
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
	
}

function GetAvgSentenceLength(textArray) {
	
}

$(document).ready(function () {
	$(".js-text-form").submit(function (event) {
		event.preventDefault();
		var textArray = getTokens($('#user-text').val());
		$(".wordcount").text(textArray.length);
		$(".uniquewordcount").text(GetUniqueWordCount(textArray));
		$(".avgwordlength").text(GetAvgWordLength(textArray));
		$(".avgsentencelength").text(GetAvgSentenceLength(text));
		$(".text-report").removeClass(".hidden");
	});
});

