window.onload = function() {
    const root = document.getElementById('categories');
    datCategories.forEach(item => {
        //const divEl = document.createElement("div");
        //divEl.setAttribute("class", "category");

        //const aEl = document.createElement("a");
        //aEl.setAttribute("class", "categoryName");
        //aEl.innerText = item.name;
        
        //divEl.appendChild(aEl);

        //root.appendChild(divEl);
    });
    tableCreate(root);
};

function tableCreate(el) {
    const tbl  = document.createElement('table');
    tbl.setAttribute('class', 'table');
    
    datCategories.forEach(item => {
        var tr = tbl.insertRow();
        tr.setAttribute('id', item.id);
        tr.setAttribute('class', 'categoryRow');

        var td = tr.insertCell();
        td.appendChild(getInputText(item.name, 'catNameInput'));
        td.setAttribute('colSpan', '3');
        td.setAttribute('class', 'catName');

        td = tr.insertCell();
        td.appendChild(getUpdate('update'));

        td = tr.insertCell();
        td.appendChild(getCreate('create'));

        td = tr.insertCell();
        td.appendChild(getDelete('delete'));

        const prods = datProducts.filter(x => x.catId === item.id);
        prods.forEach(prod => {
            tr = tbl.insertRow();
            tr.setAttribute('id', prod.id);
            tr.setAttribute('catId', item.id);

            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.name));
            td.setAttribute('class', 'prodName');
 
            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.desc));
            td.setAttribute('class', 'prodDesc');
 
            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.price));
            td.setAttribute('class', 'prodPrice');
 
            td = tr.insertCell();
            td.appendChild(getUpdate('update'));

            td = tr.insertCell();
            td.appendChild(getCreate('create'));
    
            td = tr.insertCell();
            td.appendChild(getDelete('delete'));
        });
    });
    el.appendChild(tbl);
}

function getInputText(value, className) {
    const result = document.createElement('input');
    result.setAttribute('class', className);
    result.type = 'text';
    result.value = value;
    return result;
}
function getCreate(className) {
    const result = document.createElement('img');
    result.setAttribute('class', className);
    result.src = '../../img/plus.svg';
    return result;
}
function getUpdate(className) {
    const result = document.createElement('img');
    result.setAttribute('class', className);
    result.src = '../../img/edit.svg';
    return result;
}
function getDelete(className) {
    const result = document.createElement('img');
    result.setAttribute('class', className);
    result.src = '../../img/minus.svg';
    return result;
}

