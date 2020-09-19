import Lang from './lang.js';

export default class Net {
	

static GetRequest(url,headers,responseType) {

		
	var d = Lang.Defer();
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState != 4) return;
	
		if (this.status == 200) d.Resolve(this.response);
		
		else d.Reject({ status:this.status, response:this.response });
	};
	
	xhttp.open("GET", url, true);
	
	if (headers) {
		for (var id in headers) xhttp.setRequestHeader(id, headers[id]);
	}
	
	if (responseType) xhttp.responseType = responseType;   
	
	xhttp.send();
	
	return d.promise;
	}


static PutRequest(url,json,headers,responseType) {

		
	var d = Lang.Defer();
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState != 4) return;
	
		if (this.status == 200) d.Resolve(this.response);
		
		else d.Reject({ status:this.status, response:this.response });
	};
	xhttp.open("PUT", url);
	xhttp.setRequestHeader("Content-Type", "application/json");
	
	
	
	if (headers) {
		for (var id in headers) xhttp.setRequestHeader(id, headers[id]);
	}
	
	if (responseType) xhttp.responseType = responseType;   
	
	xhttp.send(json);
	
	return d.promise;
	}


static DeleteRequest(url,headers,responseType) {

		
	var d = Lang.Defer();
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState != 4) return;
	
		if (this.status == 200) d.Resolve(this.response);
		
		else d.Reject({ status:this.status, response:this.response });
	};
	
	xhttp.open("DELETE", url, true);
	
	if (headers) {
		for (var id in headers) xhttp.setRequestHeader(id, headers[id]);
	}
	
	if (responseType) xhttp.responseType = responseType;   
	
	xhttp.send();
	
	return d.promise;
	}
}