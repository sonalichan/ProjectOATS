module.exports = {


  friendlyName: 'Create Project',


  description: 'Create new project.',


  extendedDescription:
``,


  // inputs: {
  //   projectTitle: {
  //     required: true,
  //     type: 'string',
  //   },
  //   image: {
  //     required: true,
  //     type: 'ref',
  //   },
  //   teamMembers: {
  //     required: true,
  //     type: 'json',
  //   },
  //   sponsored: {
  //     required: true,
  //     type: 'boolean',
  //   },
  //   sponsorName: {
  //     required: true,
  //     type: 'string',
  //   },
  //   challenge: {
  //     required: true,
  //     type: 'string',
  //   },
  //   outcome: {
  //     required: true,
  //     type: 'string',
  //   },
  //   impact: {
  //     required: true,
  //     type: 'string',
  //   },
  //   problemStatement: {
  //     required: true,
  //     type: 'string',
  //   },
  //   introduction: {
  //     required: true,
  //     type: 'string',
  //   },
  //   keyFeatures: {
  //     required: true,
  //     type: 'string',
  //   },
  //   topics: {
  //     required: true,
  //     type: 'json',
  //   }
  // },


  exits: {

    success: {
      description: 'New project was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided post data was invalid.',
      extendedDescription: ''
    },

  },


  // {projectTitle, image, teamMembers, sponsored, sponsorName, challenge, impact, outcome, problemStatement, majors, introduction, keyFeatures, topics}
  fn: async function (req, res) {

    var body = this.req.body;

    let newProject = await Project.create({
      projectTitle: body.projectTitle,
      projectSubtitle: body.projectSubtitle,
      oldProject: false,
      sponsored: body.sponsored,
      sponsor: body.sponsorName,
      challenge: body.challenge,
      outcome: body.outcome,
      impact: body.impact,
      nextSteps: body.nextSteps,
      mainTitle1: body.main[0].title,
      mainContent1: body.main[0].content,
      mainTitle2: body.main[1].title,
      mainContent2: body.main[1].content,
    }).fetch();

  }

};
