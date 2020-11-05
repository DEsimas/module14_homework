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
    list:[
        {name: undefined, age: undefined, prof: undefined, lang: undefined},
        {name: undefined, age: undefined, prof: undefined, lang: undefined},
    ]
};

for(let i = 0; i < students.length; i++)
{
    const name = students[i].querySelector("name");
    const firstName = name.querySelector("first");
    const secondName = name.querySelector("second");
    const age = students[i].querySelector("age");
    const prof = students[i].querySelector("prof");
    const lang = name.getAttribute("lang");

    result.list[i].name = firstName.textContent + ' ' + secondName.textContent;
    result.list[i].age = age.textContent;
    result.list[i].prof = prof.textContent;
    result.list[i].lang = lang.textContent;
}

console.log(result); 