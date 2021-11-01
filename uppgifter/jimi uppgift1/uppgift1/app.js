const date = new Date()

document.body.appendChild( createDivElement('Alma', ' Andersson', ' @alma', time, 'Hej på dig!') );
document.body.appendChild( createDivElement('Pelle', ' Pärsson', ' @pelle', time, 'Jag är pelle..') );

function createDivElement(firstname, lastname, username, time, message) {

const time = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const div1 = document.createElement("div1");
  const div2 = document.createElement("div2");
  const div3 = document.createElement("div3")
  const atag = document.createElement("a");
  const itag = document.createElement("i");
  const spantag = document.createElement("span");

  div1.setAttribute('class', 'div11');

  div2.setAttribute("class", "div22");

  div3.setAttribute("class", "div33");

  atag.setAttribute("href", "atag")


div1.appendChild(div2);
div2.appendChild(atag);
atag.append(firstname, lastname);
atag.appendChild(itag);
itag.append(username);
div2.appendChild(spantag);
spantag.append(time);
div1.appendChild(div3);
div3.append(message);

  return div1;
}