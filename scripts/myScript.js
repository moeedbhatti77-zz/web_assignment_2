var object;
var id = 0;
($)(function(){
    if(object == null || object == '')
    {
        $('tbody').empty();
        $('#_update').prop('disabled',true);
        $('#_reset').prop('disabled',true);
    }
    eventBinding();
});
function eventBinding()
{
    $('#_add').click(function () { add(); });
    $('#_reset').click(function (){ reset();  });
}
function reset(){
    object = '';
    $('#t_body').empty();
}
function add(){

    

    _name = $('#name').val();
    age = $('#age').val();
    city = $('#_city').val();

    if(_name.length > 10)
    {
        $('#name').val('');
        alert('Name must not excede 10 characters');
        
        return;
    }

    if(_name== '' || age== '' || city=='')
    {
        alert('Cannot Insert Empty Values');
        return;
    }

    // console.log(_name,age,city);

    temp = "<tr data-id = "+ (id++) +" ><td>"+_name+"</td><td>Male</td><td>"+age+"</td><td>"+city+"</td><td><a href='#'>Update</a>&nbsp; / &nbsp; <a href='#'>Remove</a></td></tr>"
    $('#t_body').append(temp);
    $('#name').val('');
    $('#age').val('');
    $('#_city').val('');
    // if($('radio').is(':checked')){
    //     console.log($(this).val());
    // }
    // $('input:radio').forEach(function (e) {
    //     if(e.is(':checked'))
    //     {
    //         gender = e.val();
    //     }
    // });
    handleButtons();
}
function handleButtons(){
    if(object != '' || object!=null)
    {
        $('#_update').prop('disabled',true);
        $('#_reset').prop('disabled',false);
    }
}

function remove(){
    
}