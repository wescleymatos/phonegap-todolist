(function(){
    var $form = document.querySelector('form'),
        $ul = document.querySelector('ul.todo-list'),
        $task = document.querySelector('#task');


    $form.addEventListener('submit', function(e) {
        e.preventDefault();

        var $li = document.createElement('li'),
            $input = document.createElement('input'),
            $span = document.createElement('span');


        $input.type = 'checkbox';
        $span.className = 'text';

        $span.appendChild(document.createTextNode($task.value)); 
        $li.appendChild($input);
        $li.appendChild($span);
        $ul.appendChild($li);
    });

}());