const XMLstring = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list> `

const parser = new DOMParser();

const xml = parser.parseFromString(XMLstring, "text/xml");

const list = xml.querySelector("list");

const students = list.querySelectorAll("student");

const result = {
    list:[]
};

for(let i = 0; i < students.length; i++)
{
    const name = students[i].querySelector("name");
    const firstName = name.querySelector("first");
    const secondName = name.querySelector("second");
    const age = students[i].querySelector("age");
    const prof = students[i].querySelector("prof");
    const lang = name.getAttribute("lang");

    result.list.push({
      name: firstName.textContent + ' ' + secondName.textContent,
      age: age.textContent,
      prof: prof.textContent,
      lang: lang
    });
}

console.log(result); 

// Задание выполнено с ошибкой - у вас неверно считывается атрибут lang, в консоль в свойстве lang выводится undefined. Ошибка в том, что lang - не отедельный узел, а атрибут узла. Поэтому у него нет свойства textContent.
// Кроме того, есть небольшое замечание - не стоит делать заготовки в массиве list объекта result под точное количество студентов, т.к. в реальных условиях вы почти никогда не знаете, сколько объектов вы получите в отчете от сервера. Нужно писать код максимально универсальным и гибким, чтобы он работал верно при различных входных данных. Сейчас, если с сервера придет XML объект с одним узлом student, у вас выведется ещё и пустой объект со значениями undefined
// Выше исправила