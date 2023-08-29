// raven_task

//////// PRELOAD
var raven_audio = []

var raven_images = [
    // a 
    "media/images/raven/a.png", "media/images/raven/a1.png", "media/images/raven/a2.png", "media/images/raven/a3.png", "media/images/raven/a4.png",
    "media/images/raven/a5.png", "media/images/raven/a6.png", "media/images/raven/a7.png", "media/images/raven/a8.png",
    // b 
    "media/images/raven/b.png", "media/images/raven/b1.png", "media/images/raven/b2.png", "media/images/raven/b3.png", "media/images/raven/b4.png",
    "media/images/raven/b5.png", "media/images/raven/b6.png", "media/images/raven/b7.png", "media/images/raven/b8.png",
    // c          
    "media/images/raven/c.png", "media/images/raven/c1.png", "media/images/raven/c2.png", "media/images/raven/c3.png", "media/images/raven/c4.png",
    "media/images/raven/c5.png", "media/images/raven/c6.png", "media/images/raven/c7.png", "media/images/raven/c8.png",
    // d           
    "media/images/raven/d.png", "media/images/raven/d1.png", "media/images/raven/d2.png", "media/images/raven/d3.png", "media/images/raven/d4.png",
    "media/images/raven/d5.png", "media/images/raven/d6.png", "media/images/raven/d7.png", "media/images/raven/d8.png",
    // e 
    "media/images/raven/e.png", "media/images/raven/e1.png", "media/images/raven/e2.png", "media/images/raven/e3.png", "media/images/raven/e4.png",
    "media/images/raven/e5.png", "media/images/raven/e6.png", "media/images/raven/e7.png", "media/images/raven/e8.png",
    // f
    "media/images/raven/f.png", "media/images/raven/f1.png", "media/images/raven/f2.png", "media/images/raven/f3.png", "media/images/raven/f4.png",
    "media/images/raven/f5.png", "media/images/raven/f6.png", "media/images/raven/f7.png", "media/images/raven/f8.png",
    // g
    "media/images/raven/g.png", "media/images/raven/g1.png", "media/images/raven/g2.png", "media/images/raven/g3.png", "media/images/raven/g4.png",
    "media/images/raven/g5.png", "media/images/raven/g6.png", "media/images/raven/g7.png", "media/images/raven/g8.png",
    // h
    "media/images/raven/h.png", "media/images/raven/h1.png", "media/images/raven/h2.png", "media/images/raven/h3.png", "media/images/raven/h4.png",
    "media/images/raven/h5.png", "media/images/raven/h6.png", "media/images/raven/h7.png", "media/images/raven/h8.png",
    // i 
    "media/images/raven/i.png", "media/images/raven/i1.png", "media/images/raven/i2.png", "media/images/raven/i3.png", "media/images/raven/i4.png",
    "media/images/raven/i5.png", "media/images/raven/i6.png", "media/images/raven/i7.png", "media/images/raven/i8.png",
    // j 
    "media/images/raven/j.png", "media/images/raven/j1.png", "media/images/raven/j2.png", "media/images/raven/j3.png", "media/images/raven/j4.png",
    "media/images/raven/j5.png", "media/images/raven/j6.png", "media/images/raven/j7.png", "media/images/raven/j8.png",
    // k 
    "media/images/raven/k.png", "media/images/raven/k1.png", "media/images/raven/k2.png", "media/images/raven/k3.png", "media/images/raven/k4.png",
    "media/images/raven/k5.png", "media/images/raven/k6.png", "media/images/raven/k7.png", "media/images/raven/k8.png",
    // l 
    "media/images/raven/l.png", "media/images/raven/l1.png", "media/images/raven/l2.png", "media/images/raven/l3.png", "media/images/raven/l4.png",
    "media/images/raven/l5.png", "media/images/raven/l6.png", "media/images/raven/l7.png", "media/images/raven/l8.png",
    // practice
    "media/images/raven/practice.png", "media/images/raven/p1.png", "media/images/raven/p2.png", "media/images/raven/p3.png", "media/images/raven/p4.png",
    "media/images/raven/p5.png", "media/images/raven/p6.png",
    
    // instructions 
    "media/images/raven/instructions/rv_ins_1.png", 
    "media/images/raven/instructions/rv_ins_2.png", 
    "media/images/raven/instructions/rv_ins_3.png", 
    "media/images/raven/instructions/rv_ins_4.png", 
    "media/images/raven/instructions/rv_ins_5.png", 
    "media/images/raven/instructions/rv_ins_6.png", 
    "media/images/raven/instructions/rv_ins_7.png", 
    "media/images/raven/instructions/rv_ins_8.png", 
    "media/images/raven/instructions/rv_ins_9.png", 
    "media/images/raven/instructions/rv_ins_10.png", 
    "media/images/raven/instructions/rv_ins_11.png", 
    
]

var raven_video = []

audio = audio.concat(raven_audio)
images = images.concat(raven_images)
video = video.concat(raven_video)

//////// TASK VARIABLES

// Qs presented in fixed order (progressively harder) in keeping with standard Raven's SPM and Su 2020 methods

//instructions
var raven_instruction_pages = raven_instruction

var raven_instructions = {
    type: 'instructions',
    pages: raven_instruction_pages,
    show_clickable_nav: true,
    show_page_number: false
}

//practice trial
var practice_options = [
    "<img src='media/images/raven/p1.png' />",
    "<img src='media/images/raven/p2.png' />",
    "<img src='media/images/raven/p3.png' />",
    "<img src='media/images/raven/p4.png' />",
    "<img src='media/images/raven/p5.png' />",
    "<img src='media/images/raven/p6.png' />"
];

var raven_practice = {
    type: 'survey-multi-choice',
    button_label: raven_button,
    questions: [{
        prompt: "<img src='media/images/raven/practice.png' />",
        name: 'practice raven',
        options: practice_options,
        required: false,
        horizontal: true
    }],
    timeout: 90000
};

//////// PACKAGING

//main trials
var rav_nums = [1, 2, 3, 4, 5, 6, 7, 8];
var rav_lets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
raven_task = [raven_instructions, raven_practice];
rav_opts = {};
for (var i = 0; i < rav_lets.length; i++) {
    rav_opts[rav_lets[i]] = [];
    for (var j = 0; j < rav_nums.length; j++) {
        rav_opts[rav_lets[i]].push("<img src='media/images/raven/" + rav_lets[i] + rav_nums[j] + ".png' />");
    };

    raven_task.push({
        type: 'survey-multi-choice',
        button_label: raven_button,
        data: { variable_type: "raven" },
        questions: [{
            prompt: "<img src='media/images/raven/" + rav_lets[i] + ".png' />",
            name: rav_lets[i],
            options: rav_opts[rav_lets[i]],
            required: false,
            horizontal: true
        }],
        timeout: 90000
    })
};