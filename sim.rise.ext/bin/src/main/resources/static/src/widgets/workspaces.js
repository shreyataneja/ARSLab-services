'use strict';

import Lang from '../utils/lang.js';

import Widget from '../ui/widget.js';
import Net from '../utils/net.js';

export default Lang.Templatable('Widget.Workspaces', class Workspaces extends Widget { 

	constructor(id) {
		super(id);
       this.Node("getAllWorkspaces").addEventListener("click", this.getAllWorkspaces.bind(this));
      this.Node("getUserWorkspace").addEventListener("click", this.getUserWorkspace.bind(this));
      this.Node("createWorkspace").addEventListener("click", this.createWorkspace.bind(this));
      this.Node("deleteWorkspace").addEventListener("click", this.deleteWorkspace.bind(this));
	}
	
 getAllWorkspaces()
{
  
  
  const url='http://localhost:8000/RISE_Replica/workspaces';
  var p1 = Net.GetRequest(url);
   
   var c = Promise.all([p1]).then((data) => {
      console.log(data[0].result);
   });  
}

 getUserWorkspace()
{
  
  
 
  var url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("getUserWorkspace_uname").value;
   var p1 = Net.GetRequest(url);
   
   var c = Promise.all([p1]).then((data) => {
      console.log(data[0].result);
   });  
}

 createWorkspace()
{
  
  var data = {
      
    
          "ConfigWorkspace": 
        { "Restricted":  document.getElementById("workspaceRestricted").value
          
        }
  

      };

      var json = JSON.stringify(data);
      var url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("create_workspace_uname").value
            +"/"+document.getElementById("create_workspace_password").value;

      
      var p1 = Net.PutRequest(url,json);
       console.log(p1);
     document.getElementById("createWorkspaceForm").reset();
}



 deleteWorkspace()
{ 
    
      var url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("delete_workspace_uname").value
            +"/"+document.getElementById("delete_workspace_password").value;

      
       var p1 = Net.DeleteRequest(url);
       console.log(p1);
      document.getElementById("deleteWorkspaceForm").reset();
}


	Template() {
		return	"<h3  style = 'margin-left: 400px;'>Get Workspaces</h3>"+

"<div class='container'>"+
  "<form >"+
   " <input class ='b1' type='button' value='Get Workspaces' handle='getAllWorkspaces'/>  "+
 
  "</form>"+
  "<p id = 'workspace_div' > </p>"+
"</div>"+
       
"<h3  style = 'margin-left: 400px;'>Get User Workspace</h3>"+

"<div class='container'>"+
  "<form id ='getUserWorkspaceForm' >"+
    "<label for='getUserWorkspace_uname'>User Name</label>"+
    "<input type='text' id='getUserWorkspace_uname' name='username' placeholder=''>"+
   

   " <input class ='b1' type='button' value='Submit' handle ='getUserWorkspace'/>"+
  "</form>"+
 " <p id = 'user_workspace_div' > </p>"+
"</div> "+


"<h3  style = 'margin-left: 400px;'>Create/Update Workspace</h3>"+

"<div class='container'>"+
  "<form id ='createWorkspaceForm'>"+
    "<label for='uname'>User Name</label>"+
    "<input type='text' id='create_workspace_uname' name='username' placeholder=''>"+

    "<label for='password'>User Password</label>"+
    "<input type='password' id='create_workspace_password' name='password' placeholder=''>"+

    "<label for='Restricted'>Restricted</label>"+
    "<select id='workspaceRestricted' name='Restricted'>"+
    "  <option value='false'>False</option>"+
    "  <option value='true'>True</option>"+
      
  
   " </select>"+

  "  <input class ='b1' type='button' value='Submit' handle ='createWorkspace'/>"+
 " </form>"+
"/div> "+
    
     
 
"<h3  style = 'margin-left: 400px;'>Delete Workspace</h3>"+

"<div class='container'>"+
"  <form id ='deleteWorkspaceForm' >"+
 "   <label for='delete_workspace_uname'>User Name</label>"+
"    <input type='text' id='delete_workspace_uname' name='username' placeholder=''>"+
    
   "  <label for='password'>User Password</label>"+
  "  <input type='password' id='delete_workspace_password' name='password' placeholder=''>"+

 "   <input class ='b1' type='button' value='Submit' handle ='deleteWorkspace'/>"+
"  </form>"+
"</div>";
	}
});