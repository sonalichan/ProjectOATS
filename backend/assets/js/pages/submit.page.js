parasails.registerPage('submit', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    form: {
      title: '',
      tagline: '',
      tileImage: null,
      heroImage: null,
      heroImageAlt: '',
      members: [
        {
          index: 0,
          firstName: '',
          lastName: '',
          role: '',
          optOut: false,
          linkedInURL: '',
          program: ''
        }
      ],
      sponsored: true,
      sponsor: '',
      challenge: '',
      outcome: '',
      impact: '',
      main: [
        {
          index: 1,
          template: '',
          title: '',
          mainText: '',
          leftText: '',
          rightText: '',
          mainPicture: null,
          mainAlt: '',
          leftPicture: null,
          leftAlt: '',
          rightPicture: null,
          rightAlt: ''
        },
        {
          index: 2,
          template: '',
          title: '',
          mainText: '',
          leftText: '',
          rightText: '',
          mainPicture: null,
          mainAlt: '',
          leftPicture: null,
          leftAlt: '',
          rightPicture: null,
          rightAlt: ''
        },
      ],
      nextSteps: '',
      status: '',
      links: [''],
      topics: [],
      technology: [],
    },
    step: 1,
    submit: false,
    link: false,
    topics: ['Archives & special collections', 'Business & systems analysis', 'Community engagement & outreach', 'Content & digital asset management',
      'Data curation', 'Data science & visualization', 'Database administration & development', 'Digital youth & youth services', 'Equity & inclusion',
      'Indigenous knowledge', 'Information architecture', 'Information assurance & cybersecurity', 'Information behavior & user research',
      'Information literacy', 'Information policy & ethics', 'Knowledge organization', 'Mobile or web development', 'Social justice', 'Social media',
      'Software development', 'UX & interaction design', 'Other'],
    technology: ['Figma', 'Django', 'Sails.js', 'React', 'Vue.js', 'Angular', 'Laravel', 'Express.js', 'jQuery', 'Flask', 'Bootstrap', 'Ruby on Rails', 'Other'],
    programs: ["INFO", "MLIS", "MLIS Online", "MSIM"],
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
      event.preventDefault();

      // axios call
      const res = axios.post('/api/v1/project',
        this.form
      ).then(() => {
        console.log("axios call done")
        var url = "project/" + encodeURI(this.form.title);
        this.goto(url)
      }).catch((err) => {
        console.log(err);
      })

      // $.ajax({
      //   type: "POST",
      //   url: "/api/v1/project",
      //   data: postData,
      // }).then(() => {
      //   console.log("ajax post done");
      //   // this.goto('new-data-page')
      // })
    },
    validateForm() {
      this.submit = true;
    },
    addTeamMember() {
      let currentIndex = this.form.members.length;
      this.form.members.push({
        index: currentIndex,
        firstName: '',
        lastName: '',
        role: '',
        optOut: false,
        linkedInURL: '',
        program: ''
      })
    },
    deleteTeamMember() {
      this.form.members.pop();
    },
    addLink() {
      this.form.links.push('');
    },
    addMainContent() {
      let currentIndex = this.form.main.length;
      this.form.main.push({
        index: currentIndex + 1,
        template: '',
        title: '',
        mainText: '',
        leftText: '',
        rightText: '',
        mainPicture: null,
        mainAlt: '',
        leftPicture: null,
        leftAlt: '',
        rightPicture: null,
        rightAlt: ''
      })
    },
    deleteMainContent() {
      this.form.main.pop();
    },
    processFile(event) {
      // let targetID = event.target.id;
      // let image = document.getElementById(targetID);
      // this.form.images[targetID].file = image.value;
    },
    nextStep() {
      this.step++;
      window.scrollTo(0,0);
      // TODO: reset focus to top of page
    },
    back() {
      this.step--;
      window.scrollTo(0,0);
    }
  }
});
