 class User{
     #name;
     constructor(name, login, age){
         this.#name = name;
         this.login = login;
         this.age = age;
     }
     getName(isAdmin){
         return isAdmin ? this.#name : 'Permission denied';
     }

     ChangeName(names, logins) {
      if (logins){
         console.log('Name Changed from'+' '+ this.#name+' '+ 'to'+' ' + names);
     } else{
         console.log('Permission denied');
      }
     }
 }

 class Admin extends User{
     #isAdmin=true;
     constructor(name,login,age, isAdmin){
         super(name,login,age)
         this.#isAdmin=isAdmin;
     }
     getUserName(user){
         if (this.#isAdmin){
         console.log(user.getName(true));
         }
     }
 }
 let users1 = new User('Mike', 'MK_18', 18);
 let users2 = new User('', 'NRG', 22);

 console.log(users1.login);
 console.log(users1.age);
 console.log(users2.login);
 console.log(users2.age);
 console.log(users1.getName(true));
 console.log(users2.getName(true));
 console.log(users2.getName(false));
 console.log(users1.ChangeName('Bill', '123'));
 let admin = new Admin('Admin', 'admin123', 30, true);
 admin.getUserName(users1);

class Users{
    #phone;
    constructor(name,phone){
        this.name=name;
        this.#phone=phone;

        
    }
   
    getPhone(isAdmin) {
        const splitPassword = this.#phone.split('-');
        const onePart = splitPassword[0];
        const nextPart= splitPassword[splitPassword.length-1];
        // console.log(`${onePart} -******-${nextPart}`);
        return isAdmin ? this.#phone : `${onePart} -******-${nextPart}`
        
    }
}

let user1= new Users('Mike', '067-888-88-99');
let user2 = new Users('Tom', '099-888-88-99')
console.log(user1.getPhone(true));
console.log(user2.getPhone(true));
console.log(user1.getPhone(false));
