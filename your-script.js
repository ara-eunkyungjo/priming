// Define an array of image file paths (replace these with your actual image paths)
var imagePaths = [
    'assets/img/stimuli/1.jpg',
    'assets/img/stimuli/2.jpg',
    'assets/img/stimuli/3.jpg',
    'assets/img/stimuli/4.jpg',
    'assets/img/stimuli/5.jpg',
    'assets/img/stimuli/6.jpg',
    'assets/img/stimuli/7.jpg',
    'assets/img/stimuli/8.jpg',
    'assets/img/stimuli/9.jpg',
    'assets/img/stimuli/10.jpg',
    'assets/img/stimuli/11.jpg',
    'assets/img/stimuli/12.jpg',
    'assets/img/stimuli/13.jpg',
    'assets/img/stimuli/14.jpg',
    'assets/img/stimuli/15.jpg',
    'assets/img/stimuli/16.jpg',
    'assets/img/stimuli/17.jpg',
    'assets/img/stimuli/18.jpg',
    'assets/img/stimuli/19.jpg',
    'assets/img/stimuli/20.jpg',

    // Add more image paths here
];
const jsPsych = initJsPsych();

// Shuffle the image order
jsPsych.randomization.shuffle(imagePaths);

// Initialize jsPsych
jsPsych.init({
    timeline: [
        {
            type: jsPsychHtmlKeyboardResponse,
            pages: [
                '<p>Welcome to the image rating task.</p>',
                '<p>You will see 20 pictures, and after every 5 pictures, you will be asked to rate them on a 5-point Likert scale.</p>',
                '<p>Click "Next" to begin.</p>'
            ],
            show_clickable_nav: true
        }
    ]
});

// Create a loop for displaying images and collecting ratings
for (let i = 0; i < imagePaths.length; i++) {
    const imageTrial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: imagePaths[i],
        choices: ['1', '2', '3', '4', '5'],
        prompt: '<p>How much do you like this image?</p>'
    };

    // Add a rating trial every 5 images
    if ((i + 1) % 5 === 0) {
        const ratingTrial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Please rate the previous 5 images on a 5-point Likert scale.</p>',
            choices: ['1', '2', '3', '4', '5']
        };

        jsPsych.timeline.addBlock({
            timeline: [imageTrial, ratingTrial],
            randomize_order: true
        });
    } else {
        jsPsych.timeline.addTrial(imageTrial);
    }
}

// Add a thank you message
jsPsych.timeline.push({
    type: jsPsychHtmlButtonResponse,
    pages: ['<p>Thank you for participating!</p>'],
    show_clickable_nav: false
});

// Start the experiment
jsPsych.start();
