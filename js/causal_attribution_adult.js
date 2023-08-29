window.addEventListener('beforeunload', function (e) {
    e.preventDefault(); 
    e.returnValue = 'Are you sure you want to leave? Your data may not be saved.';
});

//$.getJSON('https://json.geoiplookup.io/api?callback=?', function(data) {
//console.log(JSON.stringify(data, null, 2));
// jsPsych.data.addProperties({ IP: data.ip, country_code: data.country_code });
//});

// if we're not on MTurk, create a timestamp-based subject number; otherwise use turker ID




var timeline = [];


//timeline = timeline.concat(triads_task)


var thank_you = {

    type: 'instructions',
    pages: [
    '<p>Thank you for trying out our task! You can go back to the main page and try another task.</p>' 
    ],
    show_clickable_nav: false
    
    }

// the reason why we can't set this up in a for loop is b/c this is a dynamic language and it will always use the last thing in the for loop
var ca_morris_node = {
    timeline: attribution_task,
    conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        var data = jsPsych.data.get().last(1).values()[0];
        console.log(data)
        if(data.responses.includes("Experiment 2: Adult Causal Attribution (Morris & Peng, 1994)")){
            console.log("choose me!")
            return true;
        } else {
            return false;
        }
    }
}

semantic_intuition_task.push(thank_you)


si_li_main = all_semantic_intuition_li_main_subtasks.flat()
si_li_main.push(thank_you)




change_detection_task.push(thank_you)

raven_task.push(thank_you)


rmts_task.push(thank_you)

triads_task.push(thank_you)


sociogram_task.push(thank_you)



timeline = attribution_task






//timeline.push(thank_you)
console.log(timeline)





// set different php save and count scripts for each language
langChar = CN ? "M" : "E"
ageDir = kid ? "RR_kids" : "RR_adults2"

jsPsych.init({
        timeline: timeline,
       
       //         on_trial_finish: function () {
        //            saveData("cultureRR1-" + subject_id, jsPsych.data.get().csv());
        // show_progress_bar: !kid,
        // use_webaudio: true, // this won't work for local testing (CORS), but maybe on server
        // preload_audio: audio,
        // preload_images: images,
        // preload_video: video,
        // on_trial_finish: function(){
        // saveData("cultureRR1-" + subject_id, jsPsych.data.get().csv());
        // jsPsych.data.displayData();
        // setTimeout(function() { turk.submit(jsPsych.data.get().ignore('external-html').json()); }, 5000);
    })
    
