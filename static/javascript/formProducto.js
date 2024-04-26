$(document).ready(function(){
    $('#productForm').validate({
        rules: {
            productName: {
                required: true,
                minlength: 3
            },
            productPrice: {
                required: true,
                number: true,
                min: 1
            }
        },
        messages: {
            productName: {
                required: 'Por favor, ingresa un nombre',
                minlength: 'El nombre debe tener al menos 3 caracteres'
            },
            productPrice: {
                required: 'Por favor, ingresa un precio',
                number: 'El precio debe ser un numero',
                min: 'El precio deb ser mayor o igual a 1'
            }
        },
        submitHandler: function(form){
            addProduct();
            form.reset();
            return false;
        }
    })
});

function addProduct(){
    let productName = $('#productName').val();
    let productPrice = $('#productPrice').val();
    $('#productsTable tbody').append(`<tr>
                                        <td>${productName}</td>
                                        <td>${productPrice}</td>
                                        <td>
                                            <button class="btn btn-primary btn-sm edit-product" onclick="editProduct(this)"><i> class="bi bi-pencil"</i></button>
                                            <button class="btn btn-primary btn-sm edit-product" onclick="deleteProduct(this)"><i class="bi bi-trash"></i></button>
                                        </td>`)
}

function editProduct(button){
    var row = $(button).closest('tr');
    var cols = row.children('td');
    if (button.textContent === 'Editar'){
        $(cols[0]).html(`<input type="text" value="${$(cols[0]).text()}">`)
        $(cols[1]).html(`<input type="number" value="${$(cols[1]).text()}">`)
        $(button).text('Guardar').removeClass('btn-info').addClass('btn-success');
        $(button).next().text('Cancelar').removeClass('btn-danger').addClass('btn-warning');
    } else {
        $(cols[0]).text($(cols[0]).find(`input`).val());
        $(cols[1]).text($(cols[1]).find(`input`).val());
        $(button).text('Editar').removeClass('btn-success').addClass('btn-primary');
        $(button).next().text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
    }
}


function deleteProduct(button){
    if (button.textContent === 'Cancelar'){
        var row = $(button).closest('tr');
        var cols = row.children('td');
        $(cols[0]).text($(cols[0]).find('input').val());
        $(cols[1]).text($(cols[0]).find('input').val());
        $(button).prev().text('Editar').removeClass('btn-success').addClass('btn-info');
        $(button).text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
    } else {
        $(button).closest('tr').remove();
    }
}








