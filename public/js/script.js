$(document).ready(function() {
    // console.log($('#studentList'));

    function addStudentDiv(item, parentDiv) {
        // console.log(item);
        var rowDiv = document.createElement('div');
            var imgCol = document.createElement('div');
            var nameCol = document.createElement('div');

            var img = document.createElement('img');
            var nameHeading = document.createElement('h4');
            var idnum = document.createElement('p');

            $(rowDiv).addClass('row student');
            $(imgCol).addClass('col-sm-2 center');
            $(nameCol).addClass('col-sm-10');

            $(img).attr('src', item.img);
            $(nameHeading).text(item.name);
            $(idnum).text(item.id);

            imgCol.append(img);

            nameCol.append(nameHeading);
            nameCol.append(idnum);

            rowDiv.append(imgCol);
            rowDiv.append(nameCol);

            parentDiv.append(rowDiv);
    }

    // GET called
    $.get('getStudents', function(data, status) {
        // console.log(data);
        // console.log(status);

        var studentListContainer = $('#studentList');

        data.forEach((item, i) => {
            addStudentDiv(item, studentListContainer);
        });
    });

    // POST called
    $('#addStudent').click(function() {
        // Get the data from the form
        var name = $('#name').val();
        var idnum = $('#idnum').val();
        var gender = $("input[name='gender']:checked").val();
        
        // console.log(name, idnum, gender);
        var newStudent = {
            name: name,
            id: idnum,
            gender: gender
        };
        
        // THIS PASSES TO THE POST METHOD DEFINED IN INDEX.JS

        $.post('addStudent', newStudent, function(data, status) {
            console.log(data);  // this prints in browser console

            var studentListContainer = $('#studentList');
            addStudentDiv(data, studentListContainer);
        });
    });
});