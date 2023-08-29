//TODO: alert needs to be variable in order for the language to work 


jsPsych.plugins['konva-draw-circle'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'konva-draw-circle',
    parameters: {
        
        canvas_width: {
            
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area width',
        default: .8*window.innerWidth, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
            
        },
        canvas_height:{
        
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Sort area height',
        default: .8*window.innerHeight, //550,
        description: 'The height of the container that subjects can move the stimuli in.'
  
        },
        prompt:{
        
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Provide a reminder about the action the subject is supposed to take.'
        
        },
        button_label:{
            
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to continue to the next trial.'
            
        }, 
        menu_label:{
          type: jsPsych.plugins.parameterType.COMPLEX,
          array: true,
          default: ["NO", "LABEL", "PRESENTED"], 
          description: "labels presented at the menu"
        }, 
        delete_label: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: "delete_button",
          default: "" , 
          description: "the delete button pressed presented at the menu"
        }, 
        label_filler_words: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: "label_filler_words",
          default: "" , 
          description: "the filler words when you label a circle."
        }, 
        small_circle_warning: {
          type: jsPsych.plugins.parameterType.STRING,
          pretty_name: "label_filler_words",
          default: "" , 
          description: "warning when users drew a circle too small."
        }

        
    }
  }

  plugin.trial = function(display_element, trial){
      
    var start_time = performance.now()
    var html = ""
    if (trial.prompt !== null){
        html += trial.prompt
    }
      
    html += '<select id="tool">' + 
      '<option value="circle">' + trial.menu_label[0] + '</option>' + 
      '<option value="line">' + trial.menu_label[1] + '</option>' +
        '<option value="label">' + trial.menu_label[2] + '</option>' + 
    '</select>'  
    
    html += '<body>' + 
        
    '<div id="stage-parent">'+
        
    '<div id="container1"></div>'+
        
    '<div id="menu">'+
    '<div>' + 
    '<button id="delete-button">' + trial.delete_label + '</button>'+
    '</div>'+
    '</div>'
      
  
    display_element.innerHTML = html
      
  
    display_element.innerHTML += '<p><button id="jspsych-draw-circles-done-btn" class="jspsych-btn">'+trial.button_label+'</button></p>';
      
// set up stage
      
    var stage = new Konva.Stage({container: 'container1', width: trial.canvas_width, height: trial.canvas_height});
    var layer = new Konva.Layer({draggable: false});
    stage.add(layer);
      
      
    //var layer = new Konva.Layer();
    //stage.add(layer);
      
    
    var r1 = new Konva.Rect({x: 0, y: 0, width: trial.canvas_width, height: trial.canvas_height, fill: 'white', stroke: "black"})    
    layer.add(r1)  
      
     //filler circle: 
    var r_filler = new Konva.Circle({x: 0, y: 0, radius: 0,stroke: 'gray', dash: [2,2], name:"filler"})  //, 
    var line_filler = new Konva.Line({points:[0, 0, 0, 0], strokeWidth:8, stroke: 'black', dash: [2,2], name:"filler_line"})  //, 

    var shapes = stage.find('Circle');
    r_filler.listening(false); // stop filler catching our mouse events.
    line_filler.listening(false)
    
    layer.add(r_filler)
    layer.add(line_filler)
      
    stage.draw()

    var posStart;
    var posNow;
    var isPaint = false;
    
    var mode = 'circle';
    var circle_mode = ""
    var dragging = ""
    var lastLine;
    var editing_text = false
      
    var drawingLine = false 
    var line 
    var circles = []
    var labels = []
      
      // helper function for drag and draw the circle 
     function startDrag(posIn){
        
       posStart = {x: posIn.x, y: posIn.y};
       posNow = {x: posIn.x, y: posIn.y};
        
       var shapes = stage.find('Circle');
       
     }
      
      function startDragLine(posIn){
          
        posStart = {x: posIn.x, y: posIn.y};
        posNow = {x: posIn.x, y: posIn.y};
        
        var shapes = stage.find('Line');
          
      }  
      
      
     function updateDrag(posIn){ 

      // update rubber circle position
       posNow = {x: posIn.x, y: posIn.y};
       var posRect = reverse(posStart,posNow);
       r_filler.x(posRect.x1);
       r_filler.y(posRect.y1);


       radius = Math.sqrt(Math.pow((posRect.x2 - posRect.x1), 2) + Math.pow((posRect.y2 - posRect.y1), 2))    
       r_filler.radius(radius);
       r_filler.visible(true);  
       //console.log(r_filler)
       layer.draw()
       stage.draw(); // redraw any changes.

     }
      
     function updateDragLine(posIn){
         
       console.log("dragging drawing line?")
       posNow = {x: posIn.x, y: posIn.y};
       var posRect = reverse(posStart,posNow);
       line_filler.x(posRect.x1);
       line_filler.y(posRect.y1);

       line_filler.visible(true);  
       console.log(line_filler)
       layer.draw()
       stage.draw(); // redraw any changes.
         
         
     }  
      
     // reverse co-ords if user drags left / up
    function reverse(r1, r2){
      var r1x = r1.x, r1y = r1.y, r2x = r2.x,  r2y = r2.y, d;
      if (r1x > r2x ){
        d = Math.abs(r1x - r2x);
        r1x = r2x; 
        r2x = r1x + d;
      }
      if (r1y > r2y ){
        d = Math.abs(r1y - r2y);
        r1y = r2y; r2y = r1y + d;
      }
        return ({x1: r1x, y1: r1y, x2: r2x, y2: r2y}); // return the corrected rect.     
    }
      
      
      
   
      
      

     stage.on('mousedown touchstart', function (e) {
       
        if(e.target.className != "Rect"){
            return 
        }
         
        if (mode == "line"){
            
            // only draw lines when it is dragging? 
            drawingLine = true 
            line_filler.visible(true)
            //startDragLine({x: e.evt.layerX, y: e.evt.layerY})
            
            /*
             const pos = stage.getPointerPosition();
            line = new Konva.Line({
                stroke: 'black',
                strokeWidth: 8,
                // remove line from hit graph, so we can check intersections
                listening: true,
                draggable: true, 
                points: [pos.x, pos.y]
                });
            */
            
            
             const pos = stage.getPointerPosition();
              const points = line_filler.points().slice();
              points[0] = pos.x;
              points[1] = pos.y;
              line_filler.points(points);
              //layer.draw()
             //layer.batchDraw();
             //stage.draw(); 
         
        }else if (mode == "circle"){
            
            if (e.evt.button === 2) { //prevent right click to create label 
                return;
            }
            circle_mode = "drawing"
            dragging = "no"
            startDrag({x: e.evt.layerX, y: e.evt.layerY})            
            
            
        }else if (mode == "label"){

          return;

            
        }

      });

      stage.on('mouseup touchend', function (e) {
        if (mode == "line"){
            
            if (!drawingLine) {
                return;
            }
            line_filler.visible(false)
            var newline = new Konva.Line({
                stroke: 'black',
                strokeWidth: 8,
                // remove line from hit graph, so we can check intersections
                listening: true,
                draggable: true, 
                points:  line_filler.points()
                });
            
            layer.add(newline);
            stage.draw();
            
            
            drawingLine = false 
            
         
        }else if (mode == "circle"){
            isPaint = false;
            if (circle_mode === "drawing" && dragging === "yes" ){
                r_filler.visible(false)
                if (r_filler.radius()>5){
                    var newCirc = new Konva.Circle({
                      x: r_filler.x(),
                      y: r_filler.y(),
                      radius: r_filler.radius(),
                      fill: 'gray',
                      listening: true, 
                        draggable: true, 
                        name: "real_circle"
                    })
                     
                     circles.push(newCirc)
                    layer.add(newCirc);
                    stage.draw();
                    
                    
                }else{
                    alert(trial.small_circle_warning)
                }
            }   
        }else if (mode == "label"){


            
        }
          dragging = "no"
          circle_mode = ""
          isPaint = false;
          drawingLine = false 
      });

      // and core function - drawing
      
   
      
      
      
    stage.on('mousemove touchmove', function (e) {
        
        if (mode == "line") {
            
            
            if(drawingLine == false) {
                
                return;
            }
            
            //updateDragLine({x:e.evt.layerX, y:e.evt.layerY})
           
              const pos = stage.getPointerPosition();
              const points = line_filler.points().slice();
              points[2] = pos.x;
              points[3] = pos.y;
              line_filler.points(points);
              layer.draw()
             layer.batchDraw();
             stage.draw(); 
              //layer.add(line);
            
            /*
              const pos = stage.getPointerPosition();
              const points = line.points().slice();
              points[2] = pos.x;
              points[3] = pos.y;
            
              line.points(points);
              layer.batchDraw();
              layer.add(line);

            */
   
        }else if(mode == "circle"){
            
            if (circle_mode === "drawing"){
                dragging = "yes"
                updateDrag({x:e.evt.layerX, y:e.evt.layerY})
                
            }
            
            //
        }else if(mode == "label"){
            
        }
          
          
      });

      var select = document.getElementById('tool');
      select.addEventListener('change', function () {
        mode = select.value;
      })
    
   
    stage.draw() // First draw of canvas.
    
      
let currentShape;
var menuNode = document.getElementById('menu');
      
//delete button
document.getElementById('delete-button').addEventListener('click', () => {
       
        var shapes = stage.find('Circle');
        currentShape.destroy();
        layer.draw();
        
        
      var shapes = stage.find('Circle');
        
          // here's to actuall remove circle 
          
        //remove circles or labels from the array 
        var circle_index = circles.indexOf(currentShape);
        if (circle_index > -1) {
        circles.splice(circle_index, 1);
        }
          
        var label_index = labels.indexOf(currentShape);
        if (label_index > -1) {
        labels.splice(label_index, 1);
        }
          
});
        
        
     

      window.addEventListener('click', () => {
        // hide menu
        menuNode.style.display = 'none';
      });

stage.on('contextmenu', function (e) {
        // prevent default behavior
        e.evt.preventDefault();
        if (e.target === stage | e.target === r1) {
          // if we are on empty place of the stage we will do nothing
          return;
        }
          
        // this might be the ghost circles created by empty clicking 
        currentShape = e.target;
     
        // show menu
        menuNode.style.display = 'initial';
        var containerRect = stage.container().getBoundingClientRect();
        menuNode.style.top =
          containerRect.top + stage.getPointerPosition().y + 4 + 'px';
        menuNode.style.left =
          containerRect.left + stage.getPointerPosition().x + 4 + 'px';
        
});      
      

stage.on('dblclick', function (e) {

  if (mode != "label"){
    return;
  } 

  e.evt.preventDefault();
  if (e.target === stage | e.target === r1 | e.target.className === "Line" | e.target.className === "Text" | e.target.className === "Circle") {
    // if we are on empty place of the stage we will do nothing
    return;
  }
})

stage.on('click', function (e) {
    
    editing_text = true

    if (mode != "label"){
        return;
    }
        // prevent default behavior
        
        e.evt.preventDefault();
        if (e.evt.button === 2) { //prevent right click to create label 
            return;
        }
        
        if (e.target === stage | e.target === r1 | e.target.className === "Line" | e.target.className === "Text") {
          // if we are on empty place of the stage we will do nothing
          return;
        }
        currentShape = e.target;
    
       
        var textNode = new Konva.Text({
          text: trial.label_filler_words,
          x: currentShape.attrs.x - currentShape.attrs.radius/2 ,
          y: currentShape.attrs.y ,
          fontSize: 20,
          draggable: true,
          width: 200,
        });

      layer.add(textNode);


    

      textNode.on('dblclick dbltap', () => {
        // hide text node and transformer:
        //textNode.hide();

        // create textarea over canvas with absolute position
        // first we need to find position for textarea
        // how to find it?

        // at first lets find position of text node relative to the stage:
        var textPosition = textNode.absolutePosition();

        // so position of textarea will be the sum of positions above:
        var areaPosition = {
          x: stage.container().offsetLeft + textPosition.x,
          y: stage.container().offsetTop + textPosition.y,
        };

        // create textarea and style it
        var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);

        // apply many styles to match text on canvas as close as possible
        // remember that text rendering on canvas and on the textarea can be different
        // and sometimes it is hard to make it 100% the same. But we will try...
        textarea.value = textNode.text();
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
        textarea.style.height =
          textNode.height() - textNode.padding() * 2 + 5 + 'px';
        textarea.style.fontSize = textNode.fontSize() + 'px';
        textarea.style.border = 'none';
        textarea.style.padding = '0px';
        textarea.style.margin = '0px';
  
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = textNode.lineHeight();
        textarea.style.fontFamily = textNode.fontFamily();
        textarea.style.transformOrigin = 'left top';
        textarea.style.textAlign = textNode.align();
        textarea.style.color = textNode.fill();
        rotation = textNode.rotation();
        

        textarea.focus();

        function removeTextarea() {
          textarea.parentNode.removeChild(textarea);
          window.removeEventListener('click', handleOutsideClick);
          textNode.show();
         
        }

        function setTextareaWidth(newWidth) {
          if (!newWidth) {
            // set width for placeholder
            newWidth = textNode.placeholder.length * textNode.fontSize();
          }
          // some extra fixes on different browsers
          var isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
          );
          var isFirefox =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
          if (isSafari || isFirefox) {
            newWidth = Math.ceil(newWidth);
          }

          var isEdge =
            document.documentMode || /Edge/.test(navigator.userAgent);
          if (isEdge) {
            newWidth += 1;
          }
          textarea.style.width = newWidth + 'px';
        }

        textarea.addEventListener('keydown', function (e) {
          // hide on enter
          // but don't hide on shift + enter
          if (e.keyCode === 13 || e.keyCode === 9) {
           
            //textNode.text = textarea.value 
            //textarea.value = textNode.text()
            textNode.text(textarea.value);
            if (textarea.value != trial.textbox_default){
              labels.push(textNode)
            }
            removeTextarea();
            layer.draw();
          }
          // on esc do not set value back to node
          if (e.keyCode === 27) {
            removeTextarea();
          }
        });

        textarea.addEventListener('keydown', function (e) {
          scale = textNode.getAbsoluteScale().x;
          setTextareaWidth(textNode.width() * scale);
          textarea.style.height = 'auto';
          textarea.style.height =
            textarea.scrollHeight + textNode.fontSize() + 'px';
        });

        function handleOutsideClick(e) {
          if (e.target !== textarea) {
            console.log(textarea.value)
            textNode.text(textarea.value);
            if (textarea.value != trial.textbox_default){
              labels.push(textNode)
            }
            removeTextarea();
            layer.draw();
          }
        }
        setTimeout(() => {
          window.addEventListener('click', handleOutsideClick);
        });
      });


      layer.draw();
      
        
      });   
      
      
      
      
      
      
      
      
      

display_element.querySelector('#jspsych-draw-circles-done-btn').addEventListener('click', function(){

      var trial_data = {
        //"locations": JSON.stringify(locations),
        //"rt": rt,
        "labels_raw":  JSON.stringify(labels), 
        "labels_processed":  (JSON.stringify(labels.map(function(x){return ({text: x.attrs.text, x: x.attrs.x, y: x.attrs.y})}))).toString(),
        "circles_raw":  JSON.stringify(circles),
        "circles_location": (JSON.stringify(circles.map(function(x){return({x: x.attrs.x, y: x.attrs.y, r: x.attrs.radius})}))).toString()
      };
        
      console.log(trial_data)

      display_element.innerHTML = '';
      jsPsych.finishTrial(trial_data);
    
      // advance to next part

});

  }

  return plugin;

})();