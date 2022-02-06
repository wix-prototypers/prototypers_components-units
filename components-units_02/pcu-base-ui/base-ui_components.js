/* This file includes:
(1) The components array with all the components.
(2) The js code that builds and manage the demo page (index.html) */

/* Array with all the components, Note that there is a legality to the structure, so if you want to add a new
component - Please read the instructions in the README file ! */
const baseui_components = [
  {
    category: "Regular Button",
    attributes: [{
      attribute: "Skin",
      values: ["standard", "premium", "light", "inverted"]
    },
    {
      attribute: "Priority",
      values: ["primary", "secondary"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-button" skin="standard" priority="primary">Button</button>`
  }
]
