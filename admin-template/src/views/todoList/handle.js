export default {
  data() {
    return {
      name: 'isMiXin',
    };
  },
  mounted() {
    this.handlelog();
  },
  methods: {
    handlelog() {
      console.log(this.name);
    },
  },
};
