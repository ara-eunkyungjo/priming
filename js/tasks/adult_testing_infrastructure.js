var subject_id = 'SS' + timenum;

var get_prolific_id = {
    type: 'survey-text', 
    questions: [
      {prompt: prolific_ID_prompt, name: "p_id", required: true}
    ]
  }

var audio_check = {
    type: "audio-check",
    questions: [{
        prompt: audio_prompt,
        required: true,
        audio: audio_check_file,
    }],
    button_label: audio_button,
    on_finish: function (data) {
        if (data.responses == "{\"Q0\":\"6\"}") {
            data.correct = true; // can add property correct by modify data object directly
        } else {
            data.correct = false;
            // indicate they need to return the HIT
            alert(audio_alert)
            jsPsych.endExperiment(audio_alert);
        }
    }
}


var general_warnings = {
    type: 'instructions',
    pages: general_warnings,
    show_clickable_nav: true,
    show_page_number: false,
    post_trial_gap: kid ? 2000 : 0
}


var instructions = {
    type: 'instructions',
    pages: kid ? first_page_instruction_kid : first_page_instruction,
    show_clickable_nav: true,
    show_page_number: false,
    post_trial_gap: kid ? 2000 : 0
}



var finish_slide = {
    type: 'html-button-response',
    stimulus: AREP ? AREP_finish_instruction : finish_instruction + subject_id,
    choices: [finish_instruction_button]
}

var prolific_finish_slide = {
    type: 'html-button-response',
    stimulus: prolific_finish_instruction,
    choices: [finish_instruction_button]
}


var prolifi_code_slide = {
    type: 'html-button-response',
    stimulus: prolific_completion_code,
    choices: [finish_instruction_button]
}


var participantIDmsg = {
    type: 'html-button-response',
    stimulus: participantIDtext1 + subject_id + participantIDtext2,
    choices: [finish_instruction_button]
}
