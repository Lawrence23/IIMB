window.fbAsyncInit = function() {
    FB.init({
      appId      : '1603246336630763',
      status     : true, 
      xfbml      : true,
      version    : 'v2.3'
    });
    FB.api('/1603246336630763', function(response) {
        console.log(response);
    })
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.getElementById('facebook').onclick = function () { 
    FB.ui({
        method: 'share',
        href: 'http://lawrence23.github.io/IIMB/views/'
    }, function(response){}); 
}