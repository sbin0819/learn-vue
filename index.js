Vue.component('todo-list', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`,
});

var app = new Vue({
  el: '#app',
  data: {
    title: 'TODO LIST',
    isShow: false,
    todos: [
      { id: 0, text: 'tutorial Vue' },
      { id: 1, text: 'Learn FP' },
      { id: 2, text: 'Storybook' },
      { id: 3, text: 'Clean the house' },
    ],
  },
  methods: {
    onHandleShow: function () {
      this.isShow = !this.isShow;
    },
  },
});
