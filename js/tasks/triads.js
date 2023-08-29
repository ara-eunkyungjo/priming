

triads_instructions_page = {
    type: "task-instructions", 
    pages: [
        triads_instruction
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: triads_ready_button
}


N_FILLER = 15; // number of items displayed on 1 page
NUMBER_OF_QUESTIONS_PER_PAGE = 15

filler_items = getRandomSubarray(triads_fillers_items, N_FILLER) 

all_questions = []

// first, we set up all the triads items
for (var i = 0; i < triads_items.length; i++) {
    var current_question = {

             prompt: '<b>' + triads_items[i][0] + '</b>',
             name: triads_items[i][0] + "_triads",
             options: shuffle(triads_items[i][1]), 
             required: true, 
             horizontal: false,  
             stimulus_type: "triads"
        }
        all_questions.push(current_question);
}

// second, we set up all the filler items 
for (var i = 0; i < filler_items.length; i++) {
    var current_question = {

             prompt: '<b>' + filler_items[i][0] + '</b>',
             name: filler_items[i][0] + "_fillers",
             options: shuffle(filler_items[i][1]), 
             required: true, 
             horizontal: false,  
             stimulus_type: "filler"
        }
        all_questions.push(current_question);
}

shuffle(all_questions) 


//set up catch trials 
var catch_trials = []
for (var i  = 0; i < triads_catch_items.length; i++){
    var current_catch_trials = {
        prompt: '<b>' + triads_catch_items[i][0] + '</b>',
        name: triads_catch_items[i][0] + "_catch",
        options: shuffle(triads_catch_items[i][1]), 
        required: true, 
        horizontal: false,  
        stimulus_type: "catch"
    }
    catch_trials.push(current_catch_trials)
}

pages = chunk(all_questions, NUMBER_OF_QUESTIONS_PER_PAGE)
// setting up each page 

all_pages = []
for(var i = 0; i < pages.length; i++){
    current_questions = pages[i]
    current_questions.push(catch_trials[i])
    var current_page = {
        type: 'triads', 
        questions: current_questions,
        preamble: triads_question_preamble, 
        randomize_question_order: true,
        data: {
            stimulus_type: current_questions.map(({stimulus_type})=>stimulus_type),
            prompt: current_questions.map(({prompt})=>prompt),
            options: current_questions.map(({options})=>options)
        },
        button_label: questions_pre_button
    }

    all_pages.push(current_page)
}

triads_task = []
triads_task.push(triads_instructions_page)
triads_task = triads_task.concat(all_pages)

