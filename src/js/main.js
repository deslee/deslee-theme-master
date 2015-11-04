(function() {

    $.ajaxSetup({ cache: false });

    var desProcess = function desProcess(c) {
        console.log(c)
        $('[des-template]', c).each(function(i,e) {
            var template = $(e).attr('des-template');

            console.log(template);

            $.ajax({
                url: '/' + template,
                success: function(data) {
                    var template = Handlebars.compile(data);
                    $(e).html(template(scope));
                    desProcess($(e));
                },
                error: function(e) {
                    console.log(e);
                }
            })
        });
    };
    desProcess(document)


})();