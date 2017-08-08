// check off to dos by clicking

$("ul").on('click', 'li', function() {
  $(this).toggleClass("todoDone");
})

$("ul").on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i> </span>"+ $(this).val() + "</li>")
    $(this).val("");
  }
})

$(".fa-plus").click(function() {
  $("input").fadeToggle();
})
