module.exports = {


  friendlyName: 'Edit Project with put request',


  description: 'Edit project.',


  extendedDescription:
``,


  exits: {

    success: {
      description: 'Project was edited successfully.'
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
    let project = await Project.updateOne({ title: body.title})
      .set({
      title: body.title,
      tagline: body.tagline,
      sponsored: body.sponsored,
      sponsor: body.sponsor,
      challenge: body.challenge,
      outcome: body.outcome,
      impact: body.impact,
      nextSteps: body.nextSteps,
      status: body.status,


      // for now, set these to empty lists
      tags: [],
      main: [],
      members: []
    })

    console.log("project updated");
    console.log(project)

    // TODO: make sure these models are destroyed properly
    // deassociate all foreign key fields
    await Student.destroy({owner: project.id});
    await Tag.destroy({owner: project.id});
    await MainContent.destroy({owner: project.id});

    // recreate all foreign key associations
    body.members.forEach(async (member) => {
      await Student.create({
        firstName: member.firstName,
        lastName: member.lastName,
        linkedinURL: member.linkedIn,
        role: member.role,
        program: member.program,
        optOut: member.optOut,

        owner: project.id,
      });
    });
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

        owner: project.id,
      })
    });
    body.topics.forEach(async (t) => {
      await Tag.create({
        name: t,
        category: "topics",

        owner: project.id
      })
    });

    // create tags and associate with project's id
    body.technology.forEach(async (t) => {
      await Tag.create({
        name: t,
        category: "technology",

        owner: project.id
      })
    });

  }

};
