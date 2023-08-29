// stickers_task

//////// PRELOAD
var pen_audio = []

var stickers_images = [
	'media/images/stickers/stickers1.png',
	'media/images/stickers/stickers2.png'
] // note: loaded later

var pen_video = []

audio = audio.concat(pen_audio)
images = images.concat(stickers_images)
video = video.concat(pen_video)


//////// TASK VARIABLES

var pre_stickers_trial = {
    type: "instructions",
    pages: [pre_sticker_prompt + 
            "<p><img src='media/images/stickers/stickers1.png' style='width:714px;height:455px;'></p>"],
    show_clickable_nav: true,
    show_page_number: false



}

var stickers_trial = {
	type: "sticker-choice",
    preamble: sticker_prompt +
    		"<p><img src='media/images/stickers/stickers2.png' style='width:714px;height:455px;'></p>",
    questions: [
    	{prompt: sticker_question, name: 'pen_choice', options: [1, 2, 3, 4, 5], required: true, horizontal: true}
    ],
    button_label: sticker_button_label

}
console.log(stickers_trial)


var post_stickers_trial = {
    type: 'survey-text',
    questions: [
    	{prompt: post_sticker_prompt, name: 'mailing_address', required: false, rows: 5, columns: 40}
    ],
    button_label: sticker_button_label


}

var post_stickers_transition = {
    type: "instructions",
    pages: [post_stickers_transition_prompt],
    show_clickable_nav: true,
    show_page_number: false



}



//////// PACKAGING
var stickers_task = [
    pre_stickers_trial,
    stickers_trial,
    post_stickers_trial, 
    post_stickers_transition
]
console.log(stickers_task)