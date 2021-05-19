/**
 * TODO: change the component name to match--use kebab-case here
 * This is how you will reference your component
 * 
 * <project-card>
 * -----------------------------------------------------------------------------
 * A button with a built-in loading spinner.
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

// TODO: change the component name to match file name--use camelCase here
parasails.registerComponent('projectCard', {
    //  ╔═╗╦═╗╔═╗╔═╗╔═╗
    //  ╠═╝╠╦╝║ ║╠═╝╚═╗
    //  ╩  ╩╚═╚═╝╩  ╚═╝
    props: [
        "url",
        "src",
        "alt",
        "name",
        "sponsored",
        "description",
        "year"
    ],
  
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: function (){
      return {
        //…
      };
    },
  
    //  ╦ ╦╔╦╗╔╦╗╦
    //  ╠═╣ ║ ║║║║
    //  ╩ ╩ ╩ ╩ ╩╩═╝
    template: `
    <div :onclick="url" class="d-flex  justify-content-center" style="padding-left: 50px; padding-top: 20px;">
      <a id="project-card" :href="url" >  
        <img :src="src" :alt="alt" style="width: 300px; height: 200px; border-radius: 10px;">
        <p style="color: black; font-weight: bold; font-size: 20px; line-height: 23px; padding-top: 10px;"><strong>{{name}}</strong><p>
        <span style="color: #727272; font-size: 20px; font-weight: bold; line-height: 23px;">{{year}}</span>
        <button style="border: 1px solid #5C3CA5; box-sizing: border-box; border-radius: 20px; position: relative; left: 20px;"><span :v-if="sponsored" style="color:#5C3CA5 ; font-size: 18px; font-style: italic; line-height: 21px;">sponsored</span></button>
        <p style="width: 300px; color: black; font-family: Roboto; font-style: italic; font-sze: 18px; line-height: 21px;">{{description}}</p>
      </a>
    </div>
    `,
    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {
      //…
    },
    mounted: async function(){
      //…
    },
    beforeDestroy: function() {
      //…
    },
  
    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
    }
  });
  