'use strict';

import Lang from '../utils/lang.js';

import Widget from '../ui/widget.js';

export default Lang.Templatable('Widget.Frameworks', class Frameworks extends Widget { 

	constructor(id) {
		super(id);
	}
	
	Template() {
		return	"<h3  style = 'margin-left: 400px;'>Get All Frameworks</h3>"+

"<div class='container'>"+
  "<form >"+
   " <input class ='b1' type='button' value='Get All Frameworks' onclick='getAllFrameworks()'/>  "+
 
  "</form>"+
 " <p id = 'framework_div' > </p>"+
"</div>"+
 
"<h3  style = 'margin-left: 400px;'>Get User Framework</h3>"+

"<div class='container'>"+
  "<form id ='userFrameworkForm' >"+
    "<label for='framework_uname'>User Name</label>"+
   " <input type='text' id='user_framework_uname' name='username' placeholder=''>"+
   

  "  <input class ='b1' type='button' value='Submit' onclick ='getUserFramework()'/>"+
 " </form>"+
"</div>"+
 
"<h3  style = 'margin-left: 400px;'>Create Framework</h3>"+

"<div class='container'>"+
  "<form id ='createFrameworkForm'>"+
    "<label for='uname'>User Name</label>"+
    "<input type='text' id='create_framework_uname' name='username' placeholder=''>"+

    "<label for='password'>Password</label>"+
    "<input type='password' id='create_framework_password' name='password' placeholder=''>"+

    "<label for='admin'>Admin</label>"+
   " <select id='create_framework_admin' name='admin'>"+
  "    <option value='true'>True</option>"+
 "     <option value='false'>False</option>"+
  
"    </select>"+

  "  <input class ='b1' type='button' value='Submit' onclick ='createFramework()'/>"+
 " </form>"+
"</div> "+
    
 
"<h3  style = 'margin-left: 400px;'>Update Framework</h3>"+

"<div class='container'>"+
  "<form id ='updateFrameworkForm'>"+
    "<label for='update_uname'>User Name</label>"+
    "<input type='text' id='update_framework_uname' name='username' placeholder=''>"+
   
   "<label for='oldpassword'>Old Password</label>"+
    "<input type='password' id='update_framework_oldpassword' name='oldpassword' placeholder=''>"+


    "<label for='update_password'>New Password</label>"+
    "<input type='password' id='update_framework_password' name='password' placeholder=''>"+

   " <label for='update_admin'>Admin</label>"+
   " <select id='update_framework_admin' name='admin'>"+
  "    <option value='true'>True</option>"+
 "     <option value='false'>False</option>"+
  
"    </select>"+

  "  <input class ='b1' type='button' value='Submit' onclick ='updateFramework()'/>"+
 " </form>"+
"</div>"+


"<h3  style = 'margin-left: 400px;'>Delete Framework</h3>"+

"<div class='container'>"+
  "<form id ='deleteFrameworkForm' >"+
   " <label for='delete_uname'>User Name</label>"+
  "  <input type='text' id='delete_framework_uname' name='username' placeholder=''>"+
   

 "   <input class ='b1' type='button' value='Submit' onclick ='deleteFramework()'/>"+
"  </form>"+
"</div>"  ;
	}
});