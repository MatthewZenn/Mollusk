var host = location.protocol + "//" + location.hostname + "/";
var tab = location.href;
if (host != tab)
alert("The actual url is:\t\t" + location.protocol + "//" + location.hostname + "/" + "\nThe address URL is:\t\t" + location.href + "\n");