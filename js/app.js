function bt_categorias() {
    var element = document.getElementById('bt_cat');
    element.classList.toggle("bi-chevron-compact-up");
    element.classList.toggle("bi-chevron-compact-down");
    document.getElementById('spaco_cat').classList.toggle('d-none');
}