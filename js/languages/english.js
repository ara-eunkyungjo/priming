//Tell people to use the right broswer
browserDetection_pre = "Hi there, it looks like you are using "
browserDetection_post = " browser. This page only works in Chrome or Firefox--please open this page using Chrome or Firefox. If you found this page through Amazon Mechanical Turk and you do not have access to Chrome or Firefox, please return this HIT."

// fullscreen mode message 
full_screen_mode_message = "<p>The experiment will switch to full screen mode when you press the button below</p>"
fullscreen_mode_button =  "Continue"

// Warning 
general_warnings = [
    "<p><img src= 'media/images/infrastructure/warning.png' height='150' width='150'></p>" + 
    "<h1 style='font-size:50px'></h1>" + 
    "<h1 style='font-size:50px'>FLICKERING LIGHT WARNING</h1>" + 
    "<h1 style='font-size:30px'>This study contains flickering images.</h1>" + 
    "<h1 style='font-size:30px'>People who are affected by flickering light should not participate.</h1>",
    "<p><img src= 'media/images/infrastructure/warning.png' height='150' width='150'></p>" + 
    "<h1 style='font-size:50px'></h1>" + 
    "<h1 style='font-size:50px'>CONTENT WARNING</h1>" + 
    "<h1 style='font-size:30px'>This study contains subcomponents that are designed for children, while others are for adults exclusively.</h1>" + 
    "<h1 style='font-size:30px'>This is to help us understand the developmental trajectories of the performance at certain tasks better. </h1>" + 
    "<h1 style='font-size:30px'>Please be advised that some participants may find the incongruity of the styles across tasks upsetting.</h1>" 
]

// Stanford Consent
first_page_instruction = [
    "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
    "<div style='width: 568px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
    "<img src='media/images/infrastructure/stanford.png' height='46' width='360' alt='Stanford University'></div>" +
    "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>" +
    "<p>In this experiment, you'll play a few short games. Some of these games were " +
    "designed for children, but we ask you to pay close attention and try to be as " +
    "accurate as possible. " + "<u style=\"color:red;\">You will hear sound, so please make sure your speakers" +
    " are turned on and your volume is up.</u> " +
    "<p class='block-text' id='legal'>Legal information: By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology. If you have questions about this research, please contact Alex Carstensen at <a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>. You must be at least 18 years old to participate. Your participation in this research is voluntary. You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p></div><p />" //,
]

first_page_instruction_kid = [
    "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
    "<div style='width: 568px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
    "<img src='media/images/infrastructure/stanford.png' height='46' width='360' alt='Stanford University'></div>" +
    "<center><p><strong>Stanford Language and Cognition Lab</strong></p></center>" +
    "<p>In this experiment, your child will play a few short games. We will start off with a " +
    "few pages for you to go through before passing over to your child. " +
    "<u style=\"color:red;\">You will hear sound, so please make sure your speakers are turned on " +
    "and your volume is up.</u></p></div>"
]

real_data_prompt = "Please select the option that applies:"
real_data_options = [
    "I am just trying out the experiment.",
    "I am a parent with a child who is ready to do the experiment."
]

consent_text = [
    "<div id='consent' style='font-size: 15px; line-height: normal; text-align: left; padding: 40px'><h1>Parent Consent for Online Testing</h1>" +
    "<p>DESCRIPTION: Our studies are designed to be fun, age-appropriate activities for young children, and easily conducted " +
    "online through a web browser or through tablet-based apps with parental guidance. Your child will be asked to play one or " +
    "more short research games. In these games, your child will be introduced to storybooks, pictures, animations, or pre-recorded " +
    "video clips; in some studies we may present toys and puppets. Afterwards we will ask short questions. Thereare no right or " +
    "wrong answers; we are just interested in what children think.</p>" +
    "<p>RISKS AND BENEFITS: Participation in our research has no foreseeable risks or discomforts to you or your child. If your " +
    "child wants to stop participating for any reason, you can end the session immediately with no penalty. We cannot and do not " +
    "guarantee that you will receive any benefits from participation, apart from the satisfaction of contributing to scientific " +
    "research.</p>" +
    "<p>PAYMENTS: You will not receive a cash payment for your participation in this research.</p>" +
    "<p>TIME: Each session typically lasts no more than 15 minutes, depending on the nature of the study.  Most studies involve a " +
    "single session, but in some cases you and your child will be invited to participate in more than one session.</p>" +
    "<p>CONTACT INFORMATION: If you have any questions, concerns, or complaints about this research study, its procedures, risks, " +
    "and benefits, contact the Protocol Director, Dr. Michael C. Frank. Email: <a href='mailto:langcoglab@stanford.edu'>" +
    "langcoglab@stanford.edu</a>, Phone: (650) 721-9270. <br />" +
    "Independent Contact: If you have any concerns, complaints, or general questions about your rights as a participant, please " +
    "contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team. Phone: " +
    "(650) 723-2480, or toll free at 1-866-680-2906.  Mail: Stanford IRB, 1705 El Camino Real, Stanford University, Stanford, " +
    "CA 94305-5401.</p>" +
    "<p>PARTICIPANT'S RIGHTS: Your child's participation is voluntary and your child has the right to withdraw his/her consent or " +
    "discontinue participation at any time without any negative consequences.</p>" +
    "<p><input type='checkbox' id='consent_checkbox' />  I give consent for my child to participate in this study. I understand that " +
    "I or my child may stop participation at any time.</p>" +
    "</div>"
]

consent_alert = "If you wish to participate, you must check the box indicating consent."

parental_instruction_text = [
    "We are now ready to go! Please hand control over to your child. You are welcome to sit behind " +
    "him/her, but please let your child complete the tasks by himself/herself without intervening. <br /><br />"
]

parental_instruction_btn = ["Let's go!"]

child_assent_text = [
    "Would you like to play some computer games? If you want to stop playing, you can stop at any time! <br /><br />"
]

child_assent_btn = ["Let's go!"]

// audio check
audio_check_file = 'media/audios/infrastructure/six_E.mp3'
audio_prompt = ["Let's test your sound: Turn on your speaker and click on the speaker icon at the end of this sentence, then type in the number you hear. Just enter the single number, e.g., 2."]
audio_alert = ["Incorrect response: Your sound is not working, but is needed to continue. Please refresh the page if you would like to try again. Thank you!"]
audio_button = "Continue"

// mic check
mic_finish_button = "Finish"
mic_retry_button = "Retry"
mic_next_button = "Next"
mic_instruction = "Let's test your microphone: When prompted please allow the site to use your microphone."
mic_prompt = "When you see the speaking icon, please read out the following number: <b>9</b>, then press '"+mic_finish_button+"'. <br />" +
    "You will be able to play back your recording; make sure that you can hear yourself clearly, then press '"+mic_next_button+"'. <br />" +
    "Otherwise, you can press '"+mic_retry_button+"' to try again. "

mic_task_instruction = "When you see the speaking icon, the recording has started and you can start speaking."
mic_task_instruction_audio = ["media/audios/infrastructure/E_mic_task_instruction.mp3"]

// TASKS:

//horizon and circle transition instruction
circle_sticker_readyButton = "Yes!"
circle_sticker_package_instruction_circle_first = "<p>Now, you are going to play two short games.</p><p>In the first game, you will draw some circles.</p><p>In the second game, you will make a picture with stickers.</p><p>Are you ready?</p>"
circle_sticker_package_instruction_sticker_first = "<p>Now, you are going to play two short games.</p><p>In the first game, you will make a picture with stickers.</p><p>In the second game, you will draw some circles.</p><p>Are you ready?</p>"

// horizon
horizonOKbutton = 'OK!'
horizon1 = "<p>Let's practice! Use these stickers to make a picture! You can put as many stickers as you want.</p><p>When you are done, click on the button below.</p>"
horizondonebutton = "Done!"
horizonpractice_feedback_yes = 'Great! Let\'s try another one!'
horizonpractice_feedback_no = '<p>Oops! You need to use at least one sticker to make a picture!</p><p>Let\'s try again!</p>'

horizon_prepractice_instruction = "Now we are going to play a picture game. I'm going to give you some stickers, and you can put them together to make a picture."

horizon_postpractice_instruction1 = "There is no right way or wrong way to make the picture, and you can make your picture any way you like! You can put as many stickers as you want!"
horizon_postpractice_instruction2 = "This will be a picture of the outside, so your picture will have a <b>horizon</b>. Do you know what a <b>horizon</b> is?"
horizon_postpractice_instruction3 = "When you go outside, you see the sky comes down and meets the ground, and meakes one line. <p><b>That line is called a horizon.</b></p><p><img src= 'media/images/horizon/horizon.png'></p>"
horizon_postpractice_instruction4 = "Here is a picture with a horizon."
horizon_postpractice_instruction5 = "This is a horizon. <p><img src= 'media/images/horizon/instruction/horizon_postpractice_instruction5.png'></p>"
horizon_postpractice_instruction6 = "This is also a horizon. <p><img src= 'media/images/horizon/instruction/horizon_postpractice_instruction6.png'></p>"
horizon_postpractice_instruction7 = "Now that you know how, you can make your own picture with these stickers!"
horizon_postpractice_instruction8 = "Remember to put a horizon line in your picture. <p><img src= 'media/images/horizon/horizon.png'></p>"
horizon2 = "<p><b>Remember to put a horizon line in your picture!</b></p><p>Your picture should have at least one tree, one house, and one person, but you can put more than that too.</p>"

// Attribution Task
att_ready = '<p>Now, you are going to watch some videos. After the videos, I will ask you a few questions.</p><p>Are you ready?</p>'
att_ready_audio = ['media/audios/attribution/E_att_ready.mp3']
att_ready_button = 'Yes!'
attvid_young = ['media/videos/attribution/english_kid.webm']
attvid_adult = ['media/videos/attribution/english_adult.webm']
attprompt = '<p>Please watch the video.</p>'
attq1 = "<p><b>Why didn\'t Kelly play on the bicycle?</b></p><p><b>Is it because she is the kind of person who gets scared, or because the bicycle is dangerous to play on?</b></p><p><img src='media/images/attribution/ca_kelly.png' width=600></p><p>Please explain in full sentences.</p>"
attq1_audio = ['media/audios/attribution/E_attq1.mp3']
attq2 = "<p><b>Why didn\'t Lucy play on the bicycle?</b></p><p><b>Is it because she is the kind of person who gets scared, or because the bicycle is dangerous to play on?</b></p><img src='media/images/attribution/ca_lucy.png' width=600><p>Please explain in full sentences.</p>"
attq2_audio = ['media/audios/attribution/E_attq2.mp3']
attribution_button = "Done!"
attribution_alert = "Please say a little more!"


attribution_reading_instruction = "<b>Please read carefully.</b>"

attribution_mp_primer_text = "<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: center;'>"  + 
"<p>In this portion of the study, we will ask for your opinion about homicide. </p>" +
"Social scientists cannot, of course, do experiments to investigate what causes someone to engage in mass murder. Therefore, we must search for clues about possible causes by surveying people who share some experiences of the persons involved--i.e., because they have lived in the same region, at the same point in history (these homicides occurred in the 1990s), or because they are employed in the same line of work.</p>"  + 
"<p>We are surveying a number of groups with different types of shared experience. Your participation is important as a step toward combating the epidemic of mass murders.</p>"

MorriStory_preamble = "<p>We want to ask your opinion about some explanations for the murder that have been given by the news media.</p> " + 
"<p>We are not simply asking whether you think each statement is true or false. </p>" +
"<p>We want to know your opinion about <em>to what extent</em> each of these factors was a <i>cause</i> of the shooting. </p>"
MorriStory_scale = ["Not a cause at all", "A minor cause", "One of many causes", "A major cause", "A very important cause", "An extremely important cause", "The most important cause"]
MorriStory_free_description_prompt = "<p>Please write a brief explanation of the murderer’s behavior. </p> <p>Why did they behave in this way?</p>"
MorriStory_free_description_button = "Continue"

MorrisStory1_IowaShooting_para1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>On October 31, a physics student at the University of Iowa shot a fellow student, several professors, and several university employees, and then shot himself. The murderer, Gang Lu, was a 28 year old male from Beijing, China. In 1985, Gang Lu had graduated from the Physics Department of Beijing University (the most elite university in China), where he placed at the top of his class in examinations. He came to the University of Iowa Physics Department to pursue a Ph.D. and continued his academic success by recording the highest score ever on the qualifying exam there. Gang Lu was a bachelor and had few friends in iowa. He spent most of his time alone. One of his few extra-curricular activities was a gun club. He bought a gun in 1990 and practiced shooting it at a club. In 1991, he changed from a small gun to a powerful .38 revolver.</p> <p>(Press any key to continue...) </p>" + 

"<p><font style='opacity:0'> Gang Lu’s research was highly regarded in the department. However, at his dissertation defense in 1990, his committee did not pass him. Lu did not have a close relationship with his advisor, Professor Goertz. After this unsuccessful defense, Gang Lu was heard to say that he was so angry at his advisor that could kill him. In his second dissertation defense, Gang Lu passed and he got a Ph.D. in May, 1991. He did not get a job last year and took a job as a laboratory assistant.</font></p>" + 

"<p><font style='opacity:0'>Gang Lu ended up finishing his dissertation at the same time as a younger student in the same research group named Linhua Shan. Shan, from a small village in China, had graduated from the Chinese University of Science and Technology and come to Iowa in 1987. Shan was married, socially active, and had good relationships with others in the department. He was also very successful, receiving several awards during his studies and receiving the highest score on the qualifying exam his year (although not breaking Lu’s record). The faculty in this research group had to decide which of these two excellent students would be Iowa’s nominee for a national award. They nominated Shan over Lu. Lu appealed this decision to the Vice President for Academic Affairs, but his appeal was rejected.</font></p>" + 

"<p><font style='opacity:0'> On October 31, Lu sent five letters to news media and friends and sent a package to China. Then he went to the weekly meeting of his research group, carrying his gun. According to witnesses, he shot his advisor, an associate professor, and Shan. Then he walked upstairs, shot the department chairman, and started to leave the building. One of the dying professors cried out for help, and several people from nearby offices came to his assistance. Upon hearing this, Lu re-entered the room and told the people to leave. Despite their pleas, he shot the professor several more times. Then Lu walked across the entire campus to the Vice President’s office, gun in his hand. It was snowing heavily, but Lu wore only a t-shirt. There he shot the Vice President and a staff member. Then Lu shot himself.</font></p>"]

MorrisStory1_IowaShooting_para2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 

"<p>On October 31, a physics student at the University of Iowa shot a fellow student, several professors, and several university employees, and then shot himself. The murderer, Gang Lu, was a 28 year old male from Beijing, China. In 1985, Gang Lu had graduated from the Physics Department of Beijing University (the most elite university in China), where he placed at the top of his class in examinations. He came to the University of Iowa Physics Department to pursue a Ph.D. and continued his academic success by recording the highest score ever on the qualifying exam there. Gang Lu was a bachelor and had few friends in iowa. He spent most of his time alone. One of his few extra-curricular activities was a gun club. He bought a gun in 1990 and practiced shooting it at a club. In 1991, he changed from a small gun to a powerful .38 revolver.</p> " + 

"<p> Gang Lu’s research was highly regarded in the department. However, at his dissertation defense in 1990, his committee did not pass him. Lu did not have a close relationship with his advisor, Professor Goertz. After this unsuccessful defense, Gang Lu was heard to say that he was so angry at his advisor that could kill him. In his second dissertation defense, Gang Lu passed and he got a Ph.D. in May, 1991. He did not get a job last year and took a job as a laboratory assistant.</p><p>(Press any key to continue...) </p>" + 

"<p><font style='opacity:0'>Gang Lu ended up finishing his dissertation at the same time as a younger student in the same research group named Linhua Shan. Shan, from a small village in China, had graduated from the Chinese University of Science and Technology and come to Iowa in 1987. Shan was married, socially active, and had good relationships with others in the department. He was also very successful, receiving several awards during his studies and receiving the highest score on the qualifying exam his year (although not breaking Lu’s record). The faculty in this research group had to decide which of these two excellent students would be Iowa’s nominee for a national award. They nominated Shan over Lu. Lu appealed this decision to the Vice President for Academic Affairs, but his appeal was rejected.</font></p>" + 

"<p><font style='opacity:0'> On October 31, Lu sent five letters to news media and friends and sent a package to China. Then he went to the weekly meeting of his research group, carrying his gun. According to witnesses, he shot his advisor, an associate professor, and Shan. Then he walked upstairs, shot the department chairman, and started to leave the building. One of the dying professors cried out for help, and several people from nearby offices came to his assistance. Upon hearing this, Lu re-entered the room and told the people to leave. Despite their pleas, he shot the professor several more times. Then Lu walked across the entire campus to the Vice President’s office, gun in his hand. It was snowing heavily, but Lu wore only a t-shirt. There he shot the Vice President and a staff member. Then Lu shot himself.</font></p>"]

MorrisStory1_IowaShooting_para3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 

"<p>On October 31, a physics student at the University of Iowa shot a fellow student, several professors, and several university employees, and then shot himself. The murderer, Gang Lu, was a 28 year old male from Beijing, China. In 1985, Gang Lu had graduated from the Physics Department of Beijing University (the most elite university in China), where he placed at the top of his class in examinations. He came to the University of Iowa Physics Department to pursue a Ph.D. and continued his academic success by recording the highest score ever on the qualifying exam there. Gang Lu was a bachelor and had few friends in iowa. He spent most of his time alone. One of his few extra-curricular activities was a gun club. He bought a gun in 1990 and practiced shooting it at a club. In 1991, he changed from a small gun to a powerful .38 revolver.</p> " + 

"<p> Gang Lu’s research was highly regarded in the department. However, at his dissertation defense in 1990, his committee did not pass him. Lu did not have a close relationship with his advisor, Professor Goertz. After this unsuccessful defense, Gang Lu was heard to say that he was so angry at his advisor that could kill him. In his second dissertation defense, Gang Lu passed and he got a Ph.D. in May, 1991. He did not get a job last year and took a job as a laboratory assistant.</p>" + 

"<p>Gang Lu ended up finishing his dissertation at the same time as a younger student in the same research group named Linhua Shan. Shan, from a small village in China, had graduated from the Chinese University of Science and Technology and come to Iowa in 1987. Shan was married, socially active, and had good relationships with others in the department. He was also very successful, receiving several awards during his studies and receiving the highest score on the qualifying exam his year (although not breaking Lu’s record). The faculty in this research group had to decide which of these two excellent students would be Iowa’s nominee for a national award. They nominated Shan over Lu. Lu appealed this decision to the Vice President for Academic Affairs, but his appeal was rejected.</p><p>(Press any key to continue...) </p>" + 

"<p><font style='opacity:0'> On October 31, Lu sent five letters to news media and friends and sent a package to China. Then he went to the weekly meeting of his research group, carrying his gun. According to witnesses, he shot his advisor, an associate professor, and Shan. Then he walked upstairs, shot the department chairman, and started to leave the building. One of the dying professors cried out for help, and several people from nearby offices came to his assistance. Upon hearing this, Lu re-entered the room and told the people to leave. Despite their pleas, he shot the professor several more times. Then Lu walked across the entire campus to the Vice President’s office, gun in his hand. It was snowing heavily, but Lu wore only a t-shirt. There he shot the Vice President and a staff member. Then Lu shot himself.</font></p>"]

MorrisStory1_IowaShooting_para4 =  ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 

"<p>On October 31, a physics student at the University of Iowa shot a fellow student, several professors, and several university employees, and then shot himself. The murderer, Gang Lu, was a 28 year old male from Beijing, China. In 1985, Gang Lu had graduated from the Physics Department of Beijing University (the most elite university in China), where he placed at the top of his class in examinations. He came to the University of Iowa Physics Department to pursue a Ph.D. and continued his academic success by recording the highest score ever on the qualifying exam there. Gang Lu was a bachelor and had few friends in iowa. He spent most of his time alone. One of his few extra-curricular activities was a gun club. He bought a gun in 1990 and practiced shooting it at a club. In 1991, he changed from a small gun to a powerful .38 revolver.</p> " + 

"<p> Gang Lu’s research was highly regarded in the department. However, at his dissertation defense in 1990, his committee did not pass him. Lu did not have a close relationship with his advisor, Professor Goertz. After this unsuccessful defense, Gang Lu was heard to say that he was so angry at his advisor that could kill him. In his second dissertation defense, Gang Lu passed and he got a Ph.D. in May, 1991. He did not get a job last year and took a job as a laboratory assistant.</p>" + 

"<p>Gang Lu ended up finishing his dissertation at the same time as a younger student in the same research group named Linhua Shan. Shan, from a small village in China, had graduated from the Chinese University of Science and Technology and come to Iowa in 1987. Shan was married, socially active, and had good relationships with others in the department. He was also very successful, receiving several awards during his studies and receiving the highest score on the qualifying exam his year (although not breaking Lu’s record). The faculty in this research group had to decide which of these two excellent students would be Iowa’s nominee for a national award. They nominated Shan over Lu. Lu appealed this decision to the Vice President for Academic Affairs, but his appeal was rejected.</p>" + 

"<p> On October 31, Lu sent five letters to news media and friends and sent a package to China. Then he went to the weekly meeting of his research group, carrying his gun. According to witnesses, he shot his advisor, an associate professor, and Shan. Then he walked upstairs, shot the department chairman, and started to leave the building. One of the dying professors cried out for help, and several people from nearby offices came to his assistance. Upon hearing this, Lu re-entered the room and told the people to leave. Despite their pleas, he shot the professor several more times. Then Lu walked across the entire campus to the Vice President’s office, gun in his hand. It was snowing heavily, but Lu wore only a t-shirt. There he shot the Vice President and a staff member. Then Lu shot himself.</p><p>(Press any key to continue...) </p>"]



MorrisStory1_IowaShooting_questions_personal = [
    "Lu was mentally imbalanced because his life consisted only of work, without other activities which relieve stress.", 
    "Lu drove himself crazy by putting too much pressure on himself.", 
    "Lu had chronic personality problems.", 
    "Lu was a psychological time bomb—someone with a hidden mental illness that suddenly explodes", 
    "If Lu couldn\'t win, he didn't care about anything else.", 
    "Lu was obsessed with the award and lost his grip on reality. "
]
MorrisStory1_IowaShooting_questions_situational = [
    "America\'s extremely individualistic, selfish values corrupt foreign students.", 
    "American movies and television glorify violent revenge tactics.", 
    "The advisor failed in his duties to help Gang Lu and respond to his increasing frustration.", 
    //"The ruthless and brutal behavior of Chinese Communists set an example for him.", 
    "The chaotic times of the Cultural Revolution in China (persecution of intellectuals, etc.) created a generation lacking traditional morals and respect for others.", 
    "The recession has hurt the job market, which places stress on people seeking a new job."
]

MorrisStory2_OfficeShooting_para1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" +

"<p>On November 14, a former employee at the Royal Oak Post Office shot three former coworkers and then himself. The murderer, Thomas McIlvane, was a 31-year old male from Michigan. He came from a family of Irish descent. McIlvane was raised by his father, a tough ex-Marine, after his mother ran off, abandoning the family. Since high school, McIlvane had trained in the martial arts and had won competitions. He entered the US Marine Corp after high school, which took him to Japan and California. He returned to Michigan in 1982 when his father died and started a brief, unsuccessful career as a professional kick-boxer. Afterwards, he got a job as a mail carrier at the Royal Oak post office. He was a quiet man with few friends, but he was well-liked by his neighbors. His activities were working out and hunting.</p><p>(Press any key to continue...) </p>"+

"<p><font style='opacity:0'>In the Royal Oak post office, relationships were strained between supervisors and workers. Many workers had complained to their union, recently, that supervisors had harassed and intimidated them. Supervisors pushed workers to be more efficient and disciplined workers over matters such as whether their uniforms fit right and where they took their coffee breaks. When a union official complained that workers’ morale was low, the supervisor said \"Morale’s not in my dictionary.\"</font></p>"+

"<p><font style='opacity:0'>In the summer of 1990, McIlvane was fired from his job for swearing at his supervisors. He appealed this decision and his union fought the Postal Service for over a year to restore his job. He worked part-time cleaning carpets. During this time, McIlvane made many telephone threats to his former supervisors. Over the past five years there have been many publicized incidents of postal workers shooting their bosses. In McIlvane’s threats, he mentioned these incidents. For making these threats, he was taken to court but acquitted. Witnesses said that his supervisor ridiculed McIlvane when he fired him and laughed at him again in the courtroom. On November 13, 1991 McIlvane learned that he had lost his appeal--he would not get his job back. Workers who had heard rumors of McIlvane's threats asked for security guards at the post office, but nothing was done.</font></p>"+

"<p><font style='opacity:0'>On November 14, McIlvane entered the Royal Oak post office with a rifle. He fired several rounds in a mail sorting area, then he headed toward the supervisor’s office and shot the man who had fired him. Many terrified postal workers smashed windows and escaped through them. McIlvane worked his way toward the personnel office and shot the labor relations specialist who had handled his case. Then he went upstairs and shot several other supervisors who were not involved in his case. Finally, he walked back downstairs and shot himself in the head.</font></p>"]

MorrisStory2_OfficeShooting_para2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" +

"<p>On November 14, a former employee at the Royal Oak Post Office shot three former coworkers and then himself. The murderer, Thomas McIlvane, was a 31-year old male from Michigan. He came from a family of Irish descent. McIlvane was raised by his father, a tough ex-Marine, after his mother ran off, abandoning the family. Since high school, McIlvane had trained in the martial arts and had won competitions. He entered the US Marine Corp after high school, which took him to Japan and California. He returned to Michigan in 1982 when his father died and started a brief, unsuccessful career as a professional kick-boxer. Afterwards, he got a job as a mail carrier at the Royal Oak post office. He was a quiet man with few friends, but he was well-liked by his neighbors. His activities were working out and hunting.</p>"+

"<p>In the Royal Oak post office, relationships were strained between supervisors and workers. Many workers had complained to their union, recently, that supervisors had harassed and intimidated them. Supervisors pushed workers to be more efficient and disciplined workers over matters such as whether their uniforms fit right and where they took their coffee breaks. When a union official complained that workers’ morale was low, the supervisor said \"Morale’s not in my dictionary.\"</p><p>(Press any key to continue...) </p>"+

"<p><font style='opacity:0'>In the summer of 1990, McIlvane was fired from his job for swearing at his supervisors. He appealed this decision and his union fought the Postal Service for over a year to restore his job. He worked part-time cleaning carpets. During this time, McIlvane made many telephone threats to his former supervisors. Over the past five years there have been many publicized incidents of postal workers shooting their bosses. In McIlvane’s threats, he mentioned these incidents. For making these threats, he was taken to court but acquitted. Witnesses said that his supervisor ridiculed McIlvane when he fired him and laughed at him again in the courtroom. On November 13, 1991 McIlvane learned that he had lost his appeal--he would not get his job back. Workers who had heard rumors of McIlvane's threats asked for security guards at the post office, but nothing was done.</font></p>"+

"<p><font style='opacity:0'>On November 14, McIlvane entered the Royal Oak post office with a rifle. He fired several rounds in a mail sorting area, then he headed toward the supervisor’s office and shot the man who had fired him. Many terrified postal workers smashed windows and escaped through them. McIlvane worked his way toward the personnel office and shot the labor relations specialist who had handled his case. Then he went upstairs and shot several other supervisors who were not involved in his case. Finally, he walked back downstairs and shot himself in the head.</font></p>"]

MorrisStory2_OfficeShooting_para3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" +

"<p>On November 14, a former employee at the Royal Oak Post Office shot three former coworkers and then himself. The murderer, Thomas McIlvane, was a 31-year old male from Michigan. He came from a family of Irish descent. McIlvane was raised by his father, a tough ex-Marine, after his mother ran off, abandoning the family. Since high school, McIlvane had trained in the martial arts and had won competitions. He entered the US Marine Corp after high school, which took him to Japan and California. He returned to Michigan in 1982 when his father died and started a brief, unsuccessful career as a professional kick-boxer. Afterwards, he got a job as a mail carrier at the Royal Oak post office. He was a quiet man with few friends, but he was well-liked by his neighbors. His activities were working out and hunting.</p>"+

"<p>In the Royal Oak post office, relationships were strained between supervisors and workers. Many workers had complained to their union, recently, that supervisors had harassed and intimidated them. Supervisors pushed workers to be more efficient and disciplined workers over matters such as whether their uniforms fit right and where they took their coffee breaks. When a union official complained that workers’ morale was low, the supervisor said \"Morale’s not in my dictionary.\"</p>"+

"<p>In the summer of 1990, McIlvane was fired from his job for swearing at his supervisors. He appealed this decision and his union fought the Postal Service for over a year to restore his job. He worked part-time cleaning carpets. During this time, McIlvane made many telephone threats to his former supervisors. Over the past five years there have been many publicized incidents of postal workers shooting their bosses. In McIlvane’s threats, he mentioned these incidents. For making these threats, he was taken to court but acquitted. Witnesses said that his supervisor ridiculed McIlvane when he fired him and laughed at him again in the courtroom. On November 13, 1991 McIlvane learned that he had lost his appeal--he would not get his job back. Workers who had heard rumors of McIlvane's threats asked for security guards at the post office, but nothing was done.</p><p>(Press any key to continue...) </p>"+

"<p><font style='opacity:0'>On November 14, McIlvane entered the Royal Oak post office with a rifle. He fired several rounds in a mail sorting area, then he headed toward the supervisor’s office and shot the man who had fired him. Many terrified postal workers smashed windows and escaped through them. McIlvane worked his way toward the personnel office and shot the labor relations specialist who had handled his case. Then he went upstairs and shot several other supervisors who were not involved in his case. Finally, he walked back downstairs and shot himself in the head.</font></p>"]

MorrisStory2_OfficeShooting_para4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" +

"<p>On November 14, a former employee at the Royal Oak Post Office shot three former coworkers and then himself. The murderer, Thomas McIlvane, was a 31-year old male from Michigan. He came from a family of Irish descent. McIlvane was raised by his father, a tough ex-Marine, after his mother ran off, abandoning the family. Since high school, McIlvane had trained in the martial arts and had won competitions. He entered the US Marine Corp after high school, which took him to Japan and California. He returned to Michigan in 1982 when his father died and started a brief, unsuccessful career as a professional kick-boxer. Afterwards, he got a job as a mail carrier at the Royal Oak post office. He was a quiet man with few friends, but he was well-liked by his neighbors. His activities were working out and hunting.</p>"+

"<p>In the Royal Oak post office, relationships were strained between supervisors and workers. Many workers had complained to their union, recently, that supervisors had harassed and intimidated them. Supervisors pushed workers to be more efficient and disciplined workers over matters such as whether their uniforms fit right and where they took their coffee breaks. When a union official complained that workers’ morale was low, the supervisor said \"Morale’s not in my dictionary.\"</p>"+

"<p>In the summer of 1990, McIlvane was fired from his job for swearing at his supervisors. He appealed this decision and his union fought the Postal Service for over a year to restore his job. He worked part-time cleaning carpets. During this time, McIlvane made many telephone threats to his former supervisors. Over the past five years there have been many publicized incidents of postal workers shooting their bosses. In McIlvane’s threats, he mentioned these incidents. For making these threats, he was taken to court but acquitted. Witnesses said that his supervisor ridiculed McIlvane when he fired him and laughed at him again in the courtroom. On November 13, 1991 McIlvane learned that he had lost his appeal--he would not get his job back. Workers who had heard rumors of McIlvane's threats asked for security guards at the post office, but nothing was done.</p>"+

"<p>On November 14, McIlvane entered the Royal Oak post office with a rifle. He fired several rounds in a mail sorting area, then he headed toward the supervisor’s office and shot the man who had fired him. Many terrified postal workers smashed windows and escaped through them. McIlvane worked his way toward the personnel office and shot the labor relations specialist who had handled his case. Then he went upstairs and shot several other supervisors who were not involved in his case. Finally, he walked back downstairs and shot himself in the head.</p>"]


MorrisStory2_OfficeShooting_questions_personal = [
    "Mcllvane was mentally imbalanced because his life consisted only of violent activities such as hunting and martial arts.", 
    "Mcllvane drove himself crazy by worrying too much about getting his job back. ", 
    "Mcllvane had chronic personality problems.", 
    "Mcllvane was a psychological time bomb—someone with a hidden mental illness that suddenly explodes.", 
    "If Mcllvane couldn\'t get his way, he didn't care about anything else.", 
    "Mcllvane was obsessed with getting his job back and lost his grip on reality."
]

MorrisStory2_OfficeShooting_questions_situational = [
    "This was an extreme example of behavior that follows from America'\s individualistic, selfish values.", 
    "American movies and television glorify violent revenge tactics.", 
    "The supervisor and labor relations specialist failed in their duties to respect Mcllvane and respond to his increasing frustration.", 
    "The daily violence of the Detroit area set an example for him. ", 
    "The chaotic times of the 1960s in America (hippie culture, drugs, sexual freedom) broke down families and traditions, creating a generation without self-discipline and respect.", 
    "The recession has hurt the job market, which places stress on people seeking a new job."
]

//instruction
raven_button = "Continue"
raven_instruction = [
    "<p><b>On the following pages, you\'ll see twelve incomplete pictures, like this.</b></p><p><img src='media/images/raven/instructions/rv_ins_1.png' width=600></p>",
     
    "<p><b>Each picture has a piece missing.</b></p><p><img src='media/images/raven/instructions/rv_ins_2.png' width=600></p>",
    
    "<p><b>Each picture has a piece missing. </b></p><p><img src='media/images/raven/instructions/rv_ins_3.png' width=600></p><p><b>Below it you will see six different pieces.</b></p>",
    
    "<p><b>All six of the pieces are the right shape, but only one piece correctly completes the pattern.</b></p><p><img src='media/images/raven/instructions/rv_ins_4.png' width=600></p>",
    
    "<p><b>All six of the pieces are the right shape, but only one piece correctly completes the pattern.</b></p><p><b>Your job is to decide which of the six pieces is the correct one for completing the pattern.</b></p><p><img src='media/images/raven/instructions/rv_ins_5.png' width=600></p>",
    
    "<p><b>Please answer as accurately and quickly as possible.</b></p><p><b>OK? Let\’s practice!</b></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>(Click for the answer.)</p><p><img src='media/images/raven/instructions/rv_ins_6.png' width=600></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>Number 2 can’t be correct because it’s the same as the missing piece.</p><img src='media/images/raven/instructions/rv_ins_7.png' width=600></p>",
     
    "<p><b>Which of these pieces completes the picture?</b></p><p>Numbers 1, 3, and 5 show the wrong pattern.</p><img src='media/images/raven/instructions/rv_ins_8.png' width=600></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>How about number 6?  It shows the right pattern but the pattern doesn\'t cover the whole piece, so it wouldn\’t complete the picture.</p><img src='media/images/raven/instructions/rv_ins_9.png' width=600></p>",
    
    "<p><b>Which of these pieces completes the picture?</b></p><p>Number 4 is the right answer - it shows the correct pattern across the whole missing piece.</p><img src='media/images/raven/instructions/rv_ins_10.png' width=600></p>",
     
     
     "<p><b>On the following pages, you will have 90 seconds to choose which piece completes each picture.The first page will show the example we just saw. Please select #4, then click to continue.</b></p><p><img src='media/images/raven/instructions/rv_ins_11.png' width=600></p>"  
]


// Sticker choice task
pen_prompt = ["<p>You are almost done!</p><p> Please choose one of these stickers as a reward for finishing this task! You may only choose one, and others would not have the option once you choose it. </p><p>Which one do you want to pick?</p>"]
pen_prompt_audio = ['media/audios/pen/E_pen_prompt.mp3']
penchoicelabel = ["This one"]
pre_sticker_prompt = "<p>We would like to give you a small gift for participating in our study.</p>"+
            " <p>This is a bag of awesome stickers that we keep in our research office for people like you!"+
            " <p>Right now it has a lot of green stickers, and also some yellow stickers."
sticker_prompt = "<p>Here are some stickers from the bag. "+
            "<p>Every week, we randomly choose 10% of the people who have completed our study, </p>" + 
            "<p> and mail them the sticker they picked as a prize. </p>"+
            "<p> We still have both kinds of stickers,so you get to choose your gift! </p>"+
            "<p> But when we run out of one kind, everyone will automatically get the remaining kind of sticker.</p>"

post_sticker_prompt =  "<p>Thanks for choosing a sticker!</p>"+
        " <p>If you would like to be included in the sticker lottery, please enter your mailing address below.</p>"+
        "<p> If you win, we will send you the sticker you picked!</p>"
        
sticker_question = "Which sticker do you want?"
sticker_button_label = "Next"
post_stickers_transition_prompt = "<p> Great job, you are almost done with the sticker book! </p>" +
 "<p>Now we have some stories for you to read and tell us about, </p> " + 
 "<p>and then we’ll ask you some questions about yourself. </p>"


// Circle Drawing task
circle_instruction = [
    "images/circle_drawing/E_circle_drawing_1.png", "images/circle_drawing/E_circle_drawing_2.png",
    "images/circle_drawing/E_circle_drawing_3.png", "images/circle_drawing/E_circle_drawing_4.png",
    "images/circle_drawing/E_circle_drawing_5.png", "images/circle_drawing/E_circle_drawing_6.png",
    "images/circle_drawing/E_circle_drawing_7.png", "images/circle_drawing/E_circle_drawing_8.png",
]
circle_recap = "<p>Draw yourself and your family members as circles.</p><p> Remember to draw the family members that you lived with as a child.</p> <p><b> You should start by drawing yourself and label the circle as \"Me\". </b></p><p style='color:blue;font-size: 20px;'><b>To draw</b>: click and drag.</p><p style='color:blue;font-size: 20px;'><b>To add label</b>: click on the circle, then double click on the textbox. <u>Hit \"Enter\" when done.</u> </p><p style='color:blue;font-size: 20px;'><b>To delete a circle or a label</b>: right click to see the delete button.</p>"
circle_textbox_default = "Add Label Here"
circle_delete_button = "Delete"
circle_unlabeled_alert = "You have unlabeled circle. Please label each circle as the person it represents."
circle_empty_alert = "You haven't drawn any circle. Please draw yourself and your family members as circles."
circle_small_alert = "The circle you have just drawn is too small. Please redraw a larger circle so you can label it properly."
circle_game_button = "Done!"

//Ebbinghaus 
ebbinghaus_practice_feedback_yes = "Great!"
ebbinghaus_practice_feedback_no = "<p>Oops, remember to press the button under the larger circle!</p><p> Let's try that again!</p>"

//phase 1 
ebbinghaus_phase_1_prepractice_instruction = [
    "<p><b>Now, we are going to play the Big Circle game. </b></p><p><b>In this game, you will see two orange circles like these.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_1.png' style='width:800px;height:600px;'>", 
    "<p><b>To minimize interference, during this game you will not be able to see your cursor around the circles.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_2.png' style='width:800px;height:600px;'>", 
    "<p><b>The game is to find the larger circle between the two.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_3.png' style='width:800px;height:600px;'>",
    "<p><b>If you think the orange circle on the right is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_4.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the right is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_5.png' style='width:800px;height:600px;'></p><p>Press the key M.</p>", 
     "<p><b>If you think the orange circle on the left is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_4b.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the left is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_5b.png' style='width:800px;height:600px;'></p><p>Press the key Z.</p>",     
    
]


ebbinghaus_phase_1_prepractice_ready = "<p>Let's practice the game.</p> <p> Ready?</p>"
ebbinghaus_phase_1_prepractice_readyButton = 'Yes!'
ebbinghaus_phase_1_practice_prompt = "<p>Which circle is a larger circle?</p>"

ebbinghaus_phase_1_postpractice_instruction = [
    "Great! You are now ready to play the game for real. You will see many more circles.",
    "Now we will try it again, but remember what you need to do. Let\'s go over it again together.",
    "<p><b>If you think the orange circle on the right is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_6.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the right is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_7.png' style='width:800px;height:600px;'></p><p>Press the key M.</p>", 
     "<p><b>If you think the orange circle on the left is larger……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_6b.png' style='width:800px;height:600px;'>", 
    "<p><b>If you think the orange circle on the left is larger……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_7b.png' style='width:800px;height:600px;'></p><p>Press the key Z.</p>",    
]
ebbinghaus_phase_1_postpractice_ready = "<p>You will get 10 questions like this, with a short pause between questions. </p><p>During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"media/images/ebbinghaus/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Some may be difficult, but then you can make a guess. Ready?</p>"
ebbinghaus_phase_1_postpractice_readyButton = 'Yes!'
ebbinghaus_phase_1_prompt = "<p>Which circle is a larger circle?</p>"

//phase 2
ebbinghaus_phase_2_prepractice_instruction = [
   
   "Let\'s play the next game. This game is a little different.", 
    
   "<p><b>In this game, you will see gray circles around the orange circles.</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_8.png' style='width:800px;height:600px;'>",
    
    "<p><b>In this game, you will see gray circles around the orange circles.</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_9.png' style='width:800px;height:600px;'></p><p>Like these.</p>",
    
      "<p><b>Look carefully at the orange circles in the middle</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_10.png' style='width:800px;height:600px;'></p>", 
    
     "<p><b>Look carefully at the orange circles in the middle</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_11.png' style='width:800px;height:600px;'></p><p>Like this one</p>",
    
    "<p><b>Look carefully at the orange circles in the middle</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_12.png' style='width:800px;height:600px;'></p><p>And this one</p>",
    
     "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_13.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_14.png' style='width:800px;height:600px;'></p><p>Press the key Z</p>",
    
     "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_15.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_16.png' style='width:800px;height:600px;'></p><p>Press the key M</p>"
    
    
]
ebbinghaus_phase_2_prepractice_ready_prompt = "<p>Let's try one.</p> <p> Ready?</p>"
ebbinghaus_phase_2_prepractice_readyButton = 'Yes!'
ebbinghaus_phase_2_practice_prompt = "<p>Which organge circle is a larger circle?</p>"

ebbinghaus_phase_2_postpractice_instruction = [
    "Great! You are now ready to play the game for real.",
    
    "Now we will try it again, but remember what you need to do. Let\'s go over it again together.",
    
    "<p><b>Remember, look at the orange circles in the middle.</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_17.png' style='width:800px;height:600px;'></p><p>Like these two.</p>", 
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_18.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_19.png' style='width:800px;height:600px;'></p><p>Press the key Z</p>",
    
     "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_20.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>If the orange circle on this side is larger…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_21.png' style='width:800px;height:600px;'></p><p>Press the key M</p>"
    
    
]
ebbinghaus_phase_2_postpractice_ready_prompt = "<p>You will get 24 questions like this, with a short pause between questions.</p><p> During the pause, an image like the one below will flash on the screen, but all you need to do is wait for the next question.</p><img src=\"media/images/ebbinghaus/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>Now we are going to play the game for real, are you ready?</p>"
ebbinghaus_phase_2_postpractice_readyButton = "Yes!"
ebbinghaus_phase_2_prompt = "<p>Which orange circle is a larger circle?</p>"

ebbinghaus_finished_prompt = "<p>We are done with this game.</p><p>Thank you!</p>"
ebbinghaus_finished_nextButton = 'Next Game'


//Free description 
free_description_prepractice_instruction_adult = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. </p><p>You have 5 seconds to study each picture.</p> <p>Take a look at the picture. Ready?</p>"
free_description_prepractice_instruction_kid = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. </p><p>You have a few seconds to study each picture.</p> <p>Take a look at the picture. Ready?</p>"
free_description_prepractice_instruction_kid_audio = ['media/audios/free_description/E_free_description_prepractice_instruction_kid.mp3']
free_description_prepractice_instruction_young = "<p>Now, we are going to play a picture game.</p> <p> In this game, you are going to see many different pictures. Let's see the first picture together. </p><p>You have 15 seconds to study this picture.</p> <p>Take a look at the picture. Ready?</p>"
free_description_prepractice_instruction_young_audio = ['media/audios/free_description/E_free_description_prepractice_instruction_young.mp3']

free_description_prepractice_OKButton = "OK!"
free_description_prompts = "<p>Imagine you are talking to someone who did not see this picture. How would you tell them what you saw? </p><p>Use 2-3 full sentences</p>"
free_description_prompts_audio = ['media/audios/free_description/E_free_description_prompts.mp3']
free_description_prompt_first = "<p>Imagine you are talking to someone who did not see this picture. <br />How would you tell them what you saw? </p><p>Use 2-3 full sentences</p>"
free_description_prompt_first_audio = ['media/audios/free_description/E_free_description_prompt_instructions_0.mp3']
free_description_prompt_instructions = [
    "<p>Okay, can you describe that one in a couple of sentences?</p>",
    "<p>What did you see in that picture?</p>",
    "<p>Can you tell me about the picture you just saw?</p>",
]
free_description_prompt_instructions_audio = [
    'media/audios/free_description/E_free_description_prompt_instructions_1.mp3',
    'media/audios/free_description/E_free_description_prompt_instructions_2.mp3',
    'media/audios/free_description/E_free_description_prompt_instructions_3.mp3',
]
free_description_ready_instruction = "<p>Great! You are ready to play the game for real. </p> <p> Now, I am going to show you some more pictures.</p>"
free_description_ready_instruction_audio = ['media/audios/free_description/E_free_description_ready_instruction.mp3']
free_description_ready_OKButton = "OK!"
free_description_next_instruction = "<p>Are you ready to see the next picture?</p>"
free_description_next_instruction_audio = ['media/audios/free_description/E_free_description_next_instruction.mp3']
free_description_next_first = "<p>Let's have a look at the first picture.</p>"
free_description_next_first_audio = ['media/audios/free_description/E_free_description_next_instructions_0.mp3']
free_description_next_instructions = [
    "<p>Let's do another one!</p>",
    "<p>Are you ready to see the next picture?</p>",
    "<p>Great! Let's look at another picture.</p>",
]
free_description_next_instructions_audio = [
    'media/audios/free_description/E_free_description_next_instructions_1.mp3',
    'media/audios/free_description/E_free_description_next_instructions_2.mp3',
    'media/audios/free_description/E_free_description_next_instructions_3.mp3',
]
free_description_next_YesButton = "Yes!"
free_description_continueButton = "Done!"
free_description_finishedInstruction = "<p>Great, we are done with this game!</p>"
free_description_finishedInstruction_audio = ['media/audios/free_description/E_free_description_finishedInstruction.mp3']
free_description_finishedButton = "Next Game"
free_description_alert = "Please say a little more!"


//RMTS 
rmts_instruction_0 = [
    "<p><b>In this game, you'll learn about my toy, which is a special machine. </b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_1.png' style='width:800px;'>", 
   
    "<p><b>Sometimes when I put things on top of my toy, my toy plays music </b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_2.png' style='width:800px;'>", 
    
    "<p><b>and sometimes when I put things on top of my toy, it does not play music.</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_3.png' style='width:800px;'>", 
    
    "<p><b>We will try putting different things on my toy.</b></p><p>It\'s your job to watch and find out which things make my toy play music. Let\'s see how it works! </p><img src='media/images/rmts/rmts_instruction/rmts_ins_4.png' style='width:800px;'>" 
    
]
rmts_instruction_0_audio = [
    'media/audios/rmts/E_RMTS_preinstructions01.mp3',
    'media/audios/rmts/E_RMTS_preinstructions02.mp3',
    'media/audios/rmts/E_RMTS_preinstructions03.mp3',
    'media/audios/rmts/E_RMTS_preinstructions04.mp3'
]

rmts_instruction_1 = [
    
    "<p>Now that you know how my toy works...</p><p>my friends need your help finding the things that will make my toy play music!</p><img src='media/images/rmts/rmts_instruction/rmts_ins_5.png' style='width:800px;'>", 
    
    "<p><b>Only one of the trays has the things that will make my toy play music.</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_6.png' style='width:800px;'>", 
    
    "<p><b>Can you help my friends?</b></p><p>Click on the tray that has the things that will make my toy play music.</p><img src='media/images/rmts/rmts_instruction/rmts_ins_7.png' style='width:800px;'>",
]
rmts_instruction_1_audio = [
    'media/audios/rmts/E_RMTS_postinstructions01.mp3',
    'media/audios/rmts/E_RMTS_postinstructions02.mp3',
    'media/audios/rmts/E_RMTS_postinstructions03.mp3'
]

rmts_test_trial = "Which ones will make my toy play music?"
rmts_instruction_2 = "<p><strong>Great! You're done with this game! Let's play another!</strong></p>"
rmts_instruction_2button = "OK"
rmts_test_trial_audio = ['media/audios/rmts/E_rmts_test_trial.mp3']

// change detection task 

change_detection_instruction = "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
"In this game, you will look for differences between pairs of similar images. You will see two very similar images which alternate quickly. Your task is to identify the difference between the images. You have 60 seconds to find the difference between each pair. </p>" +
"<p> <b> As soon as you find the difference, press the space bar </b> on your keyboard. After pressing space, you will see a text box. Please describe the difference in this box. This game takes about 5 minutes. </p></div>"
change_detection_page_instruction = "<p> Press the space bar when you find the difference. </p>"
change_detection_prompt = "<p> Please describe the difference between the pictures, or write \"unknown\". </p>"
change_detection_manipulation_instruction = "<p> Now you will answer some questions about the pictures you just saw. </p>"
change_detection_manipulation_prompt = "<p>Please list the central/focal object(s) you see in the pictures</p>" 

//sociogram task
sociogram_instruction = "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
"<p>In this game, you will draw your social network.</p>" + 
"<p>You will read instructions about how to do so. There will be a summary of the instructions at the end so don\'t be stressed out about trying to remember everything.</p>" + 
"<p><b>Draw a circle</b> for yourself and one circle for each of your friends, and <b>label</b> them with a name or nickname. </p>" + 
"<p>Make sure you label your circle \“me\”.</p>" + 
"<p>For any two people who are friends, <b>draw a line</b> connecting their circles.</p>"


sociogram_prompt = "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: center;'>" +
"<p>Now that you know how to do this, please draw your social network</p>" + 
"<p><b>Draw a circle</b> for yourself and one circle for each of your friends, and <b>label</b> them with a name or nickname. </p>" + 
"<p>Make sure you label your circle \“me\”.</p>" + 
"<p>For any two people who are friends, <b>draw a line</b> connecting their circles.</p>"

sociogram_prompt = "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: center;'>" +
"<p>Now that you know how to do this, please draw your social network: " + 
"<b>Draw a circle</b> for yourself and one circle for each of your friends, and <b>label</b> them with a name or nickname. " + 
"Make sure you label your circle \“me\”. " + 
"For any two people who are friends, <b>draw a line</b> connecting their circles." +
"<p class='block-text' id='instr'><b>Instruction Reminder</b>: <b>To draw circles</b>, use the toggle at the top of the page to select “circle”. Then, click and drag on the canvas to create circles of various sizes. To delete the circles you don’t want, right click on the circle, and press the “delete” button. " + 
"<b>To draw a line</b>, please select the “line” in the toggle list. Then, use your mouse to click, drag, and release on the canvas in any direction to draw straight lines. You can also delete lines by right clicking the line and pressing the \"delete\" button. " + 
"<b>To create labels for circles</b>, please select the “label” function in the toggle list. Then, double-click on the circle, and a text box will pop up. Please type in the white textbox its corresponding nickname. Once you are done typing, press the “Enter” key on your keyboard. </p></div><p />"



sociogram_demo_drawcircle_prompt = '<p><b> How to play (1/4): </b></p><p> To draw circles, use the toggle at the top of the page to select “circle”. </p><p>Then, click and drag on the canvas to create circles of various sizes. </p><p><b> Press ">>" once you have understood how to draw a circle.</b></p>'
sociogram_demo_deletecircle_prompt = '<p><b> How to play (2/4): </b></p><p> To delete the circles you don’t want, right click on the circle, and press the “delete” button. </p><p><b> Press ">>" once you have understood how to delete a circle.</b></p>'
sociogram_demo_drawline_prompt = '<p><b> How to play (3/4): </b></p><p> To draw a line, please select the “line” in the toggle list.</p><p> Then, use your mouse to click, drag, and release on the canvas in any direction to draw straight lines. </p><p> You can also delete lines by right clicking the line and pressing the "delete" button. </p><p><b>Press ">>" once you have understood how to draw and delete a line.</b></p>'
sociogram_demo_label_prompt = '<p><b> How to play (4/4): </b></p><p> To create labels for circles, please select the “label” function in the toggle list. </p><p>Then, double-click on the circle, and a text box will pop up. </p><p>Please type in the white textbox its corresponding nickname.</p><p> Once you are done typing, press the “Enter” key on your keyboard.</p><p><b>Press ">>" once you have understood how to label a circle.</b></p>'
sociogram_menu_label = ["Circle", "Line", "Label"]
sociogram_delete_label = "Delete"
sociogram_label_filler_words = "Add your label here!"
sociogram_small_circle_warning = "The circle you just drew was too small! Please try again!"


// triads stimuli
triads_instruction = "<p>In this game, you will see an item in bold, and two choices below it, like this: </p>" + 
"<p>&nbsp;</p>" + 
"<p><b>mushroom</b></p>" + 
"<p>pumpkin</p>" + 
"<p>eggplant</p>" + 
"<p>&nbsp;</p>" + 
"<p>Choose the option that is most closely related to the bolded item.</p>" + 
"<p>Are you ready? </p>" 

triads_ready_button = "Yes!"

//



triads_items = shuffle([
    ["teacup", ["glass", "kettle"]], 
    ["teacher", ["policeman", "desk"]],
    ["bowl",["plate", "soup"]],
    ["pigeon", ["duck", "nest"]], 
    ["boot", ["slipper", "foot"]], 
    ["legs", ["arms", "pants"]], 
    ["goat", ["deer", "field"]], 
    ["bee", ["ladybug", "garden"]],
    ["saw", ["hammer ", "plank"]], 
    ["dress", ["pants", "hanger"]],
    ["elephant", ["giraffe", "zoo"]],
    ["notepad", ["book", "backpack"]], 
    ["spoon", ["fork", "sugar"]],
    ["airplane", ["helicopter", "sky"]],
    ["ring", ["necklace", "hand"]]
 ]);



triads_fillers_items = shuffle([
    ["lemon", ["grape", "pear"]], 
    ["library", ["bank", "cinema"]],
    ["kite", ["basketball", "swing"]], 
    ["bridge", ["tunnel", "highway"]], 
    ["infant", ["man", "woman"]], 
    //["coriander", ["salt", "pepper"]], 
    ["tongue", ["teeth", "lips"]],
    ["grandfather", ["sister", "uncle"]], 
    ["candle", ["torch", "lantern"]],
    ["fox", ["tiger", "lion"]], 
    ["branch", ["root", "stem"]], 
    ["parrot", ["hawk", "songbird"]], 
    ["sprout", ["seedling", "plant"]], 
    ["nose", ["thumb", "finger"]], 
    ["cucumber", ["corn", "potato"]], 
    ["scarf", ["socks", "beanie"]], 

])

triads_catch_items = shuffle([
    ["choose cat", ["cat", "dog"]], 
    ["choose spring", ["winter", "spring"]]
])


triads_question_preamble = "Which thing is most closely related to the bolded item?"



// semantic intuition task and causal attribution task

en_reading_check_instr = ["Can you read short stories in English?"]
en_reading_check_opt = ["Yes", "No"]
en_reading_instr = ["Please read carefully:"]    
en_reading_check_feedback_eligible = ["Great! We will ask you to play the next game in English."]
en_reading_check_feedback_ineligible = ["Congratulations! You have finished all games!"]
// the above part is needed to prevent "undefined" error

semantic_intuition_instr = ["<p>In this game, you will read some short stories and then answer questions about them. </p>" + 
"<p>Some of the questions check facts from the story and have a correct answer, and others will ask your opinion, with no right or wrong answer.</p>" +
"<p>Please read carefully!</p>"]


godel_1_story_part1 = [
    "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;’>" +  
    "<p><font style='opacity:100'>Ivy is a high school student in Hong Kong. In her astronomy class she was taught that Tsu Ch'ung Chih was the man who first determined the precise time of the summer and winter solstices. But, like all her classmates, this is the only thing she has heard about Tsu Ch'ung Chih. </font></p><p>(Press any key to continue...)</p>"  + 
    "<p><font style='opacity:0'>Now suppose that Tsu Ch'ung Chih did not really make this discovery. He stole it from an astronomer who died soon after making the discovery. But the theft remained entirely undetected and Tsu Ch'ung Chih became famous for the discovery of the precise times of the solstices.</font></p>" + 
    "<p><font style='opacity:0'> Many people are like Ivy; the claim that Tsu Ch'ung Chih determined the solstice times is the only thing they have heard about him. When Ivy uses the name 'Tsu Ch'ung Chih,' is she talking about:</font></p>" + 
     "<p><font style='opacity:0'>the person who really determined the solstice times? or</font></p>" + 
    "<p><font style='opacity:0'>the person who stole the discovery of the solstice times?</font></p>"]
    
godel_1_story_part2 = [
    "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
    "<p><font style='opacity:100'>Ivy is a high school student in Hong Kong. In her astronomy class she was taught that Tsu Ch'ung Chih was the man who first determined the precise time of the summer and winter solstices. But, like all her classmates, this is the only thing she has heard about Tsu Ch'ung Chih. </font></p>"  + 
    "<p><font style='opacity:100'>Now suppose that Tsu Ch'ung Chih did not really make this discovery. He stole it from an astronomer who died soon after making the discovery. But the theft remained entirely undetected and Tsu Ch'ung Chih became famous for the discovery of the precise times of the solstices.</font></p><p>(Press any key to continue...)</p>" + 
    "<p><font style='opacity:0'> Many people are like Ivy; the claim that Tsu Ch'ung Chih determined the solstice times is the only thing they have heard about him. When Ivy uses the name 'Tsu Ch'ung Chih,' is she talking about:</font></p>" + 
     "<p><font style='opacity:0'>the person who really determined the solstice times? or</font></p>" + 
    "<p><font style='opacity:0'>the person who stole the discovery of the solstice times?</font></p>"]

godel_1_story_part3 = [
    "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
    "<p>Ivy is a high school student in Hong Kong. In her astronomy class she was taught that Tsu Ch'ung Chih was the man who first determined the precise time of the summer and winter solstices. But, like all her classmates, this is the only thing she has heard about Tsu Ch'ung Chih. </p>"  + 
    "<p>Now suppose that Tsu Ch'ung Chih did not really make this discovery. He stole it from an astronomer who died soon after making the discovery. But the theft remained entirely undetected and Tsu Ch'ung Chih became famous for the discovery of the precise times of the solstices</p>" + 
    "<p> Many people are like Ivy; the claim that Tsu Ch'ung Chih determined the solstice times is the only thing they have heard about him. When Ivy uses the name 'Tsu Ch'ung Chih,' is she talking about:</p><p>(Press any key to continue...)</p>" + 
    "<p><font style='opacity:0'>the person who really determined the solstice times? or</font></p>" + "<p><font style='opacity:0'>the person who stole the discovery of the solstice times?</font></p>"]

                
godel_1_story_all = [
    "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p><center>Please read carefully:</center></p>" + 
    "<p>Ivy is a high school student in Hong Kong. In her astronomy class she was taught that Tsu Ch'ung Chih was the man who first determined the precise time of the summer and winter solstices. But, like all her classmates, this is the only thing she has heard about Tsu Ch'ung Chih. </p>" + 
    "<p>Now suppose that Tsu Ch'ung Chih did not really make this discovery. He stole it from an astronomer who died soon after making the discovery. But the theft remained entirely undetected and Tsu Ch'ung Chih became famous for the discovery of the precise times of the solstices.</p>" + 
    "<p> Many people are like Ivy; the claim that Tsu Ch'ung Chih determined the solstice times is the only thing they have heard about him. When Ivy uses the name 'Tsu Ch'ung Chih,' is she talking about:</p>"]
        
godel_1_opt = ["the person who really determined the solstice times? or", "the person who stole the discovery of the solstice times?</div>"]
godel_1_check_instr = ["The story you have just read talked about which discovery?"]
godel_1_check_opt = ["The triangle inequality", "The value of Pi", "The times of the solstices", "The method for calculating the volume of spheres"]



godel_2_story_part1 ="<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;’>" +  
    "<p><font style='opacity:100'>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. </font></p><p>(Press any key to continue...)</p>"  + 
    "<p><font style='opacity:0'>Now suppose that Gödel was not the author of this theorem. A man called \"Schmidt\" whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic.</font></p>" + 
    "<p><font style='opacity:0'>Most people who have heard the name \"Gödel\" are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name \"Gödel,\" is he talking about:</font></p>" + 
     "<p><font style='opacity:0'>the person who really discovered the incompleteness of arithmetic? or</font></p>" + 
    "<p><font style='opacity:0'>the person who got hold of the manuscript and claimed credit for the work?</font></p>"


godel_2_story_part2 ="<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;’>" +  
    "<p><font style='opacity:100'>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. </font></p>"  + 
    "<p><font style='opacity:100'>Now suppose that Gödel was not the author of this theorem. A man called \"Schmidt\" whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic.</font></p><p>(Press any key to continue...)</p>" + 
    "<p><font style='opacity:0'>Most people who have heard the name \"Gödel\" are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name \"Gödel,\" is he talking about:</font></p>" + 
     "<p><font style='opacity:0'>the person who really discovered the incompleteness of arithmetic? or</font></p>" + 
    "<p><font style='opacity:0'>the person who got hold of the manuscript and claimed credit for the work?</font></p>"

godel_2_story_part3 ="<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;’>" +  
    "<p><font style='opacity:100'>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. </font></p>"  + 
    "<p><font style='opacity:100'>Now suppose that Gödel was not the author of this theorem. A man called \"Schmidt\" whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic.</font></p>" + 
    "<p><font style='opacity:100'>Most people who have heard the name \"Gödel\" are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name \"Gödel,\" is he talking about:</font></p><p>(Press any key to continue...)</p>" + 
     "<p><font style='opacity:0'>the person who really discovered the incompleteness of arithmetic? or</font></p>" + 
    "<p><font style='opacity:0'>the person who got hold of the manuscript and claimed credit for the work?</font></p>"

godel_2_story_all = [
    "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p><center>Please read carefully:</center></p>" + 
   "<p><font style='opacity:100'>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. </font></p>"  + 
    "<p><font style='opacity:100'>Now suppose that Gödel was not the author of this theorem. A man called \"Schmidt\" whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic.</font></p>" + 
    "<p><font style='opacity:100'>Most people who have heard the name \"Gödel\" are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name \"Gödel,\" is he talking about:</font>"]
       

godel_2_opt = ["the person who really discovered the incompleteness of arithmetic? or", "the person who got hold of the manuscript and claimed credit for the work?</div>"]
godel_2_check_instr = ["The story you have just read talked about which mathematical proof?"]
godel_2_check_opt = ["The infinitude of primes", "The incompleteness theorem", "L\'Hopital\'s Rule", "The law of quadratic reciprocity"]

jonah_1_story_para1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called \"Raditra\", ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</font></p><p><font style='opacity:0'>Meanwhile, as the story was told and retold, the name \"Raditra\" was slowly altered: it was successively replaced by \"Aditra\", then by \"Arritrak\" in the sixth century, by \"Arrita\" and \"Arrila\" in the seventh and finally by \"Attila\". The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</font></p><p><font style='opacity:0'>When a contemporary German high school student says \"Attila was the king who drove the Roman from Germany,\" is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_1_story_para2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called \"Raditra\", ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Meanwhile, as the story was told and retold, the name \"Raditra\" was slowly altered: it was successively replaced by \"Aditra\", then by \"Arritrak\" in the sixth century, by \"Arrita\" and \"Arrila\" in the seventh and finally by \"Attila\". The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</font></p><p><font style='opacity:0'>When a contemporary German high school student says \"Attila was the king who drove the Roman from Germany,\" is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_1_story_para3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called \"Raditra\", ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name \"Raditra\" was slowly altered: it was successively replaced by \"Aditra\", then by \"Arritrak\" in the sixth century, by \"Arrita\" and \"Arrila\" in the seventh and finally by \"Attila\". The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>When a contemporary German high school student says \"Attila was the king who drove the Roman from Germany,\" is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_1_story_all = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p><center>Please read carefully:</center></p><p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called \"Raditra\", ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name \"Raditra\" was slowly altered: it was successively replaced by \"Aditra\", then by \"Arritrak\" in the sixth century, by \"Arrita\" and \"Arrila\" in the seventh and finally by \"Attila\". The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>When a contemporary German high school student says \"Attila was the king who drove the Romans from Germany,\" is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</p>"]
jonah_1_opt = ["He is talking about Raditra.", "He is talking about a fictional person who does not really exist.</div>"]
jonah_1_check_instr = ["In the story you have just read, which of the following events was discussed?"]
jonah_1_check_opt = ["Founding Germany", "Defeating the Huns", "Building a great castle", "Invading Italy"]

jonah_2_story_para1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called \"Leung Yiu Pang\". Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</font></p><p><font style='opacity:0'>Meanwhile, the name \"Leung Yiu Pang\" was slowly altered: it was successively replaced by \"Cheung Wai Pang\" in the 12th century, \"Chung Wai Man\" in the 13th, and finally by \"Chan Wai Man\". The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</font></p><p><font style='opacity:0'>When Mei Ling says \"Chan Wai Man stole from the rich and gave to the poor\", is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_2_story_para2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called \"Leung Yiu Pang\". Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Meanwhile, the name \"Leung Yiu Pang\" was slowly altered: it was successively replaced by \"Cheung Wai Pang\" in the 12th century, \"Chung Wai Man\" in the 13th, and finally by \"Chan Wai Man\". The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</font></p><p><font style='opacity:0'>When Mei Ling says \"Chan Wai Man stole from the rich and gave to the poor\", is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_2_story_para3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called \"Leung Yiu Pang\". Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name \"Leung Yiu Pang\" was slowly altered: it was successively replaced by \"Cheung Wai Pang\" in the 12th century, \"Chung Wai Man\" in the 13th, and finally by \"Chan Wai Man\". The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>When Mei Ling says \"Chan Wai Man stole from the rich and gave to the poor\", is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_2_story_all = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px;'>" + "<p><center>Please read carefully:</center></p><p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called \"Leung Yiu Pang\". Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name \"Leung Yiu Pang\" was slowly altered: it was successively replaced by \"Cheung Wai Pang\" in the 12th century, \"Chung Wai Man\" in the 13th, and finally by \"Chan Wai Man\". The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>When Mei Ling says \"Chan Wai Man stole from the rich and gave to the poor\", is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</p>"]
jonah_2_opt = ["She is talking about the generous monk, Leung Yiu Pang.", "She is talking about a fictional person who does not really exist.</div>"]
jonah_2_check_instr = ["In the story you have just read, which of the following events was discussed?"]
jonah_2_check_opt = ["Kidnapping a princess", "Defeating pirates", "Traveling to Shanxi", "Living as a thief"]



si_button_label = "Continue"

semantic_intuition_li_main_intro1 = 
"<p>Tom and Emily are twins and they are both in first grade. This is Tom </p>" + 
'<img src="media/images/si_li/intro_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro2 = 
"<p>and this Emily</p>" + 
'<img src="media/images/si_li/intro_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro3 = 
"<p>And this is their mom, this is their dad.</p>" + 
'<img src="media/images/si_li/intro_3.png" style="width:600px;height:400px;">'


semantic_intuition_li_main_intro4 = 
"<p>They go to elementary school in a town called Newrock. </p>" + 
"<p>At school, they learn a lot of interesting things that happened in their town long ago. They love to share these things with their parents and friends. </p>" + 
'<img src="media/images/si_li/intro_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro5 = 
"<p>Now you are going to read some interesting stories about what Tom and Emily learned at school.</p>" + 
"<p>At the end of each story, Tom and Emily are going to say what happened. </p>" + 
"<p>Your job is to decide whether they are right or wrong.</p>" + 
"<p>Enjoy the stories!</p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro6 = "<p>Here is the first story.</p>" 

semantic_intuition_li_main_buffer = "Now, let’s read another story about what Tom and Emily learned!"

semantic_intuition_li_main_outro1 = "<p>Okay these are the five stories!  Thank you very much!</p>" + 
'<img src="media/images/si_li/outro_1.png" style="width:600px;height:600px;">'

semantic_intuition_li_main_allheal_para1 = 
"<p>A long time ago, a rich businessman lived in Newrock. </p>" + 
'<img src="media/images/si_li/allheal_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para2 = 
"<p>One day, he got very sick. Even the best doctor in the town couldn\’t help him get better. </p>" + 
'<img src="media/images/si_li/allheal_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para3 = 
"<p>One night, he had a dream about a special plant called allheal.</p>" + 
"<p>The plant\’s leaves could cure his illness. But it only grew in a jungle on an island far away.</p>" + 
'<img src="media/images/si_li/allheal_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para4 = 
"<p>The businessman told his son about his dream the next day. His son gathered all the young men in the town. </p>" + 
"<p>He asked them to help him find the mysterious plant. He promised that whoever found the plant would get a prize.</p>" + 
'<img src="media/images/si_li/allheal_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_comprehension_check_1 = 
"<p><b>What did the businessmen tell his son?</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_comprehension_check_1_response = 
"<p>If your answer is \"His dream about allheal\", then you are correct! </p>" 

semantic_intuition_li_main_allheal_para5 = 
"<p>All the young men went to look for allheal. One of them was named Owen. He was very smart. </p>" + 
'<img src="media/images/si_li/allheal_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para6 = 
"<p>Owen didn’t go straight into the jungle. Instead, he went to talk to a man who was an expert on the island\’s plants.</p>" + 
'<img src="media/images/si_li/allheal_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para7 = 
"<p>The expert told him where he thought allheal probably grew. Following his advice, Owen found a tall plant. He thought it might be allheal. </p>" + 
"<p>Owen got very excited! He ran back to the expert to make sure he was right.</p>" + 
'<img src="media/images/si_li/allheal_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para8 = 
"<p>When Owen found the expert, another man was already there. His name was Greg. Greg had several plants with him too. </p>" + 
"<p>They looked like the ones Owen had but they were much shorter.</p>" + 
'<img src="media/images/si_li/allheal_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para9 = 
"<p>The expert carefully examined the plants. </p>" + 
"<p>He said: \“Listen Owen, these tall plants are poisonous. Their leaves could kill people. You have to be careful! But Greg, you’re very lucky! These short plants are allheal.\”</p>" + 
'<img src="media/images/si_li/allheal_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para10 = 
"<p>Owen was very disappointed to hear this. He threw all the plants away. </p>" + 
"<p>But Greg was very happy. He headed right home.</p>" + 
'<img src="media/images/si_li/allheal_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para11 = 
"<p>When Greg got home, he made tea from allheal. Then he gave it to the businessman to drink. </p>" + 
'<img src="media/images/si_li/allheal_11.png" style="width:600px;height:400px;">'


semantic_intuition_li_main_allheal_comprehension_check_2 = 
"<p><b> What did Greg bring the businessman? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_comprehension_check_2_response = 
"<p>If your answer is \"A tea\", then you are correct! </p>" 

semantic_intuition_li_main_allheal_para12 = 
"<p>The businessman got better in two days. He was so thankful. He gave Greg a giant trophy as a prize. </p>" + 
'<img src="media/images/si_li/allheal_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para13 = 
"<p>The businessman wanted to share what he knew about the plant. </p>" + 
"<p>He wanted to help other very sick people. </p>" + 
"<p>So he hired the smartest people in the town and made a documentary about allheal. </p>" + 
'<img src="media/images/si_li/allheal_13.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para14 = 
"<p>It told people about allheal\’s magical effects. </p>" + 
"<p>It told about where it grows, who discovered it, and what the plant looks like as well. </p>" + 
"<p>Today lots of people in the town watch the documentary so they can learn how to use allheal. </p>" + 
'<img src="media/images/si_li/allheal_14.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para15 = 
"<p>One day, Tom and Emily\’s teacher showed the students the documentary.</p>" + 
"<p>They were all very curious about the magical plant. </p>" + 
'<img src="media/images/si_li/allheal_15.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para16 = 
"<p>When they got home that night, Tom and Emily asked their father if they could go look for allheal that weekend. </p>" + 
'<img src="media/images/si_li/allheal_16.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_q1 = " <p>Their father said: \"Sure! Do you kids know who discovered the plant?\"</p>" +
'<img src="media/images/si_li/allheal_17.png" style="width:600px;height:400px;">' + 
" <p><b>Tom said: Owen was the person who discovered allheal.</b></p>" +
" <p><b>Q:Is Tom right?</b></p>"

semantic_intuition_li_main_allheal_q2 = " <p>Their father said: \"Sure! Do you kids know who discovered the plant?\"</p>" +
'<img src="media/images/si_li/allheal_17.png" style="width:600px;height:400px;">' + 
" <p><b>Emily yelled: Greg was the person who discovered allheal.</b></p>" +
" <p><b>Q:Is Emily right?</b></p>"


si_li_main_allheal_opt = ["Yes", "No"]


semantic_intuition_li_main_monkpic_para1 = "<p>Once upon a time, an old monk named Jason and several little monks lived in a small temple on a rocky mountain in Newrock. </p>" + 
'<img src="media/images/si_li/monkpic_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para2 = "<p>This is one of the little monks, named Bob.</p>" + 
'<img src="media/images/si_li/monkpic_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para3 =  "<p>and this is his best friend Leo. </p>" + 
'<img src="media/images/si_li/monkpic_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para4 = "<p>Jason tried to take good care of the little monks. He made sure they were safe, healthy, and happy in the temple. </p>" +
"<p>All the monks enjoyed their life in the temple, except Bob. </p>" + 
'<img src="media/images/si_li/monkpic_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para5 =  "<p>Since Bob had arrived at the temple, he hadn\’t gone home, not even once. </p>" +
"<p>His parents lived far away so they couldn\’t come to see him either. Bob was very homesick and unhappy. </p>" +
'<img src="media/images/si_li/monkpic_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_1 = "<p><b> Why was Bob unhappy? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_1_response = "<p>If your answer is \"He missed his parents/home\", then you are correct! </p>" 

semantic_intuition_li_main_monkpic_para6 =  "<p>One day, Bob sneaked into the temple’s back garden. An old tree in the garden caught his eye. </p>" +
"<p>There was a big hole in the tree’s trunk.</p>" +
'<img src="media/images/si_li/monkpic_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para7 = "<p>He looked inside, and found it was pretty clean. He climbed into the hole and cuddled up by himself.</p>" +
'<img src="media/images/si_li/monkpic_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para8 = "<p>After a while, Bob got bored. He took out a pencil and a notebook from his pocket and began to draw pictures. </p>" +
"<p>He had so much fun drawing that he forgot about missing his parents. He even forgot to go back to the temple! </p>" + 
'<img src="media/images/si_li/monkpic_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para9 = "<p>At dinnertime, Leo couldn\’t find Bob anywhere. He checked the whole temple but Bob wasn\’t there. </p>" +
"<p>Then he went outside to look for him. Leo walked past the big tree and saw Bob drawing inside the hole. </p>" + 
'<img src="media/images/si_li/monkpic_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para10 = "<p>Leo became very curious. He climbed into the hole and sat next to Bob. He told Leo  drawing pictures made him feel better. He asked Leo to keep the secret for him. He didn’t want  the other monks to know about his secret place. Leo promised he would. </p>" +
"<p>Whenever Bob felt homesick or sad, he would go to the secret tree to draw pictures.  Sometimes, Leo would stop by and watch him draw. He even brought Bob some of his own notebooks to draw in.  </p>" + 
'<img src="media/images/si_li/monkpic_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_2 = "<p><b> What did Leo bring Bob?</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_2_response = "<p>If your answer is \"Notebooks\", then you are correct! </p>" 

semantic_intuition_li_main_monkpic_para11 = "<p>Before long, Bob had drawn about a hundred beautiful pictures. One day, he showed Jason the pictures. </p>" +
"<p>Jason was very surprised. He thought all the pictures were really nice. He put some of them on the walls of the temple. </p>" + 
"<p>Then he made two lovely albums with the rest. Today, people can still see the albums and pictures in the temple. </p>" + 
'<img src="media/images/si_li/monkpic_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para12 = "<p>Last fall, Tom and Emily’s school took a hike on the rocky mountain. </p>" +
"<p>After they had climbed up the mountain, they saw the temple. Everyone was very curious about it. </p>" + 
'<img src="media/images/si_li/monkpic_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para13 = "<p>They all went inside. They saw the beautiful pictures on the walls and the two albums too. </p>" +
"<p>They learned that little Bob drew all the beautiful pictures. They were amazed by Bob\’s talent.</p>" + 
'<img src="media/images/si_li/monkpic_13.png" style="width:600px;height:400px;">'

si_li_main_monkpic_q1 = " <p>When they came home that afternoon, they told their mom that they saw two fabulous albums in the temple.</p>" + 
"<p>Their mom asked: do you know who drew the beautiful pictures in the albums? </p>" +
'<img src="media/images/si_li/monkpic_14.png" style="width:600px;height:400px;">' + 
" <p><b>Emily said:  Leo was the person who drew the pictures in the albums. </b></p>" +
" <p><b>Q:Is Emily right?</b></p>"

si_li_main_monkpic_q2 = " <p>When they came home that afternoon, they told their mom that they saw two fabulous albums in the temple.</p>" + 
"<p>Their mom asked: do you know who drew the beautiful pictures in the albums? </p>" +
'<img src="media/images/si_li/monkpic_14.png" style="width:600px;height:400px;">' + 
" <p><b>Tom said: Jason was the person who drew the pictures in the albums. </b></p>" +
" <p><b>Q: Is Tom right? </b></p>"

si_li_main_monkpic_opt = ["Yes", "No"]


semantic_intuition_li_main_walter_para1 = "<p>This is a story about a famous museum in Newrock. It\’s called the Walter Museum. </p>" + 
'<img src="media/images/si_li/walter_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para2 = "<p>This is a picture of a statue that stands at the gate of the museum. It’s called the Walter Statue.</p>" + 
'<img src="media/images/si_li/walter_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para3 = "<p>This museum was founded by seven rich men in 1638. </p>" + 
'<img src="media/images/si_li/walter_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para4 = "<p>Walter was one of the founders. He gave a lot of money to the museum. </p>" +
"<p>He also donated all his books and works of art. He gave more stuff and more money than the other men, so they named the museum after him.</p>" +
'<img src="media/images/si_li/walter_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_1 = "<p><b> What did Walter give to the museum? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_1_response = "<p>If your answer includes \"Money, books, works of arts...\", then you are correct! </p>" 

semantic_intuition_li_main_walter_para5 = "<p>About a hundred years later, there was a big fire at the museum. Lots of important things were lost. All the books got burned up! </p>" +
"<p>So did all the photo albums with pictures of founders.</p>" +
'<img src="media/images/si_li/walter_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para6 = "<p>After the fire, people in the town spent a lot of money to rebuild the museum.  </p>" +
"<p>They also bought many valuable paintings from other museums. Then they decided to make statues of the founders to add to the museum's collection.</p>" +
'<img src="media/images/si_li/walter_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para7 = "<p>However, there wasn\'t enough money left to make seven statues. They could only make one.  </p>" +
"<p>Since Walter made the biggest donation, they decided to make a statue of him.</p>" +
'<img src="media/images/si_li/walter_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para8 = "<p>But there was another problem. All the photos of Walter were burnt up in the fire. </p>" +
"<p>And no one who knew Walter was around anymore. So no one knew what he really looked like! </p>" +
'<img src="media/images/si_li/walter_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para9 =  "<p>Luckily, the town's people were very clever. They quickly solved the problem. </p>" +
"<p>They found the most handsome worker at the museum. His name was James. </p>" +
"<p> They asked James to pose for the statue. James happily agreed. </p>" + 
'<img src="media/images/si_li/walter_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_2 = "<p><b> What did they ask James to do? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_2_response = "<p>If your answer is \"Pose for the statue\", then you are correct! </p>" 

semantic_intuition_li_main_walter_para10 =  "<p>So a huge statue was made. It has stood at the museum's gate since then. </p>" +
"<p>Even though it was modeled on James, people call it the Walter Statue. </p>" +
'<img src="media/images/si_li/walter_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para11 = "<p>After all the repair work, the museum reopened. Every day there are lots of visitors. </p>" +
"<p>They like to stop there and admire the statue. A lot of them take pictures with the statue. </p>" +
'<img src="media/images/si_li/walter_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para12 = "<p>Last year, Tom and Emily’s class went to visit the Walter Museum. </p>" +
"<p>Their tour guide showed them an old book. It was about the history of the museum.  </p>" +
"<p>She read the kids the story of the fire and the Walter Statue. The kids were very surprised. </p>" + 
'<img src="media/images/si_li/walter_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_q1 = "<p>When they got home that night, Tom and Emily’s dad asked them about the trip. He said: \“So what did you learn at the museum today?\” </p>" +
'<img src="media/images/si_li/walter_13.png" style="width:600px;height:400px;">' + 
" <p><b>Emily said: Walter was the person who made the biggest donation to the museum.</b></p>" +
" <p><b>Q:Is Emily right?</b></p>"

semantic_intuition_li_main_walter_q2 = "<p>When they got home that night, Tom and Emily’s dad asked them about the trip. He said: \“So what did you learn at the museum today?\” </p>" +
'<img src="media/images/si_li/walter_13.png" style="width:600px;height:400px;">' + 
" <p><b>Tom said: But James was the person who posed for the the statue of the museum.</b></p>" +
" <p><b>Q:Is Tom right?</b></p>"

si_li_main_walter_opt = ["Yes", "No"]

semantic_intuition_li_main_superdog_para1 =  "<p>This is a story about a famous dog race called the Super Dog Race. It happened a long time ago, in the year 1900. </p>" + 
"<p>It was a 5000-mile race through the wilderness. </p>" + 
'<img src="media/images/si_li/superdog_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para2 =  "<p>The finish line was by this beautiful lake.</p>" + 
'<img src="media/images/si_li/superdog_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_1 = "<p><b> Where was the race\'s finish line? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_1_response = "<p>If your answer includes \"by the lake\", then you are correct! </p>" 

semantic_intuition_li_main_superdog_para3 =  "<p>This is Max. He is a fast dog. He joined this Super Dog Race in 1900. </p>" + 
'<img src="media/images/si_li/superdog_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para4 =  "<p>This is Pickles. </p>" + 
'<img src="media/images/si_li/superdog_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para5 =  "<p>This is Blaze. </p>" + 
'<img src="media/images/si_li/superdog_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para6 = "<p>They also joined the super dog race in 1900.</p>" + 
'<img src="media/images/si_li/superdog_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para7 = "<p>This is the announcer for the race. He went to the finish line to report who won the race. </p>" + 
'<img src="media/images/si_li/superdog_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para8 = "<p>Max and Pickles were two incredibly fast dogs. At the beginning of the race, they pulled out in front. </p>" + 
"<p>All the way through the wilderness, they kept racing and racing.  They left all the other dogs far behind. </p>" + 
'<img src="media/images/si_li/superdog_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para9 =  "<p>People all thought that it might take a week for the dogs to arrive at the finish line. </p>" + 
"<p>So the announcer stayed inside his cabin by the lake. He read books, made hamburgers, and took long naps.</p>" + 
'<img src="media/images/si_li/superdog_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_2 = "<p><b> What did the announcer do while he was at the cabin? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_2_response = "<p>If your answer includes \"napped, ate hamburgers\", then you are correct! </p>" 

semantic_intuition_li_main_superdog_para10 = "<p>However, Max and Pickles ran very, very fast. They made it all the way to the lake in just 3 days. </p>" + 
"<p>Max crossed the finish line first, winning the race. But Max got too excited. He couldn’t stop running. He kept racing all the way to the North Pole. </p>" + 
"<p>No one ever saw Max again. Pickles crossed the finish line second. He stopped and watched Max run away. </p>" + 
'<img src="media/images/si_li/superdog_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para11 =  "<p>Just then, the announcer woke up and came out of his cabin. </p>" + 
"<p>To his surprise, Pickles was standing at the finish line! He also saw Blaze running into sight a little bit away. But he did not see Max. </p>" + 
"<p>He thought Pickles won the race. So he shouted, “Congratulations, Pickles!  You have won the Super Dog Race.”  </p>" + 
'<img src="media/images/si_li/superdog_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para12 = "<p>Pickles was just a dog, so he couldn’t tell the announcer what had happened. </p>" + 
"<p>The announcer sent the news that Pickles won the race to every newspaper in the world.</p>" + 
"<p>He also mentioned that Blaze had run very fast even though he had short legs in the news report.</p>" + 
'<img src="media/images/si_li/superdog_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para13 = "<p>Since the race was so long ago, none of the dogs or the people who knew them are around anymore. </p>" + 
"<p>But people can still read the announcer’s story of the race that was written in the newspapers. </p>" + 
"<p>They have all learned that Pickles won the race. But they don’t know anything else about Pickles or the race. </p>" + 
'<img src="media/images/si_li/superdog_13.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para14 = "<p>One day, the history teacher at Tom and Emily’s school took out a very old newspaper. </p>" + 
"<p>It had the story of the dog race that the announcer had written.  She read the story to the kids. She told them that Pickles won the Super Dog Race. </p>" + 
"<p>So this is the only thing Tom, Emily and their classmates knew about Pickles. They didn’t know anything about Max. </p>" + 
'<img src="media/images/si_li/superdog_14.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_q1 = "<p>The next day at breakfast, their dad asked: “Do you kids know who won the Super Dog Race?”</p>" +
'<img src="media/images/si_li/superdog_15.png" style="width:600px;height:400px;">' + 
" <p><b>Emily said: Pickles was the dog who won the Super Dog Race. </b></p>" +
" <p><b>Q:Is Emily right?</b></p>"

semantic_intuition_li_main_superdog_q2 =  "<p>The next day at breakfast, their dad asked: “Do you kids know who won the Super Dog Race?”</p>" +
'<img src="media/images/si_li/superdog_15.png" style="width:600px;height:400px;">' + 
" <p><b>Tom replied: Blaze was the dog who won the Super Dog Race.  </b></p>" +
" <p><b>Q:Is Tom right?</b></p>"

si_li_main_superdog_opt = ["Yes", "No"]




semantic_intuition_li_main_claymen_para1 = 
"<p>This is a story about the discovery of the famous claymen in Newrock. This is a clayman.</p>" + 
'<img src="media/images/si_li/clayman_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para2 = "<p>This is Don, a student from Iceland. In 1850, Don came to Newrock as a volunteer. He lived there for a while.</p>" + 
'<img src="media/images/si_li/clayman_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para3 = "<p>This is Peter. </p>" + 
'<img src="media/images/si_li/clayman_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para4 = "<p>This is Alvin. </p>" + 
'<img src="media/images/si_li/clayman_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para5 =  "<p>They are Don\'s neighbors. And they are the only people Don knew in Newrock.</p>" + 
'<img src="media/images/si_li/clayman_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para6 =  "<p>That year, a drought hit Newrock. There wasn\'t enough water to drink or to cook food. In search of water, Don decided to dig a well. He dug very deep into the ground. But he didn\’t find any water. </p>" + 
'<img src="media/images/si_li/clayman_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para7 =  "<p>Don was about to give up when he noticed something weird in the hole. He dug down a little further. He was shocked by what he saw: the upper half of several claymen. They looked like hidden treasures. </p>" + 
'<img src="media/images/si_li/clayman_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_1 = "<p><b> What did Don find in the hole? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_1_response = "<p>If your answer includes \"claymen\", then you are correct! </p>" 

semantic_intuition_li_main_claymen_para8 =  "<p>Don was very happy. He wrote down where the hole was and what claymen looked like in his notebook. </p>" + 
'<img src="media/images/si_li/clayman_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para9 = "<p>But that night, Don\’s parents came to Newrock and took him away. They had to catch the early train home, so they left in a hurry. Don didn\'t even have time to say goodbye. Sadly, he never came back again. </p>" + 
'<img src="media/images/si_li/clayman_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para10 = "<p>A few weeks later, Peter realized he hadn\’t seen Don in a while. He went to Don\’s house but couldn\'t find him. Then he saw a notebook on the floor. He picked it up and started to read. After he saw what Don had written, he stole Don\’s notebook!</p>" + 
'<img src="media/images/si_li/clayman_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para11 = "<p>The next day, Peter used the notebook and found the hole where claymen were buried. He stood next to the hole and acted like he had dug it himself. </p>" + 
'<img src="media/images/si_li/clayman_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para12 = "<p>Peter saw Alvin working in the fields nearby. He shouted, \“Alvin, Come here! Look what I have found!\”</p>" + 
"<p> Alvin came over. He was amazed by what he saw. He soon announced to the whole village that Peter had found some interesting claymen! </p>" + 
"<p>This news spread quickly across the whole town.</p>" + 
'<img src="media/images/si_li/clayman_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para13 = "<p>Hearing the news, people in the town worked together and dug all claymen out.</p>" + 
'<img src="media/images/si_li/clayman_13.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_2 = "<p><b> What did the town’s people do? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_2_response = "<p>If your answer is \"Dug out all the claymen.\", then you are correct! </p>" 

semantic_intuition_li_main_claymen_para14 = "<p>They also built a museum so people could come see them. Peter’s name was carved into the gate of the museum. </p>" + 
'<img src="media/images/si_li/clayman_14.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para15 = "<p>Since then, many people have gone to the museum to see claymen. They have all been told that Peter discovered claymen many years ago. But this is all they know about Peter.</p>"+ 
"<p>They never knew the whole story of the discovery and they have never heard of Don.</p>" + 
'<img src="media/images/si_li/clayman_15.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para16 = "<p>For this year\’s class field trip, Tom, Emily and their classmates went to visit the claymen museum.</p>"+ 
"<p>Like everyone else, they were told that Peter discovered claymen a long time ago. But this is the only thing they knew about Peter. </p>" + 
'<img src="media/images/si_li/clayman_16.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_clayman_q1 = " <p>The next morning on the way to school, Tom’s dad said to the kids: \“I bet you guys really liked the claymen you saw in the museum. Do you know who discovered them first?”  </p>" +
'<img src="media/images/si_li/clayman_17.png" style="width:600px;height:400px;">' + 
" <p><b>Emily said: Alvin was the person who discovered claymen.</b></p>" +
" <p><b>Q:Is Emily right?</b></p>"

semantic_intuition_li_main_clayman_q2 = " <p>The next morning on the way to school, Tom’s dad said to the kids: \“I bet you guys really liked the claymen you saw in the museum. Do you know who discovered them first?”  </p>" +
'<img src="media/images/si_li/clayman_17.png" style="width:600px;height:400px;">' + 
" <p><b>Tom said: Peter was the person who discovered claymen.</b></p>" +
" <p><b>Q:Is Tom right?</b></p>"

si_li_main_claymen_opt = ["Yes", "No"]


si_li_follow_up_intro = "<p>In this task, you will read some short stories about things that a character, Emily, has learned in school.</p>"+ 
"<p>Please read each story carefully and answer the questions that follow.</p>"

si_li_followup_prince1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>There once was a castle in Newrock where young princes lived and went to school. Most  princes enjoyed living in the castle, but one prince named Bob was homesick. His only friend  was another prince named Sage. To forget his homesickness, Bob would draw pictures, and  he quickly made many beautiful drawings. Eventually, Bob became too homesick and ran  away to his kingdom. He never came back. </p><p>(Press any key to continue...) </p>" + 
" <p><font style='opacity:0'>One day, Sage found Bob’s pictures. Sage took them to his room and hid them underneath  his bed. When he finished school, Sage accidentally left them behind. The principal, Cypress,  found the drawings in Sage’s room. He thought that Sage was the artist, so Cypress hung  them up in the castle and put Sage’s name on them. Today, people can still see the pictures.  They have all learned that Sage drew them. This is all they know about Sage. They don’t know  anything about Bob. </font></p>" + 
"<p><font style='opacity:0'>Emily learned while visiting the castle that Sage drew all the pictures. Like everyone else, this  is all Emily knows about Sage. She has never heard anything about Bob.</font></p>"+ 
" <p><font style='opacity:0'>That night, Emily’s dad asked her who drew the pictures she saw in the castle.  <b>Emily said, “Sage was the person who drew the pictures.”</b></font>  </p>"]

si_li_followup_prince2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>There once was a castle in Newrock where young princes lived and went to school. Most  princes enjoyed living in the castle, but one prince named Bob was homesick. His only friend  was another prince named Sage. To forget his homesickness, Bob would draw pictures, and  he quickly made many beautiful drawings. Eventually, Bob became too homesick and ran  away to his kingdom. He never came back. </p>" + 
" <p>One day, Sage found Bob’s pictures. Sage took them to his room and hid them underneath  his bed. When he finished school, Sage accidentally left them behind. The principal, Cypress,  found the drawings in Sage’s room. He thought that Sage was the artist, so Cypress hung  them up in the castle and put Sage’s name on them. Today, people can still see the pictures.  They have all learned that Sage drew them. This is all they know about Sage. They don’t know  anything about Bob. </p><p>(Press any key to continue...) </p>" + 
"<p><font style='opacity:0'>Emily learned while visiting the castle that Sage drew all the pictures. Like everyone else, this  is all Emily knows about Sage. She has never heard anything about Bob.</font></p>"+ 
" <p><font style='opacity:0'>That night, Emily’s dad asked her who drew the pictures she saw in the castle.  <b>Emily said, “Sage was the person who drew the pictures.”</b></font>  </p>"]

si_li_followup_prince3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>There once was a castle in Newrock where young princes lived and went to school. Most  princes enjoyed living in the castle, but one prince named Bob was homesick. His only friend  was another prince named Sage. To forget his homesickness, Bob would draw pictures, and  he quickly made many beautiful drawings. Eventually, Bob became too homesick and ran  away to his kingdom. He never came back. </p>" + 
" <p>One day, Sage found Bob’s pictures. Sage took them to his room and hid them underneath  his bed. When he finished school, Sage accidentally left them behind. The principal, Cypress,  found the drawings in Sage’s room. He thought that Sage was the artist, so Cypress hung  them up in the castle and put Sage’s name on them. Today, people can still see the pictures.  They have all learned that Sage drew them. This is all they know about Sage. They don’t know  anything about Bob. </p>" + 
"<p>Emily learned while visiting the castle that Sage drew all the pictures. Like everyone else, this  is all Emily knows about Sage. She has never heard anything about Bob.</p><p>(Press any key to continue...) </p>"+ 
" <p><font style='opacity:0'>That night, Emily’s dad asked her who drew the pictures she saw in the castle. <b> Emily said, “Sage was the person who drew the pictures.”</b></font>  </p>"]

si_li_followup_prince4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>There once was a castle in Newrock where young princes lived and went to school. Most  princes enjoyed living in the castle, but one prince named Bob was homesick. His only friend  was another prince named Sage. To forget his homesickness, Bob would draw pictures, and  he quickly made many beautiful drawings. Eventually, Bob became too homesick and ran  away to his kingdom. He never came back. </p>" + 
" <p>One day, Sage found Bob’s pictures. Sage took them to his room and hid them underneath  his bed. When he finished school, Sage accidentally left them behind. The principal, Cypress,  found the drawings in Sage’s room. He thought that Sage was the artist, so Cypress hung  them up in the castle and put Sage’s name on them. Today, people can still see the pictures.  They have all learned that Sage drew them. This is all they know about Sage. They don’t know  anything about Bob. </p>" + 
"<p>Emily learned while visiting the castle that Sage drew all the pictures. Like everyone else, this  is all Emily knows about Sage. She has never heard anything about Bob.</p>"+ 
" <p>That night, Emily’s dad asked her who drew the pictures she saw in the castle. <b> Emily said, “Sage was the person who drew the pictures.”</b> </p><p>(Press any key to continue...) </p>"]

si_li_fu_prince_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>There once was a castle in Newrock where young princes lived and went to school. Most  princes enjoyed living in the castle, but one prince named Bob was homesick. His only friend  was another prince named Sage. To forget his homesickness, Bob would draw pictures, and  he quickly made many beautiful drawings. Eventually, Bob became too homesick and ran  away to his kingdom. He never came back. </p>" + 
" <p>One day, Sage found Bob’s pictures. Sage took them to his room and hid them underneath  his bed. When he finished school, Sage accidentally left them behind. The principal, Cypress,  found the drawings in Sage’s room. He thought that Sage was the artist, so Cypress hung  them up in the castle and put Sage’s name on them. Today, people can still see the pictures.  They have all learned that Sage drew them. This is all they know about Sage. They don’t know  anything about Bob. </p>" + 
"<p>Emily learned while visiting the castle that Sage drew all the pictures. Like everyone else, this  is all Emily knows about Sage. She has never heard anything about Bob.</p>"+ 
" <p>That night, Emily’s dad asked her who drew the pictures she saw in the castle. <b> Emily said, “Sage was the person who drew the pictures.”</b> </p>"+
" <p><b>Q1:Is Emily right?</b></p>"]

si_li_fu_prince_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>There once was a castle in Newrock where young princes lived and went to school. Most  princes enjoyed living in the castle, but one prince named Bob was homesick. His only friend  was another prince named Sage. To forget his homesickness, Bob would draw pictures, and  he quickly made many beautiful drawings. Eventually, Bob became too homesick and ran  away to his kingdom. He never came back. </p>" + 
" <p>One day, Sage found Bob’s pictures. Sage took them to his room and hid them underneath  his bed. When he finished school, Sage accidentally left them behind. The principal, Cypress,  found the drawings in Sage’s room. He thought that Sage was the artist, so Cypress hung  them up in the castle and put Sage’s name on them. Today, people can still see the pictures.  They have all learned that Sage drew them. This is all they know about Sage. They don’t know  anything about Bob. </p>" + 
"<p>Emily learned while visiting the castle that Sage drew all the pictures. Like everyone else, this  is all Emily knows about Sage. She has never heard anything about Bob.</p>"+ 
" <p>That night, Emily’s dad asked her who drew the pictures she saw in the castle. <b> Emily said, “Sage was the person who drew the pictures.”</b> </p>"+
" <p><b>Q2: Please briefly explain your answer. Why is Emily right? / Why is Emily not right?</b></p>"]

si_li_fu_prince_opt = ["Yes", "No"]

si_li_followup_hospital1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a very strong man named Basil lived in Newrock. Basil was shy, so nobody knew  about his power. Newrock needed a new hospital, but there wasn’t enough money to pay for  it. Basil wanted to help, so one night he carried in some wood and built a hospital all by himself.  He was so strong that it only took him one night to finish. The next morning, Basil moved out  of Newrock without telling anyone about the hospital. He never came back. </p><p>(Press any key to continue...) </p>" + 
"<p><font style='opacity:0'>That morning, a builder named Flint found the new hospital and went inside to explore. Just  then, the town’s mayor, George, walked by and saw Flint inside. He thought that Flint built the  hospital, so George told the whole town. Soon everyone knew about Flint’s accomplishment.  Flint, who couldn’t hear or speak, couldn’t tell them otherwise. Today, people still learn that  Flint built the hospital in Newrock, but this is the only thing they have ever heard about Flint.  No one has ever heard of Basil.  </font></p>" + 
"<p><font style='opacity:0'>Emily learned at school that Flint built the hospital in Newrock. Like everyone else, this is the  only thing she has ever heard about Flint. She has never heard of Basil. </font></p>"+ 
"<p><font style='opacity:0'>That night, Emily’s dad asked her who built the hospital in Newrock. <b>Emily said, “Flint was the person who built the hospital.”</b></font></p>"]

si_li_followup_hospital2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a very strong man named Basil lived in Newrock. Basil was shy, so nobody knew  about his power. Newrock needed a new hospital, but there wasn’t enough money to pay for  it. Basil wanted to help, so one night he carried in some wood and built a hospital all by himself.  He was so strong that it only took him one night to finish. The next morning, Basil moved out  of Newrock without telling anyone about the hospital. He never came back. </p>" + 
"<p>That morning, a builder named Flint found the new hospital and went inside to explore. Just  then, the town’s mayor, George, walked by and saw Flint inside. He thought that Flint built the  hospital, so George told the whole town. Soon everyone knew about Flint’s accomplishment.  Flint, who couldn’t hear or speak, couldn’t tell them otherwise. Today, people still learn that  Flint built the hospital in Newrock, but this is the only thing they have ever heard about Flint.  No one has ever heard of Basil.  </p><p>(Press any key to continue...) </p>" + 
"<p><font style='opacity:0'>Emily learned at school that Flint built the hospital in Newrock. Like everyone else, this is the  only thing she has ever heard about Flint. She has never heard of Basil. </font></p>"+ 
"<p><font style='opacity:0'>That night, Emily’s dad asked her who built the hospital in Newrock. <b>Emily said, “Flint was the person who built the hospital.”</b></font></p>"]

si_li_followup_hospital3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a very strong man named Basil lived in Newrock. Basil was shy, so nobody knew  about his power. Newrock needed a new hospital, but there wasn’t enough money to pay for  it. Basil wanted to help, so one night he carried in some wood and built a hospital all by himself.  He was so strong that it only took him one night to finish. The next morning, Basil moved out  of Newrock without telling anyone about the hospital. He never came back. </p>" + 
"<p>That morning, a builder named Flint found the new hospital and went inside to explore. Just  then, the town’s mayor, George, walked by and saw Flint inside. He thought that Flint built the  hospital, so George told the whole town. Soon everyone knew about Flint’s accomplishment.  Flint, who couldn’t hear or speak, couldn’t tell them otherwise. Today, people still learn that  Flint built the hospital in Newrock, but this is the only thing they have ever heard about Flint.  No one has ever heard of Basil.  </p>" + 
"<p>Emily learned at school that Flint built the hospital in Newrock. Like everyone else, this is the  only thing she has ever heard about Flint. She has never heard of Basil. </p><p>(Press any key to continue...) </p>"+ 
"<p><font style='opacity:0'>That night, Emily’s dad asked her who built the hospital in Newrock.<b>Emily said, “Flint was the person who built the hospital.”</b></font></p>"]

si_li_followup_hospital4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a very strong man named Basil lived in Newrock. Basil was shy, so nobody knew  about his power. Newrock needed a new hospital, but there wasn’t enough money to pay for  it. Basil wanted to help, so one night he carried in some wood and built a hospital all by himself.  He was so strong that it only took him one night to finish. The next morning, Basil moved out  of Newrock without telling anyone about the hospital. He never came back. </p>" + 
"<p>That morning, a builder named Flint found the new hospital and went inside to explore. Just  then, the town’s mayor, George, walked by and saw Flint inside. He thought that Flint built the  hospital, so George told the whole town. Soon everyone knew about Flint’s accomplishment.  Flint, who couldn’t hear or speak, couldn’t tell them otherwise. Today, people still learn that  Flint built the hospital in Newrock, but this is the only thing they have ever heard about Flint.  No one has ever heard of Basil.  </p>" + 
"<p>Emily learned at school that Flint built the hospital in Newrock. Like everyone else, this is the  only thing she has ever heard about Flint. She has never heard of Basil. </p>"+ 
"<p>That night, Emily’s dad asked her who built the hospital in Newrock. <b>Emily said, “Flint was the person who built the hospital.”</b><p>(Press any key to continue...) </p></p>"]

si_li_fu_hospital_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a very strong man named Basil lived in Newrock. Basil was shy, so nobody knew  about his power. Newrock needed a new hospital, but there wasn’t enough money to pay for  it. Basil wanted to help, so one night he carried in some wood and built a hospital all by himself.  He was so strong that it only took him one night to finish. The next morning, Basil moved out  of Newrock without telling anyone about the hospital. He never came back. </p>" + 
"<p>That morning, a builder named Flint found the new hospital and went inside to explore. Just  then, the town’s mayor, George, walked by and saw Flint inside. He thought that Flint built the  hospital, so George told the whole town. Soon everyone knew about Flint’s accomplishment.  Flint, who couldn’t hear or speak, couldn’t tell them otherwise. Today, people still learn that  Flint built the hospital in Newrock, but this is the only thing they have ever heard about Flint.  No one has ever heard of Basil.  </p>" + 
"<p>Emily learned at school that Flint built the hospital in Newrock. Like everyone else, this is the  only thing she has ever heard about Flint. She has never heard of Basil. </p>"+ 
"<p>That night, Emily’s dad asked her who built the hospital in Newrock. <b>Emily said, “Flint was the person who built the hospital.”</b></p>"+
" <p><b>Q1:Is Emily right?</b></p>"]

si_li_fu_hospital_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a very strong man named Basil lived in Newrock. Basil was shy, so nobody knew  about his power. Newrock needed a new hospital, but there wasn’t enough money to pay for  it. Basil wanted to help, so one night he carried in some wood and built a hospital all by himself.  He was so strong that it only took him one night to finish. The next morning, Basil moved out  of Newrock without telling anyone about the hospital. He never came back. </p>" + 
"<p>That morning, a builder named Flint found the new hospital and went inside to explore. Just  then, the town’s mayor, George, walked by and saw Flint inside. He thought that Flint built the  hospital, so George told the whole town. Soon everyone knew about Flint’s accomplishment.  Flint, who couldn’t hear or speak, couldn’t tell them otherwise. Today, people still learn that  Flint built the hospital in Newrock, but this is the only thing they have ever heard about Flint.  No one has ever heard of Basil.  </p>" + 
"<p>Emily learned at school that Flint built the hospital in Newrock. Like everyone else, this is the  only thing she has ever heard about Flint. She has never heard of Basil. </p>"+ 
"<p>That night, Emily’s dad asked her who built the hospital in Newrock. <b>Emily said, “Flint was the person who built the hospital.”</b></p>"+
" <p><b>Q2: Please briefly explain your answer. Why is Emily right? / Why is Emily not right?</b></p>"]

si_li_fu_hospital_opt = ["Yes", "No"]

si_li_followup_book1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a man named Walter lived in Newrock. He wanted to write the best novel ever. After  years of work, Walter finally finished his book. He wanted it to be published so everyone could  enjoy it. Unfortunately, Walter was moving to Albania to teach, so he left the book with his best  friend, Jack, who promised to publish it for him. Walter moved away, and he did not keep in  touch with anyone or come back to visit.  </p><p>(Press any key to continue...) </p>" + 
" <p><font style='opacity:0'>Jack was forgetful, and never sent the book to the publishers. Years later, Jack’s son Rocky  found the book in a drawer in Jack’s house. Rocky read the book and thought it was great, so  he decided to have it published. There was no author listed on the book’s front cover, but he  guessed that Jack wrote it since it was in his house. Jack couldn’t remember anything anymore, so he couldn’t tell Rocky otherwise.  </font></p>" + 
"<p><font style='opacity:0'>so he couldn’t tell Rocky otherwise. The book instantly became a classic, which is still read  today. Everyone learns that Jack wrote the book, but this is the only thing they know about  Jack. Nobody has ever heard about Walter. </font></p>"+ 
" <p><font style='opacity:0'>Emily’s class read the classic book in literature class. Like everyone else, Emily learned that  Jack wrote the book. But this is the only thing Emily has ever heard about Jack, and she has  never heard of Walter.</font>  </p>" + 
" <p><font style='opacity:0'>That night, Emily’s dad asked her who wrote the classic book she read in class.  <b>Emily said, \“Jack was the person who wrote the book.\”</b></font>  </p>"]

si_li_followup_book2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a man named Walter lived in Newrock. He wanted to write the best novel ever. After  years of work, Walter finally finished his book. He wanted it to be published so everyone could  enjoy it. Unfortunately, Walter was moving to Albania to teach, so he left the book with his best  friend, Jack, who promised to publish it for him. Walter moved away, and he did not keep in  touch with anyone or come back to visit.  </p>" + 
" <p>Jack was forgetful, and never sent the book to the publishers. Years later, Jack’s son Rocky  found the book in a drawer in Jack’s house. Rocky read the book and thought it was great, so  he decided to have it published. There was no author listed on the book’s front cover, but he  guessed that Jack wrote it since it was in his house. Jack couldn’t remember anything anymore, so he couldn’t tell Rocky otherwise. </p><p>(Press any key to continue...) </p>" + 
"<p><font style='opacity:0'>The book instantly became a classic, which is still read  today. Everyone learns that Jack wrote the book, but this is the only thing they know about  Jack. Nobody has ever heard about Walter. </font></p>"+ 
" <p><font style='opacity:0'>Emily’s class read the classic book in literature class. Like everyone else, Emily learned that  Jack wrote the book. But this is the only thing Emily has ever heard about Jack, and she has  never heard of Walter.</font>  </p>" + 
" <p><font style='opacity:0'>That night, Emily’s dad asked her who wrote the classic book she read in class.  <b>Emily said, \“Jack was the person who wrote the book.\”</b></font>  </p>"]

si_li_followup_book3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a man named Walter lived in Newrock. He wanted to write the best novel ever. After  years of work, Walter finally finished his book. He wanted it to be published so everyone could  enjoy it. Unfortunately, Walter was moving to Albania to teach, so he left the book with his best  friend, Jack, who promised to publish it for him. Walter moved away, and he did not keep in  touch with anyone or come back to visit.  </p>" + 
" <p>Jack was forgetful, and never sent the book to the publishers. Years later, Jack’s son Rocky  found the book in a drawer in Jack’s house. Rocky read the book and thought it was great, so  he decided to have it published. There was no author listed on the book’s front cover, but he  guessed that Jack wrote it since it was in his house. Jack couldn’t remember anything anymore, so he couldn’t tell Rocky otherwise. </p>" + 
"<p>The book instantly became a classic, which is still read  today. Everyone learns that Jack wrote the book, but this is the only thing they know about  Jack. Nobody has ever heard about Walter. </p><p>(Press any key to continue...) </p>"+ 
" <p><font style='opacity:0'>Emily’s class read the classic book in literature class. Like everyone else, Emily learned that  Jack wrote the book. But this is the only thing Emily has ever heard about Jack, and she has  never heard of Walter.</font>  </p>" + 
" <p><font style='opacity:0'>That night, Emily’s dad asked her who wrote the classic book she read in class.  <b>Emily said, \“Jack was the person who wrote the book.\”</b></font>  </p>"]

si_li_followup_book4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a man named Walter lived in Newrock. He wanted to write the best novel ever. After  years of work, Walter finally finished his book. He wanted it to be published so everyone could  enjoy it. Unfortunately, Walter was moving to Albania to teach, so he left the book with his best  friend, Jack, who promised to publish it for him. Walter moved away, and he did not keep in  touch with anyone or come back to visit.  </p>" + 
" <p>Jack was forgetful, and never sent the book to the publishers. Years later, Jack’s son Rocky  found the book in a drawer in Jack’s house. Rocky read the book and thought it was great, so  he decided to have it published. There was no author listed on the book’s front cover, but he  guessed that Jack wrote it since it was in his house. Jack couldn’t remember anything anymore, so he couldn’t tell Rocky otherwise. </p>" + 
"<p> The book instantly became a classic, which is still read  today. Everyone learns that Jack wrote the book, but this is the only thing they know about  Jack. Nobody has ever heard about Walter. </p>"+ 
" <p>Emily’s class read the classic book in literature class. Like everyone else, Emily learned that  Jack wrote the book. But this is the only thing Emily has ever heard about Jack, and she has  never heard of Walter. </p>" + 
" <p>That night, Emily’s dad asked her who wrote the classic book she read in class.  <b>Emily said, \“Jack was the person who wrote the book.\”</b>  </p><p>(Press any key to continue...) </p>"]

si_li_fu_book_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a man named Walter lived in Newrock. He wanted to write the best novel ever. After  years of work, Walter finally finished his book. He wanted it to be published so everyone could  enjoy it. Unfortunately, Walter was moving to Albania to teach, so he left the book with his best  friend, Jack, who promised to publish it for him. Walter moved away, and he did not keep in  touch with anyone or come back to visit.  </p>" + 
" <p>Jack was forgetful, and never sent the book to the publishers. Years later, Jack’s son Rocky  found the book in a drawer in Jack’s house. Rocky read the book and thought it was great, so  he decided to have it published. There was no author listed on the book’s front cover, but he  guessed that Jack wrote it since it was in his house. Jack couldn’t remember anything anymore, so he couldn’t tell Rocky otherwise.  </p>" + 
"<p>The book instantly became a classic, which is still read  today. Everyone learns that Jack wrote the book, but this is the only thing they know about  Jack. Nobody has ever heard about Walter. </p>"+ 
" <p>Emily’s class read the classic book in literature class. Like everyone else, Emily learned that  Jack wrote the book. But this is the only thing Emily has ever heard about Jack, and she has  never heard of Walter. </p>" + 
" <p>That night, Emily’s dad asked her who wrote the classic book she read in class.  <b>Emily said, \“Jack was the person who wrote the book.\”</b>  </p>"+
" <p><b>Q1:Is Emily right?</b></p>"]

si_li_fu_book_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>Long ago, a man named Walter lived in Newrock. He wanted to write the best novel ever. After  years of work, Walter finally finished his book. He wanted it to be published so everyone could  enjoy it. Unfortunately, Walter was moving to Albania to teach, so he left the book with his best  friend, Jack, who promised to publish it for him. Walter moved away, and he did not keep in  touch with anyone or come back to visit.  </p>" + 
" <p>Jack was forgetful, and never sent the book to the publishers. Years later, Jack’s son Rocky  found the book in a drawer in Jack’s house. Rocky read the book and thought it was great, so  he decided to have it published. There was no author listed on the book’s front cover, but he  guessed that Jack wrote it since it was in his house. Jack couldn’t remember anything anymore, so he couldn’t tell Rocky otherwise.   </p>" + 
"<p>The book instantly became a classic, which is still read  today. Everyone learns that Jack wrote the book, but this is the only thing they know about  Jack. Nobody has ever heard about Walter. </p>"+ 
" <p>Emily’s class read the classic book in literature class. Like everyone else, Emily learned that  Jack wrote the book. But this is the only thing Emily has ever heard about Jack, and she has  never heard of Walter. </p>" + 
" <p>That night, Emily’s dad asked her who wrote the classic book she read in class.  <b>Emily said, \“Jack was the person who wrote the book.\”</b>  </p>"+
" <p><b>Q2: Please briefly explain your answer. Why is Emily right? / Why is Emily not right?</b></p>"]

si_li_fu_book_opt = ["Yes", "No"]

si_li_followup_cake1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>In the 1950’s, an old woman named Louise lived in Newrock. Louise was a great baker, so  she decided to make a cake for the town bake sale. Louise made a unique cotton candy cake.  Just after she finished all the work, Louise received news that her sister was very sick. Louise  needed to visit her right away, so she couldn’t take the cake to the bake sale herself. Louise  asked her neighbour Honey, a foreign exchange student, to take the cake for her. Louise left  that night and never came back to Newrock. </p><p>(Press any key to continue...) </p>" + 
" <p><font style='opacity:0'>Honey took the cake to the bake sale the next morning. She didn’t speak English well, so  when the organizer of the bake sale, Jessica, asked her who baked the cake she told them  her name by mistake. The cake was so delicious and was so popular that it became the official  town cake. Everyone in the town learned that Honey made the cake, but nobody knows  anything else about Honey. No one has ever heard of Louise.   </font></p>" + 
"<p><font style='opacity:0'>Emily learned about the cake in social studies class. Like everyone else, she learned that  Honey baked the cake, but this is the only thing she has ever heard about Honey. Emily has  never heard of Louise.  </font></p>"+ 
" <p><font style='opacity:0'>That night, Emily's dad asked her who baked the official town cake.<b> Emily said, “Honey was the person who baked the cake.” </b></font>  </p>"]

si_li_followup_cake2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>In the 1950’s, an old woman named Louise lived in Newrock. Louise was a great baker, so  she decided to make a cake for the town bake sale. Louise made a unique cotton candy cake.  Just after she finished all the work, Louise received news that her sister was very sick. Louise  needed to visit her right away, so she couldn’t take the cake to the bake sale herself. Louise  asked her neighbour Honey, a foreign exchange student, to take the cake for her. Louise left  that night and never came back to Newrock. </p>" + 
" <p>Honey took the cake to the bake sale the next morning. She didn’t speak English well, so  when the organizer of the bake sale, Jessica, asked her who baked the cake she told them  her name by mistake. The cake was so delicious and was so popular that it became the official  town cake. Everyone in the town learned that Honey made the cake, but nobody knows  anything else about Honey. No one has ever heard of Louise.   </p><p>(Press any key to continue...) </p>" + 
"<p><font style='opacity:0'>Emily learned about the cake in social studies class. Like everyone else, she learned that  Honey baked the cake, but this is the only thing she has ever heard about Honey. Emily has  never heard of Louise.  </font></p>"+ 
" <p><font style='opacity:0'>That night, Emily's dad asked her who baked the official town cake.<b> Emily said, “Honey was the person who baked the cake.” </b></font>  </p>"]

si_li_followup_cake3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>In the 1950’s, an old woman named Louise lived in Newrock. Louise was a great baker, so  she decided to make a cake for the town bake sale. Louise made a unique cotton candy cake.  Just after she finished all the work, Louise received news that her sister was very sick. Louise  needed to visit her right away, so she couldn’t take the cake to the bake sale herself. Louise  asked her neighbour Honey, a foreign exchange student, to take the cake for her. Louise left  that night and never came back to Newrock. </p>" + 
" <p>Honey took the cake to the bake sale the next morning. She didn’t speak English well, so  when the organizer of the bake sale, Jessica, asked her who baked the cake she told them  her name by mistake. The cake was so delicious and was so popular that it became the official  town cake. Everyone in the town learned that Honey made the cake, but nobody knows  anything else about Honey. No one has ever heard of Louise.   </p>" + 
"<p>Emily learned about the cake in social studies class. Like everyone else, she learned that  Honey baked the cake, but this is the only thing she has ever heard about Honey. Emily has  never heard of Louise. </p><p>(Press any key to continue...) </p>"+ 
" <p><font style='opacity:0'>That night, Emily's dad asked her who baked the official town cake.<b> Emily said, “Honey was the person who baked the cake.” </b></font>  </p>"]

si_li_followup_cake4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>In the 1950’s, an old woman named Louise lived in Newrock. Louise was a great baker, so  she decided to make a cake for the town bake sale. Louise made a unique cotton candy cake.  Just after she finished all the work, Louise received news that her sister was very sick. Louise  needed to visit her right away, so she couldn’t take the cake to the bake sale herself. Louise  asked her neighbour Honey, a foreign exchange student, to take the cake for her. Louise left  that night and never came back to Newrock. </p>" + 
" <p>Honey took the cake to the bake sale the next morning. She didn’t speak English well, so  when the organizer of the bake sale, Jessica, asked her who baked the cake she told them  her name by mistake. The cake was so delicious and was so popular that it became the official  town cake. Everyone in the town learned that Honey made the cake, but nobody knows  anything else about Honey. No one has ever heard of Louise.   </p>" + 
"<p>Emily learned about the cake in social studies class. Like everyone else, she learned that  Honey baked the cake, but this is the only thing she has ever heard about Honey. Emily has  never heard of Louise. </p>"+ 
" <p>That night, Emily's dad asked her who baked the official town cake.<b> Emily said, “Honey was the person who baked the cake.” </b> </p><p>(Press any key to continue...) </p>"]

si_li_fu_cake_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>In the 1950’s, an old woman named Louise lived in Newrock. Louise was a great baker, so  she decided to make a cake for the town bake sale. Louise made a unique cotton candy cake.  Just after she finished all the work, Louise received news that her sister was very sick. Louise  needed to visit her right away, so she couldn’t take the cake to the bake sale herself. Louise  asked her neighbour Honey, a foreign exchange student, to take the cake for her. Louise left  that night and never came back to Newrock. </p>" + 
" <p>Honey took the cake to the bake sale the next morning. She didn’t speak English well, so  when the organizer of the bake sale, Jessica, asked her who baked the cake she told them  her name by mistake. The cake was so delicious and was so popular that it became the official  town cake. Everyone in the town learned that Honey made the cake, but nobody knows  anything else about Honey. No one has ever heard of Louise.   </p>" + 
"<p>Emily learned about the cake in social studies class. Like everyone else, she learned that  Honey baked the cake, but this is the only thing she has ever heard about Honey. Emily has  never heard of Louise. </p>"+ 
" <p>That night, Emily's dad asked her who baked the official town cake.<b> Emily said, “Honey was the person who baked the cake.” </b> </p>"+
" <p><b>Q1:Is Emily right?</b></p>"]

si_li_fu_cake_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>In the 1950’s, an old woman named Louise lived in Newrock. Louise was a great baker, so  she decided to make a cake for the town bake sale. Louise made a unique cotton candy cake.  Just after she finished all the work, Louise received news that her sister was very sick. Louise  needed to visit her right away, so she couldn’t take the cake to the bake sale herself. Louise  asked her neighbour Honey, a foreign exchange student, to take the cake for her. Louise left  that night and never came back to Newrock. </p>" + 
" <p>Honey took the cake to the bake sale the next morning. She didn’t speak English well, so  when the organizer of the bake sale, Jessica, asked her who baked the cake she told them  her name by mistake. The cake was so delicious and was so popular that it became the official  town cake. Everyone in the town learned that Honey made the cake, but nobody knows  anything else about Honey. No one has ever heard of Louise.   </p>" + 
"<p>Emily learned about the cake in social studies class. Like everyone else, she learned that  Honey baked the cake, but this is the only thing she has ever heard about Honey. Emily has  never heard of Louise. </p>"+ 
" <p>That night, Emily's dad asked her who baked the official town cake.<b> Emily said, “Honey was the person who baked the cake.” </b> </p>"+
" <p><b>Q2: Please briefly explain your answer. Why is Emily right? / Why is Emily not right?</b></p>"]

si_li_fu_cake_opt = ["Yes", "No"]
// Post-tasks 
//funnel debriefing 
funnel_general_button = "Done!"
funnel_familiarity_prompt = '<img src="media/images/debriefing/funnel_E.png" style="width:800px;height:600px;"><p>Here we have pictured each of the research games you just played. Have you seen any of these games before today\'s study? If you have, please type in the number above each of the games you \'ve seen before. (Type "none" if you have never seen any of these before today.)</p>'
funnel_tellmore_prompt = '<p><img src="media/images/debriefing/funnel_E.png" style="width:800px;height:600px;"></p><p>If some of the games you played today were familiar, or if you think you know what we are studying in this research project, please describe what you think this research is about. </p>Be as specific as possible: use the number from above to refer to each game, and let us know what you think we are measuring and what predictions we are testing.'





///////////////////////// demog questions /////////////////////////

questions_pre_button = "Continue"
question_button = "Next"
label_done = "Done!"
demog_dropdown_placeholder = "Select your answer"
demog_require_answer = "Questions marked with <font color='brown'>*</font> require a response."

demog_instr = ["Finally, we would like to ask some questions about you. There are two sections on this questionnaire: one with questions about how you see yourself and one with questions about your personal background. Your answers will remain confidential. "]
demog_instr_kid = ["Finally, we would like to ask some questions about you. Your answers will remain confidential - we won't share them with anyone."]
demog_instr_audio = ['media/audios/demog/E_demog_instr.mp3']
demog_parent_instr = ["The questions in the next section are written for children—please complete this section with your child or answer the questions on behalf of your child! Your answers will remain confidential."]
demog_section_one_instr = "<p>Click to start the first section of the questionnaire, with questions about how you see yourself.</p><p> There are five pages in this section.</p>"
demog_section_two_instr = "<p>Great job, you\’re almost done! </p>" + 
"<p>Click to start the second section of the questionnaire, with questions about your personal background.</p>" 

// PAGE 1
demog_born_instr = "<b>Were you born in the United States?</b>"
demog_born_instr_kid = "<b>Were you born in the United States?</b>"
demog_born_instr_audio = ['media/audios/demog/E_demog_born_instr.mp3']
demog_born_opts = ["Yes", "No"]
demog_living_instr = "<b>Do you currently live in the United States?</b>"
demog_living_instr_kid = "<b>Do you currently live in the United States?</b>"
demog_living_instr_audio = ['media/audios/demog/E_demog_living_instr.mp3']
demog_living_opts = ["Yes", "No"]
demog_location_state_instr = "<b>If you grew up in the US, which state did you grow up in?</b>"
demog_location_state_opts = [
    "Not applicable", "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]
demog_location_state_instr_kid = "<b>Which state do you live in?</b>"
demog_location_state_instr_kid_audio = ['media/audios/demog/E_demog_location_state_instr_kid.mp3']
demog_location_state_opts_kid = [
    "I don't live in the United States", "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]


// PAGE 2
demog_us_zipcode_instr = "<b>If you currently live in the United States, what are the first 3 digits of your zipcode?</b>"
demog_res_mobi_num = "<p><b>How many different cities/towns/villages have you lived in since age 5?</b></p><p>Please think about all the cities/towns/distinct villages and counties that you have lived in. Note that if you have lived in different locations within the same city/town/village, please don't count the place twice. Enter the total here:</p>"


//PAGE 3
demog_year_abroad_instr = "<b>Have you lived outside of the United States for more than 2 years?</b>"
demog_year_abroad_instr_kid = "<b>Have you lived in any other countries?</b>"
demog_year_abroad_instr_kid_audio = ['media/audios/demog/E_demog_year_abroad_instr_kid.mp3']
demog_year_abroad_opts = ["Yes", "No"]
demog_num_ovs_exp_instr = "<b>How many international experiences (2 days or longer) have you had?</b> (e.g. vacations, family visits, etc.)"
demog_num_ovs_exp_opts = ["No experiences", "One experience", "Two experiences", "Three to five experiences", "Six or more experiences"]
demog_num_ovs_exp_instr_kid = "<b>Have you traveled outside the country?</b>"
demog_num_ovs_exp_instr_kid_audio = ['media/audios/demog/E_demog_num_ovs_exp_instr_kid.mp3']
demog_num_ovs_exp_opts_kid = ["No", "Yes, only once", "Yes, two times", "Yes, three to five times", "Yes, more than five times"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"Yes"'
demog_conditional_year_abroad_regions_instr = "<b>Which region(s) have you lived in for at least 2 years? Check all that apply.</b>"
demog_conditional_year_abroad_regions_instr_audio = ['media/audios/demog/E_demog_conditional_year_abroad_regions_instr.mp3']
demog_conditional_year_abroad_regions_opts = ["North America", "South America", "Europe", "Africa", "Asia", "Australia", "Other"]


//PAGE 4
demog_language_first_instr = "<b>Is English your first language (or one of your first languages)?</b>"
demog_language_first_instr_audio = ['media/audios/demog/E_demog_language_first_instr.mp3']
demog_language_first_opts = ["Yes", "No"]
demog_language_mono_instr = "<b>Can you speak and understand any other languages fluently?</b> "
demog_language_mono_options = ["No, just English", "Yes, I am multilingual"]
demog_language_mono_instr_kid = "<b>Can you speak and understand any other languages?</b>"
demog_language_mono_instr_kid_audio = ['media/audios/demog/E_demog_language_mono_instr_kid.mp3']
demog_language_mono_options_kid = ["No, just English", "Yes, I can speak and understand other languages"]
demog_language_target_instr = "<b>Can you speak or understand any Chinese language or dialect at all, even if you aren't fluent?</b>"
demog_language_target_instr_kid = "<b>Can you speak or understand any Chinese language at all?</b>"
demog_language_target_instr_kid_audio = ['media/audios/demog/E_demog_language_target_instr_kid.mp3']
demog_language_target_options = ["Yes", "No"]
//PAGE 4 conditional
demog_conditional_language_target_question_node = '"targetlanguage":"Yes"'
demog_conditional_language_target_fluency_preamble = "<b>Language Fluency</b>"
demog_conditional_language_target_fluency_preamble_kid = "<b>Language Ability</b>"
demog_conditional_language_target_fluency_superq = "<p>On a scale from zero to ten, please select your level of proficiency in speaking and understanding any Chinese language or dialect from the options:</p>"
demog_conditional_language_target_fluency_superq_kid = "On a scale from zero to ten, please rate your ability in speaking and understanding any Chinese language: "
demog_conditional_language_target_fluency_superq_kid_audio = ['media/audios/demog/E_demog_conditional_language_target_fluency_superq_kid.mp3']
demog_conditional_language_target_fluency_sp = "<b>Speaking</b>"
demog_conditional_language_target_fluency_sp_placeholder = "select your level of proficiency in speaking"
demog_conditional_language_target_fluency_sp_placeholder_kid = "select your ability in speaking"
demog_conditional_language_target_fluency_ud = "<b>Understanding Spoken Language</b>"
demog_conditional_language_target_fluency_ud_placeholder = "select your level of proficiency in understanding spoken language"
demog_conditional_language_target_fluency_ud_placeholder_kid = "select your ability in understanding spoken language"
demog_conditional_language_target_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
demog_conditional_language_target_fluency_sp_opts_kid = ["0 - I cannot speak any Chinese language at all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 - I can speak a Chinese language perfectly"]
demog_conditional_language_target_fluency_ud_opts_kid = ["0 - When someone is speaking any Chinese language, I cannot understand at all", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 - When someone is speaking a Chinese language, I can understand perfectly"]


//PAGE5
demog_agegender_age_instr = "<b>What is your age?</b>"
demog_agegender_age_instr_kid = "<b>What is your age?</b>"
demog_agegender_age_instr_audio = ['media/audios/demog/E_demog_agegender_age_instr.mp3']
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_age_opts_kid = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
demog_agegender_gender_instr = "<b>What is your gender?</b>"
demog_agegender_gender_instr_kid = "<b>What is your gender?</b>"
demog_agegender_gender_instr_audio = ['media/audios/demog/E_demog_agegender_gender_instr.mp3']
demog_agegender_gender_opts = ["Female", "Male", "Non-binary", "Decline to answer"]
demog_ethnic_instr = "<p><b>What is your racial or ethnic identification?</b></p> <p>Please select all that apply. To remove a choice, you can press backspace on your keyboard.</p>"
demog_ethnic_instr_kid = "<p><b>Which group(s) do you and your family identify with, if any?</b></p>"
demog_ethnic_instr_audio = ['media/audios/demog/E_demog_ethnic_instr.mp3']
demog_ethnic_opts = ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White", "Other"]

// Education
demog_currently_in_college_instr = "<b>Are you currently in college?</b>"
demog_currently_in_college_opts = ["Yes", "No"]
demog_college_year_instr = "<b>If you are currently in college, which year are you in?</b>"
demog_college_year_opts = ["1", "2", "3", "4", "5+"]
demog_highest_level_eduation_completed_instr =  "<b>What is the highest degree or level of school you have completed or are currently completing?</b>"
demog_highest_level_eduation_completed_opts = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school']
demog_stem_instr = "<b>If you are in school, are you primarily studying STEM (Science, Technology, Engineering, Mathmatics...) subjects? If you are no longer in school, were you primarily studying STEM stubjects when you were a student?</b>"
demog_stem_opts = ["Yes", "No"]

//PAGE6 SES
demog_objective_ses_instr = '<b>What is the highest degree or level of school you have completed?</b>'
demog_objective_ses_instr_kid = "<b>What is the highest degree or level of school your mother (or primary caregiver) has completed?</b>"
demog_objective_ses_instr_kid_audio = ['media/audios/demog/E_demog_objective_ses_instr_kid.mp3']
demog_objective_ses_opts = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school']
demog_objective_ses_opts_kid = ['8th grade/junior high or less', 'Some high school', 'High school graduate/GED', 'One or more years of college, no degree', 'Two-year college degree/vocational school', "Four-/Five-year college Bachelor's degree", 'At least some graduate school', 'Not sure']

demog_subjective_ses_instr = "<p style = 'float: left; margin: 40px'><img src='media/images/demog/ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>Imagine that this ladder represents how society is set up.</p><p>At the top of the ladder are the people who are the best off: they have the most money, the highest amount of schooling, and the jobs that bring the most respect.</p><p>At the bottom are people who are the worst off: they have the least money, little or no education, no job, or jobs that no one wants or respects.</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Now think about your family. <b>Please tell us where you think your family would be on this ladder.</b> Select the number corresponding to the rung that best represents where your family would be on this ladder:</p>"
demog_subjective_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]

demog_adult_help = "When playing the games, how much help did you get from an adult, if any?"
demog_adult_help_audio = ['media/audios/demog/E_demog_adult_help.mp3']
demog_adult_help_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

demog_final_feedback_instr = "Were any parts of this experiment confusing or frustrating?<p></p>We really appreciate your feedback!"
demog_final_feedback_instr_kid = '<img src="media/images/debriefing/funnel_kid.png" style="width:714px;height:455px;"><br />What did you think of these games? Were any parts hard or was there anything you didn\'t like? Use the numbers next to each game to tell us about it - for example, game 1 was my favorite!<br />We really appreciate your feedback!'
demog_final_feedback_instr_kid_audio = ['media/audios/demog/E_demog_final_feedback_instr_kid.mp3']

//page 7 Identity-local
demog_likert_scale= ["Strongly Disagree", "Disagree", "Moderately Disagree", "Neutral", "Moderately Agree", "Agree", "Strongly Agree"];
demog_likert_preamble= "<p> Please express your agreement with each of the following statements on a seven-point scale where 1 = strongly disagree and 7 = strongly agree with a given statement: </p>",

demog_identity_local_remainclose = "It is very important for me to remain close to American culture."
demog_identity_local_positiveimpact = "American culture has the most positive impact on my life."
demog_identity_local_proud = "I feel very proud to identify with American culture."
demog_identity_local_holiday = "Participating in American holidays and events is very important to me."

//page 8 Identity-global
demog_identity_global_strongattachment = "I have a strong attachment to the global world."
demog_identity_global_feelconnected = "I feel connected to the global world."
demog_identity_global_thinkofmyself = "I think of myself as a global citizen."
demog_identity_global_feelapartof = "It is important to me to feel a part of the global world."
demog_identity_global_viewmyselfas = "Thinking about my identity, I view myself as a global citizen."
demog_identity_global_citizenoftheworld = "Feeling like a citizen of the world is important to me."
demog_identity_global_describemyselfas = "I would describe myself as a global citizen."

//page 9 consumption-local
demog_consumption_local_films = "I enjoy watching Hollywood films at the theatre."
demog_consumption_local_movies = "I enjoy watching Hollywood movies that are in English."
demog_consumption_local_actors = "Some of my favourite actors/actresses are from Hollywood."
demog_consumption_local_music = "I enjoy listening to music that is popular in the United States."
demog_consumption_local_television_donotlike = "In general, I do not like American Television."
demog_consumption_local_celebrity = "I like to read magazines that contain information about popular Western celebrities."
demog_consumption_local_magazine = "I enjoy reading American magazines."
demog_consumption_local_television_oftenwatch = "I often watch American television programs."
demog_consumption_local_dress = "I like the way that Americans dress."

//page 10 consumption-global 
demog_consumption_global_films = "I enjoy watching Chinese films at the theatre."
demog_consumption_global_movies = "I enjoy watching Chinese movies in Chinese."
demog_consumption_global_actors = "Some of my favorite actors/actresses are from China."
demog_consumption_global_music = "I enjoy listening to music that is popular in China. "
demog_consumption_global_television_donotlike = "In general, I do not like Chinese Television."
demog_consumption_global_celebrity = "I like to read magazines that contain information about popular Asian celebrities. "
demog_consumption_global_magazine = "I enjoy reading Chinese magazines. "
demog_consumption_global_television_oftenwatch = "I often watch Chinese television programs."
demog_consumption_global_dress = "I like the way that Chinese people dress."

//page 11 cosmopolitanism
demog_cosmopolitanism_waysoflife = "I like to learn about other ways of life."
demog_cosmopolitanism_viewsandapproaches = "I enjoy being with people from other countries to learn about their views and approaches."
demog_cosmopolitanism_observepeople = "I like to observe people of other cultures, to see what I can learn from them."
demog_cosmopolitanism_exchangeideas = "I enjoy exchanging ideas with people from other cultures or countries."
demog_cosmopolitanism_learnmoreabout = "I am interested in learning more about people who live in other countries."

////////////////////// demog questions end ////////////////////////

game_intro = ['media/videos/gamification/E_game_intro.webm']
game_task1 = ['media/videos/gamification/E_game_task1.webm']
game_task2 = ['media/videos/gamification/E_game_task2.webm']
game_task3 = ['media/videos/gamification/E_game_task3.webm']
game_task4 = ['media/videos/gamification/E_game_task4.webm']
game_task5 = ['media/videos/gamification/E_game_task5.webm']
game_task6 = ['media/videos/gamification/E_game_task6.webm']
game_task7 = ['media/videos/gamification/E_game_task7.webm']

game_intro_kid = ['media/videos/gamification/E_kid_intro.webm']
game_task1_kid = ['media/videos/gamification/E_kid_first.webm']
game_task2_kid = ['media/videos/gamification/E_kid_second.webm']
game_task5_green_kid = ['media/videos/gamification/E_kid_third_green.webm']
game_task5_yellow_kid = ['media/videos/gamification/E_kid_third_yellow.webm']

//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
    "<p>You are all done! Thanks so much for participating in our research!</p>" +
    "<p>We are studying how people incorporate context into their reasoning, " +
    "and how this changes over childhood development. Thanks for your help! Please make sure you email your Participant ID to langcogculture@gmail.com so we can compensate you for your time. Your Participant ID is: </p>"
finish_instruction_kid = "<div class='slide' id='finished'>" +
    "<p>You are all done! Thank you so much for your help!</p>"

AREP_finish_instruction = "<div class='slide' id='finished'>" +
"<p>You are all done! Thanks so much for participating in our research!</p>" +
"<p>We are studying how people incorporate context into their reasoning, " +
"and how this changes over childhood development. Thanks for your help! </p>"
finish_instruction_button = "OK"


prolific_ID_prompt = "Please enter your Prolific ID below. If you did not come here from Prolific, please enter 000."

prolific_finish_instruction = "<div class='slide' id='finished'>" +
    "<p>You are all done! Thanks so much for participating in our research!</p>" +
    "<p>We are studying how people incorporate context into their reasoning, " +
    "and how this changes over childhood development. Thanks for your help! Please go to the next slide to see your completion code </p>"
prolific_ID_button = "Continue"

prolific_completion_code = "<p>For Prolific users only: Your Completion Code is</p><p><b>" + 
                            prolific_code + "</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your payment promptly.</p>"

participantIDtext1 = "<p>Welcome to our study! Your Participant ID is</p><p><b>"
//participantIDtext2 = "</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your compensation promptly.</p>"
participantIDtext2 = ""
studyPaused = "Hello! Thank you for your interest in our study. Unfortunately, we have completed data collection for now. If we reopen the study, we will post it at this link, so feel free to try back in the future.<p></p>We hope you can participate next time!"

