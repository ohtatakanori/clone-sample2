let btn = document.getElementById('btn');
let delBtn = document.getElementById('deleteBtn');

btn.addEventListener(`click`, function(){
    let name = document.getElementById('name').value;
    let user = document.getElementById('user');

    if (name !== "") {
        user.textContent = "登録した名前は 「" + name + "」 さんです。";
    }
});

delBtn.addEventListener('click', function() {
    let user = document.getElementById('user');

    user.textContent = "";
});
