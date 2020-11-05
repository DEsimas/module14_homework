const date = localStorage.getItem("lastVisitDate");
let name = localStorage.getItem("userName");

if(date == undefined || name == undefined) name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
else alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${date}`)

const curDate = new Date;
localStorage.setItem("lastVisitDate", curDate.getUTCDate() + "." + curDate.getUTCMonth() + "." + curDate.getUTCFullYear());
localStorage.setItem("userName", name);