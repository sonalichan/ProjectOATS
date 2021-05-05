module.exports = {


  friendlyName: 'Create Project',


  description: 'Create new project.',


  extendedDescription:
``,


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


  fn: async function (req, res) {

    var body = this.req.body;

    // create new project first
    var newProject = await Project.create({
      title: body.title,
      tagline: body.tagline,
      sponsored: body.sponsored,
      sponsor: body.sponsor,
      challenge: body.challenge,
      outcome: body.outcome,
      impact: body.impact,
      nextSteps: body.nextSteps,
      status: body.status
    }).fetch();

    // create each member next and associate with project's id
    body.members.forEach(async (member) => {
      await Student.create({
        firstName: member.firstName,
        lastName: member.lastName,
        linkedinURL: member.linkedIn,
        role: member.role,
        program: member.program,
        optOut: member.optOut,

        owner: newProject.id,
      });
    });

    // create main content blocks and associate with project's id
    body.main.forEach(async (c) => {
      await MainContent.create({
        index: c.index,
        template: c.template,
        title: c.title,
        mainText: c.mainText,
        leftText: c.leftText,
        rightText: c.rightText,
        mainPicture: c.mainPicture,
        mainAlt: c.mainAlt,
        leftPicture: c.leftPicture,
        leftAlt: c.leftAlt,
        rightPicture: c.rightPicture,
        rightAlt: c.rightAlt,

        owner: newProject.id,
      })
    });

    // create topic tags and associate with project's id
    body.topics.forEach(async (t) => {
      await Tag.create({
        name: t,
        category: "topics",

        owner: newProject.id
      })
    });

    // create tags and associate with project's id
    body.technology.forEach(async (t) => {
      await Tag.create({
        name: t,
        category: "technology",

        owner: newProject.id
      })
    });

  }

};
