parasails.registerPage('submit', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    form: {
      projectTitle: '',
      image: null,
      // TODO: ask for alt text for image
      teamMembers: [
        {
          firstName: '',
          lastName: '',
          role: '',
          optOut: false
        },
        {
          firstName: '',
          lastName: '',
          role: '',
          optOut: false
        },
        {
          firstName: '',
          lastName: '',
          role: '',
          optOut: false
        },
        {
          firstName: '',
          lastName: '',
          role: '',
          optOut: false
        },
      ],
      sponsored: false,
      sponsorName: '',
      challenge: '',
      outcome: '',
      impact: '',
      problemStatement: '',
      sponsored: false,
      company: '',
      majors: [],
      introduction: '',
      keyFeatures: '',
      topics: []
    },
    topics: [{ text: 'Select up to three', value: null }, 'Data Visualization', 'Ethics', 'UX Design', 'AI'],
    majors: [{ text: 'Select major(s) of team members', value: null}, "INFO", "MLIS", "MSIM"],
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))

      // TODO: form validation
      console.log(this.form);

      // navigate to individual project page
      this.goto('new-data-page', this.form);
    },
    processFile() {
      // save file to variable here
      console.log("process file");
      console.log(this);
      console.log(this.$get('$router'))
      // this.goto('new-data-page', this.form)
    }
  }
});
