$(function() {
  'use strict';

  var loadVerses = function() {
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
  };

  var loadChapters = function() {
    var i, chapterSelector, chapterList;
    chapterList = $('#chapterList');
    chapterList.html('');
    for (i = 0; i < QuranInfo.chapterCount; i += 1) {
      chapterSelector = 'Chapter ({0}) {1} ({2})'.format(
          i + 1,
          QuranInfo.chapterNamesTransliterated[i],
          QuranInfo.chapterNamesInEnglish[i]);
      $('<option/>').attr('value', i + 1)
          .text(chapterSelector)
          .appendTo(chapterList);
    }

    chapterList.change(function() {
      loadVerses();
    });
  };

  var loadMorphology = function() {
    var chapterList = $('#chapterList');
    var chapterIndex = chapterList.val();
    var chapterName = chapterList.find('option:selected').text();
    $('#chapterName').text(chapterName);
    if (chapterIndex === '9') {
      // We don't show the Basmala if the selected sūrat is l-tawbah.
      $('#basmala').hide();
    }
    else {
      $('#basmala').show();
    }
    $('#morphologyTable').show();
  };

  $('#loadMorphology').click(loadMorphology);

  loadChapters();
  loadVerses();
});
