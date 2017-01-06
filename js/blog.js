var data = "<blog><post><himg>img/placeholder-header.jpg</himg><title>8 reasons you NEED a new FTL drive!</title><body>It can often feel like your cruiser is starting to drag as FTL charge times increase and subsequent power consumption leaves you desperate for a little more juice. It's time to upgrade your FTL drive! It can often feel like your cruiser is starting to drag as FTL charge times increase and subsequent power consumption leaves you desperate for a little more juice. It's time to upgrade your FTL drive! It can often feel like your cruiser is starting to drag as FTL charge times increase and subsequent power consumption leaves you desperate for a little more juice. It's time to upgrade your FTL drive! It can often feel like your cruiser is starting to drag as FTL charge times increase and subsequent power consumption leaves you desperate for a little more juice. It's time to upgrade your FTL drive! It can often feel like your cruiser is starting to drag as FTL charge times increase and subsequent power consumption leaves you desperate for a little more juice. It's time to upgrade your FTL drive!</body></post>" +
"<post><himg>img/slime-head.jpg</himg><title>FSC issues \"slime creature\" warning</title><body>The FSC (Federal Space Comission) has issued a warning to capsuleers following recent attacks on terrestrial spacecraft from \"creature made entirely of slime\".The FSC (Federal Space Comission) has issued a warning to capsuleers following recent attacks on terrestrial spacecraft from \"creature made entirely of slime\". The FSC (Federal Space Comission) has issued a warning to capsuleers following recent attacks on terrestrial spacecraft from \"creature made entirely of slime\". The FSC (Federal Space Comission) has issued a warning to capsuleers following recent attacks on terrestrial spacecraft from \"creature made entirely of slime\". </body></post>" +
"<post><himg>img/placeholder-cargo.jpg</himg><title>S4X Scanner TESTED</title><body>The folks at Scan'em Technologies were kind enough to send us their new S4X scanner. So how does it fare against the world-renowned S3X series? We investigate... The folks at Scan'em Technologies were kind enough to send us their new S4X scanner. So how does it fare against the world-renowned S3X series? We investigate... The folks at Scan'em Technologies were kind enough to send us their new S4X scanner. So how does it fare against the world-renowned S3X series? We investigate...</body></post></blog>";

var domparser = new DOMParser();
var blogxml = domparser.parseFromString(data, "text/xml");

var x = blogxml.documentElement;
var y = blogxml.documentElement.childNodes;

var t = "<h1>Blog</h1><p>All the latest from our news team.</p>"; //what will be output

for (var i = 0; i<y.length;i++) {
  for (var z = 0; z<y[i].childNodes.length;z++) {
    if (y[i].childNodes[z].nodeName == "himg") {
      t += "<img src='" + y[i].childNodes[z].childNodes[0].nodeValue + "'>";
    } else if (y[i].childNodes[z].nodeName == "title") {
      t += "<h2>" + y[i].childNodes[z].childNodes[0].nodeValue + "</h2>";
    } else if (y[i].childNodes[z].nodeName == "body") {
      t += "<p>" + y[i].childNodes[z].childNodes[0].nodeValue + "</p><hr><br />";
    }
  }
}

document.getElementById("blog").innerHTML = t;

//LET IT BE NOTED THAT I ATTEMPTED TO USE JQUERY TO $.GET THE DATA FROM AN EXTERNAL XML FILE
//BUT JAVASCRIPT IS RUBBISH AND IT DIDN'T WORK. IT WASN'T MY FAULT, I SWEAR!
