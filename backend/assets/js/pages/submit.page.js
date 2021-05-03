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
        mainImage: {
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
          title: '',
          content: ''
        },
        {
          index: 1,
          title: '',
          content: ''
        }
      ],
      nextSteps: '',
      status: true,
      links: [''],
      topics: [],
      technology: [],
    },
    step: 1,
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
      
      event.preventDefault()

      // TODO: form validation
      console.log(this.form);

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
      let targetID = event.target.id;
      let image = document.getElementById(targetID);
      this.form.images[targetID].file = image.value;
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
