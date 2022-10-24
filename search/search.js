function onSearch(value) {
    if (value == "ao nam" || value == 'Ao nam' || value == 'Áo nam' || value == 'áo nam' || value == 'thoi trang nam' || value == 'nam'|| value == 'Nam' || value == 'Thời trang nam' || value == 'Thoi trang nam') {
        window.location.href = './Productnam.html'
    }
    if (value == "thoi trang nu" || value == "nu" || value == 'thời trang nữ' || value == 'Thời trang nữ' || value == 'áo nữ' || value == 'Áo nữ') {
        window.location.href = './Productnu.html'
    }
    if (value == "ao" || value == 'Ao' || value == 'áo' || value == 'Áo') {
        window.location.href = './Productao.html'
    }
    if (value == "Thiết bị điện tử" || value == 'thiet bi dien tu' || value == 'dien tu' || value == 'Thiet bi dien tu' || value == "thiết bị điện tử" ) {
        window.location.href = './Productelectronic.html'
    }
    if (value == "may tinh" || value == 'máy tính' || value == 'computer' || value == 'Computer' || value == 'Máy tính' || value == 'May tinh' ) {
        window.location.href = './Productcomputer.html'
    }


    
}

const inputSearch = $('#search__banbe')

inputSearch.addEventListener('keyup', (e) => {
    const value = e.target.value
    if (e.code == "Enter") {
        onSearch(value)
    }
})

const btnSearch = $('#btn-search')

btnSearch.addEventListener('click', () => {
    const value = inputSearch.value
    onSearch(value)
})