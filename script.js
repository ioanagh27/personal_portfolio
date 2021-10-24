onmouseover="this.src='./resources/IMG_20181103_175816 (3).jpg'";
onmouseout="this.src='./resources/IMG_20181103_175816 (2).jpg'";


for(var i=1; i<2; i++) {
    setTimeOut((function(me) {
        return function() {
            document.getElementById('me').style.transitionDuration='2s';
            document.getElementById('me').style.transform='rotate(360deg)';
        };
    }(i)),3000);
}
