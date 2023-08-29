// semantic intuition task and causal attribution task in randomized order with shared language check for CN



//////// TASK VARIABLES


       
//// shared language check ////

        // EN reading check for CN participants
        var en_reading_check = {
            type: 'survey-multi-choice-en-reading-check',
            button_label: question_button,
            questions: [
                {
                    prompt: en_reading_check_instr,
                    name: "en_reading_check",
                    options: en_reading_check_opt,
                    required: true,
                }
            ]
        }
        
        // feedback page: ineligible
        var en_reading_check_feedback_ineligible_page = {
            type: 'html-button-response',
            stimulus: en_reading_check_feedback_ineligible,
            choices: [questions_pre_button],
        }      
        
        // feedback page: eligible > main task
        var en_reading_check_feedback_eligible_page = {
            type: 'html-button-response',
            stimulus: en_reading_check_feedback_eligible,
            choices: [questions_pre_button],
        }  
        
        
     
        
   
////// shared instruction page ////
// no longer in use in CN version but have to keep it to prevent error cuz the script use it for EN version
        var semantic_intuition_instr_page = {
            type: 'html-button-response',
            stimulus: semantic_intuition_instr,
            choices: [questions_pre_button],
        };
        
 

        
   
//// semantic intuition tasks ////

/// machery: 4 stories EN only

        // Godel 1
        var semantic_intuition_godel_1_para1 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: godel_1_story_part1,
        } 
        var semantic_intuition_godel_1_para2 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: godel_1_story_part2,
        }
        var semantic_intuition_godel_1_para3 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: godel_1_story_part3,
        }     
        var semantic_intuition_godel_1_all = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_godel_1_q"
            },
            questions: [
                {
                    prompt: godel_1_story_all,
                    name: "godel_1",
                    options: godel_1_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_godel_1_check = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_godel_1_check"
            },
            questions: [
                {
                    prompt: godel_1_check_instr,
                    name: "godel_1_check",
                    options: godel_1_check_opt,
                    required: true,
                }
            ]
        }
        // Godel 1 packaged       
        var semantic_intuition_godel_1 = [
            semantic_intuition_godel_1_para1,
            semantic_intuition_godel_1_para2,
            semantic_intuition_godel_1_para3,
            semantic_intuition_godel_1_all,
            semantic_intuition_godel_1_check
        ]   // packaged godel 1 story and question

        
        // Godel 2
        var semantic_intuition_godel_2_para1 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: godel_2_story_part1,
        } 
        var semantic_intuition_godel_2_para2 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: godel_2_story_part2,
        }
        var semantic_intuition_godel_2_para3 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: godel_2_story_part3,
        }
        var semantic_intuition_godel_2_all = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_godel_2_q"
            },
            questions: [
                {
                    prompt: godel_2_story_all,
                    name: "godel_2",
                    options: godel_2_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_godel_2_check = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_godel_2_check"
            },
            questions: [
                {
                    prompt: godel_2_check_instr,
                    name: "godel_2_check",
                    options: godel_2_check_opt,
                    required: true,
                }
            ]
        }
        // Godel 2 packaged       
        var semantic_intuition_godel_2 = [
            semantic_intuition_godel_2_para1,
            semantic_intuition_godel_2_para2,
            semantic_intuition_godel_2_para3,
            semantic_intuition_godel_2_all,
            semantic_intuition_godel_2_check
        ]   // packaged godel 2 story and question

        
        
        // Jonah 1
        var semantic_intuition_jonah_1_para1 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_1_story_para1,
        } 
        var semantic_intuition_jonah_1_para2 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_1_story_para2,
        }
        var semantic_intuition_jonah_1_para3 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_1_story_para3,
        }         
        var semantic_intuition_jonah_1_all = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_jonah_1_q"
            },
            questions: [
                {
                    prompt: jonah_1_story_all,
                    name: "jonah_1",
                    options: jonah_1_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_jonah_1_check = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_jonah_1_check"
            },
            questions: [
                {
                    prompt: jonah_1_check_instr,
                    name: "jonah_1_check",
                    options: jonah_1_check_opt,
                    required: true,
                }
            ]
        }
        // Jonah 1 packaged       
        var semantic_intuition_jonah_1 = [
            semantic_intuition_jonah_1_para1,
            semantic_intuition_jonah_1_para2,
            semantic_intuition_jonah_1_para3,
            semantic_intuition_jonah_1_all,
            semantic_intuition_jonah_1_check
        ]   // packaged jonah 1 story and question
    
        
        
        // Jonah 2
        var semantic_intuition_jonah_2_para1 = {
            type: 'html-keyboard-response',
            stimulus: "Please read carefully:",
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_2_story_para1,
        }
        var semantic_intuition_jonah_2_para2 = {
            type: 'html-keyboard-response',
            stimulus: "Please read carefully:",
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_2_story_para2,
        }
        var semantic_intuition_jonah_2_para3 = {
            type: 'html-keyboard-response',
            stimulus: "Please read carefully:",
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_2_story_para3,
        }   
        var semantic_intuition_jonah_2_all = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_jonah_2_q"
            },
            questions: [
                {
                    prompt: jonah_2_story_all,
                    name: "jonah_2",
                    options: jonah_2_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_jonah_2_check = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_jonah_2_check"
            },
            questions: [
                {
                    prompt: jonah_2_check_instr,
                    name: "jonah_2_check",
                    options: jonah_2_check_opt,
                    required: true,
                }
            ]
        }
        // Jonah 2 packaged
        var semantic_intuition_jonah_2 = [
            semantic_intuition_jonah_2_para1,
            semantic_intuition_jonah_2_para2,
            semantic_intuition_jonah_2_para3,
            semantic_intuition_jonah_2_all,
            semantic_intuition_jonah_2_check
        ] // packaged jonah 2 story and question


        
        // all 4 subtasks shuffled and packaged
        var all_semantic_intuition_machery_subtasks =
            shuffle([
            semantic_intuition_godel_1,
            semantic_intuition_godel_2,
            semantic_intuition_jonah_1,
            semantic_intuition_jonah_2
        ])

        
        

//// Li main: 5 stories EN/CN

        var semantic_intuition_main_intro = {
            type: "task-instructions", 
            pages: [
                semantic_intuition_li_main_intro1, 
                semantic_intuition_li_main_intro2, 
                semantic_intuition_li_main_intro3, 
                semantic_intuition_li_main_intro4, 
                semantic_intuition_li_main_intro5,
                semantic_intuition_li_main_intro6
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_buffer = {
            type: "task-instructions", 
            pages: [semantic_intuition_li_main_buffer], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_outro = {
            type: "task-instructions", 
            pages: [semantic_intuition_li_main_outro1], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }


        // placeholder pages
        // allheal


        var semantic_intuition_main_allheal_story_1 = {
            type: "task-instructions", 
            pages: [
                semantic_intuition_li_main_allheal_para1, 
                semantic_intuition_li_main_allheal_para2, 
                semantic_intuition_li_main_allheal_para3, 
                semantic_intuition_li_main_allheal_para4, 

            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_li_main_allheal_comprehension_check_1 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_allheal_comprehension_check_1, 
                name: "si_li_allheal1", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_main_allheal_story_2 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_allheal_comprehension_check_1_response,
                semantic_intuition_li_main_allheal_para5, 
                semantic_intuition_li_main_allheal_para6, 
                semantic_intuition_li_main_allheal_para7, 
                semantic_intuition_li_main_allheal_para8, 
                semantic_intuition_li_main_allheal_para9, 
                semantic_intuition_li_main_allheal_para10, 
                semantic_intuition_li_main_allheal_para11, 
                
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }


        var semantic_intuition_li_main_allheal_comprehension_check_2 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_allheal_comprehension_check_2, 
                name: "si_li_allheal2", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_main_allheal_story_3 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_allheal_comprehension_check_2_response,
                semantic_intuition_li_main_allheal_para12, 
                semantic_intuition_li_main_allheal_para13, 
                semantic_intuition_li_main_allheal_para14, 
                semantic_intuition_li_main_allheal_para15, 
                semantic_intuition_li_main_allheal_para16
                
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }



        var semantic_intuition_li_main_allheal_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_allheal_q1"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_allheal_q1,
                    name: "li_main_allheal1",
                    options: si_li_main_allheal_opt,
                    horizontal: true, 
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_main_allheal_q2 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_allheal_q2"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_allheal_q2,
                    name: "li_main_allheal2",
                    options: si_li_main_allheal_opt,
                    horizontal: true, 
                    required: true,
                }
            ]
        }
        // allheal packaged
        var semantic_intuition_li_main_allheal = [
            semantic_intuition_main_allheal_story_1,
            semantic_intuition_li_main_allheal_comprehension_check_1,
            semantic_intuition_main_allheal_story_2, 
            semantic_intuition_li_main_allheal_comprehension_check_2, 
            semantic_intuition_main_allheal_story_3,
            semantic_intuition_li_main_allheal_q1,
            semantic_intuition_li_main_allheal_q2
        ]



        // monkpic
        var semantic_intuition_main_monkpic_story_1 = {
            type: "task-instructions", 
            pages: [
                semantic_intuition_li_main_monkpic_para1, 
                semantic_intuition_li_main_monkpic_para2, 
                semantic_intuition_li_main_monkpic_para3, 
                semantic_intuition_li_main_monkpic_para4, 
                semantic_intuition_li_main_monkpic_para5    
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }


        var semantic_intuition_li_main_allheal_comprehension_check_1 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_monkpic_comprehension_check_1, 
                name: "si_li_monkpic1", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }
       
        var semantic_intuition_main_monkpic_story_2 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_monkpic_comprehension_check_1_response,
                semantic_intuition_li_main_monkpic_para6, 
                semantic_intuition_li_main_monkpic_para7, 
                semantic_intuition_li_main_monkpic_para8, 
                semantic_intuition_li_main_monkpic_para9, 
                semantic_intuition_li_main_monkpic_para10    
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }


        var semantic_intuition_li_main_allheal_comprehension_check_2 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_monkpic_comprehension_check_2, 
                name: "si_li_monkpic2", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_main_monkpic_story_3 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_monkpic_comprehension_check_2_response,
                semantic_intuition_li_main_monkpic_para11, 
                semantic_intuition_li_main_monkpic_para12, 
                semantic_intuition_li_main_monkpic_para13        
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_li_main_monkpic_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_monkpic_q1"
            },
            questions: [
                {
                    prompt: si_li_main_monkpic_q1,
                    name: "li_main_monkpic1",
                    options: si_li_main_monkpic_opt,
                    horizontal: true, 
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_main_monkpic_q2 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_monkpic_q2"
            },
            questions: [
                {
                    prompt: si_li_main_monkpic_q2,
                    name: "li_main_monkpic2",
                    options: si_li_main_monkpic_opt,
                    horizontal: true, 
                    required: true,
                }
            ]
        }

        // monkpic packaged
        var semantic_intuition_li_main_monkpic = [
            semantic_intuition_main_monkpic_story_1,
            semantic_intuition_li_main_allheal_comprehension_check_1, 
            semantic_intuition_main_monkpic_story_2, 
            semantic_intuition_li_main_allheal_comprehension_check_2, 
            semantic_intuition_main_monkpic_story_3, 
            semantic_intuition_li_main_monkpic_q1,
            semantic_intuition_li_main_monkpic_q2
        ]

        // walter

        var semantic_intuition_main_walter_story_1 = {
            type: "task-instructions", 
            pages: [
                semantic_intuition_li_main_walter_para1, 
                semantic_intuition_li_main_walter_para2, 
                semantic_intuition_li_main_walter_para3, 
                semantic_intuition_li_main_walter_para4
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_walter_story_2 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_walter_comprehension_check_1_response,
                semantic_intuition_li_main_walter_para5, 
                semantic_intuition_li_main_walter_para6, 
                semantic_intuition_li_main_walter_para7, 
                semantic_intuition_li_main_walter_para8, 
                semantic_intuition_li_main_walter_para9
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_walter_story_3 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_walter_comprehension_check_2_response,
                semantic_intuition_li_main_walter_para10, 
                semantic_intuition_li_main_walter_para11, 
                semantic_intuition_li_main_walter_para12
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_li_main_walter_comprehension_check_1 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_walter_comprehension_check_1, 
                name: "si_li_walter1", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_li_main_walter_comprehension_check_2 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_walter_comprehension_check_2, 
                name: "si_li_walter2", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }
        
        var semantic_intuition_li_main_walter_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_walter_q1"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_walter_q1,
                    name: "li_main_walter1",
                    options: si_li_main_walter_opt,
                    required: true,
                    horizontal: true
                }
            ]
        }
        var semantic_intuition_li_main_walter_q2 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_walter_q2"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_walter_q2,
                    name: "li_main_walter2",
                    options: si_li_main_walter_opt,
                    required: true,
                    horizontal: true 
                }
            ]
        }
        // walter packaged
        var semantic_intuition_li_main_walter = [
            semantic_intuition_main_walter_story_1,
            semantic_intuition_li_main_walter_comprehension_check_1, 
            semantic_intuition_main_walter_story_2, 
            semantic_intuition_li_main_walter_comprehension_check_2,
            semantic_intuition_main_walter_story_3,
            semantic_intuition_li_main_walter_q1,
            semantic_intuition_li_main_walter_q2
        ]

        // superdog

        var semantic_intuition_main_superdog_story_1 = {
            type: "task-instructions", 
            pages: [
                semantic_intuition_li_main_superdog_para1, 
                semantic_intuition_li_main_superdog_para2, 
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_superdog_story_2 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_superdog_check_1_response,
                semantic_intuition_li_main_superdog_para3, 
                semantic_intuition_li_main_superdog_para4, 
                semantic_intuition_li_main_superdog_para5, 
                semantic_intuition_li_main_superdog_para6, 
                semantic_intuition_li_main_superdog_para7, 
                semantic_intuition_li_main_superdog_para8, 
                semantic_intuition_li_main_superdog_para9
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_superdog_story_3 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_superdog_check_2_response,
                semantic_intuition_li_main_superdog_para10, 
                semantic_intuition_li_main_superdog_para11, 
                semantic_intuition_li_main_superdog_para12, 
                semantic_intuition_li_main_superdog_para13, 
                semantic_intuition_li_main_superdog_para14
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }


        var semantic_intuition_li_main_superdog_comprehension_check_1 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_superdog_check_1, 
                name: "si_li_superdog1", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_li_main_superdog_comprehension_check_2 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_superdog_check_2, 
                name: "si_li_superdog2", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_li_main_superdog_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_superdog_q1"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_superdog_q1,
                    name: "li_main_superdog1",
                    options: si_li_main_superdog_opt,
                    required: true,
                    horizontal: true
                }
            ]
        }
        var semantic_intuition_li_main_superdog_q2 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_superdog_q2"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_superdog_q2,
                    name: "li_main_superdog2",
                    options: si_li_main_superdog_opt,
                    required: true,
                    horizontal: true
                }
            ]
        }
        // superdog packaged
        var semantic_intuition_li_main_superdog = [
            semantic_intuition_main_superdog_story_1,
            semantic_intuition_li_main_superdog_comprehension_check_1,
            semantic_intuition_main_superdog_story_2, 
            semantic_intuition_li_main_superdog_comprehension_check_2,
            semantic_intuition_main_superdog_story_3, 
            semantic_intuition_li_main_superdog_q1,
            semantic_intuition_li_main_superdog_q2
        ]

        // claymen

        var semantic_intuition_main_clayman_story_1 = {
            type: "task-instructions", 
            pages: [
                semantic_intuition_li_main_claymen_para1, 
                semantic_intuition_li_main_claymen_para2, 
                semantic_intuition_li_main_claymen_para3, 
                semantic_intuition_li_main_claymen_para4, 
                semantic_intuition_li_main_claymen_para5, 
                semantic_intuition_li_main_claymen_para6, 
                semantic_intuition_li_main_claymen_para7
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_clayman_story_2 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_claymen_check_1_response,
                semantic_intuition_li_main_claymen_para8, 
                semantic_intuition_li_main_claymen_para9, 
                semantic_intuition_li_main_claymen_para10, 
                semantic_intuition_li_main_claymen_para11, 
                semantic_intuition_li_main_claymen_para12, 
                semantic_intuition_li_main_claymen_para13
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_main_clayman_story_3 = {
            type: "task-instructions", 
            pages: [
                //semantic_intuition_li_main_claymen_check_2_response,
                semantic_intuition_li_main_claymen_para14, 
                semantic_intuition_li_main_claymen_para15, 
                semantic_intuition_li_main_claymen_para16
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }

        var semantic_intuition_li_main_claymen_comprehension_check_1 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_claymen_check_1, 
                name: "si_li_claymen_cc_1", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }

        var semantic_intuition_li_main_claymen_comprehension_check_2 = {
            type: "survey-text", 
            questions: [
                {prompt: semantic_intuition_li_main_claymen_check_2, 
                name: "si_li_claymen_cc_2", 
                required: true, 
                rows: 5}
            ], 
            button_label: si_button_label 
        }



        var semantic_intuition_li_main_claymen_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_claymen_q1"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_clayman_q1,
                    name: "li_main_claymen1",
                    options: si_li_main_claymen_opt,
                    horizontal: true,
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_main_claymen_q2 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_main_claymen_q2"
            },
            questions: [
                {
                    prompt: semantic_intuition_li_main_clayman_q2,
                    name: "li_main_claymen2",
                    options: si_li_main_claymen_opt,
                    horizontal: true, 
                    required: true
                }
            ]
        }
        // claymen packaged
        var semantic_intuition_li_main_claymen = [
            semantic_intuition_main_clayman_story_1,
            semantic_intuition_li_main_claymen_comprehension_check_1,
            semantic_intuition_main_clayman_story_2, 
            semantic_intuition_li_main_claymen_comprehension_check_2, 
            semantic_intuition_main_clayman_story_3, 
            semantic_intuition_li_main_claymen_q1,
            semantic_intuition_li_main_claymen_q2
        ]

        // all 5 subtasks shuffled and packaged
        // shuffle all 5 subtasks 
        shuffled_semantic_intuition_li_main_subtasks = shuffle([
            semantic_intuition_li_main_allheal, 
            semantic_intuition_li_main_walter,
            semantic_intuition_li_main_monkpic,
            semantic_intuition_li_main_superdog,
            semantic_intuition_li_main_claymen])

           
        all_semantic_intuition_li_main_subtasks = []
        all_semantic_intuition_li_main_subtasks.push(semantic_intuition_main_intro)

        for (var i = 0; i < shuffled_semantic_intuition_li_main_subtasks.length; i++){
            all_semantic_intuition_li_main_subtasks.push(shuffled_semantic_intuition_li_main_subtasks[i])
            }

        all_semantic_intuition_li_main_subtasks.push(semantic_intuition_main_outro)
        

       


//// Li followup: 4 stories EN/CN

        // follow up buffer 
        var semantic_intuition_li_fu_intro = {
            type: "task-instructions", 
            pages: [
                si_li_follow_up_intro, 
            ], 
            show_clickable_nav: true, 
            button_label_previous: " ", 
            button_label_next: ">"
        }


        // placeholder page
        // prince
        var semantic_intuition_li_fu_prince_para1 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_prince1,
        }
        var semantic_intuition_li_fu_prince_para2 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_prince2,
        }
        var semantic_intuition_li_fu_prince_para3 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_prince3,
        }
        var semantic_intuition_li_fu_prince_para4 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_prince4,
        }
        var semantic_intuition_li_fu_prince_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_fu_prince_q1"
            },
            questions: [
                {
                    prompt: si_li_fu_prince_q1,
                    name: "li_fu_prince_1",
                    options: si_li_fu_prince_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_fu_prince_q2 = {
            type: 'survey-text',
            questions: [
                {prompt:si_li_fu_prince_q2, rows: 5, colomn: 40, name:'si_li_fu_prince_reason'}
            ]
        }
        // prince packaged
        var semantic_intuition_li_fu_prince = [
            semantic_intuition_li_fu_prince_para1,
            semantic_intuition_li_fu_prince_para2,
            semantic_intuition_li_fu_prince_para3,
            semantic_intuition_li_fu_prince_para4,
            semantic_intuition_li_fu_prince_q1,
            semantic_intuition_li_fu_prince_q2
        ]

        // hospital
        var semantic_intuition_li_fu_hospital_para1 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_hospital1,
        }
        var semantic_intuition_li_fu_hospital_para2 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_hospital2,
        }
        var semantic_intuition_li_fu_hospital_para3 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_hospital3,
        }
        var semantic_intuition_li_fu_hospital_para4 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_hospital4,
        }
        var semantic_intuition_li_fu_hospital_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_fu_hospital_q1"
            },
            questions: [
                {
                    prompt: si_li_fu_hospital_q1,
                    name: "li_fu_hospital_1",
                    options: si_li_fu_hospital_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_fu_hospital_q2 = {
            type: 'survey-text',
            questions: [
                {prompt:si_li_fu_hospital_q2, rows: 5, colomn: 40, name:'si_li_fu_hospital_reason'}
            ]
        }
        // hospital packaged
        var semantic_intuition_li_fu_hospital = [
            semantic_intuition_li_fu_hospital_para1,
            semantic_intuition_li_fu_hospital_para2,
            semantic_intuition_li_fu_hospital_para3,
            semantic_intuition_li_fu_hospital_para4,
            semantic_intuition_li_fu_hospital_q1,
            semantic_intuition_li_fu_hospital_q2
        ]

        // book
        var semantic_intuition_li_fu_book_para1 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_book1,
        }
        var semantic_intuition_li_fu_book_para2 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_book2,
        }
        var semantic_intuition_li_fu_book_para3 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_book3,
        }
        var semantic_intuition_li_fu_book_para4 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_book4,
        }
        var semantic_intuition_li_fu_book_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_fu_book_q1"
            },
            questions: [
                {
                    prompt: si_li_fu_book_q1,
                    name: "li_fu_book_1",
                    options: si_li_fu_book_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_fu_book_q2 = {
            type: 'survey-text',
            questions: [
                {prompt:si_li_fu_book_q2, rows: 5, colomn: 40, name:'si_li_fu_book_reason'}
            ]
        }
        // fu_book packaged
        var semantic_intuition_li_fu_book = [
            semantic_intuition_li_fu_book_para1,
            semantic_intuition_li_fu_book_para2,
            semantic_intuition_li_fu_book_para3,
            semantic_intuition_li_fu_book_para4,
            semantic_intuition_li_fu_book_q1,
            semantic_intuition_li_fu_book_q2
        ]

        // cake
        var semantic_intuition_li_fu_cake_para1 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_cake1,
        }
        var semantic_intuition_li_fu_cake_para2 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_cake2,
        }
        var semantic_intuition_li_fu_cake_para3 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_cake3,
        }
        var semantic_intuition_li_fu_cake_para4 = {
            type: 'html-keyboard-response',
            stimulus: en_reading_instr,
            choices: jsPsych.ALL_KEYS,
            prompt: si_li_followup_cake4,
        }
        var semantic_intuition_li_fu_cake_q1 = {
            type: 'survey-multi-choiceOLD',
            button_label: question_button,
            data: {
                variable_type: "semantic_intuition_li_fu_cake_q1"
            },
            questions: [
                {
                    prompt: si_li_fu_cake_q1,
                    name: "li_fu_cake_1",
                    options: si_li_fu_cake_opt,
                    required: true,
                }
            ]
        }
        var semantic_intuition_li_fu_cake_q2 = {
            type: 'survey-text',
            questions: [
                {prompt:si_li_fu_cake_q2, rows: 5, colomn: 40, name:'si_li_fu_cake_reason'}
            ]
        }
        // fu_cake packaged
        var semantic_intuition_li_fu_cake = [
            semantic_intuition_li_fu_cake_para1,
            semantic_intuition_li_fu_cake_para2,
            semantic_intuition_li_fu_cake_para3,
            semantic_intuition_li_fu_cake_para4,
            semantic_intuition_li_fu_cake_q1,
            semantic_intuition_li_fu_cake_q2
        ]
        // all 4 subtasks shuffled and packaged

    

        var shuffled_semantic_intuition_li_fu_subtasks = shuffle([
            semantic_intuition_li_fu_prince,
            semantic_intuition_li_fu_hospital,
            semantic_intuition_li_fu_book,
            semantic_intuition_li_fu_cake
        ])    

        var all_semantic_intuition_li_fu_subtasks = [semantic_intuition_li_fu_intro]

        for (var i = 0; i < shuffled_semantic_intuition_li_fu_subtasks.length; i++){
            all_semantic_intuition_li_fu_subtasks.push(shuffled_semantic_intuition_li_fu_subtasks[i])
        }
       




        
//// causal attribution task ////
        
        
// helper function to create questions for likert scale from array of strings
        function create_ca_question_item(prompt_array, type, scale_labels){
            question_array = []
            for (var i = 0; i < prompt_array.length; i++){
                question_array.push( {
                    prompt: "<b>" + prompt_array[i] + "</b>",
                    name: type + i, 
                    labels: scale_labels, 
                    required: true
                })
            }
            return (question_array)
        }


        var attribution_mp_primer = {
            type: "instructions", 
            pages: [
                attribution_mp_primer_text
            ],
            show_clickable_nav: true
        
        
        }

// Morris & Peng: 2 stories, EN only
        
        // Morris_IowaShooting
        // story
        var attribution_wave2_IowaShooting_para1 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory1_IowaShooting_para1,
        } 
        var attribution_wave2_IowaShooting_para2 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory1_IowaShooting_para2,
        }
        var attribution_wave2_IowaShooting_para3 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory1_IowaShooting_para3,
        }     
        var attribution_wave2_IowaShooting_para4 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory1_IowaShooting_para4,
        }

        // free response 
        var attribution_wave2_IowaShooting_free_responses = {
            type: "survey-text",
            questions: [
                {prompt: MorriStory_free_description_prompt, 
                required: true, 
                rows: 5}
            ], 
            button_label: MorriStory_free_description_button
        }

        // qestions 
        attribution_wave2_IowaShooting_personal_questions = create_ca_question_item(
            MorrisStory1_IowaShooting_questions_personal, 
            "personal", 
            MorriStory_scale
        )
        attribution_wave2_IowaShooting_situational_questions = create_ca_question_item(
            MorrisStory1_IowaShooting_questions_situational, 
            "situational", 
            MorriStory_scale
        )
        attribution_wave2_IowaShooting_questions = attribution_wave2_IowaShooting_personal_questions.concat(attribution_wave2_IowaShooting_situational_questions)
        // creating likert scale
        var attribution_wave2_IowaShooting_questions = {
            type: "survey-likert", 
            preamble: MorriStory_preamble , 
            questions: attribution_wave2_IowaShooting_questions, 
            randomize_question_order: true, 
            button_label: question_button,
            scale_width: 1000
        }
        // packaging iowa shooting
        var attribution_wave2_IowaShooting_task = [
            attribution_mp_primer,
            attribution_wave2_IowaShooting_para1,
            attribution_wave2_IowaShooting_para2,
            attribution_wave2_IowaShooting_para3,
            attribution_wave2_IowaShooting_para4,
            attribution_wave2_IowaShooting_free_responses,
            attribution_wave2_IowaShooting_questions,	
        ]


        // Morris_OfficeShooting
        // story
        var attribution_wave2_OfficeShooting_para1 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory2_OfficeShooting_para1,
        } 
        var attribution_wave2_OfficeShooting_para2 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory2_OfficeShooting_para2,
        }
        var attribution_wave2_OfficeShooting_para3 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory2_OfficeShooting_para3,
        }     
        var attribution_wave2_OfficeShooting_para4 = {
            type: 'html-keyboard-response',
            stimulus:attribution_reading_instruction,
            choices: jsPsych.ALL_KEYS,
            prompt: MorrisStory2_OfficeShooting_para4,
        }

        var attribution_wave2_OfficeShooting_free_responses = {
            type: "survey-text",
            questions: [
                {prompt: MorriStory_free_description_prompt, 
                required: true, 
                rows: 5}
            ], 
            button_label: MorriStory_free_description_button
        }

        // questions
        attribution_wave2_OfficeShooting_personal_questions = create_ca_question_item(
            MorrisStory2_OfficeShooting_questions_personal, 
            "personal", 
            MorriStory_scale
        )
        attribution_wave2_OfficeShooting_situational_questions = create_ca_question_item(
            MorrisStory2_OfficeShooting_questions_situational, 
            "situational", 
            MorriStory_scale
        )
        attribution_wave2_OfficeShooting_questions = attribution_wave2_OfficeShooting_personal_questions.concat(attribution_wave2_OfficeShooting_situational_questions)
        // creating likert scale
        var attribution_wave2_OfficeShooting_questions = {
            type: "survey-likert", 
            preamble:MorriStory_preamble , 
            questions: attribution_wave2_OfficeShooting_questions, 
            randomize_question_order: true, 
            button_label: question_button,
            scale_width: 1000
        }
        // packaging office shooting
        var attribution_wave2_OfficeShooting_task = [
            attribution_mp_primer,
            attribution_wave2_OfficeShooting_para1,
            attribution_wave2_OfficeShooting_para2,
            attribution_wave2_OfficeShooting_para3,
            attribution_wave2_OfficeShooting_para4,
            attribution_wave2_OfficeShooting_free_responses, 
            attribution_wave2_OfficeShooting_questions
        ]

          
// create story pool and randomly draw one
        var attribution_story_pool = [
            attribution_wave2_IowaShooting_task,
            attribution_wave2_OfficeShooting_task,
        ]
        var attribution_task = get_random_element(attribution_story_pool)
        
        
        
        

//// conditional timeline ////
        
        // conditional function for CN "ineligible" timeline
        var draw_SI_CN_ineligible = get_random_element([
            all_semantic_intuition_li_main_subtasks//,
           // all_semantic_intuition_li_fu_subtasks  
            ])  // limain:lifu = 1:1 // only running the main right now 
        var if_node_ineligible = {
            timeline: [],
            conditional_function: function(){
                var en_reading_check_response = jsPsych.data.get().filter({trial_type: 'survey-multi-choice-en-reading-check'}).values()[0].responses;
                console.log(en_reading_check_response);
                if(en_reading_check_response.includes("不能")){
                    return true;
                } else {
                    return false;
                }
            }
        }
        
        // conditional function for CN "eligible" timeline
        var draw_SI_CN_eligible = get_random_element([
           // all_semantic_intuition_machery_subtasks,
            //all_semantic_intuition_machery_subtasks,
            all_semantic_intuition_li_main_subtasks // 
            //all_semantic_intuition_li_fu_subtasks
            ])  // in simple version we are only running li main, in complex version we can consider sampling machery:limain:lifu = 2:1:1
        var if_node_eligible = {
            timeline:[en_reading_check_feedback_eligible_page].concat(
                attribution_task
            ),
            conditional_function: function(){
                var en_reading_check_response = jsPsych.data.get().filter({trial_type: 'survey-multi-choice-en-reading-check'}).values()[0].responses;
                console.log(en_reading_check_response);
                if(en_reading_check_response.includes("不能")){
                    return false;
                } else {
                    return true;
                }
            }
        }
        
        

        
        
//////// PACKAGING
 
        
        // CN timeline
        var intuition_attribution_task_CN =[
            [en_reading_check].concat(
            if_node_ineligible,
            if_node_eligible
        )]  
 
        
        // EN timeline
        var intuition_attribution_task_EN = 
            [semantic_intuition_instr_page].concat(
                get_random_element([
                //all_semantic_intuition_machery_subtasks,
                all_semantic_intuition_li_main_subtasks
                //all_semantic_intuition_li_fu_subtasks
                ]),
                attribution_task
                // intuition_attribution_task_body
            )

              
        // package semantic_intuition_task: conditional on study language
        if (CN) {
            var li_main = all_semantic_intuition_li_main_subtasks.flat()
            var intuition_attribution_task = li_main.concat(intuition_attribution_task_CN.flat())
            //var intuition_attribution_task = intuition_attribution_task_CN.flat()

        } else {
            var li_main = all_semantic_intuition_li_main_subtasks.flat()
            var intuition_attribution_task = intuition_attribution_task_EN.flat();  // flatten the array
        }
        

        
//        console.log(semantic_intuition_task)





        