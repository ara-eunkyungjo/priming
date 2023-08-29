// Change Detection Task 

//////// PRELOAD 
// a bunch of change detection images 

var change_detection_audio = []
var change_detection_images = ["assets/img/change_detection/1a.jpg",
                               "assets/img/change_detection/1b.jpg",
                               "assets/img/change_detection/2a.jpg",
                               "assets/img/change_detection/2b.jpg",
                               "assets/img/change_detection/3a.jpg",
                               "assets/img/change_detection/3b.jpg",
                               "assets/img/change_detection/4a.jpg",
                               "assets/img/change_detection/4b.jpg",
                               "assets/img/change_detection/5a.jpg",
                               "assets/img/change_detection/5b.jpg",
                               "assets/img/change_detection/6a.jpg",
                               "assets/img/change_detection/6b.jpg",
                               "assets/img/change_detection/7a.jpg",
                               "assets/img/change_detection/7b.jpg",
                               "assets/img/change_detection/8a.jpg",
                               "assets/img/change_detection/8b.jpg",
                               "assets/img/change_detection/9a.jpg",
                               "assets/img/change_detection/9b.jpg",
                               "assets/img/change_detection/10a.jpg",
                               "assets/img/change_detection/10b.jpg",
                               "assets/img/change_detection/11a.jpg",
                               "assets/img/change_detection/11b.jpg",
                               "assets/img/change_detection/12a.jpg",
                               "assets/img/change_detection/12b.jpg",
                               "assets/img/change_detection/13a.jpg",
                               "assets/img/change_detection/13b.jpg",
                               "assets/img/change_detection/14a.jpg",
                               "assets/img/change_detection/14b.jpg",
                               "assets/img/change_detection/15a.jpg",
                               "assets/img/change_detection/15b.jpg",
                               "assets/img/change_detection/16a.jpg",
                               "assets/img/change_detection/16b.jpg",
                               "assets/img/change_detection/17a.jpg",
                               "assets/img/change_detection/17b.jpg",
                               "assets/img/change_detection/18a.jpg",
                               "assets/img/change_detection/18b.jpg",
                               "assets/img/change_detection/19a.jpg",
                               "assets/img/change_detection/19b.jpg",
                               "assets/img/change_detection/20a.jpg",
                               "assets/img/change_detection/20b.jpg",
                               "assets/img/change_detection/21a.jpg",
                               "assets/img/change_detection/21b.jpg",
                               "assets/img/change_detection/22a.jpg",
                               "assets/img/change_detection/22b.jpg",
                               "assets/img/change_detection/23a.jpg",
                               "assets/img/change_detection/23b.jpg",
                               "assets/img/change_detection/24a.jpg",
                               "assets/img/change_detection/24b.jpg",
                               "assets/img/change_detection/25a.jpg",
                               "assets/img/change_detection/25b.jpg",
                               "assets/img/change_detection/26a.jpg",
                               "assets/img/change_detection/26b.jpg",
                               "assets/img/change_detection/27a.jpg",
                               "assets/img/change_detection/27b.jpg",
                               "assets/img/change_detection/28a.jpg",
                               "assets/img/change_detection/28b.jpg",
                               "assets/img/change_detection/29a.jpg",
                               "assets/img/change_detection/29b.jpg",
                               "assets/img/change_detection/30a.jpg",
                               "assets/img/change_detection/30b.jpg"
                              ]
var change_detection_video = []


audio = audio.concat(change_detection_audio)
images = images.concat(change_detection_images)
video = video.concat(change_detection_video)


// TASK VARIABLES 
var stimulus_pair = 30 
var stimulus_presentation_length = 560
var stimulus_interval_length = 80
var max_time = 60 * 1000 


var resp_prompt = change_detection_prompt
var manipulation_prompt = change_detection_manipulation_prompt

var stimulus_index = Array.from({ length: stimulus_pair }, (v, i) => i+1)
var task_stimulus_a = stimulus_index.map(i =>'<img src="assets/img/change_detection/' + i + 'a.jpg" style="width:800px;height:600px;">')
var task_stimulus_b = stimulus_index.map(i =>'<img src="assets/img/change_detection/' + i + 'b.jpg" style="width:800px;height:600px;">')
    


// Set up the experiment 

 var change_detection_instruction = {
    type: 'instructions',
    pages: [
        change_detection_instruction,
    ],
    show_clickable_nav: true,
    button_label_next: questions_pre_button,
    allow_backward: false
} 
 

var all_change_detection_trials = []
    
for (i = 0; i < stimulus_pair; i++){        
        // shuffle within pair 
        var stimuli = [task_stimulus_a[i], task_stimulus_b[i]]
        var stimuli = shuffle(stimuli)
        
        var describe_difference_trial = {
                type: 'survey-text',
                data: {
                variable_type: "change_detection_report" 
            },
                questions: [
                    {prompt: resp_prompt, name: 'Description' + i,  required: true}, 
                ],
                button_label: questions_pre_button,
               
            };
        
      
        
        var change_detection_trial = {
            type: "change-detection", 
            prompt: change_detection_page_instruction, 
            stimulus: "",
            first_stimulus: stimuli[0],
            second_stimulus: stimuli[1],
            stimulus_presentation: stimulus_presentation_length,  
            stimulus_interval: stimulus_interval_length, 
            choices: ["space"], 
            response_ends_trial: true, 
            trial_duration: max_time, 
            data: {
                trial_type: "change_detection", 
                stimuli: stimuli[0] + "_" + stimuli[1]
            }

        }

        var change_detection_trial = [change_detection_trial, describe_difference_trial]

        all_change_detection_trials.push(change_detection_trial)
        
        
    }
    
all_change_detection_trials = shuffle(all_change_detection_trials)
all_change_detection_trials = all_change_detection_trials.flat()

// Set up the manipulation check  

var change_detection_manipulation_instruction = {
    type: 'instructions',
    pages: [
        change_detection_manipulation_instruction,
    ],
    show_clickable_nav: true,
    button_label_next: questions_pre_button,
    allow_backward: false
} 

var manipulation_check_stimuli = stimulus_index.map(i =>
                                             ({prompt: '<img src="assets/img/change_detection/' + i + 'a.jpg" style="width:400px;height:300px;">' +  '<img src="assets/img/change_detection/' + i + 'b.jpg" style="width:400px;height:300px;">', name: "pair" + i})
                                             ) 
    
        
manipulation_check_stimuli = shuffle(manipulation_check_stimuli)
    
var manipulation_trials = []
        
for (i = 0; i < stimulus_pair; i++){

        manipulation_check_stimulus = manipulation_check_stimuli[i].prompt
         var manipulation_trial = {
                type: 'survey-text',
                data: {
                variable_type: "change_detection_manipulation_check", 
                prompt:  manipulation_check_stimulus
            },
                questions: [
                    {prompt: manipulation_check_stimulus + manipulation_prompt,
                        required: true 
                    }, 
                ],
                required: true 
            };
        
        manipulation_trials.push(manipulation_trial)
    }

var change_detection_task = []
change_detection_task = change_detection_task.concat(change_detection_instruction)
change_detection_task = change_detection_task.concat(all_change_detection_trials)
change_detection_task = change_detection_task.concat(change_detection_manipulation_instruction)
change_detection_task = change_detection_task.concat(manipulation_trials)
