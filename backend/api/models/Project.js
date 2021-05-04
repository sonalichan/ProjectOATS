/**
 * Project.js
 *
 * All information from form for a given project.
 */

 module.exports = {
    
    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      // Title of project
      projectTitle: {
        type: 'string',
        required: true,
        example: 'Reimagining the Capstone Archive'
      },

      projectSubtitle: {
        type: 'string',
        required: true
      },
      
      // Tells if a project is apart of the old project archive or not
      oldProject: {
        type: 'boolean',
        required: true,
      },

      // Tells if a project is a sponsored project or not
      sponsored: {
        type: 'boolean',
        required: true
      },

      // Link to project video
      projectVideo: {
        type: 'string',
        example: "youtube.com/watch?v=123456"
      },

      // Link to project website
      websiteURL: {
        type: 'string',
        example: "yourwebsite.com"
      },

      // Summary of project challenge
      challenge: {
        type: 'string',
      },

      // Summary of project outcome
      outcome: {
        type: 'string',
      },

      // Summary of project impact
      impact: {
        type: 'string',
      },

      nextSteps: {
        type: 'string'
      },

      // Summary of project
      abstract: {
        type: 'string',
      },



      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a

      members: {
        collection: 'student',
        via: 'owner'
      },

      mainContent: {
        collection: 'maincontent',
        via: 'owner'
      }
    
    },
  
  
  };
  