const questionList = $('.custom-select');

const postForm = () => {
    jQuery.noConflict();
    const friendName = $('#friendName').val().trim();
    const friendPictureURL = $('#friendPictureURL').val().trim();
    const surveyArray = [];
    const regex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/

    for (const question of questionList) {
        surveyArray.push(question.value);
    }

    const newFriend = {
        name: friendName,
        photo: friendPictureURL,
        scores: surveyArray
    };

    if(friendName && friendPictureURL && regex.test(friendPictureURL)) {
        $.post('/api/friends', newFriend).then(function (chosenFriend) {
            $('#foundFriendName').text(chosenFriend.name);
            $('#foundFriendPic').attr('src', chosenFriend.photo);
            jQuery('#foundFriendModal').modal('show');
        });
    } else {
        jQuery('#errorModal').modal('show');
    }
}


$('#formSubmit').on('click', postForm);

$('#modalClose').on('click', function() {
    for (const question of questionList) {
        $(question).val('1');
    }
    $('#friendName').val('');
    $('#friendPictureURL').val('');
});