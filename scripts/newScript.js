var myData = [] ;
var id = 0;
($)(function(){
    $('tbody').empty();
    $('#_update').prop('disabled',true);
    $('#_reset').prop('disabled',true);
    $('#_add').click(function () { add(); });
    $('#_update').click(function () { changeRow() });
    $('#_reset').click(function (){
         reset();
         $('._radio').prop('checked',false);
    });
    $('#index_num').hide();
});
function add()
{
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
    
    myData.push({
        id : id,
        name : _name,
        age : age,
        city : city,
        gender : gender
    });
    id++;
    update_table();
    handleButtons();
}

function remove(temp){
    
    x = $(temp).parent().parent().data('id');
    myData = myData.filter(function( obj ) {
        return obj.id !== x;
    });
    update_table();
    handleButtons();
}

function update(y){
    x = $(y).parent().parent().data('id');      
        _name = myData[x].name;
        age = myData[x].age;
        gender = myData[x].gender;
        city = myData[x].city;
    $('#name').val(_name);
    $('#age').val(age);
    $('#_city').val(city);
    $("input[name=radio][value=" + gender + "]").prop('checked', true);
    $('#_update').prop('disabled',false);
    $('#index_num').html(x);
    return;
}

function update_table(){
    update_index();
    $('#t_body').empty();
    myData.forEach(function(value){
        temp = "<tr data-id = "+value.id+"><td>"+value.name+"</td><td>"+value.gender+"</td><td>"+value.age+"</td><td>"+value.city+"</td><td><a href='#' class='toUpdate' onClick='update(this)'>Update</a>&nbsp; / &nbsp; <a href='#' class='toRemove' onClick='remove(this)'>Remove</a></td></tr>"
        $('#t_body').append(temp);
        $('#name').val('');
        $('#age').val('');
        $('#_city').val('');
        $('._radio').prop('checked',false);
    });
    // $(".toUpdate").click(function(){ update(this) });
}

function handleButtons(){
    $('#_update').prop('disabled',true);
    $('#_reset').prop('disabled',false);
    if(myData.length == 0){
        $('#_reset').prop('disabled',true);
    }
}

function reset(){
    myData = [];
    id = 0;
    $('#t_body').empty();
    $('#_reset').prop('disabled',true);
    $('#name').val('');
    $('#age').val('');
    $('#_city').val('');
}

function changeRow(){
    index = $("p#index_num").text();
    _name = $('#name').val();
    age = $('#age').val();
    city = $('#_city').val();
    gender = $('._radio:checked').val();

    myData[index].name = _name;
    myData[index].age = age;
    myData[index].city = city;
    myData[index].gender = gender;
    $("#_update").prop('disabled',true);
    update_table();
    return;
}

function update_index(){
    for(j=0;j<myData.length;j++)
    {
        myData[j].id = j;
    }
}