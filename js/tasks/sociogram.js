// Sociogram task 
var sociogram_audio = [
]

var sociogram_images = ["media/images/sociogram/1e.gif",
                        "media/images/sociogram/2e.gif",
                        "media/images/sociogram/3e.gif",
                        "media/images/sociogram/4e.gif",
                        "media/images/sociogram/1m.gif",
                        "media/images/sociogram/2m.gif",
                        "media/images/sociogram/3m.gif",
                        "media/images/sociogram/4m.gif"
]

var sociogram_videos = []

audio = audio.concat(sociogram_audio)
images = images.concat(sociogram_images)
video = video.concat(sociogram_videos)


// TASK VARIABLES 
 var sociogram_instruction = {
    type: 'instructions',
    pages: [
        sociogram_instruction,
        sociogram_demo_drawcircle_prompt, 
        sociogram_demo_deletecircle_prompt,
        sociogram_demo_drawline_prompt,
        sociogram_demo_label_prompt
    ],
    show_clickable_nav: true,
    //button_label_next: questions_pre_button,
    allow_backward: false
}  

 var exp = {
        type: "konva-draw-circle",
        canvas_width: 1000,
        canvas_height: 720,
        prompt: sociogram_prompt,
        button_label: label_done, 
        menu_label: sociogram_menu_label,
        delete_label: sociogram_delete_label,
        label_filler_words: sociogram_label_filler_words, 
        small_circle_warning:  sociogram_small_circle_warning

    }    
 
var sociogram_task = [sociogram_instruction, exp]
 
