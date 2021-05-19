/**
 * Student.js
 *
 * Information for each student in Capstone.
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

      // The student's first name
      firstName: {
        type: 'string',
        required: true,
        description: 'Full representation of the student\'s first name.',
        maxLength: 120,
        example: 'Mary'
      },

      // The student's last name
      lastName: {
        type: 'string',
        required: true,
        description: 'Full representation of the student\'s last name.',
        maxLength: 120,
        example: 'Sue'
      },

      // The url for a student's LinkedIn profile
      linkedinURL: {
        type: 'string',
        required: false,
        description: 'Link to student\'s LinkedIn profile',
        example: 'https://www.linkedin.com/in/Mary-Sue/' 
      },

      // A student's project role
      role: {
          type: 'string',
          required: true,
          description: 'Students\' role in project',
          example: 'Developer'
      },

      program: {
        type: 'string',
        required: true,
        description: 'Program that student is in',
        example: 'INFO'
      },

      // Student's decision to opt out of having their information on the Capstone page or not
      optOut: {
        type: 'boolean',
        required: true,
        description: 'Decision of student if they want to opt out of having their information on the Capstone page',
      },

      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a
      
      // One to many relationship with Student being the child of ProjectTeam
      owner: {
        model: 'project'
      },
    },
  
  
  };
  