const userNameTextField = document.getElementById('username')
const addUserBtn = document.getElementById('addUser')
const recorddata = document.getElementById('records')

let userArray =[] //data store

displayData()

addUserBtn.onclick =()=>{  //1
	//alert(userNameTextField.value)
    const name =userNameTextField.value
    // console.log(name)
    userArray.push({"name":name})  //object
    //console.log(userArray)
    savaData(userArray) //function call

}

function savaData(userArray) //2
{
//   console.log("save data",userArray) //object
   let strdata = JSON.stringify(userArray)
  // console.log(strdata)
  localStorage.setItem('username',strdata)
  displayData();
}

//data get localstore 3
let objstr= localStorage.getItem('username')
// console.log(objstr)

if(objstr != null){
  userArray = JSON.parse(objstr); //object
}

// console.log(userArray)

function displayData() {
  let data = "";
  userArray.forEach((item, index) => {
    data += `<tr>
    <td>${index +1} </td>
     <td>${item.name} </td>
      <td>
        <a href="#" onclick='EditInfo(${index})'>Edit</a>
         <a href="#" onclick='DeleteInfo(${index})'>Delete</a>
      
      </td>
      </tr>
    
    
    `;
    //console.log(data)
  });
  recorddata.innerHTML =data
} //4
displayData();



function DeleteInfo(id)
{

  //  alert(id)
  userArray.splice(id, 1); 
  savaData(userArray);
   alert(id)
}

function EditInfo(id)
{

  alert(id)
}