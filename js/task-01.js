const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

function categoriesCount() {
    console.log(`В списке ${categories.children.length} категории`);
}
categoriesCount();

function categoriesInfo() {
    items.forEach(item => {
        console.log(`Категория ${item.children[0].innerHTML}`);
        console.log(`Количество элементов: ${item.children[1].childElementCount}`);
    })
}

categoriesInfo();