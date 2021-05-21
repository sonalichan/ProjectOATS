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


  fn: async function () {

    var fs = require('fs');

    var body = this.req.body;

    // create new project first
    var newProject = await Project.create({
      title: body.title,
      tagline: body.tagline,
      heroImageAlt: body.heroImageAlt,
      sponsored: body.sponsored,
      sponsor: body.sponsor,
      challenge: body.challenge,
      outcome: body.outcome,
      impact: body.impact,
      nextSteps: body.nextSteps,
      status: body.status
    }).fetch();

    // create each member next and associate with project's id
    JSON.parse(body.members).forEach(async (member) => {
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
    JSON.parse(body.main).forEach(async (c) => {
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
    JSON.parse(body.topics).forEach(async (t) => {
      await Tag.create({
        name: t,
        category: "topics",

        owner: newProject.id
      })
    });

    // create tags and associate with project's id
    JSON.parse(body.technology).forEach(async (t) => {
      await Tag.create({
        name: t,
        category: "technology",

        owner: newProject.id
      })
    });


    // upload heroImage
    this.req.file("heroImage").upload({
      dirname: process.cwd() + "/assets/images/uploads/",
      maxBytes: 10000000
    }, async function (err, file) {
      if (err) {
        return this.res.serverError(err);
      }

      if (file.length === 0) {
        return res.badRequest("No hero image file was uploaded")
      }

      // get file name
      var filename = file[0].fd.substring(file[0].fd.lastIndexOf('/')+1);
      if (file[0].fd.includes("\\")) {
        var filename = file[0].fd.substring(file[0].fd.lastIndexOf('\\')+1);
      }

      // sync assets upload location with .tmp location so image is accessible from frontend
      var publicLocation = '/images/uploads/' + filename;
      var uploadLocation = process.cwd() + '/assets/' + publicLocation;
      var tempLocation = process.cwd() + '/.tmp/public/images/uploads/' + filename;
      fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));

      // set tileImageSrc to location in assets folder
      await Project.updateOne({id: newProject.id})
      .set({
        heroImageSrc: publicLocation
      });
    });


    // upload tile image
    this.req.file("tileImage").upload({
      dirname: process.cwd() + "/assets/images/uploads/",
      maxBytes: 10000000
    }, async function (err, file) {
      if (err) {
        return this.res.serverError(err);
      }

      if (file.length === 0) {
        return res.badRequest("No tile image file was uploaded")
      }

      // get file name
      var filename = file[0].fd.substring(file[0].fd.lastIndexOf('/')+1);
      if (file[0].fd.includes("\\")) {
        var filename = file[0].fd.substring(file[0].fd.lastIndexOf('\\')+1);
      }

      // sync assets upload location with .tmp location so image is accessible from frontend
      var publicLocation = '/images/uploads/' + filename;
      var uploadLocation = process.cwd() + '/assets/' + publicLocation;
      var tempLocation = process.cwd() + '/.tmp/public/images/uploads/' + filename;
      fs.createReadStream(uploadLocation).pipe(fs.createWriteStream(tempLocation));

      // set tileImageSrc to location in assets folder
      await Project.updateOne({id: newProject.id})
      .set({
        tileImageSrc: publicLocation
      });
    });

  }

};
