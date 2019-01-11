$(function(){
    $.getJSON('api', updateFeedback)

    $('.feedback-form').submit((e)=>{
        e.preventDefault();
        $.post('api',{
            name: $('#feedbackForm-name').val(),
            title: $('#feedbackForm-title').val(),
            message: $('#feedbackForm-message').val()
        }, updateFeedback)
    })
    $('.feedback-messages').on('click', (e)=> {
        if (e.target.className == 'deleteButton') {
          $.ajax({
            url: 'api/' + e.target.id,
            type: 'DELETE',
            success: updateFeedback
          }); 
        }; 
    }); 
    function updateFeedback(data) {
        var message = '';
        $.each(data,(key, item)=>{
            message += `
            <div class="feedback-item item-list media-list">
                <div class="feedback-item media">
                <button type="button" class="close bg-danger" aria-label="Close"><span id="${key}" class="deleteButton" aria-hidden="true">&times;</span></button></div>
                    <div class="feedback-info media-body">
                        <div class="feedback-head">
                            <div class="feedback-title">${item.title}<small class="feedback-name label label-success">${item.name}</small></div>
                        </div>
                        <div class="feedback-message">${item.message}</div>
                    </div>
                </div>
            </div>
           `
        });
        $('.feedback-messages').html(message)
    }
})