var items = [];

function updateList() {
    items.sort();

    const list = document.getElementById('itemList');
    list.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

document.getElementById('itemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value.trim();

    if (newItem) {
        items.push(newItem);
        
        updateList();
        itemInput.value = '';
    }
    return false;
});