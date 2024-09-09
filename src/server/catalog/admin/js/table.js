window.onload = function() {
    const root = document.getElementById('categories');
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

        const prods = datProducts.filter(x => x.listId === item.id);
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
            td.setAttribute('class', 'tableCol');
 
            td = tr.insertCell();
            td.appendChild(document.createTextNode(prod.price));
            td.setAttribute('class', 'itemPrice');
            td.setAttribute('class', 'tableCol');
 
            td = tr.insertCell();
            td.appendChild(getUpdate(item, prod));
            td.setAttribute('class', 'tableCol');

            td = tr.insertCell();
            td.appendChild(getCreate(item));
            td.setAttribute('class', 'tableCol');
    
            td = tr.insertCell();
            td.appendChild(getDelete(item, prod));
            td.setAttribute('class', 'tableCol');
        });
    });
    el.appendChild(tbl);
}

function getCreate(parent) {
 //   const parentId = parent ?? parent.id;
    const msg = (parent === null) ? 'Nova lista...' : `Novo item em ${parent.name}...`;
    const result = document.createElement('img');
    result.setAttribute('class', 'create');
    result.setAttribute('title', msg);
    result.setAttribute('onclick', `create("${parent}");`);
    result.src = '../../../img/plus.svg';
    return result;
}
function getUpdate(parent, child) {
    const childId = child ? child.id : -1;
    const msg = childId === -1 ? `Editar ${parent.name}...` : `Editar ${child.name}...`;
    const result = document.createElement('img');
    result.setAttribute('class', 'update');
    result.setAttribute('title', msg);
    result.setAttribute('onclick', `update("${parent.id}","${childId}");`);
    result.src = '../../../img/edit.svg';
    return result;
}
function getDelete(parent, child) {
    const childId = child ? child.id : -1;
    const msg = childId === -1 ? `Deletar ${parent.name}...` : `Deletar ${child.name}...`;
    const result = document.createElement('img');
    result.setAttribute('class', 'delete');
    result.setAttribute('title', msg);
    result.setAttribute('onclick', `delete("${parent.id}","${childId}");`);
    result.src = '../../../img/minus.svg';
    return result;
}

function create(parent) {
    alert(parent);
    currentItem = null;
    currentList = null;
    if (parent === null) {
        window.location.href = "parent.html";
    } else {
        currentList = datCategories.filter(x => x.listId === parent.id);
        window.location.href = "child.html";
    }
}