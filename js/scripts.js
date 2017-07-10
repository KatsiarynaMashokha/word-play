$(document).ready(function() {
  $("form#fullSentence").submit(function(event) {
  //var sentence = $("#sentence").val().split(" ").sort();
  //var sentence = $("#sentence").val().split(" ");

  // var newArray = sentence.map(function(word) {
  //   if (word.length >= 3) {
  //     return word;
  //   }
  // });
  // var newArray = sentence.filter(function(word) {
  //   return word.length >= 3;
  // })
  // var reversedArray = newArray.reverse();
  // var joinedString = reversedArray.join(" ");
  // alert(joinedString);

  var word = [];
  var index = 0;
  var count = 1;
  var fullArray = $("#sentence").val().split(" ").sort();

   fullArray.forEach(function(word) {
     //alert(word);
     index +=1;
     if (word === fullArray[(index)]) {
       count +=1;
     }
     else {
       $("ul").append("<li>" + word + " " + count);
       count = 1;
     }
   });

   event.preventDefault();
  });
  });
