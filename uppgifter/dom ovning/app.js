/*
const body = document.body
const div = document.createElement("div");
const div2 = document.createElement("div2");
const div3 = document.createElement("div3");
const a = document.createElement("a");
const i = document.createElement("i");
const span = document.createElement("span");

div.setAttribute("class", "post");

div2.setAttribute("class", "post-meta");

div3.setAttribute("class", "post-content");

a.setAttribute("href", "#")

body.append(div);
div.append(div2);
div2.appendChild(a);
a.append("Alma Andersson");
a.appendChild(i);
i.append(" @alma");
span.append("2021-09-24 08:38:23")
div2.appendChild(span);
div.append(div3)
div3.append("Hej på dig!")
*/

document.body.append( createTestElement('Alma', 'Andersson', 'alma', new Date(), 'Hej på dig!') );

document.body.append( createTestElement('Pelle', 'Pärsson', 'pelle', new Date(), 'Jag är pelle..') );


function createTestElement(message) {
    const body = document.body
    const div = document.createElement("div");
    const div2 = document.createElement("div2");
    const div3 = document.createElement("div3");
    const a = document.createElement("a");
    const i = document.createElement("i");
    const span = document.createElement("span");
    
    div.setAttribute("class", "post");
    
    div2.setAttribute("class", "post-meta");
    
    div3.setAttribute("class", "post-content");
    
    a.setAttribute("href", "#")
    
    
    body.append(div);
    div.append(div2);
    div2.appendChild(a);
    a.append("Alma Andersson");
    a.appendChild(i);
    i.append(" @alma");
    span.append("2021-09-24 08:38:23")
    div2.appendChild(span);
    div.append(div3)
    div3.append("Hej på dig!")

  return message;
}
