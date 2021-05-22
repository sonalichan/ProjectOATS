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

      var formData = new FormData();

      // add all text fields first to form data
      formData.append("title", this.form.title);
      formData.append("tagline", this.form.tagline);
      formData.append("heroImageAlt", this.form.heroImageAlt);
      formData.append("members", JSON.stringify(this.form.members));
      formData.append("sponsored", this.form.sponsored);
      formData.append("sponsor", this.form.sponsor);
      formData.append("challenge", this.form.challenge);
      formData.append("outcome", this.form.outcome);
      formData.append("impact", this.form.impact);
      formData.append("main", JSON.stringify(this.form.main));
      formData.append("nextSteps", this.form.nextSteps);
      formData.append("status", this.form.status);
      formData.append("links", JSON.stringify(this.form.links));
      formData.append("topics", JSON.stringify(this.form.topics));
      formData.append("technology", JSON.stringify(this.form.technology));
      
      // add the images last
      formData.append("tileImage", this.form.tileImage);
      formData.append("heroImage", this.form.heroImage);

      // TODO: appen main content images 

      // axios call
      const res = axios.post('/api/v1/project', formData)
      .then(() => {
        // wait a half second to let the images upload
        setTimeout(() => {
          var url = "project/" + encodeURI(this.form.title);
          this.goto(url)
        }, 500)
      }).catch((err) => {
        console.log(err);
      })
    },
    validateForm() {
      this.submit = true;
      // TODO do form validation here
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
    uploadTileImage(event) {
      this.form.tileImage = event.target.files[0];
    },
    uploadHeroImage(event) {
      this.form.heroImage = event.target.files[0];
    },
    processMainImage(event, index) {
      this.form.main[index].mainPicture = event.target.files[0];
    },
    processLeftImage(event, index) {
      this.form.main[index].leftPicture = event.target.files[0];
    },
    processRightImage(event, index) {
      this.form.main[index].rightPicture = event.target.files[0];
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
