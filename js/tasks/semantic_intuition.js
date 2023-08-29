// semantic intuition task from Machery paper


//////// TASK VARIABLES

       
        
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
        
        
        
        // task instruction
        var semantic_intuition_instr_page = {
            type: 'html-button-response',
            stimulus: semantic_intuition_instr,
            choices: [questions_pre_button],
        };
        
        
               
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
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_2_story_para1,
        }
        var semantic_intuition_jonah_2_para2 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
            choices: jsPsych.ALL_KEYS,
            prompt: jonah_2_story_para2,
        }
        var semantic_intuition_jonah_2_para3 = {
            type: 'html-keyboard-response',
            stimulus: 'Please read carefully:',
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
        var all_semantic_intuition_subtasks = 
            shuffle([
            semantic_intuition_godel_1,
            semantic_intuition_godel_2,
            semantic_intuition_jonah_1,
            semantic_intuition_jonah_2
        ])
//        // flatten all_semantic_intuition_subtasks array
//        var all_semantic_intuition_subtasks_flattened = []
//        for (var i = 0; i < all_semantic_intuition_subtasks.length; i++) {
//            var current_task = all_semantic_intuition_subtasks[i],
//            all_semantic_intuition_subtasks_flattened = all_semantic_intuition_subtasks_flattened.concat(current_task)
//        }        
        
        
        
        // conditional function for CN "ineligible" timeline
        var if_node_ineligible = {
            timeline: [en_reading_check_feedback_ineligible_page],
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
        var if_node_eligible = {
            timeline:[en_reading_check_feedback_eligible_page].concat(
                semantic_intuition_instr_page,
//                all_semantic_intuition_subtasks_flattened
                ...all_semantic_intuition_subtasks  // ... for flattening the array
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
        var semantic_intuition_task_CN = 
            [en_reading_check].concat(
            if_node_ineligible,
            if_node_eligible
        )  
 
        
        
        // EN timeline
        var semantic_intuition_task_EN = 
            [semantic_intuition_instr_page].concat(
                all_semantic_intuition_subtasks
            )

              
        
        // package semantic_intuition_task: conditional on study language
        if (CN) {
            var semantic_intuition_task = semantic_intuition_task_CN.flat();
        } else {
            var semantic_intuition_task = semantic_intuition_task_EN.flat();  // flatten the array
        }
        

        
//        console.log(semantic_intuition_task)





        