// script.js
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const dataTable = document.getElementById('dataTable');

    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();
        const rows = dataTable.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            const rowData = rows[i].innerText.toLowerCase();
            if (rowData.includes(searchValue)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });
});
