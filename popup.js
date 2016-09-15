$(document).ready(function () {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];
    $('#url').val(tab.url);
    $('#company').val(tab.title);
  });


  $('#add-job').click(function(event) {
      event.preventDefault();
      data = {job: {url: $('#url').val(), company: $('#company').val(), position: $('#position').val()}};

      $.ajax({
        method: "POST",
        url: "http://localhost:3000/jobs/",
        data: data,

        success: function() {
          $('#title').val("");
          $('#company').val("");
          $('#url').val("");
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
