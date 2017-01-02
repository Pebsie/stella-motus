var domparser = new DOMParser();
var xmltext;
jQuery.get('js/blog.xml', function(file) {
  xmltext = file;
})

var blogxml = domparser.parseFromString(file, "text/xml");

document.getElementById("curtitle").innerHTML = blogxml.getElementsByTagName("title")[0].childNodes[0].nodeValue;
