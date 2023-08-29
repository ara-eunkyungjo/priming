// free_description_task

//////// PRELOAD
var free_description_audio = [
    ...young ? free_description_prepractice_instruction_young_audio : [],
    ...kid ? free_description_prepractice_instruction_kid_audio : [],
    ...young ? free_description_ready_instruction_audio : [],
]

var free_description_images = [
    "media/images/free_description/practice.jpg",
]

var free_description_video = []

audio = audio.concat(free_description_audio)
images = images.concat(free_description_images)
video = video.concat(free_description_video)

//////// TASK VARIABLES

var free_description_pics = [
    'media/images/free_description/01-boat-river.jpg', 'media/images/free_description/02-bike.jpg', 
    'media/images/free_description/03-plane.jpg', 'media/images/free_description/04-squirrel.jpg', 
    'media/images/free_description/05-tiger.jpg', 'media/images/free_description/06-train-red.jpg',
    'media/images/free_description/07-train-green.jpg'
]

images = images.concat(free_description_pics)

var free_description_pics_shuffled = shuffle(free_description_pics)
var free_description_prompt_full = [
    free_description_prompt_first,
    ...free_description_prompt_instructions,
    ...free_description_prompt_instructions,
]
var free_description_prompt_audio_full = [
    free_description_prompt_first_audio,
    ...free_description_prompt_instructions_audio,
    ...free_description_prompt_instructions_audio,
]
var free_description_next_full = [
    free_description_next_first,
    ...free_description_next_instructions,
    ...free_description_next_instructions,
]
var free_description_next_audio_full = [
    free_description_next_first_audio,
    ...free_description_next_instructions_audio,
    ...free_description_next_instructions_audio,
]
var free_description_timeline_vars = Array.from({length:7}, (_, idx) => { 
    return({
        pic: free_description_pics_shuffled[idx], 
        prompt: free_description_prompt_full[idx],
        prompt_audio: free_description_prompt_audio_full[idx],
        next: free_description_next_full[idx],
        next_audio: free_description_next_audio_full[idx],
    })
})
if (kid) { 
    audio = audio.concat(free_description_prompt_audio_full);
    audio = audio.concat(free_description_next_audio_full);
}

var free_description_instruction = {
    type: 'task-instructions-audio',
    pages: [
        free_description_prepractice_instruction_adult,
    ],
    audio_pages: "",
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: free_description_prepractice_OKButton,
    show_page_number: false
}

var free_description_stimulus = {
    type: 'image-keyboard-response',
    stimulus: jsPsych.timelineVariable('pic'),
    choices: jsPsych.NO_KEYS,
    trial_duration: young ? 15000 : kid ? 10000 : 5000,
}

var free_description_trial = {
    type: 'free-description-response',
    button_label: free_description_continueButton,
    questions: [{
        prompt: jsPsych.timelineVariable('prompt'),
        rows: 5,
        columns: 40,
        required: false,
        audio: kid ? jsPsych.timelineVariable('prompt_audio') : '',
        button_label: free_description_continueButton
    }]
}

var free_description_trial_loop = {
    timeline: [free_description_trial],
    loop_function: function(data){
        var vals = data.values()[0];
        var response = JSON.parse(vals.responses)["Q0"]
        if (response.length < 10){
            alert(attribution_alert)
            data.values()[0]["repeat"] = true;
            return true;
        } else {
            data.values()[0]["repeat"] = false;
            return false;
        }
    }
}

var free_description_trial_recording = {
    type: 'html-audio-response',
    stimulus: jsPsych.timelineVariable('prompt'),
    buffer_length: 0,
    allow_playback: false,
    enable_mic_message: true,
    button_label: free_description_continueButton,
    audio: kid ? jsPsych.timelineVariable('prompt_audio') : '',
    recording_light: mic_rec,
}

var free_description_practice = {
    timeline: [
        free_description_stimulus,
        free_description_trial_loop,
    ],
    timeline_variables: [{ 
        pic: 'media/images/free_description/practice.jpg',
        prompt: free_description_prompt_first,
        next: free_description_next_first,
    }]
}

var free_description_ready = {
    type: 'task-instructions-audio',
    pages: [free_description_ready_instruction],
    audio_pages: kid ? [free_description_ready_instruction_audio] : '',
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: free_description_ready_OKButton,
    show_page_number: false
}

var free_description_next = {
    type: 'task-instructions-audio',
    pages: [jsPsych.timelineVariable('next')],
    audio_pages: [jsPsych.timelineVariable('next_audio')],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: free_description_next_YesButton,
    show_page_number: false
}

var free_description_procedure = {
    timeline: [ // spreads free_description_next only in kid version
        free_description_stimulus,
        free_description_trial_loop
    ],
    timeline_variables: free_description_timeline_vars,
    randomize_order: false
}

var free_description_finished = { // deprecated
    type: 'task-instructions',
    pages: [free_description_finishedInstruction],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: free_description_finishedButton,
    show_page_number: false
}

//////// PACKAGING

var free_description_task = [
    free_description_instruction,
    free_description_procedure,
    // free_description_finished
]