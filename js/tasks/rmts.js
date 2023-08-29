// rmts_task

//////// PRELOAD
var rmts_audio = [
    'media/audios/rmts/1_marseillaise.mp3',
    ...kid ? rmts_instruction_0_audio : [],
    ...kid ? rmts_test_trial_audio : [],
    ...kid ? rmts_instruction_1_audio : [],
]

var rmts_images = [ // other images also preloaded later
    'media/images/rmts/table.png', 'media/images/rmts/box.png',
    'media/images/rmts/box2.png', 'media/images/rmts/white.png',
    'media/images/rmts/tray.png',
    'media/images/rmts/rmts_instruction/rmts_ins_1.png',
    'media/images/rmts/rmts_instruction/rmts_ins_2.png',
    'media/images/rmts/rmts_instruction/rmts_ins_3.png',
    'media/images/rmts/rmts_instruction/rmts_ins_4.png',
    'media/images/rmts/rmts_instruction/rmts_ins_5.png',
    'media/images/rmts/rmts_instruction/rmts_ins_6.png',
    'media/images/rmts/rmts_instruction/rmts_ins_7.png',
]

var rmts_video = []

audio = audio.concat(rmts_audio)
images = images.concat(rmts_images)
video = video.concat(rmts_video)

//////// TASK VARIABLES

// setup

var set1 = [
    "media/images/rmts/a.png", "media/images/rmts/b.png", "media/images/rmts/c.png", "media/images/rmts/d.png", "media/images/rmts/e.png",
    "media/images/rmts/f.png", "media/images/rmts/g.png", "media/images/rmts/h.png", "media/images/rmts/i.png", "media/images/rmts/j.png",
    "media/images/rmts/k.png", "media/images/rmts/l.png", "media/images/rmts/m.png", "media/images/rmts/n.png", "media/images/rmts/o.png"
];

var set2 = [
    "media/images/rmts/1.png", "media/images/rmts/2.png", "media/images/rmts/3.png", "media/images/rmts/4.png", "media/images/rmts/5.png", 
    "media/images/rmts/6.png", "media/images/rmts/7.png", "media/images/rmts/8.png", "media/images/rmts/9.png", "media/images/rmts/10.png", 
    "media/images/rmts/11.png", "media/images/rmts/12.png", "media/images/rmts/13.png", "media/images/rmts/14.png", "media/images/rmts/15.png"
];

images = images.concat(set1)
images = images.concat(set2)

var scene1 = {
    'table': 'media/images/rmts/table.png',
    'box': kid ? 'media/images/rmts/box2.png' : 'media/images/rmts/box.png', // no flashing for kid
    'box2': 'media/images/rmts/box2.png',
    'background': 'media/images/rmts/white.png', // slightly off-white
    'song': 'media/audios/rmts/1_marseillaise.mp3'
};
var scene2 = scene1

var friends1 = ['media/images/rmts/friend1.png', 'media/images/rmts/friend2.png', 'media/images/rmts/friend3.png', 'media/images/rmts/friend4.png'];
var friends2 = ['media/images/rmts/friend4.png', 'media/images/rmts/friend5.png', 'media/images/rmts/friend6.png'];

images = images.concat(friends1)
images = images.concat(friends2)

var rmts_instruction_0_pages = rmts_instruction_0
var rmts_instruction_1_pages = rmts_instruction_1

var rmts_instructions = {
    type: 'task-instructions-audio',
    pages: rmts_instruction_0_pages,
    audio_pages: kid ? rmts_instruction_0_audio : '',
    show_clickable_nav: true,
    show_page_number: false,
    post_trial_gap: 2000
}

var block1 = set1;
block1 = shuffle(block1);

// get the training and testing objects per block
bl1_train_stim = block1.slice(0, 6);
bl1_test_stim = block1.slice(6, 15);

var sameFirst = 0; // set block to be different block
// WARNING: 
// current version never allows running sameFirst, but if one wants to use the sameFirst version then it will need to be modified to reflect ambiguous training-test structure. 
// (right now sameFirst is regular RMTS)

// build JSON (dictionary) of training trials for bl1
if (sameFirst) { //irrelevant
    var bl1_train_trials = [
        {
            stimuli: [bl1_train_stim[0], bl1_train_stim[0]],
            activate: true
        },
        {
            stimuli: [bl1_train_stim[1], bl1_train_stim[2]],
            activate: false
        },
        {
            stimuli: [bl1_train_stim[3], bl1_train_stim[3]],
            activate: true
        },
        {
            stimuli: [bl1_train_stim[4], bl1_train_stim[5]],
            activate: false
        }];
} else { // different first
    var bl1_train_trials = [
        {
            stimuli: [bl1_train_stim[0], bl1_train_stim[1]],
            activate: true
        },
        {
            stimuli: [bl1_train_stim[2], bl1_train_stim[2]],
            activate: false
        },
        {
            stimuli: [bl1_train_stim[3], bl1_train_stim[0]], //repeat bl1_train_stim[0]
            activate: true
        },
        {
            stimuli: [bl1_train_stim[5], bl1_train_stim[5]],
            activate: false
        }];
}

// loop over the above JSONs to specify the backdrops for block 1 and 2 as scene1 and scene2, respectively, 
// and the trial type as training throughout
for (var i = bl1_train_trials.length - 1; i >= 0; i--) {
    bl1_train_trials[i].scene = scene1;
    bl1_train_trials[i].type = "rmts-train";
    bl1_train_trials[i].numTriesPerPair = kid ? 2 : 1; // if kid, all training trials will play twice, otherwise once
};

// NOW on to test trials
// counterbalance correct answers across sides with 1 block 2L/1R and the other 1L/2R

// make the L/R counterbalance order list and shuffle
var order1 = ['L', 'L', 'R', 'R']

order1 = shuffle(order1);
order2 = shuffle(order1);

//flip to decide which L/R counterbalance goes with which block, and assign these
if (Math.random() >= 0.5) {
    var bl1_response_side = order1;
    var bl2_response_side = order2;
} else {
    var bl1_response_side = order2;
    var bl2_response_side = order1;
}

// build JSON (dictionary) of TEST trials for bl1, and arbirarily assign samePairs to side specified in order vector
var bl1_test_trials = [
    {
        samePair: [bl1_train_stim[0], bl1_train_stim[0]], //bl1_train_stim[0] is repeated block
        diffPair: [bl1_train_stim[1], bl1_train_stim[3]], //first test trial uses training blocks associated with activation (train 1 and 3) as the different pair
        sameSide: [bl1_response_side[0]],
        friend: friends1[0]
    },
    {
        samePair: [bl1_train_stim[0], bl1_train_stim[0]],
        diffPair: [bl1_test_stim[2], bl1_test_stim[3]], //test stim used: 2, 3
        sameSide: [bl1_response_side[1]],
        friend: friends1[1]
    },
    {
        samePair: [bl1_train_stim[0], bl1_train_stim[0]],
        diffPair: [bl1_test_stim[4], bl1_test_stim[5]], //test stim used: 4, 5
        sameSide: [bl1_response_side[2]],
        friend: friends1[2]
    },
    {
        samePair: [bl1_train_stim[0], bl1_train_stim[0]],
        diffPair: [bl1_test_stim[6], bl1_test_stim[7]], //test stim used: 6, 7
        sameSide: [bl1_response_side[3]],
        friend: friends1[3]
    }];

for (var i = bl1_test_trials.length - 1; i >= 0; i--) {
    bl1_test_trials[i].scene = scene1;
    bl1_test_trials[i].type = "rmts-test";
    bl1_test_trials[i].prompt = rmts_test_trial;
    if (kid) bl1_test_trials[i].prompt_audio = rmts_test_trial_audio;
};

var rmts_test_instructions = {
    type: 'task-instructions-audio',
    pages: rmts_instruction_1_pages,
    audio_pages: kid ? rmts_instruction_1_audio : '',
    show_clickable_nav: true,
    show_page_number: false,
    post_trial_gap: 2000
}

var rmts_outro = { // deprecated
    type: "html-button-response",
    stimulus: "<p><strong>Great! You're done with this game! Let's play another!</strong></p>",
    choices: [rmts_instruction_2button],
};

//////// PACKAGING
// (list of training and test trials solves trial array embedded in timeline array error)
var rmts_task = [
    rmts_instructions,
    bl1_train_trials[0], 
    bl1_train_trials[1],
    bl1_train_trials[2],
    bl1_train_trials[3],

    rmts_test_instructions,
    bl1_test_trials[0],
    bl1_test_trials[1],
    bl1_test_trials[2],
    bl1_test_trials[3],
    // rmts_outro
]