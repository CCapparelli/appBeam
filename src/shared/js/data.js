const userName = 'admin';
const userMail = 'admin@acme.com';

const datCategories = [
    {"id":"list-1","name":"List 1"},
    {"id":"list-2","name":"List 2"},
    {"id":"list-3","name":"List 3"}
];
const datProducts = [
    {"id":"item-1","listId":"list-1","name":"Item 1","price":"100","desc":"Description"},
    {"id":"item-2","listId":"list-2","name":"Item 2","price":"200","desc":"Description"},
    {"id":"item-3","listId":"list-2","name":"Item 3","price":"300","desc":"Description"},
    {"id":"item-4","listId":"list-3","name":"Item 4","price":"400","desc":"Description"},
    {"id":"item-5","listId":"list-3","name":"Item 5","price":"500","desc":"Description"},
    {"id":"item-6","listId":"list-3","name":"Item 6","price":"600","desc":"Description"}
];

var currentList, currentItem, useConnected;