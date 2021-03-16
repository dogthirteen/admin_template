export default {
  inject: ['app'],
  data() {
    return {
      name: 'isMiXin',
    };
  },
  mounted() {
    this.handlelog();
    console.log(this.app.name);
  },
  methods: {
    handlelog() {
      console.log(this.name);
    },
  },
};
