const postForm = () => {
    const questionList = $('.custom-select');
    const friendName = $('#friendName').val().trim();
    const friendPictureURL = $('#friendPictureURL').val().trim();
    const surveyArray = [];

    for (const question of questionList) {
        surveyArray.push(question.value);
    }

    const newFriend = {
        name: friendName,
        photo: friendPictureURL,
        scores: surveyArray
    };

    $.post('/api/friends', newFriend).then(function (data) {
            console.log(data);
            //activate modal
        });
}



$('#formSubmit').on('click', postForm);