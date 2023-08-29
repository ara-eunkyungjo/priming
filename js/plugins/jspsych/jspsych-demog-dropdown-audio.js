/**
 * jspsych-dropdown
 * A plugin displaying multiple-choice questions. Choices are shown in dropdowns,
 * using the Choices.js library. Supports selecting multiple choices for a question.
 * Based on jspsych-survey-multi-choice:
 * a jspsych plugin for multiple choice survey questions, by Shane Martin
 */

jsPsych.plugins['demog-dropdown-audio'] = (function () {
	var plugin = {};

	plugin.info = {
		name: 'demog-dropdown-audio',
		description: '',
		parameters: {
			preamble: {
				type: jsPsych.plugins.parameterType.STRING,
				description: 'Introductory text to display above all questions.',
				default: ''
			},
			superq: {
				type: jsPsych.plugins.parameterType.STRING,
				description: 'A group name for the questions'
			},
			superaudio: {
				type: jsPsych.plugins.parameterType.AUDIO,
				description: 'The audio to be played alongside the group question',
				default: ''
			},
            button_label: {
                type: jsPsych.plugins.parameterType.STRING,
				description: 'label displayed on the button'
            },
			questions: {
				type: jsPsych.plugins.parameterType.COMPLEX,
				array: true,
				nested: {
					text: {
						type: jsPsych.plugins.parameterType.STRING,
						description: 'Question text'
					},
					allowMultipleSelections: {
						type: jsPsych.plugins.parameterType.BOOL,
						description: 'Whether to allow multiple choices to be selected',
						default: false
					},
					required: {
						type: jsPsych.plugins.parameterType.BOOL,
						description: 'Whether an option must be selected for the question',
						default: false
					},
					options: {
						type: jsPsych.plugins.parameterType.STRING,
						array: true,
						description: 'An array of possible choices'
					},
					placeholder: {
						type: jsPsych.plugins.parameterType.STRING,
						description: 'Optional text to use as a placeholder'
					},
					audio: {
						type: jsPsych.plugins.parameterType.AUDIO,
						description: 'The audio to be played alongside visual instructions',
						default: ''
					}
				}
			}
		}
	}
	plugin.trial = function (display_element, trial) {
		var all_choice_objects = [];
		var plugin_id_name = "jspsych-dropdown";
		var _join = function (/*args*/) {
			var arr = Array.prototype.slice.call(arguments, _join.length);
			return arr.join(separator = '-');
		}

		// trial defaults
		trial.preamble = typeof trial.preamble == 'undefined' ? '' : trial.preamble;
		trial.superq = typeof trial.superq == 'undefined' ? '' : trial.superq;
		trial.questions.forEach(function (question) {
			question.required = question.required === true;
			question.allowMultipleSelections = question.allowMultipleSelections === true;
		});

		// form element
		var trial_form_id = _join(plugin_id_name, "form");
		display_element.innerHTML += '<form id="' + trial_form_id + '"></form>';
		var trial_form = display_element.querySelector("#" + trial_form_id);
		// show preamble text
		var preamble_id_name = _join(plugin_id_name, 'preamble');
		trial_form.innerHTML += '<div id="' + preamble_id_name + '" class="' + preamble_id_name + '">' + trial.preamble + '</div>';

		// show superq text
		if (trial.superq) {
			var superq_id_name = _join(plugin_id_name, 'superq');
			trial_form.innerHTML += '<div id="' + superq_id_name + '" class="' + preamble_id_name + '">' + trial.superq;
			if (trial.superaudio) {
				trial_form.innerHTML += '   <img role="button" src="media/images/demog/audio.png" style="height:20px; width:20px" class="AR" onclick="playAudio(\'' + trial.superaudio + '\')"/>'
			}
			trial_form.innerHTML += '</div>';
		}

		// helper functions for using the Choices library
		function buildQuestionChoicesId(questionIdx) {
			return _join(plugin_id_name, questionIdx, 'choices');
		}
	
		// NOTE: this commented-out section attempted to stop audio files when overlapping, but doesn't work
		//
		// $('.AR')
		// 	.each(function() {
		// 		/*
		// 		For each .AR element, preload and instantiate
		// 		an audio object. Associate the audio instance
		// 		with this element (via "audio-object" data key)
		// 		*/
		// 		$(this).data('audio-object', new Audio());
			
		// 	})
		// 	.on('click', function () {			
		// 		/*
		// 		When .AR element is clicked, iterate all .AR
		// 		elements, and pause/reset the associated audio 
		// 		instances (if audio has src attribute).
		// 		This has the effect of "stopping all audio" for
		// 		.AR elements on the page
		// 		*/
		// 		$('.AR').each(function() {
		// 			var audio = $(this).data('audio-object');
	
		// 			if(audio.src) {
		// 				audio.pause();
		// 				audio.currentTime = 0;
		// 			}
		// 		});
			
		// 		/*
		// 		Now that all audio objects for .AR elements 
		// 		have stopped playing, start playing the actual
		// 		audio object for the .AR element that was clicked.
	
		// 		If the audio object has no src attribute, assign
		// 		to load this audio object instance.
				
		// 		*/
		// 		var clickedAudio = $(this).data('audio-object');
		// 		alert("hello");
	
		// 		if(!clickedAudio.src) {
		// 			clickedAudio.src = $(this).data('audio');
		// 		}
	
		// 		clickedAudio.play();
		// });

		function initChoicesForQuestion(questionIdx) {
			var question = trial.questions[questionIdx];
			var question_choices_selector = '#' + buildQuestionChoicesId(questionIdx);
			var choicesConfig = {
				shouldSort: false, // disable alphabetic sort, options should remain in the same order as in the trial parameter
				choices: question.options.map(function (optionText) {
					return {
						label: optionText,
						value: optionText
					};
				})
			};
			if (question.allowMultipleSelections) {
				// add the placeholder for multiple selection questions in the Choices config
				// single-select questions are handled in the html directly because otherwise the answer is preselected
				choicesConfig.placeholder = true;
				choicesConfig.placeholderValue = question.placeholder || 'Select option';
			}
			var question_choices = new Choices(question_choices_selector, choicesConfig);
			all_choice_objects[questionIdx] = question_choices;
		}

		function playAudio(url) {
			new Audio(url).play();
		}
		window.playAudio = playAudio

		// add multiple-choice questions
		for (var i = 0; i < trial.questions.length; i++) {
			// create question container
			// ID of the html element that will contain all choices for the current question
			var choices_id = buildQuestionChoicesId(i);
			var question = trial.questions[i];
			var selectionType = question.allowMultipleSelections ? ' multiple' : '';
			var placeholderText = question.placeholder || 'Please choose an answer';
			var placeholderHtml;
			if (question.allowMultipleSelections) {
				// placeholders for multiple select questions are set in the Choices configuration
				placeholderHtml = '';
			} else {
				placeholderHtml = '<option selected disabled value="">' + placeholderText + '</option>';
			}
			var isRequired = question.required? ' required': '';
			var reqStar = question.required ? ' <font color="brown">*</font>' : '';
			var selectHtml = '<select id="' + choices_id + '" name="' + choices_id + '"' + selectionType + isRequired + '>' +
			placeholderHtml + '</select>';
			var audioHtml = question.audio ? '   <img role="button" src="media/images/demog/audio.png" style="height:25px; width:25px" class="AR" onclick="playAudio(\'' + question.audio + '\')"/>' : '';
			trial_form.innerHTML += '<div><p class="' + plugin_id_name + '-text dropdown">' + question.text + reqStar + audioHtml + '</p>' + selectHtml + '</div>';

			// wait until innerHTML is actually loaded into the DOM, only after that invoke Choices
			// otherwise Choices can't find the proper DOM elements by ID
			setTimeout(initChoicesForQuestion.bind(null, i));
		}
		// add submit button
		trial_form.innerHTML += '<p><input type="submit" id="' + plugin_id_name + '-next" class="' + plugin_id_name + ' jspsych-btn" value='+trial.button_label+'></input></p>';

		trial_form.addEventListener('submit', function (event) {
			event.preventDefault();
			// measure response time
			var endTime = (new Date()).getTime();
			var response_time = endTime - startTime;

			// create object to hold responses
			var question_data = {};
			for (var i = 0; i < all_choice_objects.length; i++) {
				var qid = "Q" + i;
				var aid = "A" + i;
				question_choices = all_choice_objects[i];
				question_data[qid] = trial.questions[i];
				// extract the selected value(s)
				question_data[aid] = question_choices.getValue(true);
			}

			var trial_data = {
				"rt": response_time,
				"preamble": trial.preamble,
				"superq": trial.superq,
				"rawResponses": question_data,
				"responses": JSON.stringify(question_data)
			};
			// next trial
			display_element.innerHTML = ''; // clear the screen
			jsPsych.finishTrial(trial_data);
		});

		var startTime = (new Date()).getTime();
	};

	return plugin;
})();