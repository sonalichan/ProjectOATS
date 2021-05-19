module.exports = {


    friendlyName: 'Get All Project',
  
  
    description: 'Get all created project.',
  
  
    extendedDescription:
  ``,

    exits: {
  
      success: {
        description: 'Projects found successfully.'
      },
  
      invalid: {
        responseType: 'badRequest',
        description: 'The provided post data was invalid.',
        extendedDescription: ''
      },
  
    },

    fn: async function (req, res) {
        
        var projects = await Project.find().populate('members').populate('main').populate('tags');

        this.res.json(projects);
  
    }
  
  };
  