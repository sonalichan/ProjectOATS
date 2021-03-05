/**
 * ProjectTeam.js
 *
 * Information for each project team in Capstone.
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      projectTitle: {
        type: 'string',
        required: true,
        description: "Title of project",
        maxLength: 200, 
        example: "Reimagining the iSchool Capstone Archive"
      },  

      projectID: {
        type: 'string',
        required: true,
        description: 'Links student to their project through the ID',
        isUnique: true
      },

      sponsorOrganization: {
        type: 'string',
        required: true,
        description: "Name of the sponsored organization the group is working with. N/A for non-sponsored",
        maxLength: 120, 
        example: 'University of Washington'
      },
      
      tileImage: {
        type: 'ref',
        required: true,
        description: "Image for project tile in archive browsing page",
        columnType: 'mediumblob'
      },

      posterImage: {
        type: 'ref',
        required: false,
        description: "Image for project poster on project display page",
        columnType: 'mediumblob'
      },

      projectPoster: {
        type: 'ref',
        required: false,
        description: "Uploaded file of project poster",
        columnType: 'mediumblob'
      },

      projectVideo: {
          type: 'string',
          required: true,
          description: "Youtube link to video about project",
          example: "youtube.com/our-project"
      },

      websiteURL: {
        type: 'string',
        required: false,
        description: "URL of project website if group has made one",
        example: 'exampleproject.com'
      },

      iSchoolPermission: {
        type: 'boolean',
        required: true,
        description: "Gives permission for project to be included on iSchool website",
      },

      eventParticipation: {
        type: 'boolean',
        required: true,
        description: "Yes/No for participating in the Capstone Event",
      },

      theChallenge: {
        type: 'string',
        required: false,
        description: "The challenge of completing the project",
      },

      theOutcome: {
        type: 'string',
        required: false,
        description: "The outcome from completing the project",
      },

      theImpact: {
        type: 'string',
        required: false,
        description: "The impact of the project due to its completion",
      },

      problemStatement: {
        type: 'string',
        required: false,
        description: "The problem statement of your team's project"
      },

      introduction: {
        type: 'string',
        required: false,
        description: "A brief paragrpah summarizing what the project is"
      },

      isOldProject: {
        type: 'boolean',
        required: true,
        description: "True/False if the project is before the new website design or not"
      },

      abstract: {
          type: 'string',
          required: false,
          description: "Overview paragraph of project, for old projects only"
      },

      keyFeatures: {
          type: 'string',
          required: false,
          description: "Bullet points or paragrpah of key features from project"
      },

      keyFeaturesImage: {
          type: 'ref',
          required: false,
          description: "Image next to key features list/paragraph",
          columnType: 'mediumblob'
      },

      productJourney: {
          type: 'string',
          required: false,
          description: "Bullet points or paragraph describing the journey of project/product"
      },

      productJourneyImage: {
        type: 'ref',
        required: false,
        description: "Image next to product journey list/paragraph",
        columnType: 'mediumblob'
    },

    projectTags: {
        type: 'json',
        required: true,
        description: "Tags for the project that are standardized across all projects"
    },

    projectTechnologies: {
        type: 'json',
        required: false,
        description: "List of the technologies used for project"
    }
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
  