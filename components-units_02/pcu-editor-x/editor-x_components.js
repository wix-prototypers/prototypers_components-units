/* This file includes:
(1) The components array with all the components.
(2) The js code that builds and manage the demo page (index.html) */

/* Array with all the components, Note that there is a legality to the structure, so if you want to add a new
component - Please read the instructions in the README file ! */
const editorx_components = [
  {
    category: "Regular Button",
    attributes: [
      {
        attribute: "Size",
        values: ["medium", "small", "large"]
      },
      {
      attribute: "Skin",
      values: ["standard", "premium", "alert"]
    },
    {
      attribute: "Priority",
      values: ["primary", "secondary","inverted", "text-button"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-button" size="medium" skin="standard" priority="primary">Button</button>`
  },
  {
    category: "Prefix Button",
    attributes: [
      {
        attribute: "Size",
        values: ["medium", "small", "large"]
      },
      {
      attribute: "Skin",
      values: ["standard", "premium", "alert"]
    },
    {
      attribute: "Priority",
      values: ["primary", "secondary","inverted", "text-button"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-button pcu-button-affix" size="medium" skin="standard" priority="primary" icon="prefix"><img src="/pcu-editor-x/editor-x-icons/Panels/Add.svg">Prefix</button>`
  },
  {
    category: "Suffix Button",
    attributes: [
      {
        attribute: "Size",
        values: ["medium", "small", "large"]
      },
      {
      attribute: "Skin",
      values: ["standard", "premium", "alert"]
    },
    {
      attribute: "Priority",
      values: ["primary", "secondary","inverted", "text-button"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-button pcu-button-affix" size="medium" skin="standard" priority="primary" icon="suffix">
    Suffix<img src="/pcu-editor-x/editor-x-icons/Arrows/arrowDown.svg">
    </button>`
  },
  {
    category: "Icon Button",
    attributes: [{
      attribute: "Skin",
      values: ["standard", "premium", "light", "light dark"]
    },
    {
      attribute: "Priority",
      values: ["primary", "secondary", "inverted"]
    },
    {
      attribute: "Size",
      values: ["small", "medium", "large"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-button pcu-icon-button" skin="standard" priority="primary" size="small">
    <img src="/pcu-editor-x/editor-x-icons/Panels/Close.svg">
    </button>`
  },
  {
    category: "Text Button",
    attributes: [
      {
        attribute: "Size",
        values: ["small", "tiny", "medium"]
      },
      {
      attribute: "Skin",
      values: ["standard", "premium", "dark"]
    },
    {
      attribute: "Affix",
      values: ["none", "suffix","prefix"]
    },
    {
      attribute: "Weight",
      values: ["normal", "thin"]
    },
    {
      attribute: "Underline",
      values: ["none", "always"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-text-button" size="small" skin="standard" affix="none" weight="normal" underline="none">Text Button</button>`
  },
  {
    category: "Tooltips",
    htmlCode: `<div class="pcu-tooltip" dir="top">Hover Me
    <div class="pcu-popover pcu-tooltip-content">
    Enter your postal code, so postman can easier send you a mail.
    </div>
    </div>`,
    attributes: [{
      attribute: "dir",
      values: ["top", "right", "bottom", "left"]
    }]
  },
  {
    category: "Avatar - image",
    attributes: [{
        attribute: "Size",
        values: ["normal", "large"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<div class="pcu-avatar" size="normal">
    <img src="http://static.wixstatic.com/media/11062b_533069931c2c46e38d1f3c01be8edf56~mv2.jpg"></div>`
  },
]
