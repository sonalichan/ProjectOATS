parasails.registerPage('submit', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    form: {
      projectTitle: '',
      projectSubtitle: '',
      images: {
        projectImage: {
          file: null,
          alt: ''
        },
        tileImage: {
          file: null,
          alt: ''
        },
        heroImage: {
          file: null,
          alt: ''
        }
      },
      teamMembers: [
        {
          index: 0,
          firstName: '',
          lastName: '',
          role: '',
          optOut: false,
          linkedIn: '',
          program: ''
        }
      ],
      sponsored: true,
      sponsorName: '',
      challenge: '',
      outcome: '',
      impact: '',
      main: [
        {
          index: 0,
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
      ],
      nextSteps: '',
      status: true,
      links: [''],
      topics: [],
      technology: [],
    },
    step: 1,
    submit: false,
    link: false,
    topics: ['Data Visualization', 'Ethics', 'UX Design', 'AI', 'Privacy'],
    technology: ['Figma', 'Django', 'Sails.js', 'React'],
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
        var url = "project/" + encodeURI(this.form.projectTitle);
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
      let currentIndex = this.form.teamMembers.length;
      this.form.teamMembers.push({
        index: currentIndex,
        firstName: '',
        lastName: '',
        role: '',
        optOut: false,
        linkedIn: '',
        program: ''
      })
    },
    addLink() {
      this.form.links.push('');
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
