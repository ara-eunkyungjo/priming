/**
 * adapted from: 
 * jspsych-html-keyboard-response
 * Josh de Leeuw
 *
 * plugin for displaying a stimulus and getting a keyboard response
 *
 * documentation: docs.jspsych.org
 *
 **/


 jsPsych.plugins["change-detection"] = (function() {

    var plugin = {};
  
    plugin.info = {
      name: 'html-keyboard-response',
      description: '',
      parameters: {
        stimulus: {
          type: jsPsych.plugins.parameterType.HTML_STRING,
          pretty_name: 'Stimulus',
          default: undefined,
          description: 'The HTML string to be displayed'
        },
        choices: {
          type: jsPsych.plugins.parameterType.KEYCODE,
          array: true,
          pretty_name: 'Choices',
          default: jsPsych.ALL_KEYS,
          description: 'The keys the subject is allowed to press to respond to the stimulus.'
        },
        prompt: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: 'Prompt',
          default: null,
          description: 'Any content here will be displayed below the stimulus.'
        },
        stimulus_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus duration',
          default: null,
          description: 'How long to hide the stimulus.'
        },
        trial_duration: {
          type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Trial duration',
          default: null,
          description: 'How long to show trial before it ends.'
        },
        response_ends_trial: {
          type: jsPsych.plugins.parameterType.BOOL,
          pretty_name: 'Response ends trial',
          default: true,
          description: 'If true, trial will end when subject makes a response.'
        },
        first_stimulus: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'first_stimulus',
            default: undefined,
            description: 'The HTML string to be displayed'

        }, 
        second_stimulus: {
            type: jsPsych.plugins.parameterType.HTML_STRING,
            pretty_name: 'second_stimulus',
            default: undefined,
            description: 'The HTML string to be displayed'
        }, 
        stimulus_interval:{
            type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus interval duration',
          default: null,
          description: 'the duration of the stimulus interval'

        },
        stimulus_presentation:{
            type: jsPsych.plugins.parameterType.INT,
          pretty_name: 'Stimulus presentation duration',
          default: null,
          description: 'the duration of how long to present the stimuli'

        }
  
      }
    }
  
    plugin.trial = function(display_element, trial) {
  
      
      
        var start_time = performance.now()
      
      
      
      
        var trial_end = false 
        
    
        var new_html = '<div id="jspsych-html-keyboard-response-stimulus">'+ trial.prompt  + trial.first_stimulus+'</div>';
        var first_stimulus_html = '<div id="jspsych-html-keyboard-response-stimulus">' + trial.prompt +  trial.first_stimulus + '</div>';
        var second_stimulus_html =   '<div id="jspsych-html-keyboard-response-stimulus">'+ trial.prompt  +  trial.second_stimulus +'</div>';
        var interval_html = '<div id="jspsych-html-keyboard-response-stimulus">'+ trial.prompt  +  '<img src="media/images/change_detection/blank.png" style="width:800px;height:600px;">' +'</div>';

        display_element.innerHTML = first_stimulus_html;


        
        function looper(display_html, interval, stimulus_displayed){
            // If interval is undefined, we set the value to 2000 (initial)
            // Otherwise, we use the value passed in
            interval = interval === undefined ? trial.stimulus_presentation : interval;
        
            // If url is present, we switch the image source
            if (display_html) {
                display_element.innerHTML = display_html;
            } else {
                // Default, to keep things tidy.
                display_html = first_stimulus_html
            }
        
            // Timer logic to handle the next iteration
            setTimeout(function() {
                if (display_html === first_stimulus_html){
                    looper(interval_html, trial.stimulus_interval, 1);
                }else if (display_html == interval_html){
                    if (stimulus_displayed == 1){
                        looper(second_stimulus_html, trial.stimulus_presentation, 2);
                    }else{
                        looper(first_stimulus_html, trial.stimulus_presentation, 1);
                    }
                }else{

                    looper(interval_html, trial.stimulus_interval, 2);
                }

            }, interval);
        }
        
        // Kick off the timer!
        looper();


      // add prompt
      if(trial.prompt !== null){
        new_html += trial.prompt;
      }
  
      
  
      // store response
      var response = {
        rt: null,
        key: null
      };
  
      // function to end trial when it is time
      var end_trial = function() {
  
        // kill any remaining setTimeout handlers
        jsPsych.pluginAPI.clearAllTimeouts();
  
        // kill keyboard listeners
        if (typeof keyboardListener !== 'undefined') {
          jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
        }
  
        // gather the data to store for the trial
        var trial_data = {
          "rt": response.rt,
          "stimulus": trial.stimulus,
          "key_press": response.key
        };
  
        // clear the display
        display_element.innerHTML = '';
  
        // move on to the next trial
        jsPsych.finishTrial(trial_data);
      };
  
      // function to handle responses by the subject
      var after_response = function(info) {
  
        // after a valid response, the stimulus will have the CSS class 'responded'
        // which can be used to provide visual feedback that a response was recorded
        display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';
  
        // only record the first response
        if (response.key == null) {
          response = info;
        }
  
        if (trial.response_ends_trial) {
            display_element.innerHTML = '';
            first_stimulus_html = ""
            second_stimulus_html = ""
            interval_html = ""
                    end_trial();
        }
      };
  
      // start the response listener
      if (trial.choices != jsPsych.NO_KEYS) {
        var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
          callback_function: after_response,
          valid_responses: trial.choices,
          rt_method: 'performance',
          persist: false,
          allow_held_key: false
        });
      }
  
      // hide stimulus if stimulus_duration is set
      if (trial.stimulus_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.querySelector('#jspsych-html-keyboard-response-stimulus').style.visibility = 'hidden';
        }, trial.stimulus_duration);
      }
  
      // end trial if trial_duration is set
      if (trial.trial_duration !== null) {
        jsPsych.pluginAPI.setTimeout(function() {
          display_element.innerHTML = '';
            first_stimulus_html = ""
            second_stimulus_html = ""
            interval_html = ""
          end_trial();
        }, trial.trial_duration);
      }
  
    };
  
    return plugin;
  })();
  