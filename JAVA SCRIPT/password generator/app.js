//                                                   PASSWORD GENERATOR:

var capletter = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var smallletter =( "abcdefghijklmnopqrstuvwxyz");

var num = ("12345678910");

var special = ("!@#$%^&*");

var match = capletter + smallletter + num + special;

var final = "";

for(let i = 0; i <= 10; i++){
    final += (match[Math.floor(Math.random() * match.length)]);
}

console.log (merge.length)
console.log(final)