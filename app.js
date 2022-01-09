var ul = document.getElementById('LIST')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')


var app={
    questions:[
        {
            q:'Who is highest run scorer for Pakistan in Test cricket?',
            options: ['Mohammad Yousuf', 'Inzamam-ul-Haq', 'Younis Khan', 'Javed Miandad'],
            answer:3
        },
        {
            q:'Who is highest run scorer for Pakistan in ODI cricket?',
            options: ['Shahid Afridi', 'Saeed Anwar', 'Inzamam-ul-Haq', 'Misbah-ul-Haq'],
            answer:3
        },      
        {
            q:'When did Pakistan win the World Cup?',
            options: ['1992','1996','1999','2003'],
            answer:1
        },   
        {
            q:'Who Took the first cricket hat-trick for Pakistan?',
            options: ['Umar Gul','Wasim Akram','Shahid Afridi','Waqar Younis'],
            answer:2
        }
        ,   
        {
            q:'Who was the Pakistan captain in the T20 World Cup 2009?',
            options: ['Yasir Arafat','Shahid Afridi','Shoaib Mallick','Younis Khan'],
            answer:4
        }  
        ,   
        {
            q:'Who is most sucessful captain in Pakistan Cricket History?',
            options: ['Inzamam-ul-Haq','Sarfaraz Ahmed','Misbah-ul-Haq','Imran Khan'],
            answer:4
        }  
        ,   
        {
             q:'Who is the only Pakistani Player to never score a single run in ODI?',
            options: ['Ijaz Ahmed','Shadab Kabir','Hasan Raza','Mujahid Jamshaid'],
            answer:2
        }  
        ,   
        {
            q:'Who has the most centuries for Pakistan?',
            options: ['Saeed Anwar','Mohammad Hafeez','Mohammad Yousuf','Babar Azam'],
            answer:1
        }  
        ,   
        {
            q:'Who has the most wickets for Pakistan in T20I?',
            options: ['Shadab Khan','Saeed Ajmal','Shahid Afridi','Umar Gul'],
            answer:3
        }         
    ],
    index:0,
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            quizbox.innerHTML="Quiz Completed!";
            LIST.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    preventClick:function(){
        for(let i=0; i<LIST.children.length; i++){
            LIST.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<LIST.children.length; i++){
            LIST.children[i].style.pointerEvents="auto";
            LIST.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.score + "/" +this.questions.length;
    }
}


window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}