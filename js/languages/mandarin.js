//Tell people to use the right broswer
browserDetection_pre = "嗨！看起来你正在使用 "
browserDetection_post = " 浏览器。 本页面只能在谷歌Chrome浏览器或火狐（Firefox)浏览器中正常运行。"

// fullscreen mode message 
full_screen_mode_message = "<p>当你按下下面的按钮时，本实验将进入全屏模式。</p>"
fullscreen_mode_button =  "继续"

// flikr warning 

general_warnings = [
    "<p><img src= 'media/images/infrastructure/warning.png' height='150' width='150'></p>" + 
    "<h1 style='font-size:50px'></h1>" + 
    "<h1 style='font-size:50px'>闪光警告</h1>" + 
    "<h1 style='font-size:30px'>本实验包含闪烁的图片。</h1>" + 
    "<h1 style='font-size:30px'>如果您会受到闪光影响，请不要参与本实验。</h1>",

    "<h1 style='font-size:50px'>内容警告</h1>" + 
    "<h1 style='font-size:30px'>本实验包含部分专为儿童参与者设计的任务，以及部分专门为成人参与者设计的任务。</h1>" + 
    "<h1 style='font-size:30px'>这是为了帮助我们更好地理解人们在部分任务中的表现的发展轨迹。</h1>" + 
    "<h1 style='font-size:30px'>请注意，部分实验者可能会因任务间的风格不协调而感到提示。</h1>" 

]


//Stanford Consent


first_page_instruction = [
    "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
    "<div style='width: 600px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
    "<img src='media/images/infrastructure/stanford.png' height='46' width='360' alt='Stanford University'></div>" +
    "<center><p><strong>斯坦福语言与认知实验室</strong></p></center>" +
    "<p>在本实验中，你将会玩几个小游戏。有一部分的小游戏是为儿童设计的，但我们需要你在参与过程中集中注意力，尽可能地准确完成任务。"
    + "<u style=\"color:red;\">你会听见声音，所以请确保你的扬声器或耳机已开启，音量适中。</u>" +
    "<p class='block-text' id='legal'>法律信息：通过回答以下的问题，你将参与到一项由斯坦福大学心理系的认知科学家们开展的实验。如果你对本研究有任何问题的话，" +
    "请联系Alex Carstensen （邮箱：<a href='mailto://abcarstensen@stanford.edu'>abcarstensen@stanford.edu</a>）。你必须要满十八岁才能参与本项实验。" +
    "你的参与是完全自愿的。你可以拒绝回答以下任何一个、或所有的问题。你可以在任何时刻拒绝继续参与，并且不会带来不良后果。你的匿名性是被确保的；要求你参与实验的研究人员不会收到任何你的个人信息。</p></div><p />"
]

first_page_instruction_kid = [
    "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
    "<div style='width: 568px; margin: 0 auto; text-align: center; background-color: #8C1516; padding: 20px 15px 10px 10px'>" +
    "<img src='media/images/infrastructure/stanford.png' height='46' width='360' alt='Stanford University'></div>" +
    "<center><p><strong>斯坦福语言与认知实验室</strong></p></center>" +
    "<p>在本实验中，你的孩子/你班上的孩子将会玩几个小游戏。我们需要你先完成几个步骤，再让你的孩子/你班上的孩子开始。" +
    "<u style=\"color:red;\">你会听见声音，所以请确保你的扬声器或耳机已开启，音量适中。</u></p></div>"
]

real_data_prompt = "请选择适用的选项："
real_data_options = [
    "我只是在尝试这个实验。",
    "我是个教师，我班上的孩子准备好做实验了。",
    "我是个家长，我的孩子准备好做实验了。",
]

consent_text = [
    "<div id='consent' style='font-size: 15px; line-height: normal; text-align: left; padding: 40px'><h1>法定监护人（父母/教师）知情同意书</h1>" +
    "<p>描述：我们正在研究语言和沟通的发展。我们的实验被设计为对幼儿而言有趣的、合适的活动。您的孩子/您班上的孩子将会被邀请与我们的研究人员玩一个短小的" +
    "游戏。您班上的孩子将会接触到故事书、图片或提前录制的视频片段；在部分实验中，我们可能会展示玩具和木偶。之后，我们会问一些简短的问题。在我们的所有实" +
    "验中，答案都没有正确或错误之分；我们只是想知道孩子们是怎么想、怎么做的！</p>" +
    "<p>风险和收益：参与此研究对您和您的孩子/您班上的孩子没有可预见的风险或不适。我们合理安排了每个实验进程，以确保每一个孩子都会享受参与这个实验的全过" +
    "程。如果孩子感到疲劳、不开心或出于任何原因而不想继续参与实验，实验进程将会被立即停止，并且不会产生任何处罚。除了参与认知发展研究、推进我们理解儿童" +
    "如何学习与思考的满足感外，我们不能也不会保证或承诺您将从此实验中获得任何收益。</p>" +
    "<p>报酬：您不会因为参与此实验而获得现金报酬。</p>" +
    "<p>时长：此实验需要大约15至20分钟。</p>" +
    "<p>联系方式：<br />*问题、疑虑或意见：若您对此研究及其过程、风险和收益有任何问题、疑虑或意见，请联系本协议负责人Michael C. Frank博士（电话：+001 " +
    "650 721 9270；邮箱：<a href='mailto:langcoglab@stanford.edu'>langcoglab@stanford.edu</a>；网站：<a href='http://langcog.stanford.edu'>" +
    "http://langcog.stanford.edu</a>)。<br />" +
    "*第三方联系人：若您对此实验的操作不满，或者您对此研究或您作为被试的权利有任何疑虑、意见或一般性的问题，请拨打电话+001 650 723 2480或免费电话" +
    "+001 866 680 2906联系斯坦福机构审查委员会（Stanford Institutional Review Board, IRB），与独立于本研究团队的人员反映。您也可以写信至如" +
    "下地址：Stanford IRB, 1705 El Camino Real, Stanford University, Stanford, CA 94305-5401。</p>" +
    "<p>被试权利：若您已阅读本知情同意书且决定允许您的孩子/您班上的孩子参与此项目，请理解：每个孩子的参与是自愿的，且所有的孩子有权在任何时候撤回其同意" +
    "或停止参与，这不会导致处罚或失去原本应有的收益。您也可以选择不参与本研究。所有的孩子有权拒绝回答特定问题。<br />" +
    "此研究的结果可能会在学术会议上展示或在学术期刊上发表。实验过程的录像会被存储在安全的存储器中，仅供项目主管和项目组成员访问。录像将以编码而非姓名辨" +
    "识。所有记录都将被安全地存储以保护每个孩子的个人隐私；所有孩子的身份在有关此实验的所有论文发表中都不会被公开。</p>" +
    "<p><input type='checkbox' id='consent_checkbox' />   我同意允许我的孩子/我班上的孩子参与此项目。我理解我或我的孩子/我班上的孩子有权在任" +
    "何时候撤回其同意或停止参与。</p>" +
    "</div>"
]

consent_alert = "如果你想参与，你必须选中复选框表示同意。"

parental_instruction_text = [
    "我们现在准备好开始了！请将电脑的操作权交给你的孩子/你班上的孩子。你可以坐在孩子后面，但请让孩子自己完成实验任务，不要干预。<br /><br />"
]

parental_instruction_btn = ["我们开始吧！"]

child_assent_text = [
    "你想完一些电脑游戏吗？如果你想停止，你可以随时停。<br /><br />"
]

child_assent_btn = ["我们开始吧！"]

// audio check
audio_check_file = 'media/audios/infrastructure/six_M.mp3'
audio_prompt = ["让我们先测试一下声音：打开你的扬声器，按下扬声器图标，然后输入你听到的数字。请输入数字即可，如2。"]
audio_alert = ["数字错误: 你的电脑声音目前工作不正常。如想继续参加测试，必须确保电脑声音工作正常。如果你想重试一次，请刷新本页面。谢谢！"]
audio_button = "继续"

// mic check
mic_finish_button = "完成"
mic_retry_button = "重录"
mic_next_button = "继续"
mic_instruction = "接下来，让我们测试一下麦克风：通知出现时，请允许本网站使用你的麦克风。"
mic_prompt = "当你看到说话图标的时候，请读出以下的数字：<b>9</b>，然后按‘"+mic_finish_button+"’。 <br />" +
    "你将能回放你的录音；请确保你可以清楚地听到自己的声音，然后按‘"+mic_next_button+"’。 <br />" +
    "不然，你可以按‘"+mic_retry_button+"’，再试一次。"

mic_task_instruction = "当你看到说话图标的时候，录音已经开始了，你就可以开始说话。"
mic_task_instruction_audio = ["media/audios/infrastructure/M_mic_task_instruction.mp3"]

// TASKS:

//horizon and circle transition instruction
circle_sticker_readyButton = "好了!"
circle_sticker_package_instruction_circle_first = "<p>现在，你将要玩两个短游戏。</p><p>在第一个游戏里，你将画一些圆圈。</p><p>在第二个游戏里，你将用贴纸拼一张图片。</p><p>准备好了吗？</p>"
circle_sticker_package_instruction_sticker_first = "<p>现在，你将要玩两个短游戏。</p><p>在第一个游戏里，你将用贴纸拼一张图片。</p><p>在第二个游戏里，你将画一些圆圈。</p><p>准备好了吗？</p>"

// horizon
horizonOKbutton = '好的!'
horizon1 = "<p>让我们来练习一下！用这些贴纸来拼一张图片！你可以想放多少张贴纸，就放多少张贴纸。</p> 如果你拼完了，按下面的按钮。<p>"
horizondonebutton = "完成!"
horizonpractice_feedback_yes = '真棒！让我们来看看怎么拼另一张！'
horizonpractice_feedback_no = '<p>啊哦！你需要用至少一张贴纸来拼图片哦！</p><p>让我们再试一次吧！</p>'

horizon_prepractice_instruction = "现在，我们要来玩一个图画游戏。我会给你一些贴纸，然后你来用它们拼成一幅图画。"

horizon_postpractice_instruction1 = "拼图画的方法没有对错，可以用任何你喜欢的方法来拼！你可以想放多少张贴纸，就放多少张贴纸。"
horizon_postpractice_instruction2 = "这幅画画的将会是外面，<p>所以你的画要有一条地平线。</p><p>你知道地平线是什么吗？</p>"
horizon_postpractice_instruction3 = "你出门的时候，看到天空和大地相连，形成一条线。<p><b>这条线就叫地平线。</b></p><p><img src= 'media/images/horizon/horizon.png'></p>"
horizon_postpractice_instruction4 = "这是一张有地平线的画。"
horizon_postpractice_instruction5 = "这是一条地平线。<p><img src= 'media/images/horizon/instruction/horizon_postpractice_instruction5.png'></p>"
horizon_postpractice_instruction6 = "这也是一条地平线。<p><img src= 'media/images/horizon/instruction/horizon_postpractice_instruction6.png'></p>"
horizon_postpractice_instruction7 = "现在你已经知道怎么做了，你可以用这些贴纸来拼你自己的图画啦！"
horizon_postpractice_instruction8 = "记得在你的图画里加上一条地平线哦！<p><img src= 'media/images/horizon/horizon.png'></p>"

horizon2 = "<p><b>记得在你的图画里加上一条地平线哦!</b></p><p>你的图画里至少要有一棵树、一座房子、和一个人，但你也可以放其它的贴画。</p>"

// Attribution Task
att_ready = '<p>现在，你将要观看一些视频。在视频结束后，我会问你一些问题。</p><p>准备好了吗？</p>'
att_ready_audio = ['media/audios/attribution/M_att_ready.mp3']
att_ready_button = '好了!'
attvid_young = ['media/videos/attribution/mandarin_kid.webm']
attvid_adult = ['media/videos/attribution/mandarin_adult.webm']
attprompt = '<p>请看视频。</p>'
attq1 = "<p><b>凯丽为什么不骑自行车?</b></p><p><b>是因为她是那种会怕怕的人，还是因为这辆自行车骑起来很危险？</b></p><p><img src='media/images/attribution/ca_kelly.png' width=600></p><p>请用完整句子解释。</p>"
attq1_audio = ['media/audios/attribution/M_attq1.mp3']
attq2 = "<p><b>璐茜为什么不骑自行车？</b></p><p><b>是因为她是那种会怕怕的人，还是因为这辆自行车骑起来很危险？</b></p><img src='media/images/attribution/ca_lucy.png' width=600><p>请用完整句子解释。</p>"
attq2_audio = ['media/audios/attribution/M_attq2.mp3']
attribution_button = "完成!"
attribution_alert = "请多说一点！"


attribution_reading_instruction = "<b>Please read carefully.</b>"

attribution_mp_primer_text = "<div class='w3-container' style='width: 800px; bottom-padding: 20px; text-align: center;'>"  + 
"<p>In this portion of the study, we will ask for your opinion about homicide. </p>" +
"Social scientists cannot, of course, do experiments to investigate what causes someone to engage in mass murder. Therefore, we must search for clues about possible causes by surveying people who share some experiences of the persons involved--i.e., because they have lived in the same region, at the same point in history (these homicides occurred in the 1990s), or because they are employed in the same line of work.</p>"  + 
"<p>We are surveying a number of groups with different types of shared experience. Your participation is important as a step toward combating the epidemic of mass murders.</p>"


MorriStory_preamble = "We want to ask your opinion about some explanations for the murder that have been given by the news media. " + 
"We are not simply asking whether you think each statement is true or false. " +
"We want to know your opinion about <i>to what extent</i> each of these factors was a <i>cause</i> of the shooting. "
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



//Raven's SPM
//instruction
raven_button = "下一题"

raven_instruction = [
    "<p><b>在接下来的页面里，您将看到12道图形补全题。</b></p><p><img src='media/images/raven/instructions/rv_ins_1.png' width=600></p>",
     
    "<p><b>每张图都有缺失的一块。</b></p><p><img src='media/images/raven/instructions/rv_ins_2.png' width=600></p>",
    
    "<p><b>每张图都有缺失的一块。 </b></p><p><img src='media/images/raven/instructions/rv_ins_3.png' width=600></p><p><b>在它下面你将会看到六个不同的小块。</b></p>",
    
    "<p><b>六个小块全都有正确的形状，但只有一块可以正确地填入大图中，使整个图案完整。</b></p><p><img src='media/images/raven/instructions/rv_ins_4.png' width=600></p>",
    
    "<p><b>六个小块全都有正确的形状，但只有一块可以正确地填入大图中，使整个图案完整。</b></p><p><b>你的任务是决定哪一小块可以正确地填入大图。</b></p><p><img src='media/images/raven/instructions/rv_ins_5.png' width=600></p>",
    
    "<p><b>请在保证正确率的前提下，尽可能快地作答。</b></p><p><b>准备好了吗？让我们先来练习一下。</b></p>",
    
    "<p><b>哪个小块可以使大图完整？</b></p><p>（答案点击可见）</p><p><img src='media/images/raven/instructions/rv_ins_6.png' width=600></p>",
    
    "<p><b>哪个小块可以使大图完整？</b></p><p>选项2不可能是正确的，因为它和图案缺失的部分一模一样。</p><img src='media/images/raven/instructions/rv_ins_7.png' width=600></p>",
     
    "<p><b>哪个小块可以使大图完整？</b></p><p>选项1，3，5的图案是错误的。</p><img src='media/images/raven/instructions/rv_ins_8.png' width=600></p>",
    
    "<p><b>哪个小块可以使大图完整？</b></p><p>选项6怎么样？它的图案是正确的，但是它的图案没有占满整个小块，所以它无法完整地补全整个图案。</p><img src='media/images/raven/instructions/rv_ins_9.png' width=600></p>",
    
    "<p><b>哪个小块可以使大图完整？</b></p><p>选项4是正确的答案--它正确的图案可以覆盖了整个缺失的部分。</p><img src='media/images/raven/instructions/rv_ins_10.png' width=600></p>",
     
     
     "<p><b>在接下来的页面里，你都将有90秒的时间来选择可以合理补全大图的选项。第一页会显示刚才的例子。请选择选项4，然后点击\“继续\”。</b></p><p><img src='media/images/raven/instructions/rv_ins_11.png' width=600></p>"  
]


// Sticker choice task
pen_prompt = ["<p>你快完成了！</p><p>请选择下面贴纸中的其中一个作为你完成本轮任务的奖励！你只能选择一个。你选完后，其他参与者将无法选择这个贴纸。</p><p>你想选择哪一个？</p>"]
pen_prompt_audio = ['media/audios/pen/M_pen_prompt.mp3']
penchoicelabel = ["这一个"]
pre_sticker_prompt = "<p>感谢你对我们实验的参与，我们想送你一个小礼物。</p>"+
            " <p>这是一袋很赞的贴纸。我们把这些贴纸存放在实验室里，专为像你这样的人准备！</p>"+
            " <p>现在，这包贴纸里面有很多的绿色贴纸，和一些黄色贴纸。</p>"
sticker_prompt = "<p>这是一些贴纸袋中的贴纸。</p> "+
            "<p>每一周，我们都会随机选取10% 的实验参与者，将这些贴纸作为奖品邮寄给他们。</p>"+
            "<p>现在，这两种贴纸我们都有库存， 所以你可以来自己选择一个贴纸作为礼物！</p>"+
            "<p>但是，如果我们送完了一种贴纸，所有人都会自动获得另外一种还有库存的贴纸。</p>"
post_sticker_prompt =  "<p>谢谢你选择了贴纸！</p>"+
        "<p> 如果你想加入我们的贴纸抽奖活动，请在下面输入你的邮寄地址。</p>"+
        "<p> 如果你被抽中了，我们将把你选择的贴纸邮寄给你！</p>"
sticker_question = "你想选择哪一个贴纸？"
sticker_button_label = "继续"
post_stickers_transition_prompt = "<p>真棒，你马上就要集齐所有的贴纸了！ </p><p> 接下来，我们给你准备了一些故事，你在读完这些故事后会回答一些问题。 </p> <p> 最后，我们将问你一些有关你自己的问题。 </p>"

// Circle Drawing task
circle_instruction = [
    "images/circle_drawing/M_circle_drawing_1.png", "images/circle_drawing/M_circle_drawing_2.png",
    "images/circle_drawing/M_circle_drawing_3.png", "images/circle_drawing/M_circle_drawing_4.png",
    "images/circle_drawing/M_circle_drawing_5.png", "images/circle_drawing/M_circle_drawing_6.png",
    "images/circle_drawing/M_circle_drawing_7.png", "images/circle_drawing/M_circle_drawing_8.png",
]
circle_recap = "<p>把你自己和你的家人都画成圆圈。</p><p> 别忘了，要画的是小时候与你一起住的人。</p> <p><b> 你将从自己的圆圈画起，然后给圆圈加上 \"我\"的标签. </b></p><p style='color:blue;font-size: 20px;'><b>绘制圆圈</b>: 绘制圆圈。</p><p style='color:blue;font-size: 20px;'><b>加标签</b>: 点击圆圈，然后双击文本框。<u>完成输入后请按\"回车\"</u> </p><p style='color:blue;font-size: 20px;'><b>删除圆圈或标签</b>: 右击鼠标即可见删除按钮。</p>"
circle_textbox_default = "在此处加标签"
circle_delete_button = "删除"
circle_unlabeled_alert = "你有尚未被添加标签的圆圈。请给每一个圆圈都加上它所代表的人的标签。"
circle_empty_alert = "你还没有画任何圆圈。请把你自己和你的家人都画成圆圈。"
circle_small_alert = "你刚刚画的圆圈太小了。请重画一个大一点的圆圈，以便更好地添加标签。"
circle_game_button = "完成!"

//Ebbinghaus 
ebbinghaus_practice_feedback_yes = "真棒!"
ebbinghaus_practice_feedback_no = "<p>啊哦，要按更大的圆下面的键哦！</p><p>让我们再试一次吧！</p>"

//phase 1

ebbinghaus_phase_1_prepractice_instruction = [
    "<p><b>现在，我们要玩一个大圆游戏。 </b></p><p><b>在这个游戏里，你会看到类似这样子的两个橙色圆</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_1.png' style='width:800px;height:600px;'>", 
    "<p><b>为了减少光标干扰，在这个游戏期间，你无法在圆圈周围的区域看到你的光标。</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_2.png' style='width:800px;height:600px;'>", 
    "<p><b>这个游戏是要找到两个圆里更大的那个</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_3.png' style='width:800px;height:600px;'>",
    "<p><b>如果你觉得右边的橙色圆更大……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_4.png' style='width:800px;height:600px;'>", 
    "<p><b>如果你觉得右边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_5.png' style='width:800px;height:600px;'></p><p>按M键</p>", 
     "<p><b>如果你觉得左边的橙色圆更大……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_4b.png' style='width:800px;height:600px;'>", 
    "<p><b>如果你觉得左边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_5b.png' style='width:800px;height:600px;'></p><p>按Z键</p>",     
    
]


ebbinghaus_phase_1_prepractice_ready = "<p>让我们来练习一下玩这个游戏吧！</p> <p> 准备好了吗?</p>"
ebbinghaus_phase_1_prepractice_readyButton = '好了!'
ebbinghaus_phase_1_practice_prompt = "<p>哪个圆是更大的圆呢?</p>"
ebbinghaus_phase_1_postpractice_instruction = [
    "真棒！现在你可以真的开始玩这个游戏了。你会看到更多的圆。",
    "现在，我们要再试一次。别忘了你要做什么哦！让我们一起再熟悉一遍。",
    "<p><b>如果你觉得右边的橙色圆更大……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_6.png' style='width:800px;height:600px;'>", 
    "<p><b>如果你觉得右边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_7.png' style='width:800px;height:600px;'></p><p>按M键</p>", 
     "<p><b>如果你觉得左边的橙色圆更大……</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_6b.png' style='width:800px;height:600px;'>", 
    "<p><b>如果你觉得左边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_7b.png' style='width:800px;height:600px;'></p><p>按Z键</p>",    
]
ebbinghaus_phase_1_postpractice_ready = "<p>你需要回答10个类似的问题，问题之间会有短暂的停顿。</p><p>在停顿时，一张如下图片将会在屏幕上闪现。但你只要等待下一个问题开始即可。</p><img src=\"media/images/ebbinghaus/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>有些问题可能很难，但你可以猜一个 </p> <p>准备好了吗?</p>"
ebbinghaus_phase_1_postpractice_readyButton = '好了!'
ebbinghaus_phase_1_prompt = "<p>哪个圆是更大的圆呢?</p>"

//phase 2
ebbinghaus_phase_2_prepractice_instruction = [
   
   "我们来玩下一个游戏。这个游戏有一点点不同。", 
    
   "<p><b>在这个游戏里，你会看到有灰色圆绕在橙色圆周围。</b></p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_8.png' style='width:800px;height:600px;'>",
    
    "<p><b>在这个游戏里，你会看到有灰色圆绕在橙色圆周围。</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_9.png' style='width:800px;height:600px;'></p><p>就像这几个一样。</p>",
    
      "<p><b>仔细看中间的橙色圆</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_10.png' style='width:800px;height:600px;'></p>", 
    
     "<p><b>仔细看中间的橙色圆</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_11.png' style='width:800px;height:600px;'></p><p>像这个</p>",
    
    "<p><b>仔细看中间的橙色圆</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_12.png' style='width:800px;height:600px;'></p><p>还有这个</p>",
    
     "<p><b>如果这边的橙色圆更大…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_13.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>如果这边的橙色圆更大…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_14.png' style='width:800px;height:600px;'></p><p>按Z键</p>",
    
     "<p><b>如果这边的橙色圆更大…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_15.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>如果这边的橙色圆更大…</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_16.png' style='width:800px;height:600px;'></p><p>按M键</p>"
    
    
]
ebbinghaus_phase_2_prepractice_ready_prompt = "<p>我们来试一次吧</p> <p> 准备好了吗?</p>"
ebbinghaus_phase_2_prepractice_readyButton = '好了!'
ebbinghaus_phase_2_practice_prompt = "<p>哪个橙色圆是更大的圆呢？</p>"

ebbinghaus_phase_2_postpractice_instruction = [
    "真棒！现在你可以真的开始玩这个游戏了。你会看到更多的圆。",
    
    "现在，我们要再试一次。别忘了你要做什么哦！让我们一起再熟悉一遍。",
    
    "<p><b>记住，要看中间的橙色圆。</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_17.png' style='width:800px;height:600px;'></p><p>像这个两个。</p>",
    
    "<p><b>如果这边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_18.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>如果这边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_19.png' style='width:800px;height:600px;'></p><p>按Z键</p>",
    
     "<p><b>如果这边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_20.png' style='width:800px;height:600px;'></p>",
    
    "<p><b>如果这边的橙色圆更大……</b></p><p><img src='media/images/ebbinghaus/ebb_instruction/ebb_ins_21.png' style='width:800px;height:600px;'></p><p>按M键</p>"
    
]
ebbinghaus_phase_2_postpractice_ready_prompt = "<p>你需要回答24个类似的问题，问题之间会有短暂的停顿。</p><p>在停顿时，一张如下图片将会在屏幕上闪现。但你只需要等待下一个问题开始即可。</p><img src=\"media/images/ebbinghaus/mask/mask1.png\" style=\"width:400px;height:200px;\"><p>现在，我们要真正开始玩这个游戏了。准备好了吗？</p>"
ebbinghaus_phase_2_postpractice_readyButton = "好了!"
ebbinghaus_phase_2_prompt = "<p>哪个橙色圆是更大的圆呢？</p>"

ebbinghaus_finished_prompt = "<p>这个游戏结束了。</p><p>你完成得真棒！</p>"
ebbinghaus_finished_nextButton = '下个游戏'


//Free description 
free_description_prepractice_instruction_adult = "<p>现在，我们要来玩一个图片游戏</p><p>在这个游戏里，你会看到很多不一样的图片。</p><p>每张图片，你都有5秒钟的时间来观察</p><p>仔细看。准备好了吗？</p>"
free_description_prepractice_instruction_kid = "<p>现在，我们要来玩一个图片游戏</p><p>在这个游戏里，你会看到很多不一样的图片。</p><p>你有几秒钟来看每张图片</p><p>仔细看。准备好了吗？</p>"
free_description_prepractice_instruction_kid_audio = ['media/audios/free_description/M_free_description_prepractice_instruction_kid.mp3']
free_description_prepractice_instruction_young = "<p>现在，我们要来玩一个图片游戏</p><p>在这个游戏里，你会看到很多不一样的图片。我们一起来看第一张图片。</p><p>你有几秒钟来看这张图片</p><p>仔细看。准备好了吗？</p>"
free_description_prepractice_instruction_young_audio = ['media/audios/free_description/M_free_description_prepractice_instruction_young.mp3']

free_description_prepractice_OKButton = "好了!"
free_description_prompts = "<p>想象你正在和一个没有看到过这张图片的人说话。</p><p>你会怎么跟他们说你看到了什么呢？</p>请用两三个完整的句子描述</p>"
free_description_prompts_audio = ['media/audios/free_description/M_free_description_prompts.mp3']
free_description_prompt_first = "<p>想象你正在和一个没有看到过这张图片的人说话。</p><p>你会怎么跟他们说你看到了什么呢？</p>请用两三个完整的句子描述</p>"
free_description_prompt_first_audio = ['media/audios/free_description/M_free_description_prompt_instructions_0.mp3']
free_description_prompt_instructions = [
    "<p>好的，你可以用几个句子来描述这个图片吗？</p>",
    "<p>你在这个图片里看到了什么？</p>",
    "<p>你可以描述刚刚看到的图片吗？</p>",
]
free_description_prompt_instructions_audio = [
    'media/audios/free_description/M_free_description_prompt_instructions_1.mp3',
    'media/audios/free_description/M_free_description_prompt_instructions_2.mp3',
    'media/audios/free_description/M_free_description_prompt_instructions_3.mp3',
]
free_description_ready_instruction = "<p> 真棒！你可以真的开始玩这个游戏了。 </p> <p> 现在，我会给你看更多的图片</p>"
free_description_ready_instruction_audio = ['media/audios/free_description/M_free_description_ready_instruction.mp3']
free_description_ready_OKButton = "好的!"
free_description_next_instruction = "<p>准备好看下一个图片了吗？</p>"
free_description_next_instruction_audio = ['media/audios/free_description/M_free_description_next_instruction.mp3']
free_description_next_first = "<p>我们来看一看第一张图片。</p>"
free_description_next_first_audio = ['media/audios/free_description/M_free_description_next_instructions_0.mp3']
free_description_next_instructions = [
    "<p>我们再看另一张图片吧！</p>",
    "<p>准备好看下一个图片了吗？</p>",
    "<p>好棒！我们来看看下一张图片。</p>",
]
free_description_next_instructions_audio = [
    'media/audios/free_description/M_free_description_next_instructions_1.mp3',
    'media/audios/free_description/M_free_description_next_instructions_2.mp3',
    'media/audios/free_description/M_free_description_next_instructions_3.mp3',
]
free_description_next_YesButton = "好了!"
free_description_continueButton = "完成!"
free_description_finishedInstruction = "<p>这个游戏结束了。</p><p>你完成得真棒！</p>"
free_description_finishedInstruction_audio = ['media/audios/free_description/M_free_description_finishedInstruction.mp3']
free_description_finishedButton = "下个游戏！"
free_description_alert = "请多说一点！"


//RMTS 
rmts_instruction_0 = [
    "<p><b>在这个游戏里，你将会了解到我的玩具。这是一台特殊的机器。 </b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_1.png' style='width:800px;'>", 
   
    "<p><b>有时候，当我把东西放在我的玩具上时，我的玩具会播放音乐。</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_2.png' style='width:800px;'>", 
    
    "<p><b>有时候，当我把东西放在我的玩具上时，我的玩具不会播放音乐。</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_3.png' style='width:800px;'>", 
    
    "<p><b>我们会试着把不同的东西放到我的玩具上。</b></p><p>你的任务是观察并找出哪些东西能让我的玩具播放音乐。我们看看怎么玩吧！</p><img src='media/images/rmts/rmts_instruction/rmts_ins_4.png' style='width:800px;'>"
    
]
rmts_instruction_0_audio = [
    'media/audios/rmts/M_RMTS_preinstructions01.mp3',
    'media/audios/rmts/M_RMTS_preinstructions02.mp3',
    'media/audios/rmts/M_RMTS_preinstructions03.mp3',
    'media/audios/rmts/M_RMTS_preinstructions04.mp3'
]

rmts_instruction_1 = [
    "<p>现在，你知道我的玩具是怎么玩的了...</p><p>我的朋友需要你的帮助来找到能让我的玩具播放音乐的东西！</p><img src='media/images/rmts/rmts_instruction/rmts_ins_5.png' style='width:800px;'>", 
    
    "<p><b>只有其中一个托盘装着能让我的玩具播放音乐的东西。</b></p><img src='media/images/rmts/rmts_instruction/rmts_ins_6.png' style='width:800px;'>", 
    
    "<p><b>你可以帮帮我的朋友吗？</b></p><p>请点击装着能让我的玩具播放音乐的东西的托盘。</p><img src='media/images/rmts/rmts_instruction/rmts_ins_7.png' style='width:800px;'>"
]
rmts_instruction_1_audio = [
    'media/audios/rmts/M_RMTS_postinstructions01.mp3', 'media/audios/rmts/M_RMTS_postinstructions02.mp3',
    'media/audios/rmts/M_RMTS_postinstructions03.mp3'
]

rmts_test_trial = "哪个能让我的玩具播放音乐呢？"
rmts_instruction_2 = "<p><strong>真棒！这个游戏做完了！我们来试试另一个！</strong></p>"
rmts_instruction_2button = "好的！"
rmts_test_trial_audio = ['media/audios/rmts/M_rmts_test_trial.mp3']


// change detection task 

change_detection_instruction = "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: left;'>" +
"<p> 在这个游戏里，你需要找出每对相似图片中的不同。你会看见一对非常相似的图片快速轮流出现。你的任务是找出两张图片的不同之处。你有60秒的时间来找出每组图片的不同。</p>" +
"<p> <b>当你找到两张图片的不同时，请立即按下键盘空格键。</b> 按下空格键后，你将看到一个文字框。请在文字框中打字输入你所找到的不同。这个游戏大约会持续五分钟。</p></div>"
change_detection_page_instruction = "<p> 当你找到两张图片的不同时，请立即按下键盘空格键。</p>"
change_detection_prompt = "<p> 请描述你刚刚所看到的不同，或写下“未知”。</p>"
change_detection_manipulation_instruction = "<p> 现在你将回答一些关于刚才看到的图片的问题。</p>"
change_detection_manipulation_prompt =  "<p>请列出你在图片中看见的焦点/中心物体（们）。</p>" 

//sociogram task
sociogram_instruction = "<div class='w3-container' style='width: 600px; bottom-padding: 20px; text-align: center;'>" +
"<p>在这个游戏中，你将画出你的社交网络。</p>" + 
"<p>你将阅读关于画社交网络的说明。在之后，你也将会看到说明的总结，所以如果你没有将说明全部记下来，也请不要有太大压力。</p>" + 
"<p><b>画一个圆圈</b> 来代表你自己， 并为你的每一个朋友都画一个圆圈。 然后，给圆圈们<b>加上标签</b>，注明朋友的名字或昵称。</p>" + 
"<p>别忘了用 \“我\”来标记代表你自己的圆圈。</p>" + 
"<p>如果两人是朋友，<b>画线连接两人的圆圈。</b></p>"



sociogram_prompt = "<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: center;'>" +
"<p>现在你已经知道怎么玩了，请在画出你的社交网络: " + 
"<b>画一个圆圈</b> 来代表你自己，并为你的每一个朋友都画一个圆圈。然后，给圆圈们<b>加上标签</b>，注明朋友的名字或昵称。" + 
"别忘了用 \“我\”来标记代表你自己的圆圈。" + 
"如果两人是朋友，<b>画线连接两人的圆圈。</b></p>" + 
"<p class='block-text' id='instr'><b>任务说明</b>: <b>绘制圆圈时</b>, 请点击屏幕上方的按钮菜单并选择 “圆圈” ，即可在空白画板上里拖动鼠标来画不同大小的圆圈了。 如果想删除不需要的圆圈的话，请右击想删除的圆圈，并点击“删除”键。" + 
"<b>绘制连线时</b>, 请点击屏幕上方的按钮菜单并选择 “直线” ，即可在空白画板上在任意方向拖动鼠标，画出直线。" + 
"<b>绘制标签时</b>, 标注圆圈时，请双击屏幕上方的按钮菜单并选择 “标签” ，并单击想要标注的圆圈，随后一个文本框将会出现。请双击“在此填写标签”文本框，并打字写出代表此圆圈的昵称。完成后点击键盘上的“回车“键。</p></div><p />"


sociogram_demo_drawcircle_prompt = '<p><b>任务介绍(1/4): </b></p><p>请点击屏幕上方的按钮菜单并选择 “圆圈” ，即可在空白画板上里拖动鼠标来画不同大小的圆圈了。</p><p><b>当你学会如何在空白里画圆圈后，请按 ">>" 键跳到下一页。</b></p> '
sociogram_demo_deletecircle_prompt = '<p><b>任务介绍(2/4): </b></p><p>如果想删除不需要的圆圈的话，请右击想删除的圆圈，并点击“删除”键。</p><p><b>当你学会如何删除圆圈后，请按 ">>" 键跳到下一页。</b></p> '
sociogram_demo_drawline_prompt = '<p><b>任务介绍(3/4): </b></p><p>连接圆圈时，请点击屏幕上方的按钮菜单并选择 “直线” ，即可在空白画板上在任意方向拖动鼠标，画出直线。</p><p><b>当你学会如何画直线与删除直线后，请按 ">>" 键跳到下一页。</b></p>'
sociogram_demo_label_prompt = '<p><b>任务介绍(4/4): </b></p><p>标注圆圈时，请双击屏幕上方的按钮菜单并选择 “标签” ，并单击想要标注的圆圈，随后一个文本框将会出现。</p><p>请双击“在此填写标签”文本框，并打字写出代表此圆圈的昵称。完成后点击键盘上的“回车“键。</p><p><b>当你学会如何标注圆圈后，请按 ">>" 键跳到下一页。</b></p>'
sociogram_menu_label = ["圆圈", "直线", "标签"]
sociogram_delete_label = "删除"
sociogram_label_filler_words = "在此填写标签"
sociogram_small_circle_warning = "您刚画的圆圈太小了！请再次尝试！"

// triads 

triads_instruction = "<p>在这个游戏里，你将会看到一系列加粗的选项。</p>" + 
"<p>每个选项下面都会有另外两个选项，像下面这样：</p>" + 
"<p>&nbsp;</p>" + 
"<p><b>蘑菇</b></p>" + 
"<p>南瓜</p>" + 
"<p>茄子</p>" + 
"<p>&nbsp;</p>" + 
"<p>你的任务是选出和加粗的选项最相关的选项。</p>" + 
"<p>准备好了吗？</p>"
triads_ready_button = "好了！"

triads_items = shuffle([
    ["茶杯", ["玻璃杯", "水壶"]], 
    ["老师", ["警察", "书桌"]], 
    ["碗", ["盘子", "汤"]], 
    ["鸽子", ["鸭子", "鸟巢"]], 
    ["靴子", ["拖鞋", "脚"]], 
    ["腿", ["手臂", "裤子"]],
    ["山羊", ["鹿", "草地"]], 
    ["蜜蜂", ["瓢虫", "花园"]],
    ["锯子", ["锤子 ", "木板"]],
    ["连衣裙", ["裤子", "衣架"]],
    ["大象", ["长颈鹿", "动物园"]], 
    ["草稿本", ["书", "双肩包"]], 
    ["勺子", ["叉子", "糖"]],
    ["飞机", ["直升机", "天空"]], 
    ["婚戒", ["项链", "手"]], 

 ]);


triads_fillers_items = shuffle([
    ["柠檬", ["葡萄", "梨"]], 
    ["图书馆", ["银行", "电影院"]],
    ["风筝", ["篮球", "秋千"]], 
    ["桥", ["隧道", "公路"]], 
    ["婴儿", ["男人", "女人"]], 
    //["香菜", ["盐", "胡椒"]], 
    ["舌头", ["牙齿", "嘴唇"]],
    ["祖父", ["姐妹", "叔叔"]], 
    ["蜡烛", ["火炬", "灯笼"]],
    ["狐狸", ["老虎", "狮子"]], 
    ["树枝", ["根", "茎"]], 
    ["鹦鹉", ["鹰", "夜莺"]], 
    ["新芽", ["小树苗", "植物"]], 
    ["鼻", ["大拇指", "手指"]], 
    ["黄瓜", ["玉米", "土豆"]], 
    ["围巾", ["袜子", "毛线帽"]], 
    
])

triads_catch_items = shuffle([
    ["请选猫", ["猫", "狗"]], 
    ["请选春天", ["冬天", "春天"]]
])


triads_question_preamble = "哪个事物与加粗项关联最紧密？"

/*
dup_triads_20 = shuffle([
[ ["drum", ["trumpet", "sticks"]]

],
[ ["trumpet", ["violin", "orchestra"]] 

]

]);
*/


// semantic intuitino task and causal attribution task

en_attribution_button = "Next"

en_reading_check_instr = ["你是否能用英语阅读简短的故事？"]
en_reading_check_opt = ["能", "不能"]
en_reading_instr = ["请仔细阅读:"]       
en_reading_check_feedback_eligible = ["<p>In this game, you will read some short stories and then answer questions about them. If you indicated that you can read in English, some of the stories and questions may be in English.</p><p>Some of the questions check facts from the story and have a correct answer, and others will ask your opinion, with no right or wrong answer.</p><p>Please read carefully!</p>"]
en_reading_check_feedback_ineligible = ["<p>在这个游戏中，你将会阅读一些短故事并回答关于这些故事的问题。一部分问题核实故事内容，并有一个正确答案；另一部分问题询问你的观点，答案没有正误之分。</p><p>请仔细阅读！</p>"]

semantic_intuition_instr = ["<p>In this game, you will read some short stories and then answer questions about them. </p>" + 
"<p>Some of the questions check facts from the story and have a correct answer, and others will ask your opinion, with no right or wrong answer.</p>" +
"<p>Please read carefully!</p>"] // no longer in use in CN version but have to keep it to prevent error cuz the script use it for EN version

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

godel_2_story_part1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. <font style='opacity:0'>But this is the only thing that he has heard about Gödel. Now suppose that Gödel was not the author of this theorem. A man called “Schmidt” whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic. Most people who have heard the name “Gödel” are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name “Gödel,” is he talking about:</font></p><p>(Press any key to continue...)</p>" + "<p></p>" + "<p><font style='opacity:0'>the person who really discovered the incompleteness of arithmetic? or</font></p>" + "<p><font style='opacity:0'>the person who got hold of the manuscript and claimed credit for the work?</font></p>"]
godel_2_story_part2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. Now suppose that Gödel was not the author of this theorem. A man called “Schmidt” whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. <font style='opacity:0'>His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic. Most people who have heard the name “Gödel” are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name “Gödel,” is he talking about:</font></p><p>(Press any key to continue...)</p>" + "<p></p>" + "<p><font style='opacity:0'>the person who really discovered the incompleteness of arithmetic? or</font></p>" + "<p><font style='opacity:0'>the person who got hold of the manuscript and claimed credit for the work?</font></p>"]
godel_2_story_part3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. Now suppose that Gödel was not the author of this theorem. A man called “Schmidt” whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic. <font style='opacity:0'>Most people who have heard the name “Gödel” are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name “Gödel,” is he talking about:</font></p><p>(Press any key to continue...)</p>" + "<p></p>" + "<p><font style='opacity:0'>the person who really discovered the incompleteness of arithmetic? or</font></p>" + "<p><font style='opacity:0'>the person who got hold of the manuscript and claimed credit for the work?</font></p>"]
godel_2_story_all = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p><center>Please read carefully:</center></p><p>Suppose that John has learned in college that Gödel is the man who proved an important mathematical theorem, called the incompleteness of arithmetic. John is quite good at mathematics and he can give an accurate statement of the incompleteness theorem, which he attributes to Gödel as the discoverer. But this is the only thing that he has heard about Gödel. Now suppose that Gödel was not the author of this theorem. A man called “Schmidt” whose body was found in Vienna under mysterious circumstances many years ago, actually did the work in question. His friend Gödel somehow got hold of the manuscript and claimed credit for the work, which was thereafter attributed to Gödel. Thus he has been known as the man who proved the incompleteness of arithmetic. Most people who have heard the name “Gödel” are like John; the claim that Gödel discovered the incompleteness theorem is the only thing they have ever heard about Gödel. When John uses the name “Gödel,” is he talking about:</p>"]
godel_2_opt = ["the person who really discovered the incompleteness of arithmetic? or", "the person who got hold of the manuscript and claimed credit for the work?</div>"]
godel_2_check_instr = ["The story you have just read talked about which mathematical proof?"]
godel_2_check_opt = ["The infinitude of primes", "The incompleteness theorem", "L\'Hopital\'s Rule", "The law of quadratic reciprocity"]

jonah_1_story_para1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</font></p><p><font style='opacity:0'>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</font></p><p><font style='opacity:0'>When a contemporary German high school student says “Attila was the king who drove the Roman from Germany,” is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_1_story_para2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</font></p><p><font style='opacity:0'>When a contemporary German high school student says “Attila was the king who drove the Roman from Germany,” is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_1_story_para3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>When a contemporary German high school student says “Attila was the king who drove the Roman from Germany,” is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_1_story_all = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p><center>Please read carefully:</center></p><p>In high school, German students learn that Attila founded Germany in the second century A.D. They are taught that Attila was the king of a nomadic tribe that migrated from the east to settle in what would become Germany. Germans also believe that Attila was a merciless warrior and leader who expelled the Romans from Germany, and that after his victory against the Romans, Attila organized a large and prosperous kingdom.</p><p>Now suppose that none of this is true. No merciless warrior expelled the Romans from Germany, and Germany was not founded by a single individual. Actually, the facts are the following. In the fourth century A.D., a nobleman of low rank, called “Raditra”, ruled a small and peaceful area in what today is Poland, several hundred miles from Germany. Raditra was a wise and gentle man who managed to preserve the peace in the small land he was ruling. For this reason, he quickly became the main character of many stories and legends. These stories were passed on from one generation of peasants to the next. But often when the story was passed on the peasants would embellish it, adding imaginary details and dropping some true facts to make the story more exciting. From a peaceful nobleman of low rank, Raditra was gradually transformed into a warrior fighting for his land. When the legend reached Germany, it told of a merciless warrior who was victorious against the Romans. By the 8th century A.D., the story told of an Eastern king who expelled the Romans and founded Germany. By that time, not a single true fact remained in the story.</p><p>Meanwhile, as the story was told and retold, the name “Raditra” was slowly altered: it was successively replaced by “Aditra”, then by “Arritrak” in the sixth century, by “Arrita” and “Arrila” in the seventh and finally by “Attila”. The story about the glorious life of Attila was written down in the 8th century by a scrupulous Catholic monk, from whom all our beliefs are derived. Of course, Germans know nothing about these real events. They believe a story about a merciless Eastern king who expelled the Romans and founded Germany.</p><p>When a contemporary German high school student says “Attila was the king who drove the Romans from Germany,” is he actually talking about the wise and gentle nobleman, Raditra, who is the original source of the Attila legend, or is he talking about a fictional person, someone who does not really exist?</p>"]
jonah_1_opt = ["He is talking about Raditra.", "He is talking about a fictional person who does not really exist.</div>"]
jonah_1_check_instr = ["In the story you have just read, which of the following events was discussed?"]
jonah_1_check_opt = ["Founding Germany", "Defeating the Huns", "Building a great castle", "Invading Italy"]

jonah_2_story_para1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</font></p><p><font style='opacity:0'>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</font></p><p><font style='opacity:0'>When Mei Ling says “Chan Wai Man stole from the rich and gave to the poor”, is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_2_story_para2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</font></p><p><font style='opacity:0'>When Mei Ling says “Chan Wai Man stole from the rich and gave to the poor”, is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_2_story_para3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + "<p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>(Press any key to continue...)</p>" + "<p><font style='opacity:0'>When Mei Ling says “Chan Wai Man stole from the rich and gave to the poor”, is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</font></p>"]
jonah_2_story_all = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px;'>" + "<p><center>Please read carefully:</center></p><p>Lau Mei Ling is a high school student in the Chinese city of Guangzhou. Like everyone who goes to high school in Guangzhou, Mei Ling believes that Chan Wai Man was a Guangdong nobleman who had to take refuge in the wild mountains around Guangzhou in the 11th century A.D, because Chan Wai Man was in love with the daughter of the ruthless Government Minister Lee, and the Minister did not approve. Everyone in Lau Mei Ling’s high school believes that Chan Wai Man had to live as a thief in the mountains around Guangzhou, and that he would often steal from the rich allies of the Minister Lee and distribute their goods to the poor peasants.</p><p>Now suppose that none of this is true. No Guangdong nobleman ever lived in the mountains around Guangzhou, stealing from the wealthy people to help the peasants. The real facts are the following. In one of the monasteries around Guangzhou, there was a helpful monk called “Leung Yiu Pang”. Leung Yiu Pang was always ready to help the peasants around his monastery, providing food in the winter, giving medicine to the sick and helping the children. Because he was so kind, he quickly became the main character of many stories. These stories were passed on from one generation of peasants to the next. Over the years, the story changed slowly as the peasants would forget some elements of the story and add other elements. In one version, Leung Yiu Pang was described as a rebel fighting Minister Lee. Progressively the story came to describe the admirable deeds of a generous thief. By the late 14th century, the story was about a generous nobleman who was forced to live as a thief because of his love for the Minister’s daughter. At length, not a single true fact remained in the story.</p><p>Meanwhile, the name “Leung Yiu Pang” was slowly altered: it was successively replaced by “Cheung Wai Pang” in the 12th century, “Chung Wai Man” in the 13th, and finally by “Chan Wai Man”. The story about the adventurous life of Chan Wai Man was written down in the 15th century by a scrupulous historian, from whom all our beliefs are derived. Of course, Mei Ling, her classmates and her parents know nothing about these real events. Mei Ling believes a story about a generous thief who was fighting against a mean minister.</p><p>When Mei Ling says “Chan Wai Man stole from the rich and gave to the poor”, is she actually talking about the generous monk, Leung Yiu Pang, who is the original source of the legend about Chan Wai Man, or is she talking about a fictional person, someone who does not really exist?</p>"]
jonah_2_opt = ["She is talking about the generous monk, Leung Yiu Pang.", "She is talking about a fictional person who does not really exist.</div>"]
jonah_2_check_instr = ["In the story you have just read, which of the following events was discussed?"]
jonah_2_check_opt = ["Kidnapping a princess", "Defeating pirates", "Traveling to Shanxi", "Living as a thief"]



si_button_label = "继续"

semantic_intuition_li_main_intro1 = 
"<p>冬冬和芳芳是一对来自新河镇的双胞胎。这是冬冬。 </p>" + 
'<img src="media/images/si_li/intro_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro2 = 
"<p>这是芳芳。</p>" + 
'<img src="media/images/si_li/intro_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro3 = 
"<p>这是他们的妈妈, 这是他们的爸爸。</p>" + 
'<img src="media/images/si_li/intro_3.png" style="width:600px;height:400px;">'


semantic_intuition_li_main_intro4 = 
"<p>冬冬和芳芳在家附近的一所小学上一年级，</p>" + 
"<p>他们在学校里听到了很多曾经发生在新河镇的有趣的故事。</p>" + 
"<p>冬冬和芳芳特别喜欢把这些故事讲给爸爸妈妈和朋友们听。</p>"
'<img src="media/images/si_li/intro_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro5 = 
"<p>下面，您将读到冬冬和芳芳在学校听到的五个故事。</p>" + 
"<p>在故事末尾，冬冬和芳芳会说出他们所知道的事情。</p>" + 
"<p>您需要判断他们说的话是否正确。</p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_intro6 = "<p>这是第一个故事</p>" 

semantic_intuition_li_main_buffer = "现在，让我们读下一个冬冬和芳芳学到的故事！"


semantic_intuition_li_main_outro1 = "<p>好的，这些就是我们的五个故事！感谢你的参与！</p>" + 
'<img src="media/images/si_li/outro_1.png" style="width:600px;height:400px;">'



semantic_intuition_li_main_allheal_para1 = 
"<p>从前，新河镇上住着一位富翁。</p>" + 
'<img src="media/images/si_li/allheal_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para2 = 
"<p>一天，这位富翁病了，连镇上最好的医生都治不好他的病。 </p>" + 
'<img src="media/images/si_li/allheal_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para3 = 
"<p>有个晚上，他做了一个奇怪的梦，梦到有一种叫做神仙草的植物，</p>" + 
"<p>生长在一座遥远的小岛上的丛林中，叶子可以治好他的病。 </p>" + 
'<img src="media/images/si_li/allheal_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para4 = 
"<p>第二天，富翁把这个关于神仙草的梦告诉了他的儿子。听完之后，儿子立即把镇上所有的小伙子召集起来，请大家帮助他寻找这种神奇的植物。 </p>" + 
"<p>他还承诺，最先发现神仙草的人一定会得到重奖。 </p>" + 
'<img src="media/images/si_li/allheal_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_comprehension_check_1 = 
"<p><b>富翁告诉了他儿子什么?</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_comprehension_check_1_response = 
"<p>If your answer is \"His dream about allheal\", then you are correct! </p>" 

semantic_intuition_li_main_allheal_para5 = 
"<p>于是，镇上所有的小伙子都出发去那个岛上寻找神仙草去了。其中有个小伙子名叫大文。大文非常聪明。</p>" + 
'<img src="media/images/si_li/allheal_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para6 = 
"<p>他并没有直接跑到丛林中去找神仙草，而是先去找到了那个岛上最有名的植物专家。 </p>" + 
'<img src="media/images/si_li/allheal_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para7 = 
"<p>这个专家告诉大文神仙草可能生长的地方。沿着他指的路线，大文找到了一些长得高高的植物。大文心想，这一定是神仙草。</p>" + 
"<p>他非常开心，一下拔起了好几株，然后赶紧跑回去找那个专家，确认他找到的是不是神仙草。 </p>" + 
'<img src="media/images/si_li/allheal_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para8 = 
"<p>当大文找到那个专家时，另外一个人碰巧也在那里。他是小飞，手里也捧着一 些植物，</p>" + 
"<p>看起来和大文手中的植物很像，只不过矮了很多。</p>" + 
'<img src="media/images/si_li/allheal_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para9 = 
"<p>那个专家仔细检查了这些植物， </p>" + 
"<p>然后说道：“大文，这些长得细高的植物有毒， 叶子能把人毒死。你一定要小心。小飞，你运气真好，这些矮小的植物就是神仙草。”</p>" + 
'<img src="media/images/si_li/allheal_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para10 = 
"<p>听完这些话，大文非常失望。他扔掉了手中所有的植物。</p>" + 
"<p>然而，小飞却十分开心，他抱着神仙草赶紧回家去了。</p>" + 
'<img src="media/images/si_li/allheal_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para11 = 
"<p>等小飞到家之后，他立刻用神仙草的叶子煮了一壶茶，并把茶送给富翁喝。</p>" + 
'<img src="media/images/si_li/allheal_11.png" style="width:600px;height:400px;">'


semantic_intuition_li_main_allheal_comprehension_check_2 = 
"<p><b> 小飞带了什么给富翁？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_comprehension_check_2_response = 
"<p>If your answer is \"A tea\", then you are correct! </p>" 

semantic_intuition_li_main_allheal_para12 = 
"<p>过了两天，富翁的病果真好了。富翁非常感激，他给了小飞一大笔奖金。</p>" + 
'<img src="media/images/si_li/allheal_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para13 = 
"<p>后来， 富翁想把关于神仙草的知识传播给大家，希望能帮助治愈更多的病人。 </p>" + 
"<p>因此，他请来了镇上的秀才， 在一本册子里记录下.......</p>" + 
'<img src="media/images/si_li/allheal_13.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para14 = 
"<p>神仙草的形态、功效、生长的地方以及发现神仙草的人。 </p>" + 
"<p>现在，镇上很多人都会看这个册子，从中了解如何使用神仙草。 </p>" + 
'<img src="media/images/si_li/allheal_14.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para15 = 
"<p>有一天，在学校里，冬冬和芳芳的老师给同学们看了这个记录神仙草的册子。</p>" + 
"<p>同学们都对神仙草充满了好奇。</p>" + 
'<img src="media/images/si_li/allheal_15.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_para16 = 
"<p>那天，冬冬和芳芳回到家之后，问爸爸周末可不可以一起去找神仙草。 </p>" + 
'<img src="media/images/si_li/allheal_16.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_allheal_q1 = " <p>T 爸爸说：当然可以啦！你们知道是谁发现神仙草的吗？ </p>" +
'<img src="media/images/si_li/allheal_17.png" style="width:600px;height:400px;">' + 
" <p><b>冬冬说：发现神仙草的那个人是大文。 </b></p>" +
" <p><b>问题：冬冬的话正确吗？ </b></p>"

semantic_intuition_li_main_allheal_q2 = " <p> 爸爸说：当然可以啦！你们知道是谁发现神仙草的吗？</p>" +
'<img src="media/images/si_li/allheal_17.png" style="width:600px;height:400px;">' + 
" <p><b>芳芳说：发现神仙草的那个人是小飞。 </b></p>" +
" <p><b>问题：芳芳的话正确吗？ </b></p>"



si_li_main_allheal_opt = ["正确", "错误"]


semantic_intuition_li_main_monkpic_para1 = "<p>很久以前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。 老和尚的名字叫吉祥。</p>" + 
'<img src="media/images/si_li/monkpic_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para2 = "<p>这是名叫宝玉的小和尚。</p>" + 
'<img src="media/images/si_li/monkpic_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para3 =  "<p>这是宝玉的好朋友，他的名字叫明珠。</p>" + 
'<img src="media/images/si_li/monkpic_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para4 = "<p> 吉祥老和尚每天尽量照顾好小和尚。他的主要任务是让小和尚们安全、健康、 快乐地度过每一天。 </p>" +
"<p>除了宝玉，其他的小和尚们都很喜欢庙里的生活。</p>" + 
'<img src="media/images/si_li/monkpic_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para5 =  "<p>自从宝玉来到这个庙里后， 他还从来没有回过家。</p>" +
"<p>宝玉的爸爸妈妈住在很远很远的地方，他们也没办法来看望宝玉，所以宝玉非常想家，总是不开心。</p>" +
'<img src="media/images/si_li/monkpic_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_1 = "<p><b>宝玉为什么不开心？ </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_1_response = "<p>If your answer is \"He missed his parents/home\", then you are correct! </p>" 

semantic_intuition_li_main_monkpic_para6 =  "<p>有一天，宝玉悄悄溜到寺庙的后院里。那里有一棵大树一下子吸引了宝玉，</p>" +
"<p>他发现树干上还有个大大的树洞。</p>" +
'<img src="media/images/si_li/monkpic_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para7 = "<p>宝玉往树洞里边看了看，发现很干净，就爬了进去，盘坐起来。</p>" +
'<img src="media/images/si_li/monkpic_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para8 = "<p>过了一会儿，宝玉开始感到有些无聊了。他从衣服兜里掏出一支铅笔和一个小本子，开始画起画来。</p>" +
"<p>他画着画着就忘记了想家。他甚至都忘了回到寺庙里去。 </p>" + 
'<img src="media/images/si_li/monkpic_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para9 = "<p>到了吃晚饭的时候，明珠找遍了整个寺庙也找不到宝玉。</p>" +
"<p>明珠来到寺庙外边， 他走到了这棵大树前，发现宝玉正在树洞里画画。</p>" + 
'<img src="media/images/si_li/monkpic_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para10 = "<p>明珠非常好奇，他也爬到了树洞里，在宝玉身边坐了下来。宝玉告诉明珠画画时他感到很开心。他还让明珠为他保密，因为他不想让其他小和尚发现这个秘密的树洞。明珠答应一定不把宝玉的秘密说出去。</p>" +
"<p>后来，每当宝玉想家或者难过的时候，他都会来到这个秘密树洞里画画。有时候，明珠会出来看他画画，有时他还会给宝玉一些小本子让他画画。 </p>" + 
'<img src="media/images/si_li/monkpic_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_2 = "<p><b>明珠给宝玉带来了什么？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_comprehension_check_2_response = "<p>If your answer is \"Notebooks\", then you are correct! </p>" 

semantic_intuition_li_main_monkpic_para11 = "<p>没过多久，宝玉就画好了一百多张画。有一天，宝玉把这些画拿给吉祥老和尚看。 </p>" +
"<p>吉祥非常吃惊，他发现所有的画都画得特别棒。他把其中一些画贴在了寺庙的墙上，并且用剩下的画做了两本漂亮的画册。</p>" + 
"<p>即使在今天，人们还能看到寺庙墙上的画。</p>" + 
'<img src="media/images/si_li/monkpic_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para12 = "<p>去年秋天，冬冬和芳芳的学校组织同学们去爬山。</p>" +
"<p>他们爬到山顶后，看到了这座庙。每个同学都充满了好奇。</p>" + 
'<img src="media/images/si_li/monkpic_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_monkpic_para13 = "<p>于是，他们走到寺庙里面，看到了墙上贴的一幅幅美丽的画，还有两本漂亮的画册。</p>" +
"<p>他们听说所有的画都是宝玉画的，因此特别佩服宝玉的画画才能。</p>" + 
'<img src="media/images/si_li/monkpic_13.png" style="width:600px;height:400px;">'

si_li_main_monkpic_q1 = "<p>那天芳芳和冬冬回到家之后，他们告诉妈妈他们在庙里见到了两本特别漂亮的画册。</p>" + 
"<p>妈妈问道：“你们知道画册里美丽的画是谁画的吗？”</p>" +
'<img src="media/images/si_li/monkpic_14.png" style="width:600px;height:400px;">' + 
" <p><b>芳芳说： 画出画册中所有画的那个人是吉祥。</b></p>" +
" <p><b>问题：芳芳的话正确吗？</b></p>"

si_li_main_monkpic_q2 = "<p>那天芳芳和冬冬回到家之后，他们告诉妈妈他们在庙里见到了两本特别漂亮的画册。</p>" + 
"<p>妈妈问道：“你们知道画册里美丽的画是谁画的吗？”</p>"  +
'<img src="media/images/si_li/monkpic_14.png" style="width:600px;height:400px;">' + 
" <p><b>冬冬说： 画出画册中所有画的那个人是明珠。 </b></p>" +
" <p><b>问题：冬冬的话正确吗？</b></p>"

si_li_main_monkpic_opt = ["正确", "错误"]



semantic_intuition_li_main_walter_para1 = "<p>这是关于新河镇一座著名的博物馆的故事，博物馆的全名是日光博物馆。</p>" + 
'<img src="media/images/si_li/walter_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para2 = "<p>这张 照片是树立在博物馆门口的雕像——日光雕像。</p>" + 
'<img src="media/images/si_li/walter_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para3 = "<p>这座博物馆由7个富翁在1638年共同修建。</p>" + 
'<img src="media/images/si_li/walter_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para4 = "<p>日光是修建者之一。他为博物馆捐赠了一大笔钱，还有一些书籍和艺术作品。</p>" +
"<p>他捐赠得最多，所以博物馆就以他的名字命名。</p>" +
'<img src="media/images/si_li/walter_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_1 = "<p><b> 日光给博物馆捐赠了什么? </b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_1_response = "<p>If your answer includes \"Money, books, works of arts...\", then you are correct! </p>" 

semantic_intuition_li_main_walter_para5 = "<p>大约一百多年之后，博物馆发生了一场大火，许多重要的东西都遗失了， </p>" +
"<p>包括所有书籍和博物馆创建者的相册资料都被烧掉了。</p>" +
'<img src="media/images/si_li/walter_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para6 = "<p>火灾之后，镇上的人花了很多钱将博物馆修复一新。</p>" +
"<p>他们还从其它博物馆购买了不少珍贵的艺术作品。最后，他们决定制作几尊博物馆修建者的雕像，以增加博物馆的展品。 </p>" +
'<img src="media/images/si_li/walter_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para7 = "<p>然而，他们的钱大部分已经花掉了，剩余的钱只够做一座雕塑。 </p>" +
"<p>由于最初日光捐赠得最多，他们决定只做一个日光的雕像。</p>" +
'<img src="media/images/si_li/walter_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para8 = "<p>但是，除了钱，还有另外一个问题。大火将有关日光的全部资料都烧掉了，</p>" +
"<p>而且认识日光的人也都不在世了，所以没有人知道日光长什么样子。 </p>" +
'<img src="media/images/si_li/walter_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para9 =  "<p>幸运的是，镇上有些聪明人很快就找到了解决办法。</p>" +
"<p>他们找到博物馆里长得最好看的工作人员，他的名字叫心雨。</p>" +
"<p>他们邀请心雨当模特，按照他的样子来制作雕像，心雨高兴地答应了。</p>" + 
'<img src="media/images/si_li/walter_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_2 = "<p><b>他们请求心雨做什么了？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_comprehension_check_2_response = "<p>If your answer is \"Pose for the statue\", then you are correct! </p>" 

semantic_intuition_li_main_walter_para10 =  "<p>于是，一尊高大的雕像就做成了，从那以后这座雕像就一直摆放在了博物馆门口。 </p>" +
"<p>尽管雕像是以心雨为模特制作的，可是人们将他称作日光雕像。</p>" +
'<img src="media/images/si_li/walter_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para11 = "<p>所有的修复工作组都完成之后，博物馆重新开馆了。每天都有许许多多的游客前来参观。</p>" +
"<p>他们大都会停下来瞻仰日光雕像，很多人还喜欢在雕像前拍照留念。</p>" +
'<img src="media/images/si_li/walter_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_para12 = "<p>去年，芳芳、冬冬和全班同学一起去参观了日光博物馆。</p>" +
"<p>导游给他们看了一本关于这个博物馆的历史的旧书。</p>" +
"<p>他给同学们讲了博物馆发生的火灾和日光雕像的来历。同学们听了之后都非常吃惊。</p>" + 
'<img src="media/images/si_li/walter_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_walter_q1 = "<p>那天晚上，芳芳和冬冬回到家之后，爸爸问他们去博物馆玩得怎么样，他问道：“今天你们在博物馆学到了什么？”</p>" +
'<img src="media/images/si_li/walter_13.png" style="width:600px;height:400px;">' + 
" <p><b>芳芳说：为博物馆捐赠得最多的那个人是日光。 </b></p>" +
" <p><b>问题：芳芳的话正确吗？ </b></p>"

semantic_intuition_li_main_walter_q2 = "<p>那天晚上，芳芳和冬冬回到家之后，爸爸问他们去博物馆玩得怎么样，他问道：“今天你们在博物馆学到了什么？” </p>" +
'<img src="media/images/si_li/walter_13.png" style="width:600px;height:400px;">' + 
" <p><b>冬冬说：但是为博物馆雕像摆造型的那个人是心雨。 </b></p>" +
" <p><b>问题：冬冬的话正确吗？</b></p>"

si_li_main_walter_opt = ["正确", "错误"]


semantic_intuition_li_main_superdog_para1 =  "<p>这是一个关于一场超级狗赛跑的故事。超级狗赛跑发生在很多年以前——1900 年。</p>" + 
"<p>赛程穿越荒野，全长5000里。</p>" + 
'<img src="media/images/si_li/superdog_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para2 =  "<p>比赛终点在这个美丽的湖畔。</p>" + 
'<img src="media/images/si_li/superdog_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_1 = "<p><b>这场比赛的终点在哪里？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_1_response = "<p>If your answer includes \"by the lake\", then you are correct! </p>" 

semantic_intuition_li_main_superdog_para3 =  "<p>这只小狗名叫虎子，虎子跑得很快，参加了1900年超级狗赛跑。 </p>" + 
'<img src="media/images/si_li/superdog_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para4 =  "<p>这是布丁。</p>" + 
'<img src="media/images/si_li/superdog_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para5 =  "<p>这是欢欢。</p>" + 
'<img src="media/images/si_li/superdog_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para6 = "<p>它们也参加了这场赛跑。</p>" + 
'<img src="media/images/si_li/superdog_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para7 = "<p>这是一位记者，他去比赛的终点报道谁是赢家。</p>" + 
'<img src="media/images/si_li/superdog_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para8 = "<p>虎子和布丁跑得特别快。比赛一开始，它们就冲在最前边。</p>" + 
"<p>它们穿越荒野，一直在奔跑，把其它的狗远远落在后面。</p>" + 
'<img src="media/images/si_li/superdog_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para9 =  "<p>大家都以为狗狗需要一周时间才能跑到终点。</p>" + 
"<p>所以，那个记者呆在湖边的小屋子里，一会读书、一会做三明治吃、一会儿睡一大觉。 </p>" + 
'<img src="media/images/si_li/superdog_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_2 = "<p><b> 那个记者在小屋时都做了什么？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_check_2_response = "<p>If your answer includes \"napped, ate hamburgers\", then you are correct! </p>" 

semantic_intuition_li_main_superdog_para10 = "<p>然而，虎子和布丁跑得太快了。它们只用三天就跑到了终点。</p>" + 
"<p>虎子最先到达终点，赢了比赛。但是，虎子实在是太兴奋了，根本停不下来，所以一直奔向北极去了。 </p>" + 
"<p>从此，没有任何人看见过虎子。布丁第二个到达终点，它停了下来，望着虎子跑向远方。</p>" + 
'<img src="media/images/si_li/superdog_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para11 =  "<p>就在这时，记者终于醒了，他从小屋里走了出来。</p>" + 
"<p>令他吃惊的是，布丁正站在终点，而且欢欢也从远处跑来了，但是他没有看到虎子。</p>" + 
"<p>记者想着布丁赢了这场比赛， 因此他大声呼喊“恭喜你， 布丁！你赢了这场比赛！” </p>" + 
'<img src="media/images/si_li/superdog_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para12 = "<p>布丁不过是一只狗狗，它不会说话，因此也没法告诉记者发生的事情。</p>" + 
"<p>记者将布丁赢了超级狗比赛这则消息发给了世界各地的报纸。</p>" + 
"<p>他在报道中还提到了欢欢，虽然它的腿很短，但是跑得也很快。 </p>" + 
'<img src="media/images/si_li/superdog_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para13 = "<p>由于比赛发生在很久很久以前，所有的狗狗以及知道这些狗狗的人们已经都不在世了。</p>" + 
"<p>但是，人们依然可以从报纸上读到那个记者发的超级狗赛跑的报道。</p>" + 
"<p>他们都知道布丁赢了比赛，但是除此之外，他们不知道其它任何关于布丁的事情。 </p>" + 
'<img src="media/images/si_li/superdog_13.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_para14 = "<p>一天，芳芳和冬冬的历史老师拿出一份很旧的报纸。 </p>" + 
"<p>报纸上有那个记者写的超级狗赛跑的故事。她把故事读给同学们听，她告诉同学们布丁赢了比赛。 </p>" + 
"<p>所以，这是芳芳、冬冬和同学们知道的关于布丁的全部事情，他们不知道关于虎子的任何事情。</p>" + 
'<img src="media/images/si_li/superdog_14.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_superdog_q1 = "<p>第二天吃早餐的时候，芳芳的爸爸问道：孩子们，你们知道谁赢了1900年的超级狗赛跑吗？ </p>" +
'<img src="media/images/si_li/superdog_15.png" style="width:600px;height:400px;">' + 
" <p><b>芳芳说： 赢了超级狗赛跑的那只狗狗是布丁。 </b></p>" +
" <p><b>问题：芳芳的话正确吗？</b></p>"

semantic_intuition_li_main_superdog_q2 =  "<p>第二天吃早餐的时候，芳芳的爸爸问道：孩子们，你们知道谁赢了1900年的超级狗赛跑吗？ </p>" +
'<img src="media/images/si_li/superdog_15.png" style="width:600px;height:400px;">' + 
" <p><b>冬冬说： 赢了超级狗赛跑的那只狗狗是欢欢。</b></p>" +
" <p><b>问题：冬冬的话正确吗？</b></p>"

si_li_main_superdog_opt = ["正确", "错误"]



semantic_intuition_li_main_claymen_para1 = 
"<p>这是一个关于发现新河镇著名的小泥人的故事。这是一个小泥人。 </p>" + 
'<img src="media/images/si_li/clayman_1.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para2 = "<p>这是多哈，他是一个来自冰岛的学生。1850年，多哈作为志愿者来到了新河镇，他在那里呆了一段时间。</p>" + 
'<img src="media/images/si_li/clayman_2.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para3 = "<p>这是小军。</p>" + 
'<img src="media/images/si_li/clayman_3.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para4 = "<p>这个是田二。 </p>" + 
'<img src="media/images/si_li/clayman_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para5 =  "<p>他们都是多哈在新河镇的邻居，也是多哈在那里唯一认识的人。</p>" + 
'<img src="media/images/si_li/clayman_5.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para6 =  "<p>那一年，新河镇遇到了一场干旱。人们没有足够的水喝，也没有水做饭。为了找到水，多哈决定挖一口井。他往地下挖了很深很深，可是都没找到水。 </p>" + 
'<img src="media/images/si_li/clayman_6.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para7 =  "<p>多哈正准备放弃不挖了，这时候他看到坑里有一些奇怪的东西。于是，他又往深处挖了一点儿，他被眼前的东西惊呆了！他看到了一些小泥人的上半身，这些东西看起来就像是秘密的宝藏一样。</p>" + 
'<img src="media/images/si_li/clayman_7.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_1 = "<p><b>多哈在坑里发现了什么？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_1_response = "<p>If your answer includes \"claymen\", then you are correct! </p>" 

semantic_intuition_li_main_claymen_para8 =  "<p>多哈开心极了，晚上回到家后，他在笔记本上写下了那个坑的位置，还有小泥人的外貌特征。</p>" + 
'<img src="media/images/si_li/clayman_8.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para9 = "<p>但是，那天夜里多哈的爸爸妈妈来到新河镇把他接走了，因为要赶车，他们都没有时间跟邻居和朋友们道别。遗憾的是，多哈再也没有回来新河镇。</p>" + 
'<img src="media/images/si_li/clayman_9.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para10 = "<p>过了一段时间，小军发现好像很久没见到多哈了。他来到多哈住的地方，却没找到多哈。他看到地上有个笔记本，捡起来看了下。他看完多哈写的东西后，决定把多哈的笔记本偷走。</p>" + 
'<img src="media/images/si_li/clayman_10.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para11 = "<p>第二天，小军带着笔记本来到那个埋着小泥人的土坑边。他站在那里，假装那个坑是他自己挖的。</p>" + 
'<img src="media/images/si_li/clayman_11.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para12 = "<p>这时，小军看到田二在附近的地里干活。于是，他大声喊到“田二，田二，快来，快来，你看看我发现了什么”。</p>" + 
"<p>田二跑了过来，他看到坑里的小泥人也惊呆了。 田二紧接着就给全镇的人发了通知，告诉他们小军发现了一些有意思的小泥人。</p>" + 
"<p>这个消息很快传遍了整个新河镇。</p>" + 
'<img src="media/images/si_li/clayman_12.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para13 = "<p>听到这个消息后，镇上的人们都聚集起来，把小泥人都挖了出来。</p>" + 
'<img src="media/images/si_li/clayman_13.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_2 = "<p><b>镇上的人们做了什么？</b></p>" + 
'<img src="media/images/si_li/intro_4.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_check_2_response = "<p>If your answer is \"Dug out all the claymen.\", then you are correct! </p>" 

semantic_intuition_li_main_claymen_para14 = "<p>他们还修建了一座小泥人博物馆，供其他人来参观。小军的名字也被刻在了博物馆大门上。</p>" + 
'<img src="media/images/si_li/clayman_14.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para15 = "<p>从那以后，许多人去博物馆参观小泥人，他们知道了小军很多年以前发现了小泥人。但是，这是他们知道的关于小军的唯一的信息。</p>"+ 
"<p>他们从未了解发现小泥人的全过程，他们也从来都不知道多哈这个人。</p>" + 
'<img src="media/images/si_li/clayman_15.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_claymen_para16 = "<p>作为今年田野考察，芳芳和冬冬以及他们的同学一起去参观了小泥人博物馆。</p>"+ 
"<p>像其他人一样，博物馆里有人告诉这些孩子，小军在很久以前发现了小泥人。这是他们知道的关于小军的全部信息。 </p>" + 
'<img src="media/images/si_li/clayman_16.png" style="width:600px;height:400px;">'

semantic_intuition_li_main_clayman_q1 = "<p>第二天去上学的路上，芳芳的爸爸说：“我想你们一定很喜欢昨天看到的小泥人吧！你们知道是谁发现小泥人的吗?” </p>" +
'<img src="media/images/si_li/clayman_17.png" style="width:600px;height:400px;">' + 
" <p><b>芳芳说：发现小泥人的那个人是田二。</b></p>" +
" <p><b>问题：芳芳的话正确吗？ </b></p>"

semantic_intuition_li_main_clayman_q2 = "<p>第二天去上学的路上，芳芳的爸爸说：“我想你们一定很喜欢昨天看到的小泥人吧！你们知道是谁发现小泥人的吗?” </p>" +
'<img src="media/images/si_li/clayman_17.png" style="width:600px;height:400px;">' + 
" <p><b>冬冬说：发现小泥人的那个人是小军。</b></p>" +
" <p><b>问题：冬冬的话正确吗？ </b></p>"

si_li_main_claymen_opt = ["正确", "错误"]

si_li_follow_up_intro = "<p>芳芳是一名来自新河镇的小学生,她在学校学到了很多有趣的故事。</p>"+ 
"<p>在该项任务中,您将会读到芳芳在学校学到的四个小故事,每个故事末尾有两个问题。请您阅读下列故事并回答相关问题。</p>"

si_li_followup_prince1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>从前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。老和尚的名字叫吉祥。小和尚们大多很喜欢这个地方，他们每天都在这里开心地学习和玩耍。但是，其中有一个叫宝玉的小和尚却因为有些想家而总是不开心。为了让自己不那么想家，宝玉开始练习画画。没过多久，他就画好了上百张非常漂亮的铅笔画。但是，随着时间的推移，宝玉还是越来越想家了，所以有一天他就趁老和尚不注意悄悄溜回家里去了，从此再也没有回到庙里来。 </p><p>(请按任意键继续...) </p>" + 
" <p><font style='opacity:0'>宝玉有个好朋友叫明珠。在他走了之后，明珠在庙里一个秘密的地方发现了宝玉画的画。明珠把这些画带回自己的房间并在床下边藏了起来。几年后，当明珠离开寺庙时，忘记了带走这些画。有一天，吉祥老和尚在明珠的床下发现了这些画，以为是明珠画的。吉祥把这些画都挂了起来，并在每幅画上刻了明珠的名字。直到今天，这些画还完好地挂在这座庙里。人们都听说这些画是明珠画的，但是除此之外，他们不知道任何有关明珠或那些画的事情，他们根本不知道宝玉这个小和尚。 </font></p>" + 
"<p><font style='opacity:0'>有一天，芳芳和同学们去寺庙参观，她们了解到这些画都是明珠画的。和镇上其他所有人都一样，这是她知道的关于明珠的唯一的事，她从没听说过宝玉。 那天从学校回来后，爸爸问芳芳知不知道寺庙里那些漂亮的画是谁画的。 </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“画出寺庙里所有漂亮的画的那个小和尚是明珠\”。</p><p>(请按任意键继续...) </font></p>"]

si_li_followup_prince2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>从前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。老和尚的名字叫吉祥。小和尚们大多很喜欢这个地方，他们每天都在这里开心地学习和玩耍。但是，其中有一个叫宝玉的小和尚却因为有些想家而总是不开心。为了让自己不那么想家，宝玉开始练习画画。没过多久，他就画好了上百张非常漂亮的铅笔画。但是，随着时间的推移，宝玉还是越来越想家了，所以有一天他就趁老和尚不注意悄悄溜回家里去了，从此再也没有回到庙里来。 </p>" + 
" <p>宝玉有个好朋友叫明珠。在他走了之后，明珠在庙里一个秘密的地方发现了宝玉画的画。明珠把这些画带回自己的房间并在床下边藏了起来。几年后，当明珠离开寺庙时，忘记了带走这些画。有一天，吉祥老和尚在明珠的床下发现了这些画，以为是明珠画的。吉祥把这些画都挂了起来，并在每幅画上刻了明珠的名字。直到今天，这些画还完好地挂在这座庙里。人们都听说这些画是明珠画的，但是除此之外，他们不知道任何有关明珠或那些画的事情，他们根本不知道宝玉这个小和尚。 </p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>有一天，芳芳和同学们去寺庙参观，她们了解到这些画都是明珠画的。和镇上其他所有人都一样，这是她知道的关于明珠的唯一的事，她从没听说过宝玉。 那天从学校回来后，爸爸问芳芳知不知道寺庙里那些漂亮的画是谁画的。 </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“画出寺庙里所有漂亮的画的那个小和尚是明珠\”。</p><p>(请按任意键继续...) </font></p>"]

si_li_followup_prince3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>从前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。老和尚的名字叫吉祥。小和尚们大多很喜欢这个地方，他们每天都在这里开心地学习和玩耍。但是，其中有一个叫宝玉的小和尚却因为有些想家而总是不开心。为了让自己不那么想家，宝玉开始练习画画。没过多久，他就画好了上百张非常漂亮的铅笔画。但是，随着时间的推移，宝玉还是越来越想家了，所以有一天他就趁老和尚不注意悄悄溜回家里去了，从此再也没有回到庙里来。 </p>" + 
" <p>宝玉有个好朋友叫明珠。在他走了之后，明珠在庙里一个秘密的地方发现了宝玉画的画。明珠把这些画带回自己的房间并在床下边藏了起来。几年后，当明珠离开寺庙时，忘记了带走这些画。有一天，吉祥老和尚在明珠的床下发现了这些画，以为是明珠画的。吉祥把这些画都挂了起来，并在每幅画上刻了明珠的名字。直到今天，这些画还完好地挂在这座庙里。人们都听说这些画是明珠画的，但是除此之外，他们不知道任何有关明珠或那些画的事情，他们根本不知道宝玉这个小和尚。 </p>" + 
"<p>有一天，芳芳和同学们去寺庙参观，她们了解到这些画都是明珠画的。和镇上其他所有人都一样，这是她知道的关于明珠的唯一的事，她从没听说过宝玉。 那天从学校回来后，爸爸问芳芳知不知道寺庙里那些漂亮的画是谁画的。</p><p>(请按任意键继续...) </p>"+ 
"<p><font style='opacity:0'>芳芳说：\“画出寺庙里所有漂亮的画的那个小和尚是明珠\”。</p><p>(请按任意键继续...) </font></p>"]

si_li_followup_prince4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>从前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。老和尚的名字叫吉祥。小和尚们大多很喜欢这个地方，他们每天都在这里开心地学习和玩耍。但是，其中有一个叫宝玉的小和尚却因为有些想家而总是不开心。为了让自己不那么想家，宝玉开始练习画画。没过多久，他就画好了上百张非常漂亮的铅笔画。但是，随着时间的推移，宝玉还是越来越想家了，所以有一天他就趁老和尚不注意悄悄溜回家里去了，从此再也没有回到庙里来。 </p>" + 
" <p>宝玉有个好朋友叫明珠。在他走了之后，明珠在庙里一个秘密的地方发现了宝玉画的画。明珠把这些画带回自己的房间并在床下边藏了起来。几年后，当明珠离开寺庙时，忘记了带走这些画。有一天，吉祥老和尚在明珠的床下发现了这些画，以为是明珠画的。吉祥把这些画都挂了起来，并在每幅画上刻了明珠的名字。直到今天，这些画还完好地挂在这座庙里。人们都听说这些画是明珠画的，但是除此之外，他们不知道任何有关明珠或那些画的事情，他们根本不知道宝玉这个小和尚。 </p>" + 
"<p>有一天，芳芳和同学们去寺庙参观，她们了解到这些画都是明珠画的。和镇上其他所有人都一样，这是她知道的关于明珠的唯一的事，她从没听说过宝玉。 那天从学校回来后，爸爸问芳芳知不知道寺庙里那些漂亮的画是谁画的。</p>"+ 
"<p>芳芳说：\“画出寺庙里所有漂亮的画的那个小和尚是明珠\”。</p><p>(请按任意键继续...) </p>"]

si_li_fu_prince_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>从前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。老和尚的名字叫吉祥。小和尚们大多很喜欢这个地方，他们每天都在这里开心地学习和玩耍。但是，其中有一个叫宝玉的小和尚却因为有些想家而总是不开心。为了让自己不那么想家，宝玉开始练习画画。没过多久，他就画好了上百张非常漂亮的铅笔画。但是，随着时间的推移，宝玉还是越来越想家了，所以有一天他就趁老和尚不注意悄悄溜回家里去了，从此再也没有回到庙里来。 </p>" + 
" <p>宝玉有个好朋友叫明珠。在他走了之后，明珠在庙里一个秘密的地方发现了宝玉画的画。明珠把这些画带回自己的房间并在床下边藏了起来。几年后，当明珠离开寺庙时，忘记了带走这些画。有一天，吉祥老和尚在明珠的床下发现了这些画，以为是明珠画的。吉祥把这些画都挂了起来，并在每幅画上刻了明珠的名字。直到今天，这些画还完好地挂在这座庙里。人们都听说这些画是明珠画的，但是除此之外，他们不知道任何有关明珠或那些画的事情，他们根本不知道宝玉这个小和尚。 </p>" + 
"<p>有一天，芳芳和同学们去寺庙参观，她们了解到这些画都是明珠画的。和镇上其他所有人都一样，这是她知道的关于明珠的唯一的事，她从没听说过宝玉。 那天从学校回来后，爸爸问芳芳知不知道寺庙里那些漂亮的画是谁画的。</p>"+ 
"<p>芳芳说：\“画出寺庙里所有漂亮的画的那个小和尚是明珠\”。</p>" +
" <p><b>问题1：芳芳的话正确吗？</b></p>"]

si_li_fu_prince_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>从前，新河镇的一座大山里有个庙，庙里住着一个老和尚和几个小和尚。老和尚的名字叫吉祥。小和尚们大多很喜欢这个地方，他们每天都在这里开心地学习和玩耍。但是，其中有一个叫宝玉的小和尚却因为有些想家而总是不开心。为了让自己不那么想家，宝玉开始练习画画。没过多久，他就画好了上百张非常漂亮的铅笔画。但是，随着时间的推移，宝玉还是越来越想家了，所以有一天他就趁老和尚不注意悄悄溜回家里去了，从此再也没有回到庙里来。 </p>" + 
" <p>宝玉有个好朋友叫明珠。在他走了之后，明珠在庙里一个秘密的地方发现了宝玉画的画。明珠把这些画带回自己的房间并在床下边藏了起来。几年后，当明珠离开寺庙时，忘记了带走这些画。有一天，吉祥老和尚在明珠的床下发现了这些画，以为是明珠画的。吉祥把这些画都挂了起来，并在每幅画上刻了明珠的名字。直到今天，这些画还完好地挂在这座庙里。人们都听说这些画是明珠画的，但是除此之外，他们不知道任何有关明珠或那些画的事情，他们根本不知道宝玉这个小和尚。 </p>" + 
"<p>有一天，芳芳和同学们去寺庙参观，她们了解到这些画都是明珠画的。和镇上其他所有人都一样，这是她知道的关于明珠的唯一的事，她从没听说过宝玉。 那天从学校回来后，爸爸问芳芳知不知道寺庙里那些漂亮的画是谁画的。</p>"+
"<p>芳芳说：\“画出寺庙里所有漂亮的画的那个小和尚是明珠\”。</p>" +
" <p><b>问题 2：请简要解释为什么芳芳的话是正确（或错误）的？</b></p>"]

si_li_fu_prince_opt = ["正确", "错误"]

si_li_followup_hospital1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>上世纪 50 年代，新河镇有个名叫巴图的人。他非常强壮，但由于他十分害羞，不敢与周围的人交流，没有人知道他多么强大有力。有一年，新河镇急需修建一座医院，但是却没有 足够的资金和人力。巴图想贡献自己的力量，于是他趁晚上人们休息的时候悄悄地搬运了很多木头和石头，迅速搭建好了一座大房子，并挂上了新河医院的牌子。天亮之后，巴图就悄悄地离开了新河镇，他没有告诉任何人自己建造医院这件事。遗憾的是，他再也没有返回新河镇。</p><p>(请按任意键继续..) </p>" + 
" <p><font style='opacity:0'>第二天早上，当地的一名叫做富林的工人在去上班的路上发现了这座医院，好奇地走进去瞧了瞧。正在这时，新河镇镇长金瑞也走了过来，他看到富林在房子里，手里还拎着一大 堆工具，以为是富林修建的这座医院。金瑞特别高兴，立即告诉全镇上的人们，富林为大家造好了一座医院。很快，人们都知道富林为大家做了一件好事。由于富林是个聋哑人，他既不会说话也听不见别人说话，所以无法所纠正金瑞传给大家的消息。时至今日，人们依旧到这座医院里看病，他们都听说这是富林修建的，但是这是他们所知道的关于富林的唯一的事情，他们从未听说过巴图这个壮汉。 </font></p>" + 
"<p><font style='opacity:0'>有一天，芳芳在学校课历史课上学到了富林为新河镇修建了一座医院的事情。正如所有人一样，这是她们知道的关于富林的全部事情，她们完全不知道巴图这个人。 那天晚上，爸爸问芳芳知不知道新河医院是由谁修建的。 </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“修建新河医院的那个人是富林\”。</p></font>"]

si_li_followup_hospital2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>上世纪 50 年代，新河镇有个名叫巴图的人。他非常强壮，但由于他十分害羞，不敢与周围的人交流，没有人知道他多么强大有力。有一年，新河镇急需修建一座医院，但是却没有 足够的资金和人力。巴图想贡献自己的力量，于是他趁晚上人们休息的时候悄悄地搬运了很多木头和石头，迅速搭建好了一座大房子，并挂上了新河医院的牌子。天亮之后，巴图就悄悄地离开了新河镇，他没有告诉任何人自己建造医院这件事。遗憾的是，他再也没有返回新河镇。</p>" + 
" <p>第二天早上，当地的一名叫做富林的工人在去上班的路上发现了这座医院，好奇地走进去瞧了瞧。正在这时，新河镇镇长金瑞也走了过来，他看到富林在房子里，手里还拎着一大 堆工具，以为是富林修建的这座医院。金瑞特别高兴，立即告诉全镇上的人们，富林为大家造好了一座医院。很快，人们都知道富林为大家做了一件好事。由于富林是个聋哑人，他既不会说话也听不见别人说话，所以无法所纠正金瑞传给大家的消息。时至今日，人们依旧到这座医院里看病，他们都听说这是富林修建的，但是这是他们所知道的关于富林的唯一的事情，他们从未听说过巴图这个壮汉。</p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>有一天，芳芳在学校课历史课上学到了富林为新河镇修建了一座医院的事情。正如所有人一样，这是她们知道的关于富林的全部事情，她们完全不知道巴图这个人。 那天晚上，爸爸问芳芳知不知道新河医院是由谁修建的。 </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“修建新河医院的那个人是富林\”。</p></font>"]

si_li_followup_hospital3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>上世纪 50 年代，新河镇有个名叫巴图的人。他非常强壮，但由于他十分害羞，不敢与周围的人交流，没有人知道他多么强大有力。有一年，新河镇急需修建一座医院，但是却没有 足够的资金和人力。巴图想贡献自己的力量，于是他趁晚上人们休息的时候悄悄地搬运了很多木头和石头，迅速搭建好了一座大房子，并挂上了新河医院的牌子。天亮之后，巴图就悄悄地离开了新河镇，他没有告诉任何人自己建造医院这件事。遗憾的是，他再也没有返回新河镇。</p>" + 
" <p>第二天早上，当地的一名叫做富林的工人在去上班的路上发现了这座医院，好奇地走进去瞧了瞧。正在这时，新河镇镇长金瑞也走了过来，他看到富林在房子里，手里还拎着一大 堆工具，以为是富林修建的这座医院。金瑞特别高兴，立即告诉全镇上的人们，富林为大家造好了一座医院。很快，人们都知道富林为大家做了一件好事。由于富林是个聋哑人，他既不会说话也听不见别人说话，所以无法所纠正金瑞传给大家的消息。时至今日，人们依旧到这座医院里看病，他们都听说这是富林修建的，但是这是他们所知道的关于富林的唯一的事情，他们从未听说过巴图这个壮汉。</p>" + 
"<p>有一天，芳芳在学校课历史课上学到了富林为新河镇修建了一座医院的事情。正如所有人一样，这是她们知道的关于富林的全部事情，她们完全不知道巴图这个人。 那天晚上，爸爸问芳芳知不知道新河医院是由谁修建的。</p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>芳芳说：\“修建新河医院的那个人是富林\”。</p></font>"]

si_li_followup_hospital4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>上世纪 50 年代，新河镇有个名叫巴图的人。他非常强壮，但由于他十分害羞，不敢与周围的人交流，没有人知道他多么强大有力。有一年，新河镇急需修建一座医院，但是却没有 足够的资金和人力。巴图想贡献自己的力量，于是他趁晚上人们休息的时候悄悄地搬运了很多木头和石头，迅速搭建好了一座大房子，并挂上了新河医院的牌子。天亮之后，巴图就悄悄地离开了新河镇，他没有告诉任何人自己建造医院这件事。遗憾的是，他再也没有返回新河镇。</p>" + 
" <p>第二天早上，当地的一名叫做富林的工人在去上班的路上发现了这座医院，好奇地走进去瞧了瞧。正在这时，新河镇镇长金瑞也走了过来，他看到富林在房子里，手里还拎着一大 堆工具，以为是富林修建的这座医院。金瑞特别高兴，立即告诉全镇上的人们，富林为大家造好了一座医院。很快，人们都知道富林为大家做了一件好事。由于富林是个聋哑人，他既不会说话也听不见别人说话，所以无法所纠正金瑞传给大家的消息。时至今日，人们依旧到这座医院里看病，他们都听说这是富林修建的，但是这是他们所知道的关于富林的唯一的事情，他们从未听说过巴图这个壮汉。</p>" + 
"<p>有一天，芳芳在学校课历史课上学到了富林为新河镇修建了一座医院的事情。正如所有人一样，这是她们知道的关于富林的全部事情，她们完全不知道巴图这个人。 那天晚上，爸爸问芳芳知不知道新河医院是由谁修建的。</p>" + 
"<p>芳芳说：\“修建新河医院的那个人是富林\”。</p><p>(请按任意键继续...) </p>"]

si_li_fu_hospital_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>上世纪 50 年代，新河镇有个名叫巴图的人。他非常强壮，但由于他十分害羞，不敢与周围的人交流，没有人知道他多么强大有力。有一年，新河镇急需修建一座医院，但是却没有 足够的资金和人力。巴图想贡献自己的力量，于是他趁晚上人们休息的时候悄悄地搬运了很多木头和石头，迅速搭建好了一座大房子，并挂上了新河医院的牌子。天亮之后，巴图就悄悄地离开了新河镇，他没有告诉任何人自己建造医院这件事。遗憾的是，他再也没有返回新河镇。</p>" + 
" <p>第二天早上，当地的一名叫做富林的工人在去上班的路上发现了这座医院，好奇地走进去瞧了瞧。正在这时，新河镇镇长金瑞也走了过来，他看到富林在房子里，手里还拎着一大 堆工具，以为是富林修建的这座医院。金瑞特别高兴，立即告诉全镇上的人们，富林为大家造好了一座医院。很快，人们都知道富林为大家做了一件好事。由于富林是个聋哑人，他既不会说话也听不见别人说话，所以无法所纠正金瑞传给大家的消息。时至今日，人们依旧到这座医院里看病，他们都听说这是富林修建的，但是这是他们所知道的关于富林的唯一的事情，他们从未听说过巴图这个壮汉。</p>" + 
"<p>有一天，芳芳在学校课历史课上学到了富林为新河镇修建了一座医院的事情。正如所有人一样，这是她们知道的关于富林的全部事情，她们完全不知道巴图这个人。 那天晚上，爸爸问芳芳知不知道新河医院是由谁修建的。</p>" + 
"<p>芳芳说：\“修建新河医院的那个人是富林\”。</p>"+
" <p><b>问题1：芳芳的话正确吗？</b></p>"]

si_li_fu_hospital_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>上世纪 50 年代，新河镇有个名叫巴图的人。他非常强壮，但由于他十分害羞，不敢与周围的人交流，没有人知道他多么强大有力。有一年，新河镇急需修建一座医院，但是却没有足够的资金和人力。巴图想贡献自己的力量，于是他趁晚上人们休息的时候悄悄地搬运了很多木头和石头，迅速搭建好了一座大房子，并挂上了新河医院的牌子。天亮之后，巴图就悄悄地离开了新河镇，他没有告诉任何人自己建造医院这件事。遗憾的是，他再也没有返回新河镇。</p>" + 
" <p>第二天早上，当地的一名叫做富林的工人在去上班的路上发现了这座医院，好奇地走进去瞧了瞧。正在这时，新河镇镇长金瑞也走了过来，他看到富林在房子里，手里还拎着一大堆工具，以为是富林修建的这座医院。金瑞特别高兴，立即告诉全镇上的人们，富林为大家造好了一座医院。很快，人们都知道富林为大家做了一件好事。由于富林是个聋哑人，他既不会说话也听不见别人说话，所以无法所纠正金瑞传给大家的消息。时至今日，人们依旧到这座医院里看病，他们都听说这是富林修建的，但是这是他们所知道的关于富林的唯一的事情，他们从未听说过巴图这个壮汉。</p>" + 
"<p>有一天，芳芳在学校课历史课上学到了富林为新河镇修建了一座医院的事情。正如所有人一样，这是她们知道的关于富林的全部事情，她们完全不知道巴图这个人。 那天晚上，爸爸问芳芳知不知道新河医院是由谁修建的。</p>" + 
"<p>芳芳说：\“修建新河医院的那个人是富林\”。</p>"+
" <p><b>问题 2：请简要解释为什么芳芳的话是正确（或错误）的？</b></p>"]

si_li_fu_hospital_opt = ["正确", "错误"]

si_li_followup_book1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>七十年前，在新河镇的一个学校里住着一位作家，他的名字是于飞。于飞一心想写出 一部旷世之作，苦心写作十年后，终于完成了书稿。为了让大家尽快读到他的著作，他特别渴望早日将书稿出版。然而，就在那一年，于飞被调往国外去教文学课。因此，于飞不得不把书稿留给他最好的朋友文利帮他出版。到了国外之后，于飞和国内的朋友们失去了联系，而且再也没有回来新河镇。</p><p>(请按任意键继续...) </p>" + 
" <p><font style='opacity:0'>文利是个特别健忘的人，很快他就完全忘记了答应帮于飞出版书这件事情。几年之后，文利的儿子小平在家里的一个抽屉里发现了那份手稿。小平快速读完之后，发现这本小说书稿写得特别棒，因此决定把它送到出版社出版。由于全书里没有标出作者是谁，而且是在他爸爸的抽屉里发现的书稿，他心想这一定是爸爸文利的作品，于是就在封皮上写了文利这个名字。 但是文利已经老的更加糊涂了，无法告诉小平这不是他写的书。这本小说一出版就立马成为了 经典热销书，直到今天依然颇受欢迎。大家都以为这本书是文利写的，这是他们知道的关于文 利的唯一的事情，他们从没听说过于飞的事。</font></p>" + 
"<p><font style='opacity:0'>去年，芳芳她们班阅读课上学到了这本经典小说。正如所有人一样，芳芳得知文利写了这本著名的小说，除此之外，她不知道关于文利的任何事情，也不知道于飞这个人。 有一天，爸爸问芳芳知不知道是谁写了这本经典小说。  </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“写了这本经典小说的那个人是文利\”。 </p></font>"]

si_li_followup_book2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>七十年前，在新河镇的一个学校里住着一位作家，他的名字是于飞。于飞一心想写出 一部旷世之作，苦心写作十年后，终于完成了书稿。为了让大家尽快读到他的著作，他特别渴望早日将书稿出版。然而，就在那一年，于飞被调往国外去教文学课。因此，于飞不得不把书稿留给他最好的朋友文利帮他出版。到了国外之后，于飞和国内的朋友们失去了联系，而且再也没有回来新河镇。</p>" + 
" <p>文利是个特别健忘的人，很快他就完全忘记了答应帮于飞出版书这件事情。几年之后，文利的儿子小平在家里的一个抽屉里发现了那份手稿。小平快速读完之后，发现这本小说书稿写得特别棒，因此决定把它送到出版社出版。由于全书里没有标出作者是谁，而且是在他爸爸的抽屉里发现的书稿，他心想这一定是爸爸文利的作品，于是就在封皮上写了文利这个名字。 但是文利已经老的更加糊涂了，无法告诉小平这不是他写的书。这本小说一出版就立马成为了 经典热销书，直到今天依然颇受欢迎。大家都以为这本书是文利写的，这是他们知道的关于文 利的唯一的事情，他们从没听说过于飞的事。</p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>去年，芳芳她们班阅读课上学到了这本经典小说。正如所有人一样，芳芳得知文利写了这本著名的小说，除此之外，她不知道关于文利的任何事情，也不知道于飞这个人。 有一天，爸爸问芳芳知不知道是谁写了这本经典小说。  </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“写了这本经典小说的那个人是文利\”。 </p></font>"]

si_li_followup_book3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>七十年前，在新河镇的一个学校里住着一位作家，他的名字是于飞。于飞一心想写出 一部旷世之作，苦心写作十年后，终于完成了书稿。为了让大家尽快读到他的著作，他特别渴望早日将书稿出版。然而，就在那一年，于飞被调往国外去教文学课。因此，于飞不得不把书稿留给他最好的朋友文利帮他出版。到了国外之后，于飞和国内的朋友们失去了联系，而且再也没有回来新河镇。</p>" + 
" <p>文利是个特别健忘的人，很快他就完全忘记了答应帮于飞出版书这件事情。几年之后，文利的儿子小平在家里的一个抽屉里发现了那份手稿。小平快速读完之后，发现这本小说书稿写得特别棒，因此决定把它送到出版社出版。由于全书里没有标出作者是谁，而且是在他爸爸的抽屉里发现的书稿，他心想这一定是爸爸文利的作品，于是就在封皮上写了文利这个名字。 但是文利已经老的更加糊涂了，无法告诉小平这不是他写的书。这本小说一出版就立马成为了 经典热销书，直到今天依然颇受欢迎。大家都以为这本书是文利写的，这是他们知道的关于文 利的唯一的事情，他们从没听说过于飞的事。</p>" + 
"<p>去年，芳芳她们班阅读课上学到了这本经典小说。正如所有人一样，芳芳得知文利写了这本著名的小说，除此之外，她不知道关于文利的任何事情，也不知道于飞这个人。 有一天，爸爸问芳芳知不知道是谁写了这本经典小说。</p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>芳芳说：\“写了这本经典小说的那个人是文利\”。 </p></font>"]

si_li_followup_book4= ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>七十年前，在新河镇的一个学校里住着一位作家，他的名字是于飞。于飞一心想写出 一部旷世之作，苦心写作十年后，终于完成了书稿。为了让大家尽快读到他的著作，他特别渴望早日将书稿出版。然而，就在那一年，于飞被调往国外去教文学课。因此，于飞不得不把书稿留给他最好的朋友文利帮他出版。到了国外之后，于飞和国内的朋友们失去了联系，而且再也没有回来新河镇。</p>" + 
" <p>文利是个特别健忘的人，很快他就完全忘记了答应帮于飞出版书这件事情。几年之后，文利的儿子小平在家里的一个抽屉里发现了那份手稿。小平快速读完之后，发现这本小说书稿写得特别棒，因此决定把它送到出版社出版。由于全书里没有标出作者是谁，而且是在他爸爸的抽屉里发现的书稿，他心想这一定是爸爸文利的作品，于是就在封皮上写了文利这个名字。 但是文利已经老的更加糊涂了，无法告诉小平这不是他写的书。这本小说一出版就立马成为了 经典热销书，直到今天依然颇受欢迎。大家都以为这本书是文利写的，这是他们知道的关于文 利的唯一的事情，他们从没听说过于飞的事。</p>" + 
"<p>去年，芳芳她们班阅读课上学到了这本经典小说。正如所有人一样，芳芳得知文利写了这本著名的小说，除此之外，她不知道关于文利的任何事情，也不知道于飞这个人。 有一天，爸爸问芳芳知不知道是谁写了这本经典小说。</p>" + 
"<p>芳芳说：\“写了这本经典小说的那个人是文利\”。 </p><p>(请按任意键继续...) </p>"]

si_li_fu_book_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>七十年前，在新河镇的一个学校里住着一位作家，他的名字是于飞。于飞一心想写出 一部旷世之作，苦心写作十年后，终于完成了书稿。为了让大家尽快读到他的著作，他特别渴望早日将书稿出版。然而，就在那一年，于飞被调往国外去教文学课。因此，于飞不得不把书稿留给他最好的朋友文利帮他出版。到了国外之后，于飞和国内的朋友们失去了联系，而且再也没有回来新河镇。</p>" + 
" <p>文利是个特别健忘的人，很快他就完全忘记了答应帮于飞出版书这件事情。几年之后，文利的儿子小平在家里的一个抽屉里发现了那份手稿。小平快速读完之后，发现这本小说书稿写得特别棒，因此决定把它送到出版社出版。由于全书里没有标出作者是谁，而且是在他爸爸的抽屉里发现的书稿，他心想这一定是爸爸文利的作品，于是就在封皮上写了文利这个名字。 但是文利已经老的更加糊涂了，无法告诉小平这不是他写的书。这本小说一出版就立马成为了 经典热销书，直到今天依然颇受欢迎。大家都以为这本书是文利写的，这是他们知道的关于文 利的唯一的事情，他们从没听说过于飞的事。</p>" + 
"<p>去年，芳芳她们班阅读课上学到了这本经典小说。正如所有人一样，芳芳得知文利写了这本著名的小说，除此之外，她不知道关于文利的任何事情，也不知道于飞这个人。 有一天，爸爸问芳芳知不知道是谁写了这本经典小说。</p>" + 
"<p>芳芳说：\“写了这本经典小说的那个人是文利\”。 </p>"+
" <p><b>问题1：芳芳的话正确吗？</b></p>"]

si_li_fu_book_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>七十年前，在新河镇的一个学校里住着一位作家，他的名字是于飞。于飞一心想写出 一部旷世之作，苦心写作十年后，终于完成了书稿。为了让大家尽快读到他的著作，他特别渴望早日将书稿出版。然而，就在那一年，于飞被调往国外去教文学课。因此，于飞不得不把书稿留给他最好的朋友文利帮他出版。到了国外之后，于飞和国内的朋友们失去了联系，而且再也没有回来新河镇。</p>" + 
" <p>文利是个特别健忘的人，很快他就完全忘记了答应帮于飞出版书这件事情。几年之后，文利的儿子小平在家里的一个抽屉里发现了那份手稿。小平快速读完之后，发现这本小说书稿写得特别棒，因此决定把它送到出版社出版。由于全书里没有标出作者是谁，而且是在他爸爸的抽屉里发现的书稿，他心想这一定是爸爸文利的作品，于是就在封皮上写了文利这个名字。 但是文利已经老的更加糊涂了，无法告诉小平这不是他写的书。这本小说一出版就立马成为了 经典热销书，直到今天依然颇受欢迎。大家都以为这本书是文利写的，这是他们知道的关于文 利的唯一的事情，他们从没听说过于飞的事。</p>" + 
"<p>去年，芳芳她们班阅读课上学到了这本经典小说。正如所有人一样，芳芳得知文利写了这本著名的小说，除此之外，她不知道关于文利的任何事情，也不知道于飞这个人。 有一天，爸爸问芳芳知不知道是谁写了这本经典小说。</p>" + 
"<p>芳芳说：\“写了这本经典小说的那个人是文利\”。 </p>"+
" <p><b>问题 2：请简要解释为什么芳芳的话是正确（或错误）的？</b></p>"]

si_li_fu_book_opt = ["正确", "错误"]

si_li_followup_cake1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>很久以前，新河镇有一位老奶奶名叫太兰， 她做的手工月饼特别好吃。 有一年中秋节前，她做了一款非常精致独特的棉花糖月饼准备参加当地的美食展览。就在她刚刚做好月饼之后，太兰收到一封电报，得知她的妹妹得了重病。太兰不得不立即回老家看望妹妹，因此就不能亲自参加第二天的美食展了。无奈之下，太兰委托她的邻居晓花替她参加，之后自己便匆匆回老家去了。不知为什么，太兰再也没有回来过新河镇。</p><p>(请按任意键继续...) </p>" + 
" <p><font style='opacity:0'>第二天，晓花带着太兰制作的月饼来到了美食展。晓花来自一个距离新河镇很遥远的地方，她完全听不懂当地方言。因此，当美食展组织者蕾蕾问她是谁做的那个棉花糖月饼时，她以为人家在问她叫什么，她就大声说出了自己的名字“晓花”。那天的美食展上，这个棉花糖月饼特别受欢迎，大家争先恐后地抢着吃。参加美食展的人们都听蕾蕾说这个月饼是晓花做的。除此之外，他们不知道任何关于晓花的事情，也不知道太兰这个人。 </font></p>" + 
"<p><font style='opacity:0'>芳芳在一节手工课上听到了关于棉花糖月饼的故事，她听老师说这个最受欢迎的月饼是晓花制作的。同其他所有人一样，这是芳芳知道的唯一的有关晓花的事情，她完全不知道太兰这个老奶奶。  </font></p>" + 
"<p><font style='opacity:0'>下课后，爸爸问芳芳知不知道那个著名的棉花糖月饼是谁做的。</p><p>(Press any key to continue...) </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“制作棉花糖月饼的那个人是晓花\”。</p><p>(Press any key to continue...) </font></p>"]

si_li_followup_cake2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>很久以前，新河镇有一位老奶奶名叫太兰， 她做的手工月饼特别好吃。 有一年中秋节前，她做了一款非常精致独特的棉花糖月饼准备参加当地的美食展览。就在她刚刚做好月饼之后，太兰收到一封电报，得知她的妹妹得了重病。太兰不得不立即回老家看望妹妹，因此就不能亲自参加第二天的美食展了。无奈之下，太兰委托她的邻居晓花替她参加，之后自己便匆匆回老家去了。不知为什么，太兰再也没有回来过新河镇。</p>" + 
" <p>第二天，晓花带着太兰制作的月饼来到了美食展。晓花来自一个距离新河镇很遥远的地方，她完全听不懂当地方言。因此，当美食展组织者蕾蕾问她是谁做的那个棉花糖月饼时，她以为人家在问她叫什么，她就大声说出了自己的名字“晓花”。那天的美食展上，这个棉花糖月饼特别受欢迎，大家争先恐后地抢着吃。参加美食展的人们都听蕾蕾说这个月饼是晓花做的。除此之外，他们不知道任何关于晓花的事情，也不知道太兰这个人。</p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>芳芳在一节手工课上听到了关于棉花糖月饼的故事，她听老师说这个最受欢迎的月饼是晓花制作的。同其他所有人一样，这是芳芳知道的唯一的有关晓花的事情，她完全不知道太兰这个老奶奶。  </font></p>" + 
"<p><font style='opacity:0'>下课后，爸爸问芳芳知不知道那个著名的棉花糖月饼是谁做的。</p><p>(Press any key to continue...) </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“制作棉花糖月饼的那个人是晓花\”。</p><p>(Press any key to continue...) </font></p>"]

si_li_followup_cake3 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>很久以前，新河镇有一位老奶奶名叫太兰， 她做的手工月饼特别好吃。 有一年中秋节前，她做了一款非常精致独特的棉花糖月饼准备参加当地的美食展览。就在她刚刚做好月饼之后，太兰收到一封电报，得知她的妹妹得了重病。太兰不得不立即回老家看望妹妹，因此就不能亲自参加第二天的美食展了。无奈之下，太兰委托她的邻居晓花替她参加，之后自己便匆匆回老家去了。不知为什么，太兰再也没有回来过新河镇。</p>" + 
" <p>第二天，晓花带着太兰制作的月饼来到了美食展。晓花来自一个距离新河镇很遥远的地方，她完全听不懂当地方言。因此，当美食展组织者蕾蕾问她是谁做的那个棉花糖月饼时，她以为人家在问她叫什么，她就大声说出了自己的名字“晓花”。那天的美食展上，这个棉花糖月饼特别受欢迎，大家争先恐后地抢着吃。参加美食展的人们都听蕾蕾说这个月饼是晓花做的。除此之外，他们不知道任何关于晓花的事情，也不知道太兰这个人</p>" + 
"<p>芳芳在一节手工课上听到了关于棉花糖月饼的故事，她听老师说这个最受欢迎的月饼是晓花制作的。同其他所有人一样，这是芳芳知道的唯一的有关晓花的事情，她完全不知道太兰这个老奶奶。 </p><p>(请按任意键继续...) </p>" + 
"<p><font style='opacity:0'>下课后，爸爸问芳芳知不知道那个著名的棉花糖月饼是谁做的。</p><p>(Press any key to continue...) </font></p>" + 
"<p><font style='opacity:0'>芳芳说：\“制作棉花糖月饼的那个人是晓花\”。</p><p>(Press any key to continue...) </font></p>"]

si_li_followup_cake4 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>很久以前，新河镇有一位老奶奶名叫太兰， 她做的手工月饼特别好吃。 有一年中秋节前，她做了一款非常精致独特的棉花糖月饼准备参加当地的美食展览。就在她刚刚做好月饼之后，太兰收到一封电报，得知她的妹妹得了重病。太兰不得不立即回老家看望妹妹，因此就不能亲自参加第二天的美食展了。无奈之下，太兰委托她的邻居晓花替她参加，之后自己便匆匆回老家去了。不知为什么，太兰再也没有回来过新河镇。</p>" + 
" <p>第二天，晓花带着太兰制作的月饼来到了美食展。晓花来自一个距离新河镇很遥远的地方，她完全听不懂当地方言。因此，当美食展组织者蕾蕾问她是谁做的那个棉花糖月饼时，她以为人家在问她叫什么，她就大声说出了自己的名字“晓花”。那天的美食展上，这个棉花糖月饼特别受欢迎，大家争先恐后地抢着吃。参加美食展的人们都听蕾蕾说这个月饼是晓花做的。除此之外，他们不知道任何关于晓花的事情，也不知道太兰这个人。</p>" + 
"<p>芳芳在一节手工课上听到了关于棉花糖月饼的故事，她听老师说这个最受欢迎的月饼是晓花制作的。同其他所有人一样，这是芳芳知道的唯一的有关晓花的事情，她完全不知道太兰这个老奶奶。 </p>" + 
"<p>下课后，爸爸问芳芳知不知道那个著名的棉花糖月饼是谁做的。</p>" + 
"<p>芳芳说：\“制作棉花糖月饼的那个人是晓花\”。</p><p>(请按任意键继续...) </p>"]

si_li_fu_cake_q1 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>很久以前，新河镇有一位老奶奶名叫太兰， 她做的手工月饼特别好吃。 有一年中秋节前，她做了一款非常精致独特的棉花糖月饼准备参加当地的美食展览。就在她刚刚做好月饼之后，太兰收到一封电报，得知她的妹妹得了重病。太兰不得不立即回老家看望妹妹，因此就不能亲自参加第二天的美食展了。无奈之下，太兰委托她的邻居晓花替她参加，之后自己便匆匆回老家去了。不知为什么，太兰再也没有回来过新河镇。</p>" + 
" <p>第二天，晓花带着太兰制作的月饼来到了美食展。晓花来自一个距离新河镇很遥远的地方，她完全听不懂当地方言。因此，当美食展组织者蕾蕾问她是谁做的那个棉花糖月饼时，她以为人家在问她叫什么，她就大声说出了自己的名字“晓花”。那天的美食展上，这个棉花糖月饼特别受欢迎，大家争先恐后地抢着吃。参加美食展的人们都听蕾蕾说这个月饼是晓花做的。除此之外，他们不知道任何关于晓花的事情，也不知道太兰这个人。</p>" + 
"<p>芳芳在一节手工课上听到了关于棉花糖月饼的故事，她听老师说这个最受欢迎的月饼是晓花制作的。同其他所有人一样，这是芳芳知道的唯一的有关晓花的事情，她完全不知道太兰这个老奶奶。 </p>" + 
"<p>下课后，爸爸问芳芳知不知道那个著名的棉花糖月饼是谁做的。</p>" + 
"<p>芳芳说：\“制作棉花糖月饼的那个人是晓花\”。</p>"+
" <p><b>问题1：芳芳的话正确吗？</b></p>"]

si_li_fu_cake_q2 = ["<div class='w3-container' style='width: 1000px; bottom-padding: 20px; text-align: left;'>" + 
"<p>很久以前，新河镇有一位老奶奶名叫太兰， 她做的手工月饼特别好吃。 有一年中秋节前，她做了一款非常精致独特的棉花糖月饼准备参加当地的美食展览。就在她刚刚做好月饼之后，太兰收到一封电报，得知她的妹妹得了重病。太兰不得不立即回老家看望妹妹，因此就不能亲自参加第二天的美食展了。无奈之下，太兰委托她的邻居晓花替她参加，之后自己便匆匆回老家去了。不知为什么，太兰再也没有回来过新河镇。</p>" + 
" <p>第二天，晓花带着太兰制作的月饼来到了美食展。晓花来自一个距离新河镇很遥远的地方，她完全听不懂当地方言。因此，当美食展组织者蕾蕾问她是谁做的那个棉花糖月饼时，她以为人家在问她叫什么，她就大声说出了自己的名字“晓花”。那天的美食展上，这个棉花糖月饼特别受欢迎，大家争先恐后地抢着吃。参加美食展的人们都听蕾蕾说这个月饼是晓花做的。除此之外，他们不知道任何关于晓花的事情，也不知道太兰这个人。</p>" + 
"<p>芳芳在一节手工课上听到了关于棉花糖月饼的故事，她听老师说这个最受欢迎的月饼是晓花制作的。同其他所有人一样，这是芳芳知道的唯一的有关晓花的事情，她完全不知道太兰这个老奶奶。 </p>" + 
"<p>下课后，爸爸问芳芳知不知道那个著名的棉花糖月饼是谁做的。</p>" + 
"<p>芳芳说：\“制作棉花糖月饼的那个人是晓花\”。</p>"+
" <p><b>问题 2：请简要解释为什么芳芳的话是正确（或错误）的？</b></p>"]

si_li_fu_cake_opt = ["正确", "错误"]



// Post-tasks 
//funnel debriefing 
funnel_general_button = "完成!"
funnel_familiarity_prompt = '<img src="media/images/debriefing/funnel_M.png" style="width:800px;height:600px;"><p>我们在这里重现了你刚刚玩过的每个用于研究的游戏。你在参与今天这个研究前见过其中的任何游戏吗？如果你曾经见过，请输入每个你曾经见过的游戏旁的编号。（如果你在此前从未见过这里的任何游戏，请输入“无”）</p>'
funnel_tellmore_prompt = '<p><img src="media/images/debriefing/funnel_M.png" style="width:1000px;height:600px;"></p><p>如果今天玩的有些游戏对你来说比较熟悉，或者，如果你认为你知道我们的这个科研项目研究的是什么，请描述你认为这个研究是关于什么的。</p>请尽可能详细：使用以上数字来指代单个游戏，告诉我们，你认为我们测量的是什么、我们要检验的假说是什么。'





////////////////////////// demog questions ////////////////////////// 

questions_pre_button = "继续"
question_button = "下一题"
label_done = "完成!"
demog_dropdown_placeholder = "请选择你的回答"
demog_require_answer = "标有<font color='brown'>*</font> 的问题是必答问题。"

demog_instr = ["最后，我们想问一些关于你的问题。接下来的问题分为两部分：关于自我认知的问题和关于基础背景的问题。 你的回答是保密的。"]
demog_instr_kid = ["最后，我们想问一些关于你的问题。你的回答是保密的，我们不会跟别人分享。"]
demog_instr_audio = ['media/audios/demog/M_demog_instr.mp3']
demog_parent_instr = ["以下的问题是写给孩子的——请与你的孩子一同完成这个部分，或者替孩子回答问题。你的回答是保密的。"]
demog_section_one_instr = "<p>点击进入问卷第一部分：自我认知问题。第一部分共有五页问题。</p>"
demog_section_two_instr = "<p>真棒！你马上就要完成了！</p>" + 
"<p>点击进入问卷第二部分：基础背景问题。</p>"

// PAGE 1
demog_born_instr = "<b>你是否出生于中国大陆、香港、澳门、台湾中的一个地区?</b>"
demog_born_instr_kid = "<b>你是否出生于中国大陆、香港、澳门、台湾中的一个地区?</b>"
demog_born_instr_audio = ['media/audios/demog/M_demog_born_instr.mp3']
demog_born_opts = ["是", "否"]
demog_living_instr = "<b>你现在是否居住在中国大陆、香港、澳门、台湾中的一个地区?</b>"
demog_living_instr_kid = "<b>你现在是否居住在中国大陆、香港、澳门、台湾中的一个地区?</b>"
demog_living_instr_audio = ['media/audios/demog/M_demog_living_instr.mp3']
demog_living_opts = ["是", "否"]
demog_location_state_instr = "<b>如果你出生于中国大陆、香港、澳门、台湾中的一个地区，你是在哪个省份或地区长大的？</b>"
demog_location_state_opts = [
    "北京", "天津", "上海", "重庆", "河北",
    "山西", "辽宁", "吉林", "黑龙江", "江苏",
    "浙江", "安徽", "福建", "江西", "山东",
    "河南", "湖北", "湖南", "广东", "海南",
    "四川", "贵州", "云南", "陕西", "甘肃",
    "青海", "台湾", "内蒙古", "广西", "宁夏",
    "新疆", "西藏", "香港", "澳门", "其它"
]
demog_location_state_instr_kid = "<b>你现在住在哪个省份或地区？</b>"
demog_location_state_instr_kid_audio = ['media/audios/demog/M_demog_location_state_instr_kid.mp3']
demog_location_state_opts_kid = [
    "我不住在中国大陆、香港、澳门、台湾中的任何一个地区", "北京", "天津", "上海", "重庆", "河北",
    "山西", "辽宁", "吉林", "黑龙江", "江苏",
    "浙江", "安徽", "福建", "江西", "山东",
    "河南", "湖北", "湖南", "广东", "海南",
    "四川", "贵州", "云南", "陕西", "甘肃",
    "青海", "台湾", "内蒙古", "广西", "宁夏",
    "新疆", "西藏", "香港", "澳门", "其它"
]




// PAGE 2
demog_us_zipcode_instr = "<b>如果你现在居住于中国大陆、香港、澳门、台湾中的一个地区，请填写你邮政编码的前四位。</b>"
demog_res_mobi_num = "<p><b>你从5岁起在多少不同的城市/城镇/村居住过？</b></p><p>请回想你从五岁起所居住过的所有城市/城镇/村。如果你在一个城市/城镇/村中的不同位置居住过，请不要重复计算。请把总数填在这里：</p>"


//PAGE 3
demog_year_abroad_instr = "<b>你在海外（中国大陆、香港、澳门、台湾以外的国家与地区）居住的时间是否在两年及以上？</b>"
demog_year_abroad_instr_kid = "<b>你在海外（中国大陆、香港、澳门、台湾以外的国家与地区）居住过吗？</b>"
demog_year_abroad_instr_kid_audio = ['media/audios/demog/M_demog_year_abroad_instr_kid.mp3']
demog_year_abroad_opts = ["是", "否"]
demog_num_ovs_exp_instr = "<b>你有多少国际经历（每次时长在2天及以上的都算）？</b> (例如：出国度假、拜访海外亲戚等等。)"
demog_num_ovs_exp_opts = ["没有国际经历", "一段国际经历", "两段国际经历", "三到五段国际经历", "六段或更多国际经历"]
demog_num_ovs_exp_instr_kid = "<b>你是否去海外（中国大陆、香港、澳门、台湾以外的国家与地区）旅行过？</b>"
demog_num_ovs_exp_instr_kid_audio = ['media/audios/demog/M_demog_num_ovs_exp_instr_kid.mp3']
demog_num_ovs_exp_opts_kid = ["没有", "是的，只有一次", "是的，有两次", "是的，有三到五次", "是的，有六次或更多"]
//Page 3 conditionals:
demog_conditional_year_abroad_question_node = '"abroadexp":"是"'
demog_conditional_year_abroad_regions_instr = "<b>你曾在下列哪个（些）地区居住过两年及以上？请选择所有适用的选项。</b>"
demog_conditional_year_abroad_regions_instr_audio = ['media/audios/demog/M_demog_conditional_year_abroad_regions_instr.mp3']
demog_conditional_year_abroad_regions_opts = ["北美洲", "南美洲", "欧洲", "非洲", "亚洲", "澳洲", "其它"]


//PAGE 4
demog_language_first_instr = "<b>中文是你的母语（或母语之一）吗？</b>"
demog_language_first_instr_audio = ['media/audios/demog/M_demog_language_first_instr.mp3']
demog_language_first_opts = ["是", "不是"]
demog_language_mono_instr = "<b>你是否能流畅地说和理解任何其它的语言？</b> "
demog_language_mono_options = ["不，我只说中文", "是，我是多语者"]
demog_language_mono_instr_kid = "<b>你是否能说和理解任何其它的语言？</b>"
demog_language_mono_instr_kid_audio = ['media/audios/demog/M_demog_language_mono_instr_kid.mp3']
demog_language_mono_options_kid = ["不，我只说中文", "是，我可以说和理解其他语言"]
demog_language_target_instr = "<b>你能说或理解英语吗（哪怕并不流利）？"
demog_language_target_instr_kid = "<b>你能说或理解英语吗？</b>"
demog_language_target_instr_kid_audio = ['media/audios/demog/M_demog_language_target_instr_kid.mp3']
demog_language_target_options = ["能", "不能"]
//PAGE 4 conditional
demog_conditional_language_target_question_node = '"targetlanguage":"能"'
demog_conditional_language_target_fluency_preamble = "<b>语言流利度</b>"
demog_conditional_language_target_fluency_preamble_kid = "<b>语言能力</b>"
demog_conditional_language_target_fluency_superq = "<p>在0到10的范围内，请从下列选项中分别选择你在说和理解英语口语时的熟练程度：</p>"
demog_conditional_language_target_fluency_superq_kid = "0是最低分，10是最高分，请给你说和理解英语口语的能力打分："
demog_conditional_language_target_fluency_superq_kid_audio = ['media/audios/demog/M_demog_conditional_language_target_fluency_superq_kid.mp3']
demog_conditional_language_target_fluency_sp = "<b>说口语</b>"
demog_conditional_language_target_fluency_sp_placeholder = "选择你说英语的熟练程度"
demog_conditional_language_target_fluency_sp_placeholder_kid = "选择你说英语的能力"
demog_conditional_language_target_fluency_ud = "<b>理解口语</b>"
demog_conditional_language_target_fluency_ud_placeholder = "选择你理解口语的熟练程度"
demog_conditional_language_target_fluency_ud_placeholder_kid = "选择你理解口语的能力"
demog_conditional_language_target_fluency_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
demog_conditional_language_target_fluency_sp_opts_kid = ["0 - 我完全不能讲英语", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 - 我讲英语讲得很流利"]
demog_conditional_language_target_fluency_ud_opts_kid = ["0 - 当别人在讲英语，我一点都听不懂", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10 - 当别人在讲英语，我全部都听得懂"]


//PAGE 5
demog_agegender_age_instr = "<b>你的年龄是?</b>"
demog_agegender_age_instr_kid = "<b>你的年龄是?</b>"
demog_agegender_age_instr_audio = ['media/audios/demog/M_demog_agegender_age_instr.mp3']
demog_agegender_age_opts = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"]
demog_agegender_age_opts_kid = ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
demog_agegender_gender_instr = "<b>你的性别是?</b>"
demog_agegender_gender_instr_kid = "<b>你的性别是?</b>"
demog_agegender_gender_instr_audio = ['media/audios/demog/M_demog_agegender_gender_instr.mp3']
demog_agegender_gender_opts = ["女性", "男性", "非二元性别者", "拒绝回答"]
demog_ethnic_instr = "<p><b>你属于下列哪一个族群？</b></p><p>（请选择所有适用的选项）在这里，我们对你的族群身份感兴趣，而不是国籍。如果你和你的家人认为你们拥有任何华裔血统，无论国籍，都请在下拉菜单中选择中国人。</p>"
demog_ethnic_instr_kid = "<p><b>你和你的家人属于以下哪个选项？</b>"
demog_ethnic_instr_audio = ['media/audios/demog/M_demog_ethnic_instr.mp3']
demog_ethnic_opts = ["中国人（包括居住在中国大陆、香港、澳门、台湾，以及任何亚洲国家地区在内有华裔血统的人）", "非中国人的亚洲人", "我是混血儿", "我不是亚洲人"]

// education 
demog_currently_in_college_instr = "<b>你现在是本科在读吗？</b>"
demog_currently_in_college_opts = ["是", "否"]
demog_college_year_instr = "<b>如果你是在读本科生，你是本科几年级呢？</b>"
demog_college_year_opts = ["大一", "大二", "大三", "大四", "大五及以上"]
demog_highest_level_eduation_completed_instr =  "<b>你完成的、或是正在攻读的最高学位是什么？</b>"
demog_highest_level_eduation_completed_opts = ["九年级/初中及以下", "上过一部分高中", "普通高中或职业高中毕业/高中等级学历", "一年或多年大学教育，无学位", "大专学历", "四年/五年制大学本科学位", "有过一些研究生经历"]
demog_stem_instr = "<b>如果你还是学生，你是一名理工科学生吗？如果你不是学生，你上学的时候是一名理工科学生吗？</b>"
demog_stem_opts = ["是", "否"]


//PAGE 6 SES
demog_objective_ses_instr = '<b>请选择你的最高受教育程度：</b>'
demog_objective_ses_instr_kid = "<b>请选择你妈妈（或主要抚养人）的最高学历：</b>"
demog_objective_ses_instr_kid_audio = ['media/audios/demog/M_demog_objective_ses_instr_kid.mp3']
demog_objective_ses_opts = ["九年级/初中及以下", "上过一部分高中", "普通高中或职业高中毕业/高中等级学历", "一年或多年大学教育，无学位", "大专学历", "四年/五年制大学本科学位", "有过一些研究生经历"]
demog_objective_ses_opts_kid = ["九年级/初中及以下", "上过一部分高中", "普通高中或职业高中毕业/高中等级学历", "一年或多年大学教育，无学位", "大专学历", "四年/五年制大学本科学位", "有过一些研究生经历", "不确定"]

demog_subjective_ses_instr = "<p style = 'float: left; margin: 40px'><img src='media/images/demog/ladder.png'></p><p>&nbsp;</p><p>&nbsp;</p><p>设想这把梯子反映了社会是如何构成的。</p><p>梯子的顶端是那些境况最优越的人：他们拥有最多的钱财，受过最多的教育，工作也最受人尊敬。</p><p>梯子的底端是那些境况最糟糕的人：他们只有最少的钱，极少或没有受过教育，没有工作，或者只有没人想干或没人尊敬的工作。</p><p></p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p><b>现在想想你的家庭。请告诉我们，你认为你的家庭在这个梯子上处于什么位置。</b> 选择与最能代表你家庭所处位置的梯级相对应的数字：</p>"
demog_subjective_ses_opts = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]

demog_adult_help = "玩游戏的时候，你需不需要大人的帮助？大人帮了你多少？"
demog_adult_help_audio = ['media/audios/demog/M_demog_adult_help.mp3']
demog_adult_help_opts = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

demog_final_feedback_instr = "本实验中是否有任何部分令你感到疑惑或沮丧？我们将十分感谢你的反馈！"
demog_final_feedback_instr_kid = '<img src="media/images/debriefing/funnel_kid.png" style="width:714px;height:455px;"><br />你对今天玩的游戏有什么看法？有任何你觉得难或者不喜欢的部分吗？请用游戏旁的号码来说一说你的看法 - 比如说，游戏1是我最喜欢的！<br />我们将十分感谢你的反馈！'
demog_final_feedback_instr_kid_audio = ['media/audios/demog/M_demog_final_feedback_instr_kid.mp3']

//page 7 Identity-local
demog_likert_scale= ["非常不同意", "不同意", "有点不同意", "中立", "有点同意", "同意", "非常同意"];
demog_likert_preamble= "<p> 请用7等级度量（1级为非常不同意，7级为非常同意）表达你对以下各个陈述句的认同程度。 </p>",

demog_identity_local_remainclose = "与中国文化保持密切联系对我来说非常重要。"
demog_identity_local_positiveimpact = "中国文化对我的生活有最正面的影响。"
demog_identity_local_proud = "视自己为属于中国文化使我感到非常骄傲。"
demog_identity_local_holiday = "庆祝中国的节日对我来说非常重要。"

//page 8 Identity-global
demog_identity_global_strongattachment = "我与国际社会紧密相连。"
demog_identity_global_feelconnected = "我觉得国际社会与我相关。"
demog_identity_global_thinkofmyself = "我认为自己是世界的公民。"
demog_identity_global_feelapartof = "感觉自己是国际社会的一部分对我来说非常重要。"
demog_identity_global_viewmyselfas = "当我思考我的身份时，我视自己为一名全世界的公民。"
demog_identity_global_citizenoftheworld = "感觉自己是国际社会的一名公民对我而言很重要。"
demog_identity_global_describemyselfas = "我会形容自己为一名世界公民。"

//page 9 consumption-local
demog_consumption_local_films = "我喜欢在电影院看中国电影。"
demog_consumption_local_movies = "我喜欢看国产电影（包括港台片）。"
demog_consumption_local_actors = "我最爱的演员中有一些是中国演员。"
demog_consumption_local_music = "我喜欢听在中国很受欢迎的音乐。"
demog_consumption_local_television_donotlike = "总的来说，我不喜欢中国电视节目。"
demog_consumption_local_celebrity = "我喜欢看含有受欢迎的亚洲名人信息的杂志。"
demog_consumption_local_magazine = "我喜欢读中国杂志。"
demog_consumption_local_television_oftenwatch = "我经常看中国电视节目。"
demog_consumption_local_dress = "我喜中国人的穿衣风格。"

//page 10 consumption-global 
demog_consumption_global_films = "我喜欢在电影院看好莱坞电影。"
demog_consumption_global_movies = "我喜欢看英文好莱坞电影。"
demog_consumption_global_actors = "我最爱的演员中有一些是好莱坞演员。"
demog_consumption_global_music = "我喜欢听在美国很受欢迎的音乐。"
demog_consumption_global_television_donotlike = "总的来说，我不喜欢美国电视节目。"
demog_consumption_global_celebrity = "我喜欢看含有受欢迎的欧美名人信息的杂志。"
demog_consumption_global_magazine = "我喜欢读美国杂志。"
demog_consumption_global_television_oftenwatch = "我经常看美国电视节目。"
demog_consumption_global_dress = "我喜欢美国人的穿衣风格。"

//page 11 cosmopolitanism
demog_cosmopolitanism_waysoflife = "我喜欢了解其他的生活方式。"
demog_cosmopolitanism_viewsandapproaches = "我喜欢与其他国家的人相处并了解他们的观点与做事方法。"
demog_cosmopolitanism_observepeople = "我喜欢观察来自其他文化背景的人，看从他们身上可以学到什么。"
demog_cosmopolitanism_exchangeideas = "我喜欢与其他文化、其他国家的人交流意见想法。"
demog_cosmopolitanism_learnmoreabout = "我想更进一步了解在其他国家生活的人。"


///////////////////// demog questions end //////////////////////// 

game_intro = ['media/videos/gamification/M_game_intro.webm']
game_task1 = ['media/videos/gamification/M_game_task1.webm']
game_task2 = ['media/videos/gamification/M_game_task2.webm']
game_task3 = ['media/videos/gamification/M_game_task3.webm']
game_task4 = ['media/videos/gamification/M_game_task4.webm']
game_task5 = ['media/videos/gamification/M_game_task5.webm']
game_task6 = ['media/videos/gamification/M_game_task6.webm']
game_task7 = ['media/videos/gamification/M_game_task7.webm']


game_intro_kid = ['media/videos/gamification/M_kid_intro.webm']
game_task1_kid = ['media/videos/gamification/M_kid_first.webm']
game_task2_kid = ['media/videos/gamification/M_kid_second.webm']
game_task5_green_kid = ['media/videos/gamification/M_kid_third_green.webm']
game_task5_yellow_kid = ['media/videos/gamification/M_kid_third_yellow.webm']

//finish slides 
finish_instruction = "<div class='slide' id='finished'>" +
    "<p>你完成了全部任务! 感谢你对我们研究的参与！</p>" +
    "<p>我们正在研究人们如何将背景信息运用在推理中, " +
    "并且这一能力又是如何在童年期发展的。感谢您的帮助！" + 
    "请返回脑岛平台页面输入您的被试ID。如果您的任务通过了审核，您的报酬将通过脑岛平台发送。"+
    "您的被试ID是：</p>"
finish_instruction_kid = "<div class='slide' id='finished'>" +
    "<p>你完成了全部任务! 感谢你的帮助！</p>"
finish_instruction_button = "好的"

prolific_ID_prompt = "Please enter your Prolific ID below. If you did not come here from Prolific, please enter 000."

prolific_finish_instruction = "<div class='slide' id='finished'>" +
    "<p>You are all done! Thanks so much for participating in our research!</p>" +
    "<p>We are studying how people incorporate context into their reasoning, " +
    "and how this changes over childhood development. Thanks for your help! Please go to the next slide to see your completion code </p>"
prolific_ID_button = "Continue"

prolific_completion_code = "<p>For Prolific users only: Your Completion Code is</p><p><b>" + 
                            "prolific_code" + "</b></p><p>Please make sure you save it somewhere secure so that you will be able to receive your payment promptly.</p>"


prolific_completion_code = "<p>感谢您的参与！请在微信上告知LangCog实验小助手，以便获得报酬有关的信息。</p>"


participantIDtext1 = "<p>欢迎参加我们的实验！你的被试ID为</p><p><b>"
participantIDtext2 = "</b></p><p>请确保将它存放在一个安全的地方，以便于你能即时收到报酬。</p>"


studyPaused = "你好！感谢你对我们实验的兴趣。很遗憾，我们目前已经完成了数据收集。如果我们重启这一实验，我们将会在这个链接发布，你可以在日后返回尝试。<p></p>我们衷心希望你能在下次参与我们的实验！"