'use strict';

import Lang from '../utils/lang.js';

import Widget from '../ui/widget.js';
import Net from '../utils/net.js';

export default Lang.Templatable('Widget.Accounts', class Accounts extends Widget { 

	constructor(id) {
		super(id);
		this.Node("getAccounts").addEventListener("click", this.getAccounts.bind(this));
		this.Node("createAccount").addEventListener("click", this.createAccount.bind(this));
		this.Node("updateAccount").addEventListener("click", this.updateAccount.bind(this));
		this.Node("deleteAccount").addEventListener("click", this.deleteAccount.bind(this));
	}
	
 getAccounts()
{
	
	
	const url='http://localhost:8080/RISE_Replica/Accounts';


	var p1 = Net.GetRequest(url);
	
	var c = Promise.all([p1]).then((data) => {
		console.log(data[0].result);
	});	
	 // 

}
 createAccount()
{
	
	var data = {
			
				  "Account": {
				    "Password": document.getElementById("password").value,
				    "Admin":  document.getElementById("admin").value
				  }
				


	
	    };

	    var json = JSON.stringify(data);
	    var url='http://localhost:8080/RISE_Replica/Accounts/'+document.getElementById("uname").value;

	    var p1 = Net.PutRequest(url,json);
	    console.log(p1);
	    document.getElementById("createaccountForm").reset();
}
 updateAccount()
{	 	var data = {
			
			  "Account": {
			    "Password": document.getElementById("update_password").value,
			    "Admin":  document.getElementById("update_admin").value
			  }
			


  };

  var json = JSON.stringify(data);
  var url='http://localhost:8080/RISE_Replica/Accounts/'+document.getElementById("update_uname").value
  				+"/"+document.getElementById("oldpassword").value;

  

  var p1 = Net.PutRequest(url,json);
  console.log(p1);
 document.getElementById("updateaccountForm").reset();


}
 deleteAccount()
{	
	  
	    var url='http://localhost:8080/RISE_Replica/Accounts/'+document.getElementById("delete_uname").value;

	    var p1 = Net.DeleteRequest(url);
	    console.log(p1);
	   document.getElementById("deleteaccountForm").reset();
}

	Template() {
		return	"<h3  style = 'margin-left: 400px;'>Get All Accounts</h3>"+

		"<div class='container'>"+
		" <form >"+
		"  <input class ='b1' type='button' value='Get All Accounts' handle='getAccounts'/>  "+

		"</form>"+
		"<p id = 'div1' > </p>"+
		"</div>"+

		"<h3  style = 'margin-left: 400px;'>Create Account</h3>"+

		"<div class='container'>"+
		"<form id ='createaccountForm'>"+
		"<label for='uname'>User Name</label>"+
		"<input type='text' id='uname' name='username' placeholder=''>"+

		"<label for='password'>Password</label>"+
		"<input type='password' id='password' name='password' placeholder=''>"+

		"<label for='admin'>Admin</label>"+
		"<select id='admin' name='admin'>"+
		"  <option value='true'>True</option>"+
		"   <option value='false'>False</option>"+

		"  </select>"+


		"  <input class ='b1' type='button' value='Submit' handle ='createAccount'/>"+
		" </form>"+
		"</div> "+


		"<h3  style = 'margin-left: 400px;'>Update Account</h3>"+

		"<div class='container'>"+
		"  <form id ='updateaccountForm'>"+
		"   <label for='update_uname'>User Name</label>"+
		"    <input type='text' id='update_uname' name='username' placeholder=''>"+

		"<label for='oldpassword'>Old Password</label>"+
		"<input type='password' id='oldpassword' name='oldpassword' placeholder=''>"+


		"<label for='update_password'>New Password</label>"+
		"<input type='password' id='update_password' name='password' placeholder=''>"+

		"<label for='update_admin'>Admin</label>"+
		" <select id='update_admin' name='admin'>"+
		"    <option value='true'>True</option>"+
		"     <option value='false'>False</option>"+

		"    </select>"+

		"  <input class ='b1' type='button' value='Submit' handle ='updateAccount'/>"+
		" </form>"+
		"</div>"+


		"<h3  style = 'margin-left: 400px;'>Delete Account</h3>"+

		"<div class='container'>"+
		" <form id ='deleteaccountForm' >"+
		"  <label for='delete_uname'>User Name</label>"+
		"   <input type='text' id='delete_uname' name='username' placeholder=''>"+


		" <input class ='b1' type='button' value='Submit' handle ='deleteAccount'/>"+
		"  </form>"+
		"</div> " ;
	}
});