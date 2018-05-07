$('#start').on('click', function(){
   game.start();
})
$(document).on('click', '#end', function(){
    game.done();
})



var questions = [{
    question: "What is the name of Jon's direwolf?",
    answers: ["Mouse", "Bird", "Jerry", "Ghost", "Phantom"],
    correctAnswer: "Ghost",
}, {
    question: "Who is the Master of Whisperers?",
    answers: ["Tyrion Lannister", "Varys", "Tywi Lannister", "Petyr Baelish"],
    correctAnswer: "Varys",
}, {
    question: "How many Dragons is Daenarys Targaryen the mother of?",
    answers: ["10", "2", "5", "3"],
    correctAnswer:"3",
}, {
    question: "Which father legitimizes his bastard son?",
    answers: ["Oberyn Martell", "Ned Stark", "Robert Baratheon", "Roose Bolton"],
    correctAnswer: "Roose Bolton"
}, {
    question: "What is Sansa Stark's favorite treat?",
    answers: ["Tyroshi Pears", "Lamprey Pie", "Lemon Cakes", "Berry Tarts"],
    correctAnswer: "Lemon Cakes",
}, {
    question: "Who is sometimes referred to as Ser Piggy or Prince Pork-chop?",
    answers: ["Jamie Lanister", "Samwell Tarly", "Theon Greyjoy", "Jon snow"],
    correctAnswer: "Samwell Tarly",
}, {
    question: "What is the name of Tommen Baratheon's cat?",
    answers: ["Ser Pounce", "Ser Meow", "Ser Whiskers", "Ser Furball"],
    correctAnswer: "Ser Pounce",
}, {
    question: "According to the Dothraki, where does your spirit go if your body is burned?",
    answers: ["The Old Country", "The Night Lands", "Nowhere", "The Great Grass Sea"],
    correctAnswer:"The Night Lands",
}, {
    question: "Which season were all the Stark children born during?",
    answers: ["Winter", "Summer", "Spring", "Autumn"],
    correctAnswer:"Summer",
}, {
    question: "How many kingdoms are in Westeros?",
    answers: ["7", "5", "9", "3"],
    correctAnswer: "7",
}]


var game = {
    correct: 0,
    incorrect: 0,
    counter: 100,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter === 0){
            console.log("Time is up!");
            game.done(); 
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">100</span> Seconds</h2>');
        $('#start').remove();
        $('#directions').remove();
        for(var i=0; i<questions.length; i++){
            $('#subwrapper').append('<hr><h2>' + questions[i].question + '</h2>');
            for(var j=0; j<questions[i].answers.length; j++){
                $('#subwrapper').append('<input type="radio" name="question-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');
    },
    done: function(){
        $.each($('input[name="question-0"]:checked'), function() {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-1"]:checked'), function() {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-2"]:checked'), function() {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-3"]:checked'), function() {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-4"]:checked'), function() {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function() {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function() {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function() {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function() {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        $.each($('input[name="question-9"]:checked'), function() {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct ++;
            }else {
                game.incorrect ++;
            }
        });
        this.result();
    
    },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html('<h2>All Done!!!</h2>');
            $('#subwrapper').append('<h3>Correct Answers: ' + this.correct + '</h3>');
            $('#subwrapper').append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
            $('#subwrapper').append('<h3>Unanswered: ' + (questions.length-(this.incorrect + this.correct)) + '</h3>');
        }
    
}
