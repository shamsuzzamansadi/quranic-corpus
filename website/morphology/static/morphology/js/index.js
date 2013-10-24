function loadVerses() {
  'use strict';
  var chapterIndex = $('#chapterList').val();
  var verseCount = QuranInfo.verseCounts[chapterIndex];
  var verseList = $('#verseList');
  var verseSelector;
  var i;

  verseList.html('');
  for (i = 0; i < verseCount; i += 1) {
    verseSelector = 'Verse {0}:{1}'.format(
        i + 1,
        verseCount);
    $('<option/>').attr('value', i).text(verseSelector).appendTo(verseList);
  }

}

function loadChapters() {
  'use strict';
  var i, chapterSelector, chapterList;
  chapterList = $('#chapterList');
  chapterList.html('');
  for (i = 0; i < QuranInfo.chapterCount; i += 1) {
    chapterSelector = 'Chapter ({0}) {1} ({2})'.format(
        i + 1,
        QuranInfo.chapterNamesTransliterated[i],
        QuranInfo.chapterNamesInEnglish[i]);
    $('<option/>').attr('value', i).text(chapterSelector).appendTo(chapterList);
  }

  chapterList.change(function() {
    loadVerses();
  });
}

$(document).ready(function() {
  'use strict';
  loadChapters();
  loadVerses();
});

