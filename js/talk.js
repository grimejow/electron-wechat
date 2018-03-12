var navIcon = document.getElementsByClassName("nav-icon");

var navA = document.getElementsByClassName("nav-a");
var chat = document.getElementById("chat");
var collectList = document.getElementById("collect-list");
var setList = document.getElementById("set-list");
const quitLLogin = document.querySelector('#quit-login');
navA[0].onclick = function() {

    navIcon[0].src = "img/nav11.png";
    navIcon[1].src = "img/nav2.png";
    chat.style.zIndex = 2;
    collectList.style.zIndex = 1;
    setList.style.zIndex = 1;
};
navA[1].onclick = function() {
    navIcon[0].src = "img/nav1.png";
    navIcon[1].src = "img/nav21.png";
    chat.style.zIndex = 1;
    collectList.style.zIndex = 2;
    setList.style.zIndex = 1;
};
navA[2].onclick = function() {
    chat.style.zIndex = 1;
    collectList.style.zIndex = 1;
    setList.style.zIndex = 2;
};

var collectLi = document.getElementsByClassName("collect-left")[0].children;
var collectShowRight = document.getElementsByClassName("collect-show-right");


for (i = 0; i < collectLi.length; i++) {

    collectLi[i].index = i;
    collectLi[i].onclick = function() {
        for (j = 0; j < collectLi.length; j++) { collectShowRight[j].style.zIndex = 1; }
        collectShowRight[this.index].style.zIndex = 2;
    };



};
var setLi = document.getElementsByClassName("set-left")[0].children;
var setShowBottom = document.getElementsByClassName("set-show-right");
for (i = 0; i < setLi.length; i++) {

    setLi[i].index = i;
    setLi[i].onclick = function() {
        for (j = 0; j < setLi.length; j++) { setShowBottom[j].style.zIndex = 1; }
        setShowBottom[this.index].style.zIndex = 2;
    };



};

new Vue({
    // component: App,
    el: '#chat',
    data: {
        no: false,
        addTodoText: "",
        count: 0,
        todos: [],
        clickIndex: 0,
        chatingName: "",
        url: [],

    },
    methods: {
        addNewTodo: function() {
            var value = this.addTodoText && this.addTodoText.trim();
            if (!value) {
                return;
            }
            this.todos.push({
                title: value,
                clicked: false
            });
            var index = this.todos.length - 1;
            this.url.push("img/" + index + ".png");

            this.count++;
            this.addTodoText = ""
        },
        removeTodo: function(todo) {
            var index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
            this.url.splice(index, 1);
            if (todo.completed === true) {
                return
            } else {
                this.count--;
            }

            if (this.clickIndex === index) {
                this.clickIndex = 0;
                this.chatingName = this.todos[0].title;

            } else if (this.clickIndex > index) {
                this.clickIndex = this.clickIndex - 1;
                this.chatingName = this.todos[this.clickIndex].title;
            }
        },
        addCount: function(todo) {
            // console.log(todo.completed);
            if (todo.completed == true) {
                this.count++;
            } else {
                this.count--;
            }
        },
        changeName: function(todo) {

            var index = this.todos.indexOf(todo);
            this.clickIndex = index;
            this.chatingName = todo.title;




        }


    }
});