function makeRequest(url, mimeType, fn){

    var httpRequest = getHttpObj();

    if (!httpRequest) throw "Invalid request object";

    httpRequest.onSuccessHandler = fn;
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET', url, true);
    // httpRequest.setRequestHeader('Content-Type', mimeType);
    // httpRequest.withCredentials = "true";
    httpRequest.send();
}

function handleResponse() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            // success:
            this.onSuccessHandler( this.responseText );
        } else {
            // bad status response
        }
    } else {
        // not ready
    }
}


function getHttpObj(){
    var httpObj;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpObj = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try {
            httpObj = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                httpObj = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {}
        }
    }

    return httpObj;
}
