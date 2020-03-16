class User {
  constructor(email, name){
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  //metodo
  login() {
    console.log(this.email, 'just logged in');
    return this;
  }
  //metodo
  logout() {
    console.log(this.email, 'just logeed out');
    //vamos dar retorn aqui e nos outros para podermos usar o encadeamento, ou seja o return.this, retorna a instancia do objeto.
    return this;
  }
  updateScore(){
    this.score++;
    console.log(this.name, 'score is now', this.score)
    return this;
  }
}

var userOne = new User('eduUm@gmail.com', 'Edu');
var userTwo = new User('eduDois@gmail.com', 'Eduardo');

userOne.login().updateScore().updateScore().logout();



//no userOne estamos usando o metodo de encadeamento
// userOne.login().logout();
// userTwo.logout();

