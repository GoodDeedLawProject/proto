const EventsList = {template: `
  <ul class="item-list">
    <li v-for="events in upcomingEvents">
    </li>
  </ul>
  `,
  data () {
    return {events: []}
  },
  computed: {
    upcomingEvents (){
      return this.events.filter(event => Date.now() < event.time);
    }
  }
};

const Event = {
  template: `
    <a :href="url">
      <div class="item-title">{{title}}</div>
      <div class="item-subtitle">{{time | eventTime}}</div>
    </a>
  `,
  data () {
    return {
    }
  },
};

