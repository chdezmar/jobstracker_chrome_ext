$(document).ready(function () {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    $('#url').val(tab.url);
    $('#company').val(tab.title);
  });


  $('#add-job').click(function(event) {
      event.preventDefault();
      data = {job: {url: $('#url').val(), company: $('#company').val(), position: $('#position').val(), position: $('#position').val(),location: $('#location').val(),status: $('#status').val(),rating: $('#rating').val(), info: $('#info').val()}};

      $.ajax({
        method: "POST",
        url: "https://jobstracker.herokuapp.com/jobs/",
        data: data,

        success: function() {
          $('#url').val("");
          $('#company').val("");
          $('#position').val("");
          $('#location').val("");
          $('#status').val("");
          $('#rating').val("");
          $('#info').val("");
        },
        error: function(data) {
          return false;
        }
      });
      event.stopPropagation();
    });


    // message passing
      // chrome.runtime.sendMessage({msg:'fill'}, function(response){
      //   $('#title').val(response[0]);
      //   console.log(response);
      // });


});
