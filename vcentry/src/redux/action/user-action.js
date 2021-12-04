export function addUser(data){
  console.log(data)
  return{
    type : "ADD_USER_DATA",
    value : data
  }
}