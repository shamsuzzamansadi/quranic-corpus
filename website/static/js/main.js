function togglePost() {
	var element = document.getElementById('commentForm');
	var isVisible = element.style.display != 'none';
	element.style.display = !isVisible ? '' : 'none';
	document.getElementById('postComment').style.display = isVisible ? ''
			: 'none';
	var titleElement = document.getElementById('commentTitle');
	if (titleElement.innerHTML == 'Messages') {
		titleElement.style.display = isVisible ? '' : 'none';
	}
}

var verseCounts = new Array(7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123,
		111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93,
		88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59,
		37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11,
		11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
		29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8,
		11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6);

function updateVerses() {
	var chapterList = document.getElementById("chapterList");
	var chapterNumber = parseInt(chapterList.value);

	var verseList = document.getElementById("verseList");
	var verseNumber = parseInt(verseList.value);

	verseList.options.length = 0;
	var verseCount = verseCounts[chapterNumber - 1];
	for ( var i = 1; i <= verseCount; i++) {
		verseList.options[verseList.options.length] = new Option("Verse ("
				+ chapterNumber + ":" + i + ")", i);
	}

	if (verseNumber <= verseCount) {
		verseList.value = verseNumber;
	}
}

function navigateVerse() {
	var chapterList = document.getElementById("chapterList");
	var verseList = document.getElementById("verseList");
	document.location.href = '?chapter=' + chapterList.value + '&verse='
			+ verseList.value;
}
