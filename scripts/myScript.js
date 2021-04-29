
var id = 0;
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
            $('._radio').prop('checked',false);
        }
    });
    $('.toUpdate').click(function(){
        var tr =  $(this).parent().parent();
        console.log(tr.html());
        // console.log('working..');
    });
}
function reset(){

    $('#t_body').empty();
    $('#_reset').prop('disabled',true);
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
    temp = "<tr data-id = "+ (id++) +" ><td>"+_name+"</td><td>"+gender+"</td><td>"+age+"</td><td>"+city+"</td><td><a href='#' class='toUpdate'>Update</a>&nbsp; / &nbsp; <a href='#' class='toRemove'>Remove</a></td></tr>"
    $('#t_body').append(temp);
    $('#name').val('');
    $('#age').val('');
    $('#_city').val('');
    eventBinding();
    handleButtons();
}

function handleButtons(){
    
        $('#_update').prop('disabled',true);
        $('#_reset').prop('disabled',false);
    
}