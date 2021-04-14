parasails.registerPage('new-data-page', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    project: {
      projectTitle: '',
      image: null,
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
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // make api call to get all project info
  },
  mounted: async function() {
    console.log("mounted");
    console.log(this.project);
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
  }
});
