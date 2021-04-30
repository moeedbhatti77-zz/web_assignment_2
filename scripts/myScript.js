($)(function(){
    $('tbody').empty();
    $('#_update').prop('disabled',true);
    $('#_reset').prop('disabled',true);
    $('#_add').click(function () { add(); });
    $('#_reset').click(function (){
         reset();
         $('._radio').prop('checked',false);
    });
});
function eventBinding()
{
    $('.toRemove').click(function(){
        $(this).parent().parent().remove();
        if($('#t_body').html()== '' || $('#t_body').html()== null)
        {
            $('#_reset').prop('disabled',true);
            $('#_update').prop('disabled',true);
            $('._radio').prop('checked',false);
            $('#_add').prop('disabled',false);
            _name = $('#name').val('');
            age = $('#age').val('');
            city = $('#_city').val('');
        }
    });
    $('.toUpdate').click(function(){
        $('#_update').prop('disabled',false);
        $('#_add').prop('disabled',true);
        $('#_reset').prop('disabled',false);
        var tr =  $(this).parent().parent().children();
        for(i=0;i<tr.length-1;i++)
        {
             console.log(tr[i].innerText);
        }
        _name = $('#name').val(tr[0].innerText);
        age = $('#age').val(tr[2].innerText);
        city = $('#_city').val(tr[3].innerText);
        $("input[name=radio][value=" + tr[1].innerText + "]").prop('checked', true);
        
        $('#_update').click(function(){
            _name = $('#name').val();
            age = $('#age').val();
            city = $('#_city').val();
            gender = $('._radio:checked').val();
            // if(_name== '' || age== '' || city=='' || _name== null || age== null || city == null)
            // {
            //     alert('Cannot Insert Empty Values');
            //     return;
            // }
            // if(_name.length > 10)
            // {
            //     $('#name').val('');
            //     alert('Name must not excede 10 characters');
            //     return;
            // }
            // if(age < 10 || age > 50)
            // {
            //     alert('Age must be 10-50');
            //     return;
            // }
            // if(gender == '' || gender == null)
            // {
            //     alert('Select Gender');
            //     return;
            // }
            // if(city == '' || city == null)
            // {
            //     alert('Select or Enter City');
            //     return;
            // }
            tr[0].innerText = _name;
            tr[2].innerText = age;
            tr[3].innerText = city;
            tr[1].innerText = gender;
            _name = $('#name').val('');
            age = $('#age').val('');
            city = $('#_city').val('');
            $('#_update').prop('disabled',true);
            $('#_add').prop('disabled',false);
            $('._radio').prop('checked',false);
        });
    });
}
function reset(){

    $('#t_body').empty();
    $('#_reset').prop('disabled',true);
    _name = $('#name').val('');
    age = $('#age').val('');
    city = $('#_city').val('');
}
function add(){
    _name = $('#name').val();
    age = $('#age').val();
    city = $('#_city').val();
    gender = $('._radio:checked').val();
    if(_name== '' || age== '' || city=='' || _name== null || age== null || city == null)
    {
        alert('Cannot Insert Empty Values');
        return;
    }
    if(_name.length > 10)
    {
        $('#name').val('');
        alert('Name must not excede 10 characters');
        return;
    }
    if(age < 10 || age > 50)
    {
        alert('Age must be 10-50');
        return;
    }
    if(gender == '' || gender == null)
    {
        alert('Select Gender');
        return;
    }
    if(city == '' || city == null)
    {
        alert('Select or Enter City');
        return;
    }
    temp = "<tr><td>"+_name+"</td><td>"+gender+"</td><td>"+age+"</td><td>"+city+"</td><td><a href='#' class='toUpdate'>Update</a>&nbsp; / &nbsp; <a href='#' class='toRemove'>Remove</a></td></tr>"
    $('#t_body').append(temp);
    $('#name').val('');
    $('#age').val('');
    $('#_city').val('');
    $('._radio').prop('checked',false);
    eventBinding();
    handleButtons();

}

function handleButtons(){
    $('#_update').prop('disabled',true);
    $('#_reset').prop('disabled',false);
}