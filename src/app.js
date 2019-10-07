import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data:{
      tasks: [
        {name: "Book Train Tickets", isComplete: false, priority: "Low"},
        {name: "Do Washing Up", isComplete: false, priority: "Low"},
        {name: "Finish MVP", isComplete: false, priority: "High"}
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
