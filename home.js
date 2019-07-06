
<script>
var http_util = require('../util/http_util');

exports.showHomePage = function buildLoginPage(req, resp, error_message) {

    var page_title = "Home Page";

    var page_menu = http_util.pageMenu();

    var page_content = "<font color='red'>Welcome to user register and login home page.<br/>Click above link to take action.</font>";

    var page_data = http_util.buildPage(page_title, page_menu, page_content);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(page_data);
}
</script>