var pw = (prompt("What is the password?"));

console.log(pw);
if (pw == "bake") {
document.write('Hello!');
} else {
  function alertWithoutNotice(message){
    setTimeout(function(){
        alert('INCORRECT');
    }, 1000);
}
};
