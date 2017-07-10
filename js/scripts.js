$(document).ready(function() {
$("form#fullSentence").submit(function(event) {
  var sentence = $("#sentence").val().split(" ");

  var newArray = sentence.map(function(word) {
    if (word.length >= 3) {
      return word;
    }
  });
  var reversedArray = newArray.reverse();
  var joinedString = reversedArray.join(" ");
  alert(joinedString);
  });
});
