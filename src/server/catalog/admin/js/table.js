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
        tr.setAttribute('class', 'listRow');

        var td = tr.insertCell();
        td.appendChild(document.createTextNode(item.name));
        td.setAttribute('class', 'listName');
        td.setAttribute('colSpan', '3');

        td = tr.insertCell();
        td.appendChild(getUpdate(item, null));

        td = tr.insertCell();
        td.appendChild(getCreate(null));

        td = tr.insertCell();
        td.appendChild(getDelete(item, null));

        const prods = datProducts.filter(x => x.catId === item.id);
        prods.forEach(prod => {
            tr = tbl.insertRow();
            tr.setAttribute('id', prod.id);
            tr.setAttribute('catId', item.id);
            tr.setAttribute('class', 'itemRow');

            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.name));
            td.setAttribute('class', 'itemName');
            td.setAttribute('class', 'tableCol');
 
            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.desc));
            td.setAttribute('class', 'itemDesc');
 
            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.price));
            td.setAttribute('class', 'itemPrice');
 
            td = tr.insertCell();
            td.appendChild(getUpdate(item, prod));

            td = tr.insertCell();
            td.appendChild(getCreate(item));
    
            td = tr.insertCell();
            td.appendChild(getDelete(item, prod));
        });
    });
    el.appendChild(tbl);
}

function getCreate(parent) {
    const parentId = parent ? parent.id : -1;
    const msg = parentId === -1 ? 'Nova lista...' : `Novo item em ${parent.name}...`;
    const result = document.createElement('img');
    result.setAttribute('class', 'create');
    result.setAttribute('title', msg);
    result.setAttribute('onclick', `create(${parentId});`);
    result.src = '../../../img/plus.svg';
    return result;
}
function getUpdate(parent, child) {
    const childId = child ? child.id : -1;
    const msg = childId === -1 ? `Editar ${parent.name}...` : `Editar ${child.name}...`;
    const result = document.createElement('img');
    result.setAttribute('class', 'update');
    result.setAttribute('title', msg);
    result.setAttribute('onclick', `update(${parent.id},${childId});`);
    result.src = '../../../img/edit.svg';
    return result;
}
function getDelete(parent, child) {
    const childId = child ? child.id : -1;
    const msg = childId === -1 ? `Deletar ${parent.name}...` : `Deletar ${child.name}...`;
    const result = document.createElement('img');
    result.setAttribute('class', 'delete');
    result.setAttribute('title', msg);
    result.setAttribute('onclick', `delete(${parent.id},${childId});`);
    result.src = '../../../img/minus.svg';
    return result;
}

