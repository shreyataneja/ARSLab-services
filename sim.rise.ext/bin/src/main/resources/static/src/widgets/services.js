'use strict';

import Lang from '../utils/lang.js';

import Widget from '../ui/widget.js';
import Net from '../utils/net.js';

export default Lang.Templatable('Widget.Services', class Services extends Widget { 

  constructor(id) {
   super(id);
      this.Node("getAllServices").addEventListener("click", this.getAllServices.bind(this));
      this.Node("getUserService").addEventListener("click", this.getUserService.bind(this));
      this.Node("createService").addEventListener("click", this.createService.bind(this));
      this.Node("deleteService").addEventListener("click", this.deleteService.bind(this));
 }

 getAllServices()
{

   const url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("getAllServices_uname").value;
  var p1 = Net.GetRequest(url);
   
   var c = Promise.all([p1]).then((data) => {
      console.log(data[0].result);
   });   
}

 getUserService()
{
   
   
  
   var url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("user_service_uname").value
         + '/' +document.getElementById("user_service_name").value;
   var p1 = Net.GetRequest(url);
   
   var c = Promise.all([p1]).then((data) => {
      console.log(data[0].result);
   });   
}

 createService()
{
   
   var data = {
         
      
              "ConfigWorkspace": 
            { "Restricted":  document.getElementById("serviceRestricted").value
               
            }
   

       };

       var json = JSON.stringify(data);
       var url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("create_service_uname").value
            + '/' +document.getElementById("create_service_name").value 
            +"/"+document.getElementById("create_service_password").value;

       
       
       var p1 = Net.PutRequest(url,json);
       console.log(p1);
       document.getElementById("createServiceForm").reset();
}



 deleteService()
{  
     
       var url='http://localhost:8000/RISE_Replica/workspaces/'+document.getElementById("delete_service_uname").value
            + '/' +document.getElementById("delete_service_name").value 
            +"/"+document.getElementById("delete_service_oldpassword").value;

       
      var p1 = Net.DeleteRequest(url);
       console.log(p1);
       document.getElementById("deleteServiceForm").reset();
}


 Template() {
   return	"<h3  style = 'margin-left: 400px;'>Get All Services</h3>"+


   "<div class='container'>"+
   " <form id ='getAllServicesForm' >"+
   "  <label for='getAllServices_uname'>User Name</label>"+
   " <input type='text' id='getAllServices_uname' name='username' placeholder=''>"+
   

   "<input class ='b1' type='button' value='Submit' handle ='getAllServices'/>"+
   "</form>"+
   "<p id = 'getAllServices_div' > </p>"+
   "</div> "+

   "<h3  style = 'margin-left: 400px;'>Get user Service</h3>"+

   "<div class='container'>"+
   "<form id ='getUserServiceForm' >"+
   " <label for='service_uname'>User Name</label>"+
   "  <input type='text' id='user_service_uname' name='username' placeholder=''>"+
   
   "<label for='service_name'>Service Name</label>"+
   "  <input type='text' id='user_service_name' name='serviceName' placeholder=''>"+
   
   "   <input class ='b1' type='button' value='Submit' handle ='getUserService'/>"+
   "  </form>"+

   "<p id = 'getServices_div' > </p>"+
   "</div> "+

   "<h3  style = 'margin-left: 400px;'>Create Service</h3>"+

   "<div class='container'>"+
   "<form id ='createServiceForm'>"+
   " <label for='uname'>User Name</label>"+
   "  <input type='text' id='create_service_uname' name='username' placeholder=''>"+

   "<label for='service_name'>Service Name</label>"+
   "   <input type='text' id='create_service_name' name='serviceName' placeholder=''>"+

   "    <label for='password'>Password</label>"+
   " <input type='password' id='create_service_password' name='password' placeholder=''>"+

   "<label for='Restricted'>Restricted</label>"+
   "<select id='serviceRestricted' name='Restricted'>"+
   " <option value='false'>False</option>"+
   "  <option value='true'>True</option>"+
   

   " </select>"+

   "  <input class ='b1' type='button' value='Submit' handle ='createService'/>"+
   " </form>"+
   "</div> "+
   

   "<h3  style = 'margin-left: 400px;'>Delete Service</h3>"+

   "<div class='container'>"+
   "<form id ='deleteServiceForm' >"+
   " <label for='delete_uname'>User Name</label>"+
   "  <input type='text' id='delete_service_uname' name='username' placeholder=''>"+
   "<label for='service_name'>Service Name</label>"+
   "<input type='text' id='delete_service_name' name='serviceName' placeholder=''>"+
   
   "<label for='oldpassword'>Password</label>"+
   " <input type='password' id='delete_service_oldpassword' name='oldpassword' placeholder=''>"+


   "  <input class ='b1' type='button' value='Submit' handle ='deleteService'/>"+
   " </form>"+
   "</div>" ;
 }
});