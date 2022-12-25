function GetItems() {
    let basket = JSON.parse(localStorage.getItem('pr-zoom'));

    if(basket.length === 0) {
        document.getElementById('empty').classList.remove('d-none')
    }
    else{
        document.querySelector('.table').classList.remove('d-none')
        let html = '';
        for(let item of basket) {
            html += `
                <tr>
                    <td style="width:20%">
                        <img src=${item.Image} alt="">
                    </td>
                    <td>
                    <div class="number">
                    <span class="minus">-</span>
                    <input type="text" value=${item.Count}>
                    <span class="plus">+</span>
                    </div>
                    </td>
                    <td>${item.Price}</td>
                </tr>
            `
        }
    
        document.querySelector('.table tbody').innerHTML = html
    }

   

}
GetItems();






$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});