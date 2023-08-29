// for preloading
if (kid) {
    video = video.concat([
        ...game_intro_kid,
        ...game_task1_kid,
        ...game_task2_kid,
        ...game_task5_green_kid,
        ...game_task5_yellow_kid,
    ])
} else {
    video = video.concat([
        //...game_start_free,
        ...game_intro,
        ...game_task1,
        ...game_task2,
        ...game_task3,
        ...game_task4,
        ...game_task5,
        ...game_task6,
        ...game_task7
    ])
}

var game_intro_vid = {
    type: 'video-button-response',
    sources: game_intro,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true
};


var game_task1_vid = {
    type: 'video-button-response',
    sources: game_task1,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true
};

var game_task2_vid = {
    type: 'video-button-response',
    sources: kid ? game_task2_kid : game_task2,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true
};

var game_task3_vid = {
    type: 'video-button-response',
    sources: game_task3,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true
};

var game_task4_vid = {
    type: 'video-button-response',
    sources: game_task4,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true
};



var game_task5_vid = {
    type: 'video-button-response',
    sources: game_task5,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true
};

var game_task6_vid = {
    type: 'video-button-response',
    sources: game_task6,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true

}

var game_task7_vid = {
    type: 'video-button-response',
    sources: game_task7,
    width: 800,
    height: 600,
    trial_ends_after_video: true,
    choices: [], // 'Continue' button,
    autopplay: true

}


var game_interval = [
    game_task1_vid,
    game_task2_vid,
    game_task3_vid,
    game_task4_vid, 
    game_task5_vid,
    game_task6_vid,
    game_task7_vid
]
