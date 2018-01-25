var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&origin=*&srsearch=';
    var href = 'https://en.wikipedia.org/?curid=';
    $("document").ready(function () {
      $("button.btn").click(function(){
        var text = $(".text-field").val();
        var search = api+text;
        
        if(!text){
          $(".text-field").addClass("open");
          return;
        }

        $(".results").html("");
        $(".content").css("margin-top", "5%");
        $(".content").css("transition", "1s");
        
        $.getJSON(search, function(json){
          json.query.search.forEach(function(page) {
            var html = '<a class="result" href="'+href + page.pageid+'" target="_blank">'+
          '<h3 class="title">' + page.title+'</h3>' +
          '<p class="text">'+page.snippet+'</p>' + '</a>';
          $(".results").append(html);
          });
        });
      });

      $(".text-field").click(function(){
          $(".text-field").addClass("open");
        });
    });