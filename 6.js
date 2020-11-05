const getNum = () => {
  return new Promise((resolve, reject) => {
    let num = Math.round(Math.random() * (100 - 1) + 1);
    if(num % 2 == 0)
      resolve(num);
    else
      reject(num);
  });
}

const generate = async () => {
  const result = await getNum();
  console.log(result);
}

setTimeout(generate(), 3000);