import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data:{
      tasks: [
        {name: "Book Train Tickets", isComplete: false},
        {name: "Do Washing Up", isComplete: false},
        {name: "Finish MVP", isComplete: false}
      ],
      newTask: ""
    },
    methods:{
      saveNewTask: function(){
        this.tasks.push({
          name: this.newTask,
          isComplete: false
        });
        this.newTask = "";
      },
      finishTask: function(index){
        this.tasks[index].isComplete = true;
      }
    }
  });
})
