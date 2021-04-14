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
      
      // ID associated with specific project
      projectID: {
        type: 'number',
        required: true,
        example: '1'
      },

      // Title of project
      projectTitle: {
        type: 'string',
        required: true,
        example: 'Reimagining the Capstone Archive'
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
        required: true,
        example: "youtube.com/watch?v=123456"
      },

      // Link to project website
      websiteURL: {
        type: 'string',
        required: false,
        example: "yourwebsite.com"
      },

      // Permission for iSchool to use your information on project page
      ischoolPermission: {
        type: 'boolean',
        required: true,
      },

      // Tells if this project group will participate in capstone showcase event
      eventParticipation: {
        type: 'boolean',
        required: true
      },

      // Summary of project challenge
      theChallenge: {
        type: 'string',
      },

      // Summary of project outcome
      theOutcome: {
        type: 'string',
      },

      // Summary of project impact
      theImpact: {
        type: 'string',
      },

      // Problem Statement of the project
      problemStatement: {
        type: 'string',
      },

      // Introduction of project describing background information 
      introduction:{
        type: 'string',
      },

      // Summary of project
      abstract: {
        type: 'string',
      },

      // Time project was uploaded to database
      createdAt: {
        type: 'number',
        description: 'A JS timestamp (epoch ms) representing the moment at which this user most recently interacted with the backend while logged in (or 0 if they have not interacted with the backend at all yet).',
      },

      // Time project was udpated
      updatedAt: {
        type: 'number',
      },
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a
    
    },
  
  
  };
  