const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.round(Math.random() * 100);
    if(num % 2 == 0)
      resolve(num);
    else
      reject(num);
  }, 3000);
});

promise
  .then(data => {
  	console.log(`Завершено успешно. Сгенерированное число - ${data}`);
})
  .catch(data => {
  	console.log(`Завершено с ошибкой. Сгенерированное число - ${data}`);
})


// Задание выполнено неверно. Нет корректной обработки Promise (функций then и catch), вывода как указано в условии, с обозначением, завершился Promise с ошибкой или нет. Кроме того, задержка в 3 секунды должна быть внутри самого Promise, у вас она прописана в другом месте. Выше исправила код на верный