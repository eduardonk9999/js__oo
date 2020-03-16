//Objeto Literal
var userOne = {
  email: 'edu@gmail.com',
  name: 'Eduardo',
  login(){
    console.log(this.email, 'has logged in');
  },
  logout(){
    console.log(this.email, 'has logged out');
  }
}

console.log(userOne.name);