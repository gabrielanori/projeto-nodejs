"use strict";!function(){console.log("Starting APP...");var d="http://localhost:7000/contacts",o={fields:document.querySelectorAll("input"),buttonAdd:document.querySelector(".btn-add"),tableContacts:document.querySelector(".table-contacts tbody")},t=function(t){t.preventDefault();var e=0,n={};o.fields.forEach(function(t){0==t.value.length?(t.classList.add("error"),e++):(t.classList.remove("error"),n[t.id]=t.value)}),0<e?document.querySelector(".error").focus():(c(n),a())},i=function(t){console.error("ERROR:",t.message)},c=function(t){var e={method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-type":"application/json"})};fetch(d,e).then(s).catch(i)},s=function(){var t={method:"GET",headers:new Headers({"Content-type":"application/json"})};fetch("".concat(d,"?_sort=id&_order=desc"),t).then(function(t){return t.json()}).then(e).catch(i).catch(i)},e=function(t){o.tableContacts.innerHTML=t.map(function(t){var e=t.id,n=t.name,o=t.email,c=t.phone;return"<tr>\n                <td>".concat(e,"</td>\n                <td>").concat(n,"</td>\n                <td>").concat(o,"</td>\n                <td>").concat(c,'</td>\n                <td>\n                    <a href="#" data-action="edit" data-id="').concat(e,'">Editar</a> | \n                    <a href="#" data-action="remove" data-id="').concat(e,'">Excluir</a>\n                </td>\n            </tr>')}).join("")},a=function(){o.fields.forEach(function(t){t.value=""}),document.querySelector("input").focus()},n=function(t){t.preventDefault();var e,n,o,c=t.target.dataset,a=c.action,r=c.id;console.log(a,r),"edit"==a&&(e=r,console.log(e)),"remove"==a&&(n=r,o={method:"DELETE",headers:new Headers({"Content-type":"application/json"})},fetch("".concat(d,"/").concat(n),o).then(s).catch(i))};s(),o.buttonAdd.onclick=t,o.tableContacts.onclick=n}();