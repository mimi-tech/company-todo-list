//
// (function($) {
// 'use strict';
// $(function() {
// var todoListItem = $('.todo-list');
// var todoListInput = $('.todo-list-input');
// $('.todo-list-add-btn').on("click", function(event) {
// event.preventDefault();
//
// var item = $(this).prevAll('.todo-list-input').val();
//
// if (item) {
// todoListItem.append("<li>
//     <div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox' />" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i>
// </li>");
// todoListInput.val("");
// }
//
// });
//
// todoListItem.on('change', '.checkbox', function() {
// if ($(this).attr('checked')) {
// $(this).removeAttr('checked');
// } else {
// $(this).attr('checked', 'checked');
// }
//
// $(this).closest("li").toggleClass('completed');
//
// });
//
// todoListItem.on('click', '.remove', function() {
// $(this).parent().remove();
// });
//
// });
// })(jQuery);
// function showTable() {
//     document.getElementById('check').style.display = "block";
//     $.cookie("var", "1");
// }
//
// function leaveButtonOpen(){
//     if($.cookie("var") == 1){
//         document.getElementById('check').style.display = "block";
//     }
// }

// var arr = [];
// while(arr.length < 8){
//     var r = Math.floor(Math.random() * 100) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }


// var postBoxes = document.querySelectorAll('.post-box')
// postBoxes.forEach(function(postBox) {
//
//   postBox.addEventListener('click', function() {
//     var postId = this.getAttribute('post-id')
//   console.log(postId)
//     document.getElementById('comment-form-' + postId).style.display = 'block'
//
//
//  });
// });



// $("button").click(function() {
//     var fired_button = $(this).val();
//   console.log(fired_button);
//     //localStorage.setItem('show','comment-form-' + postId ); //store state in localStorage
// });
//
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
$("input").click(function() {
  //var postId = this.getAttribute('post-id')
    var fired_button = $(this).val();

  console.log(fired_button);

  var user = getCookie(fired_button);
 if (user != "") {
   //alert("Welcome again " + user);
   document.getElementById('comment-form').style.display = 'block';
  //
 } else {
    document.getElementById('comment-form').style.display = 'none';
   if (user != "" && user != null) {
     setCookie(fired_button, user,d, 365);

   }
 }
    //localStorage.setItem('show','comment-form-' + postId ); //store state in localStorage
});
}
