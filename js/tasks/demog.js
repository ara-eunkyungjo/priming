// demog_task

//////// PRELOAD
var demog_audio = [
    ...kid ? demog_instr_audio : [],
    ...kid ? demog_born_instr_audio : [],
    ...kid ? demog_living_instr_audio : [],
    ...kid ? demog_location_state_instr_kid_audio : [],
    ...kid ? demog_year_abroad_instr_kid_audio : [],
    ...kid ? demog_num_ovs_exp_instr_kid_audio : [],
    ...kid ? demog_conditional_year_abroad_regions_instr_audio : [],
    ...kid ? demog_language_first_instr_audio : [],
    ...kid ? demog_language_mono_instr_kid_audio : [],
    ...kid ? demog_language_target_instr_kid_audio : [],
    ...kid ? demog_conditional_language_target_fluency_superq_kid_audio : [],
    ...kid ? demog_agegender_age_instr_audio : [],
    ...kid ? demog_agegender_gender_instr_audio : [],
    ...kid ? demog_ethnic_instr_audio : [],
    ...kid ? demog_objective_ses_instr_kid_audio : [],
]

var demog_images = [
    "media/images/demog/ladder.png", "media/images/demog/audio.png",
]

var demog_video = []

audio = audio.concat(demog_audio)
images = images.concat(demog_images)
video = video.concat(demog_video)

//////// TASK VARIABLES




// intro page
var demog_instructions = {
    type: "task-instructions-audio",
    pages: demog_instr,
    audio_pages: kid ? demog_instr_audio : '',
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: questions_pre_button
}

var demog_section_one = {
    type: "instructions",
    pages: [
        demog_section_one_instr
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: questions_pre_button
}

var demog_section_two = {
    type: "instructions",
    pages: [
        demog_section_two_instr
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: questions_pre_button
}

var demog_parent_instructions = {
    type: "task-instructions-audio",
    pages: demog_parent_instr,
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: questions_pre_button
}

// drop down
// born country, current residences, grew up states  

var demog_country_born_current_grew_up = {
    type: "demog-dropdown-audio",
    superq: demog_require_answer,
    button_label: question_button,
    data: {
        variable_type: "demog_country_born_current_grew_up"
    },
    questions: [
        {
            text: kid ? demog_born_instr_kid : demog_born_instr,
            name: "born_country",
            options: demog_born_opts,
            placeholder: demog_dropdown_placeholder,
            required: true,
            audio: kid ? demog_born_instr_audio : ''
        },
        {
            text: kid ? demog_living_instr_kid : demog_living_instr,
            name: "living_country",
            options: demog_living_opts,
            placeholder: demog_dropdown_placeholder,
            required: true,
            audio: kid ? demog_living_instr_audio : ''
        },
        {
            text: kid ? demog_location_state_instr_kid : demog_location_state_instr,
            name: "state_grewup",
            options: kid ? demog_location_state_opts_kid : demog_location_state_opts,
            placeholder: demog_dropdown_placeholder,
            required: true,
            audio: kid ? demog_location_state_instr_kid_audio : ''
        },
    ]
}

var demog_county_zip_places_lived = {
    type: "demog-free-response",
    button_label: question_button,
    data: {
        variable_type: "demog_county_zip_places_lived"
    },
    preamble: demog_require_answer,
    questions: [
        {
            prompt: demog_us_zipcode_instr,
            name: "zipcode",
            required: false
        },
        {
            prompt: demog_res_mobi_num,
            name: 'resimobinum',
            required: true
        }
    ]
}

var demog_oversea_experience = {
    type: 'demog-multi-choice-audio',
    button_label: question_button,
    data: {
        variable_type: "demog_oversea_experience"
    },
    questions: [
        {
            prompt: kid ? demog_year_abroad_instr_kid : demog_year_abroad_instr,
            name: 'abroadexp',
            options: demog_year_abroad_opts,
            required: true,
            audio: kid ? demog_year_abroad_instr_kid_audio : ''
        },
        {
            prompt: kid ? demog_num_ovs_exp_instr_kid : demog_num_ovs_exp_instr,
            name: 'overseaexpnum',
            options: kid ? demog_num_ovs_exp_opts_kid : demog_num_ovs_exp_opts,
            required: true,
            audio: kid ? demog_num_ovs_exp_instr_kid_audio : ''
        }
    ]
}

var demog_conditional_year_abroad_regions = {
    type: 'demog-multi-select-audio',
    button_label: question_button,
    data: {
        variable_type: "demog_conditional_year_abroad_regions"
    },
    questions: [
        {
            prompt: demog_conditional_year_abroad_regions_instr,
            name: "which_regions",
            options: demog_conditional_year_abroad_regions_opts,
            required: true,
            audio: kid ? demog_conditional_year_abroad_regions_instr_audio : ''
        }
    ]
}

var demog_conditional_year_abroad_node = {
    timeline: [demog_conditional_year_abroad_regions],
    conditional_function: function () {
        var data = jsPsych.data.get().last(1).values()[0];
        return (data.responses.includes(demog_conditional_year_abroad_question_node))
    }
}

var demog_language = {
    type: 'demog-multi-choice-audio',
    button_label: question_button,
    data: {
        variable_type: "demog_language"
    },
    questions: [
        {
            prompt: demog_language_first_instr,
            name: "firstlanguage",
            options: demog_language_first_opts,
            required: true,
            audio: kid ? demog_language_first_instr_audio : ''
        },
        {
            prompt: kid ? demog_language_mono_instr_kid : demog_language_mono_instr,
            name: "monolingual",
            options: kid ? demog_language_mono_options_kid : demog_language_mono_options,
            required: true,
            audio: kid ? demog_language_mono_instr_kid_audio : ''
        },
        {
            prompt: kid ? demog_language_target_instr_kid : demog_language_target_instr,
            name: "targetlanguage",
            options: demog_language_target_options,
            required: true,
            audio: kid ? demog_language_target_instr_kid_audio : ''
        }
    ]
}

// // button ver
var demog_conditional_language_target_fluency = {
    type: "demog-multi-choice-audio",
    data: {
        variable_type: "demog_conditional_language_target_fluency"
    },
    preamble: kid ? demog_conditional_language_target_fluency_superq_kid :
        demog_conditional_language_target_fluency_superq,
    preamble_audio: kid ? demog_conditional_language_target_fluency_superq_kid_audio : '',
    questions: [
        {
            prompt: demog_conditional_language_target_fluency_sp,
            options: demog_conditional_language_target_fluency_opts,
            horizontal: true,
            required: true
        }, 
        {
            prompt: demog_conditional_language_target_fluency_ud,
            options: demog_conditional_language_target_fluency_opts,
            horizontal: true,
            required: true
        }
    ],
    button_label: question_button,
}

// // slider ver
// var demog_conditional_language_target_fluency = {
//     type: "html-sliders-response",
//     data: {
//         variable_type: "demog_conditional_language_target_fluency"
//     },
//     stimulus: kid ? demog_conditional_language_target_fluency_superq_kid :
//         demog_conditional_language_target_fluency_superq,
//     audio: kid ? demog_conditional_language_target_fluency_superq_kid_audio : '',
//     min: [0],
//     max: [10],
//     start: [5],
//     slider_count: 2,
//     labels: [
//         demog_conditional_language_target_fluency_opts,
//         demog_conditional_language_target_fluency_opts,
//     ],
//     slider_prompt: [
//         demog_conditional_language_target_fluency_sp,
//         demog_conditional_language_target_fluency_ud,
//     ],
//     slider_arrangement: [1, 2],
//     button_label: question_button,
//     required: true,
// }

// // dropdown ver
// var demog_conditional_language_target_fluency = {
//     type: "demog-dropdown-audio",
//     data: {
//         variable_type: "demog_conditional_language_target_fluency"
//     },
//     button_label: question_button,
//     // superq: demog_require_answer,
//     preamble: kid ? demog_conditional_language_target_fluency_preamble_kid :
//         demog_conditional_language_target_fluency_preamble,
//     superq: kid ? demog_conditional_language_target_fluency_superq_kid :
//         demog_conditional_language_target_fluency_superq,
//     superaudio: kid ? demog_conditional_language_target_fluency_superq_kid_audio : '',
//     questions: [
//         {
//             text: demog_conditional_language_target_fluency_sp,
//             options: kid ? demog_conditional_language_target_fluency_sp_opts_kid :
//                 demog_conditional_language_target_fluency_opts,
//             placeholder: kid ? demog_conditional_language_target_fluency_sp_placeholder_kid :
//                 demog_conditional_language_target_fluency_sp_placeholder,
//             required: true
//         },
//         {
//             text: demog_conditional_language_target_fluency_ud,
//             options: kid ? demog_conditional_language_target_fluency_ud_opts_kid :
//                 demog_conditional_language_target_fluency_opts,
//             placeholder: kid ? demog_conditional_language_target_fluency_ud_placeholder_kid :
//                 demog_conditional_language_target_fluency_ud_placeholder,
//             required: true
//         }
//     ]
// }

var demog_conditional_language_target_node = {
    timeline: [demog_conditional_language_target_fluency],
    conditional_function: function () {
        var data = jsPsych.data.get().last(1).values()[0];
        return (data.responses.includes(demog_conditional_language_target_question_node))
    }
}

var demog_age_gender_ethnic = {
    type: "demog-dropdown-audio",
    data: {
        variable_type: "demog_age_gender_ethnic"
    },
    button_label: question_button,
    superq: demog_require_answer,
    questions: [
        {
            text: kid ? demog_agegender_age_instr_kid : demog_agegender_age_instr,
            options: kid ? demog_agegender_age_opts_kid : demog_agegender_age_opts,
            placeholder: demog_dropdown_placeholder,
            name: "age",
            required: true,
            audio: kid ? demog_agegender_age_instr_audio : ''
        },
        {
            text: kid ? demog_agegender_gender_instr_kid : demog_agegender_gender_instr,
            options: demog_agegender_gender_opts,
            placeholder: demog_dropdown_placeholder,
            name: "gender",
            required: true,
            audio: kid ? demog_agegender_gender_instr_audio : ''
        },
        {
            text: kid ? demog_ethnic_instr_kid : demog_ethnic_instr,
            options: demog_ethnic_opts,
            placeholder: demog_dropdown_placeholder,
            name: "ethnic",
            allowMultipleSelections: true,
            required: true,
            audio: kid ? demog_ethnic_instr_audio : ''
        },
    ]
}

//college education 
var demog_currently_in_college = {
    type: 'demog-multi-choice-audio',
    button_label: question_button,
    data: {
        variable_type: "demog_current_in_college"
    },
    questions: [
        {
            prompt: demog_currently_in_college_instr,
            name: 'currentcollege',
            options: demog_currently_in_college_opts,
            required: true,
            audio: kid ? demog_year_abroad_instr_kid_audio : ''
        }
    ]
    

}

var demog_college_year_and_stem = {
    type: "demog-dropdown-audio",
    superq: demog_require_answer,
    button_label: question_button,
    data: {
        variable_type: "demog_college_year"
    },
    questions: [
        {
            text:demog_college_year_instr,
            name: "college_year",
            options: demog_college_year_opts,
            placeholder: demog_dropdown_placeholder,
            required: true,
        }

    ]
}


var demog_college_ed_node = {
    timeline: [demog_college_year_and_stem],
    conditional_function: function(){
        var data = jsPsych.data.get().last(1).values()[0];
        console.log(data)
        if(data.responses.includes("Yes")){
            return true;
        } else {
            return false;
        }

    }


}

var demog_highest_level_eduation_completed = {
    type: "demog-multi-choice-audio", 
    data: {
        variable_type: "demog-education"
    }, 
    preamble: demog_require_answer, 
    questions: [
        {prompt:demog_highest_level_eduation_completed_instr,
        name: "selfeducation", 
        options:demog_highest_level_eduation_completed_opts, 
        required: true},
        {prompt:demog_stem_instr,
        name: "stem_or_not", 
        options:demog_stem_opts, 
        required: true}
    ], 
    button_label:question_button

}


var demog_ses = {
    type: "demog-multi-choice-audio",
    data: {
        variable_type: "demo-objses"
    },
    preamble: demog_require_answer,
    questions: [
        
        ...kid ? [] : [{
            prompt: demog_subjective_ses_instr,
            name: "subjectiveses",
            options: demog_subjective_ses_opts,
            required: true
        }]
    ],
    button_label: question_button
}

var demog_identity_local = {
    type: 'survey-likert',
    preamble: demog_likert_preamble,
    questions: [
      {prompt: demog_identity_local_remainclose, name: "identity_local_remainclose", labels: demog_likert_scale, required: true}, 
      {prompt: demog_identity_local_positiveimpact, name: "identity_local_positiveimpact", labels: demog_likert_scale, required: true},
      {prompt: demog_identity_local_proud, name: "identity_local_proud", labels: demog_likert_scale, required: true},
      {prompt: demog_identity_local_holiday, name: "identity_local_holiday", labels: demog_likert_scale, required: true}

    ],
    button_label: question_button,
    randomize_question_order: true 
};


var demog_identity_global = {
    type: 'survey-likert',
    preamble: demog_likert_preamble,
    questions: [
      {prompt: demog_identity_global_strongattachment, name: "identity_global_strongattachment", labels: demog_likert_scale, required: true}, 
      {prompt: demog_identity_global_feelconnected, name: "identity_global_feelconnected", labels: demog_likert_scale, required: true},
      {prompt: demog_identity_global_thinkofmyself, name: "identity_global_thinkofmyself", labels: demog_likert_scale, required: true},
      {prompt: demog_identity_global_feelapartof, name: "identity_global_feelapartof", labels: demog_likert_scale, required: true},
      {prompt: demog_identity_global_viewmyselfas, name: "identity_global_viewmyselfas", labels: demog_likert_scale, required: true}, 
      {prompt: demog_identity_global_citizenoftheworld, name: "identity_global_citizenoftheworld", labels: demog_likert_scale, required: true},
      {prompt: demog_identity_global_describemyselfas, name: "identity_global_describemyselfas", labels: demog_likert_scale, required: true},
    ],
    button_label: question_button,
    randomize_question_order: true 
};


var demog_consumption_local = {
    type: 'survey-likert',
    preamble: demog_likert_preamble,
    questions: [
      {prompt: demog_consumption_local_films, name: "consumption_local_films", labels: demog_likert_scale, required: true}, 
      {prompt: demog_consumption_local_movies, name: "consumption_local_movies", labels: demog_likert_scale, required: true},
      {prompt: demog_consumption_local_actors, name: "consumption_local_actors", labels: demog_likert_scale, required: true},
      {prompt: demog_consumption_local_music, name: "consumption_local_music", labels: demog_likert_scale, required: true},
      {prompt: demog_consumption_local_television_donotlike, name: "consumption_local_television_donotlike", labels: demog_likert_scale, required: true},
      {prompt: demog_consumption_local_celebrity, name: "consumption_local_celebrity", labels: demog_likert_scale, required: true}, 
      {prompt: demog_consumption_local_magazine, name: "consumption_local_magazine", labels: demog_likert_scale, required: true},
      {prompt: demog_consumption_local_television_oftenwatch, name: "consumption_local_television_oftenwatch", labels: demog_likert_scale, required: true},
      {prompt: demog_consumption_local_dress, name: "consumption_local_dress", labels: demog_likert_scale, required: true}
    ],
    button_label: question_button, 
    randomize_question_order: true 
};

var demog_consumption_global = {
    type: 'survey-likert',
    preamble: demog_likert_preamble,
    questions: [
        {prompt: demog_consumption_global_films, name: "consumption_global_films", labels: demog_likert_scale, required: true}, 
        {prompt: demog_consumption_global_movies, name: "consumption_global_movies", labels: demog_likert_scale, required: true},
        {prompt: demog_consumption_global_actors, name: "consumption_global_actors", labels: demog_likert_scale, required: true},
        {prompt: demog_consumption_global_music, name: "consumption_global_music", labels: demog_likert_scale, required: true},
        {prompt: demog_consumption_global_television_donotlike, name: "consumption_global_television_donotlike", labels: demog_likert_scale, required: true},
        {prompt: demog_consumption_global_celebrity, name: "consumption_global_celebrity", labels: demog_likert_scale, required: true}, 
        {prompt: demog_consumption_global_magazine, name: "consumption_global_magazine", labels: demog_likert_scale, required: true},
        {prompt: demog_consumption_global_television_oftenwatch, name: "consumption_global_television_oftenwatch", labels: demog_likert_scale, required: true},
        {prompt: demog_consumption_global_dress, name: "consumption_global_dress", labels: demog_likert_scale, required: true}
      ],
    button_label: question_button,
    randomize_question_order: true 
};


var demog_cosmopolitanism = {
    type: 'survey-likert',
    preamble: demog_likert_preamble,
    questions: [
      {prompt: demog_cosmopolitanism_waysoflife, name: "cosmopolitanism_waysoflife", labels: demog_likert_scale, required: true}, 
      {prompt: demog_cosmopolitanism_viewsandapproaches, name: "cosmopolitanism_viewsandapproaches", labels: demog_likert_scale, required: true},
      {prompt: demog_cosmopolitanism_observepeople, name: "cosmopolitanism_observepeople", labels: demog_likert_scale, required: true},
      {prompt: demog_cosmopolitanism_exchangeideas, name: "cosmopolitanism_exchangeideas", labels: demog_likert_scale, required: true},
      {prompt: demog_cosmopolitanism_learnmoreabout, name: "cosmopolitanism_learnmoreabout", labels: demog_likert_scale, required: true}
    ],
    button_label: question_button,
    randomize_question_order: true
};


demog_all_questionaires = [demog_identity_local, demog_identity_global, demog_consumption_local, demog_consumption_global, demog_cosmopolitanism]
shuffle(demog_all_questionaires)
// add page number 
for (var i = 0; i < demog_all_questionaires.length; i++){
    page_index = i + 1
    demog_all_questionaires[i].preamble = demog_all_questionaires[i].preamble + "<p>" + page_index + "/" + demog_all_questionaires.length + "</p>"
}



var demog_basic_info = [ 
    demog_country_born_current_grew_up,
    demog_county_zip_places_lived,
    demog_oversea_experience,
    demog_conditional_year_abroad_node,
    demog_language,
    demog_conditional_language_target_node,
    demog_age_gender_ethnic,
    demog_ses, 
    demog_currently_in_college,
    demog_college_ed_node,
    demog_highest_level_eduation_completed,
]


var demog_task = [ demog_instructions,
    demog_section_one]
demog_task = demog_task.concat(demog_all_questionaires) 
demog_task = demog_task.concat(demog_section_two)
demog_task = demog_task.concat(demog_basic_info)
   
 

var demog_parent_task = [
    demog_parent_instructions,
    demog_country_born_current_grew_up,
    ...kid ? [] : [demog_county_zip_places_lived],
    demog_oversea_experience,
    demog_conditional_year_abroad_node,
    demog_language,
    demog_conditional_language_target_node,
    demog_age_gender_ethnic,
    demog_ses
]

var demog_conditional_child_node = {
    timeline: demog_task,
    conditional_function: function () {
        var data = jsPsych.data.get().filter({ variable_type: 'real_data_check' }).values()[0];
        var is_parent = CN ? data.responses.includes("家长") : data.responses.includes("parent");
        return (!is_parent)
    }
}

var demog_conditional_parent_node = {
    timeline: demog_parent_task,
    conditional_function: function () {
        var data = jsPsych.data.get().filter({ variable_type: 'real_data_check' }).values()[0];
        var is_parent = CN ? data.responses.includes("家长") : data.responses.includes("parent");
        return (is_parent)
    }
}