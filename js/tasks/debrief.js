// debrief_task

//////// PRELOAD
var debrief_audio = [
    ...kid ? demog_adult_help_audio : [],
    ...kid ? demog_final_feedback_instr_kid_audio : [],
]

var debrief_images = [
    kid ? "media/images/debriefing/funnel_kid.png" : "media/images/debriefing/funnel.png" 
]

var debrief_video = []

audio = audio.concat(debrief_audio)
images = images.concat(debrief_images)
video = video.concat(debrief_video)

//////// TASK VARIABLES

var adult_help = {
    type: "demog-multi-choice-audio",
    data: {
        variable_type: "adult_help"
    },
    questions: [
        {
            prompt: demog_adult_help,
            audio: demog_adult_help_audio,
            options: demog_adult_help_opts,
            horizontal: true,
            required: true,
        }
    ],
    button_label: question_button,
}

var funnel_familiarity = {
    type: 'funnel-debriefing-general',
    button_label: funnel_general_button,
    data: {
        variable_type: "funnel_familiarity"
    },
    questions: [
        {
            prompt: funnel_familiarity_prompt,
            name: "familiarity",
            rows: 10,
            columns: 100,
            required: true
        }
    ]
}

var funnel_tell_more = {
    type: 'funnel-debriefing-general',
    button_label: funnel_general_button,
    data: {
        variable_type: "funnel_tell_more"
    },
    questions: [
        {
            prompt: funnel_tellmore_prompt,
            name: "tellmore",
            rows: 10,
            columns: 100,
            required: false
        }
    ]
}

var final_feedback = {
    type: "demog-free-response",
    data: {
        variable_type: "demo-final"
    },
    questions: [
        {
            prompt: demog_final_feedback_instr,
            name: "finalfeedback",
            rows: 5,
            columns: 40
        }
    ],
    button_label: label_done
}

var final_feedback_kid = {
    type: "demog-free-response-audio",
    data: {
        variable_type: "demo-final"
    },
    questions: [
        {
            prompt: demog_final_feedback_instr_kid,
            name: "finalfeedback",
            rows: 5,
            columns: 40,
            audio: demog_final_feedback_instr_kid_audio
        }
    ],
    button_label: label_done
}

//////// PACKAGING

if (kid) {
    var debrief_task = [
        adult_help,
        final_feedback_kid
    ]
} else {
    var debrief_task = [
        funnel_familiarity,
        funnel_tell_more,
        final_feedback
    ]
}

