/* This file includes:
(1) The components array with all the components.
(2) The js code that builds and manage the demo page (index.html) */

/* Array with all the components, Note that there is a legality to the structure, so if you want to add a new
component - Please read the instructions in the README file ! */
const wsr_components = [
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
  },
  {
    category: "Prefix Button",
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
    htmlCode: `<button class="pcu-button pcu-button-affix" skin="standard" priority="primary" icon="prefix"><img src="../pcu-wsr/wsr-icons/add-icon.svg">Prefix</button>`
  },
  {
    category: "Suffix Button",
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
    htmlCode: `<button class="pcu-button pcu-button-affix" skin="standard" priority="primary" icon="suffix">
    Suffix<img src="../pcu-wsr/wsr-icons/chevdown-icon.svg">
    </button>`
  },
  {
    category: "Loader Button",
    attributes: [
      {
        attribute: "Disabled",
        values: [false, true]
      }],
    htmlCode: `<button class="pcu-button pcu-button-loader" skin="standard" priority="primary">
                <div id="pcu-button-loader-txt" style="">
                  Loader
                </div>
                <div id="pcu-button-loader-icon" style="display: none;">
                  <svg class="pcu-button-loader-iconTop" xmlns="http://www.w3.org/2000/svg" viewBox="-9 -9 18 18">
                    <path stroke-width="3" d="M -4.4083893921935475 6.067627457812106 A 7.5 7.5 0 1 0 4.592425496802575e-16 -7.5"></path>
                  </svg>
                  <svg class="pcu-button-loader-iconBottom" xmlns="http://www.w3.org/2000/svg" viewBox="-9 -9 18 18">
                    <path stroke-width="3" d="M 4.408389392193548 6.067627457812106 A 7.5 7.5 0 0 0 4.592425496802575e-16 -7.5"></path>
                  </svg>
                </div>
              </button>`,
    jsCode: loaderButtonJs
  },
  {
    category: "Icon Button",
    attributes: [{
      attribute: "Skin",
      values: ["standard", "premium", "light", "inverted"]
    },
    {
      attribute: "Priority",
      values: ["primary", "secondary"]
    },
    {
      attribute: "Size",
      values: ["tiny", "small", "medium", "large"]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<button class="pcu-button pcu-icon-button" skin="standard" priority="primary" size="tiny">
    <img src="../pcu-wsr/wsr-icons/more-icon.svg">
    </button>`
  },
  {
    category: "Search Feild",
    htmlCode: `<div class="pcu-search-field">
    <img src="../pcu-wsr/wsr-icons/search-icon.svg">
    <input class="topbar-search-input" placeholder="Search...">
    </div>`,
    jsCode: searchFieldJs
  },
  {
    category: "Text Feild",
    htmlCode: `<input class="pcu-text-input" type="text" placeholder="This is a placeholder">`
  },
  {
    category: "Text Feild with Icon",
    attributes: [{
      attribute: "Icon",
      values: ["prefix", "suffix"]
    }],
    htmlCode: `<div class="pcu-input-text-container" icon="prefix"><input type="text" class="pcu-text-input" placeholder="This is a placeholder"><span class="pcu-input-affix">$</span></div>`
  },
  {
    category: "Text Area (rows=3)",
    htmlCode: `<textarea class="pcu-text-input pcu-textarea" placeholder="This is a placeholder" rows="3"></textarea>`
  },
  {
    category: "Text Area (Dynamic Height)",
    htmlCode: `<div type="text" class="pcu-text-input" contenteditable="true" placeholder="Write a description"></div>`
  },
  {
    category: "Rich Text Area (rows=5)",
    htmlCode: `<div class="pcu-rich-text-area">
    <div class="pcu-rich-text-header">
    <span class="pcu-edit-text-btn"><img src="../pcu-wsr/wsr-icons/bold-text.svg"></span>
    <span class="pcu-edit-text-btn"><img src="../pcu-wsr/wsr-icons/italic-text.svg"></span>
    <span class="pcu-edit-text-btn"><img src="../pcu-wsr/wsr-icons/underline-text.svg"></span>
    <span class="pcu-edit-text-btn"><img src="../pcu-wsr/wsr-icons/link-text.svg"></span>
    <span class="pcu-edit-text-btn"><img src="../pcu-wsr/wsr-icons/bullet-text.svg"></span>
    <span class="pcu-edit-text-btn"><img src="../pcu-wsr/wsr-icons/numbered-text.svg"></span>
    </div>
    <textarea class="pcu-text-input pcu-textarea" placeholder="This is a placeholder" rows="5"></textarea>
    </div>`
  },
  {
    category: "Radio Button",
    attributes: [{
      attribute: "Checked",
      values: [false, true]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<div class="pcu-radio-btn-container">
    <input class="pcu-radio-btn-input" name="" type="radio" id="radio-1"><span class="pcu-radio-btn-circle"></span><label class="pcu-radio-btn-label" for="radio-1">Default</label></div>`
  },
  {
    category: "Radio Button - 2 Rows",
    htmlCode: `<div class="pcu-radio-btn-container pcu-radio-btn-2-rows">
    <span class="pcu-radio-btn-2-rows-input">
    <input class="pcu-radio-btn-input" name="radio-btn-2-rows" type="radio" id="radio-5">
    <span class="pcu-radio-btn-circle"></span>
    </span>
    <span class="pcu-radio-btn-2-rows-content">
    <label class="pcu-radio-btn-main-label" for="radio-5">Main Label</label>
    <label class="pcu-radio-btn-sub-label" for="radio-5">sub label</label>
    </span>
    </div><div class="pcu-radio-btn-container pcu-radio-btn-2-rows">
    <span class="pcu-radio-btn-2-rows-input">
    <input class="pcu-radio-btn-input" name="radio-btn-2-rows" type="radio" id="radio-5">
    <span class="pcu-radio-btn-circle"></span>
    </span>
    <span class="pcu-radio-btn-2-rows-content">
    <label class="pcu-radio-btn-main-label" for="radio-5">Main Label</label>
    <label class="pcu-radio-btn-sub-label" for="radio-5">sub label</label>
    </span>
    </div>`
  },
  {
    category: "Checkbox",
    attributes: [{
      attribute: "Checked",
      values: [false, true]
    },
    {
      attribute: "Disabled",
      values: [false, true]
    }],
    htmlCode: `<div class="pcu-checkbox-container">
    <input id="checkbox-1" class="pcu-checkbox-input" type="checkbox">
    <label for="checkbox-1" class="pcu-checkbox-label">Unchecked</label>
    </div>`
  },
  {
    category: "Number Input",
    htmlCode: `<div class="pcu-input-number-container"><input type="number" class="pcu-number-input"></div>`
  },
  {
    category: "Number Input with Icon",
    attributes: [{
      attribute: "Icon",
      values: ["prefix", "suffix"]
    }],
    htmlCode: `<div class="pcu-input-number-container" icon="prefix"><input type="number" class="pcu-number-input"><span class="pcu-input-affix">$</span></div>`
  },
  {
    category: "Dropdown",
    htmlCode: `<div class="pcu-dropdown">
    <input class="pcu-text-input pcu-dropdown-input" type="text" placeholder="Select an option" readonly>
    <div class="pcu-dropdown-content">
    <div class="pcu-dropdown-item" value="Option 1">Option 1</div>
    <div class="pcu-dropdown-item" value="Option 2">Option 2</div>
    <div class="pcu-dropdown-item" value="Option 3">Option 3</div>
    <div class="pcu-dropdown-item" value="Option 4">Option 4</div>
    </div>
    </div>`,
    jsCode: dropdownJs
  },
  {
    category: "Badge",
    htmlCode: `<div class="pcu-dropdown" skin="badge">
    <input class="pcu-text-input pcu-dropdown-input" color="success" type="text" placeholder="Select an option" readonly value="Active">
    <div class="pcu-dropdown-content">
    <div class="pcu-dropdown-item" value="Active"><label class="pcu-badge-color-tag" color="success"></label>Active</div>
    <div class="pcu-dropdown-item" value="Inactive"><label class="pcu-badge-color-tag" color="disabled"></label>Inactive</div>
    </div>
    </div>`,
    jsCode: badgeJs
  },
  {
    category: "Float Notification",
    attributes: [{
      attribute: "Type",
      values: ["standard", "success", "warning", "destructive", "premium", "preview", "dark"]
    }],
    htmlCode: `<div class="pcu-float-notification" type="standard">
    <!-- You can add icon here OR Delete this note -->
    <span> this a standard notification (and default) </span>
    <img class="pcu-float-notification-close" src="../pcu-wsr/wsr-icons/close-icon.svg">
    </div>`,
    jsCode: floatNotificationJs
  },
  {
    category: "Avatar - placeholder",
    attributes: [{
      attribute: "Size",
      values: ["tiny", "small", "medium", "large"]
    }],
    htmlCode: `<div class="pcu-avatar" size="tiny"><img src="../pcu-wsr/wsr-icons/avatar-icon.svg"></div>`
  },
  {
    category: "Avatar - image",
    attributes: [{
      attribute: "Size",
      values: ["tiny", "small", "medium", "large"]
    }],
    htmlCode: `<div class="pcu-avatar" size="tiny">
    <img src="http://static.wixstatic.com/media/11062b_533069931c2c46e38d1f3c01be8edf56~mv2.jpg"></div>`
  },
  {
    category: "Add Image",
    htmlCode: `<div class="pcu-image-container">
    <div class="pcu-empty-image">
    <svg viewBox="0 0 31 31" fill="currentColor" width="31" height="31" class="s203">
    <path d="M15 15H0v1h15v15h1V16h15v-1H16V0h-1z"></path>
    </svg>
    </div>
    </div>`
  },
  {
    category: "Toggle Switch",
    attributes: [{
      attribute: "Size",
      values: ["large", "medium", "small"]
    }],
    htmlCode: `<label class="pcu-toggle-switch" size="large">
    <input class="pcu-toggle-input" type="checkbox">
    <span class="pcu-toggle-round"></span>
    </label>`
  }, 
  // modal
  {
    category: "Modal",
    htmlCode: `<div class="pcu-button-modal">Click Me</div>
                <div class="pcu-modal-wrapper">
                  <div class="pcu-modal-card" style="">
                    <div class="pcu-modal-card-header">
                      <div>Discard Changes?</div>
                      <img src="../pcu-wsr/wsr-icons/close-icon.svg" alt="">
                    </div>
                    <div>
                      You are about to be redirected to another page. Are you sure you want to leave this page? Your changes will not
                      be saved.
                    </div>
                    <div class="pcu-modal-card-actions">
                      <button class="pcu-button" skin="standard" priority="secondary">Cancel</button>
                      <button class="pcu-button" skin="standard" priority="primary">Discard</button>
                    </div>
                  </div>
                </div>`,
    jsCode: popoverMenuJs
  },
  {
    category: "Popover Menu",
    htmlCode: `<div class="pcu-popover-menu" dir="top">Click Me
    <div class="pcu-popover pcu-popover-menu-content">
    <span class="pcu-popover-menu-item">Add New Items</span>
    <span class="pcu-popover-menu-item">Edit This Item</span>
    <span class="pcu-popover-menu-divider"></span>
    <span class="pcu-popover-menu-item"><img src="../pcu-wsr/wsr-icons/edit-icon.svg">Delete This Item</span>
    </div>
    </div>`,
    attributes: [{
      attribute: "dir",
      values: ["top", "right", "bottom", "left"]
    }],
    jsCode: popoverMenuJs
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
    category: "Info Tooltip",
    htmlCode: `<div class="pcu-tooltip" dir="top"><img src="../pcu-wsr/wsr-icons/info-icon.svg">
    <div class="pcu-popover pcu-tooltip-content">
    Enter your postal code, so postman can easier send you a mail.
    </div>
    </div>`
  },
  {
    category: "Segmented Toggle - Text",
    htmlCode: `<div class="pcu-segmented-toggle">
    <input class="pcu-segmented-toggle-option" id="segmented-toggle-1" value="hide" option="1" type="radio" name="segmented-toggle" checked="">
    <label class="pcu-segmented-toggle-labels" for="segmented-toggle-1">Option 1</label>
    <input class="pcu-segmented-toggle-option" id="segmented-toggle-2" value="show" option="2" type="radio" name="segmented-toggle">
    <label class="pcu-segmented-toggle-labels" for="segmented-toggle-2">Option 2</label>
    </div>`
  },
  {
    category: "Segmented Toggle - Text with Icons",
    htmlCode: `<div class="pcu-segmented-toggle">
    <input class="pcu-segmented-toggle-option" id="icon-text-toggle-1" value="hide" option="1" type="radio" name="icon-text-segmented-toggle" checked="">
    <label class="pcu-segmented-toggle-labels" for="icon-text-toggle-1"><span class="pcu-segmented-toggle-preix">%</span><span>Option 1</span></label>
    <input class="pcu-segmented-toggle-option" id="icon-text-toggle-2" value="show" option="2" type="radio" name="icon-text-segmented-toggle">
    <label class="pcu-segmented-toggle-labels" for="icon-text-toggle-2"><span class="pcu-segmented-toggle-preix"><img src="../pcu-wsr/wsr-icons/edit-icon.svg"></span><span>Option 2</span></label>
    </div>`
  },
  {
    category: "Segmented Toggle - Icons",
    htmlCode: `<div class="pcu-segmented-toggle wsr-icons-toggle">
    <input class="pcu-segmented-toggle-option" id="icon-1" value="hide" option="1" type="radio" name="icon-segmented-toggle" checked="">
    <label class="pcu-segmented-toggle-labels" for="icon-1"><span class="pcu-segmented-toggle-preix">%</span></label>
    <input class="pcu-segmented-toggle-option" id="icon-2" value="show" option="2" type="radio" name="icon-segmented-toggle">
    <label class="pcu-segmented-toggle-labels" for="icon-2"><span class="pcu-segmented-toggle-preix"><img src="../pcu-wsr/wsr-icons/edit-icon.svg"></span></label>
    </div>`
  },
  {
    category: "Date Picker",
    htmlCode: datePickerHtml,
    jsCode: datePickerJs
  },
  {
    category: "Time Picker",
    htmlCode: `<div class="pcu-input-time-container" icon="suffix">
    <span class="pcu-input-time-btn pcu-input-time-up"><svg viewBox="0 0 8 5" fill="currentColor" width="8" height="5">
    <path d="M0 4L0.8 4.8 4 1.5 7.3 4.8 8 4 4 0z"></path>
    </svg></span>
    <span class="pcu-input-time-btn pcu-input-time-down"><svg viewBox="0 0 8 5" fill="currentColor" width="8" height="5">
    <path d="M4 3.2L0.7 0 0 0.8 4 4.8 8 0.8 7.2 0z"></path>
    </svg></span>
    <input class="pcu-text-input" type="text" placeholder="This is a placeholder" value="12:00">
    <span class="pcu-input-affix">PM</span>
    </div>`
  },
  {
    category: "Table",
    htmlCode: tableHtml,
    jsCode: tableJs
  }
]
