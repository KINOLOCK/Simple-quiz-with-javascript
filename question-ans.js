



<!-- begin snippet: js hide: false console: true babel: null -->

<!-- language: lang-html -->

    <div class="quizsection">
        <button onclick="startQuiz()" id="startQuiz">Start Quiz</button>
        <div id="questions"></div> 
    </div>

    <script>
        //Create Array with questions and solutions
        var allQuestions = [{
            question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
            choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
            correctAnswer: 1
          },

          {
            question: "Does England have a 4th of July?",
            choices: ["Yes", "No", "I don't know"],
            correctAnswer: 0
          },

          {
            question: "What is Rupert the bear's middle name?",
            choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
            correctAnswer: 2
          },

          {
            question: " What can you never eat for breakfast? ",
            choices: ["Dinner", "Something sugary", "Lunch", "Supper"],
            correctAnswer: 0
          },

          {
            question: "If there are three apples and you took two away, how many do you have?",
            choices: ["One", "Two", "None"],
            correctAnswer: 1
          },

          {
            question: "Spell 'Silk' out loud, 3 times in a row. What do cows drink?",
            choices: ["Milk", "Water", "Juice", "Cows can't drink"],
            correctAnswer: 1
          },

          {
            question: "Which is heavier, 100 pounds of rocks or 100 pounds of gold? ",
            choices: ["100 pounds of rocks", "100 pounds of rocks", "They weigh the same"],
            correctAnswer: 2
          },

          {
            question: "Can you spell 80 in two letters?",
            choices: ["AI-TY", "It's not possible", "EIGH-TY", "A-T"],
            correctAnswer: 3
          },

          {
            question: "What question must always be answered ''Yes''?",
            choices: ["What does Y-E-S spell?", "Will everyone die someday?", "Does everyone have a biological mother?", "Are you a human?"],
            correctAnswer: 0
          },

          {
            question: "How many sides does a circle have?",
            choices: ["The back", "None. It's a circle", "Two", "Four"],
            correctAnswer: 2
          },

          {
            question: "What has a tail but no body?",
            choices: ["A human", "A coin", "A cloud"],
            correctAnswer: 1
          },

          {
            question: "What word in the English language is always spelled incorrectly?",
            choices: ["It's possible to spell anything right as long as you learn it", "Shakespeare", "Onomatopoeia", "Incorrectly"],
            correctAnswer: 3
          },

          {
            question: "When do you stop at green and go at red?",
            choices: ["Watermelon!", "Traffic light!", "Garden"],
            correctAnswer: 0
          },

          {
            question: "What rotates but still remains in the same place?",
            choices: ["Bottle (spin the bottle game)", "Clock", "Stairs"],
            correctAnswer: 2
          },

          {
            question: "How can you lift an elephant with one hand?",
            choices: ["Truck", "Use both hands!", "Use a lever", "There is no such thing"],
            correctAnswer: 3
          }
        ];

    //Function to start the quiz
    function startQuiz(){
        
        var i;
        var j;
        var k;
        for(i=0; i<allQuestions.length; i++){
            document.getElementById("questions").innerHTML +='<form id="question">Q'+(i+1)+': '+ allQuestions[i].question;
            
            for(j=0; j<allQuestions[i].choices.length; j++){
            	document.forms[i].innerHTML += '</div><div class="answer"><input name="q1" value="'+ allQuestions[i].choices[j] +'" id="value4" type="checkbox" />' + allQuestions[i].choices[j] + '<br/>';
             }
         document.getElementById("questions").innerHTML +='</form><br/><br/>';
        }
        
        document.getElementById("questions").innerHTML += '<button onclick="solveQuiz()">Solve Quiz</button>';
        
    }

    function solveQuiz(){
        	var x;
            var txt = ' ';
            var i = 0;
            var correct = 0; 
            for(i = 0; i < document.forms[i].length;i++) { 
            	x = document.forms[i]; 
            	if(x[i].checked) { 
                	correctAnswer = allQuestions[i].correctAnswer;
                    if(x[i].value == allQuestions[i].choices[correctAnswer]){
                    	correct += 1;
                    }
                }
             }
            document.getElementById("questions").innerHTML += 'Correct answers: ' + correct;
    }

    </script>

<!-- end snippet -->

