export const setTokenTime = () => {
var hours = 0.416; // Reset when storage is more than 25mins(0.416)
var now = new Date().getTime();
var setupTime = localStorage.getItem('tokenSetupTime');
if (setupTime == null || now-setupTime <= hours*60*60*1000) {
    localStorage.setItem('tokenSetupTime', now)
    return true;
} 
else {
    if(now-setupTime > hours*60*60*1000) {
        localStorage.clear()
        //alert("Your Session has expired!!You will be redirected to login page");
        window.location.reload()
        return false;
    }
}
}