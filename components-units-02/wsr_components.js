/* This file includes:
(1) The components array with all the components.
(2) The js code that builds and manage the demo page (index.html) */

/* Array with all the components, Note that there is a legality to the structure, so if you want to add a new
component - Please read the instructions in the README file ! */
const components = [
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
    htmlCode: `<button class="wsr-button" skin="standard" priority="primary">Button</button>`
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
    htmlCode: `<button class="wsr-button wsr-button-affix" skin="standard" priority="primary" icon="prefix"><img src="./wsr-icons/add-icon.svg">Prefix</button>`
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
    htmlCode: `<button class="wsr-button wsr-button-affix" skin="standard" priority="primary" icon="suffix">
    Suffix<img src="./wsr-icons/chevdown-icon.svg">
    </button>`
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
    htmlCode: `<button class="wsr-button wsr-icon-button" skin="standard" priority="primary" size="tiny">
    <img src="./wsr-icons/more-icon.svg">
    </button>`
  },
  {
    category: "Text Feild",
    htmlCode: `<input class="wsr-text-input" type="text" placeholder="This is a placeholder">`
  },
  {
    category: "Text Feild with Icon",
    attributes: [{
      attribute: "Icon",
      values: ["prefix", "suffix"]
    }],
    htmlCode: `<div class="wsr-input-text-container" icon="prefix"><input type="text" class="wsr-text-input" placeholder="This is a placeholder"><span class="wsr-input-affix">$</span></div>`
  },
  {
    category: "Text Area (rows=3)",
    htmlCode: `<textarea class="wsr-text-input wsr-textarea" placeholder="This is a placeholder" rows="3"></textarea>`
  },
  {
    category: "Text Area (Dynamic Height)",
    htmlCode: `<div type="text" class="wsr-text-input" contenteditable="true" placeholder="Write a description"></div>`
  },
  {
    category: "Rich Text Area (rows=5)",
    htmlCode: `<div class="wsr-rich-text-area">
    <div class="wsr-rich-text-header">
    <span class="wsr-edit-text-btn"><img src="./wsr-icons/bold-text.svg"></span>
    <span class="wsr-edit-text-btn"><img src="./wsr-icons/italic-text.svg"></span>
    <span class="wsr-edit-text-btn"><img src="./wsr-icons/underline-text.svg"></span>
    <span class="wsr-edit-text-btn"><img src="./wsr-icons/link-text.svg"></span>
    <span class="wsr-edit-text-btn"><img src="./wsr-icons/bullet-text.svg"></span>
    <span class="wsr-edit-text-btn"><img src="./wsr-icons/numbered-text.svg"></span>
    </div>
    <textarea class="wsr-text-input wsr-textarea" placeholder="This is a placeholder" rows="5"></textarea>
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
    htmlCode: `<div class="wsr-radio-btn-container">
    <input class="wsr-radio-btn-input" name="" type="radio" id="radio-1"><span class="wsr-radio-btn-circle"></span><label class="wsr-radio-btn-label" for="radio-1">Default</label></div>`
  },
  {
    category: "Radio Button - 2 Rows",
    htmlCode: `<div class="wsr-radio-btn-container wsr-radio-btn-2-rows">
    <span class="wsr-radio-btn-2-rows-input">
    <input class="wsr-radio-btn-input" name="radio-btn-2-rows" type="radio" id="radio-5">
    <span class="wsr-radio-btn-circle"></span>
    </span>
    <span class="wsr-radio-btn-2-rows-content">
    <label class="wsr-radio-btn-main-label" for="radio-5">Main Label</label>
    <label class="wsr-radio-btn-sub-label" for="radio-5">sub label</label>
    </span>
    </div><div class="wsr-radio-btn-container wsr-radio-btn-2-rows">
    <span class="wsr-radio-btn-2-rows-input">
    <input class="wsr-radio-btn-input" name="radio-btn-2-rows" type="radio" id="radio-5">
    <span class="wsr-radio-btn-circle"></span>
    </span>
    <span class="wsr-radio-btn-2-rows-content">
    <label class="wsr-radio-btn-main-label" for="radio-5">Main Label</label>
    <label class="wsr-radio-btn-sub-label" for="radio-5">sub label</label>
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
    htmlCode: `<div class="wsr-checkbox-container">
    <input id="checkbox-1" class="wsr-checkbox-input" type="checkbox">
    <label for="checkbox-1" class="wsr-checkbox-label">Unchecked</label>
    </div>`
  },
  {
    category: "Number Input",
    htmlCode: `<div class="wsr-input-number-container"><input type="number" class="wsr-number-input"></div>`
  },
  {
    category: "Number Input with Icon",
    attributes: [{
      attribute: "Icon",
      values: ["prefix", "suffix"]
    }],
    htmlCode: `<div class="wsr-input-number-container" icon="prefix"><input type="number" class="wsr-number-input"><span class="wsr-input-affix">$</span></div>`
  },
  {
    category: "Dropdown",
    htmlCode: `<div class="wsr-dropdown">
    <input class="wsr-text-input wsr-dropdown-input" type="text" placeholder="Select an option" readonly>
    <div class="wsr-dropdown-content">
    <div class="wsr-dropdown-item" value="Option 1">Option 1</div>
    <div class="wsr-dropdown-item" value="Option 2">Option 2</div>
    <div class="wsr-dropdown-item" value="Option 3">Option 3</div>
    <div class="wsr-dropdown-item" value="Option 4">Option 4</div>
    </div>
    </div>`,
    jsCode: dropdownJs
  },
  {
    category: "Badge",
    htmlCode: `<div class="wsr-dropdown" skin="badge">
    <input class="wsr-text-input wsr-dropdown-input" color="success" type="text" placeholder="Select an option" readonly value="Active">
    <div class="wsr-dropdown-content">
    <div class="wsr-dropdown-item" value="Active"><label class="wsr-badge-color-tag" color="success"></label>Active</div>
    <div class="wsr-dropdown-item" value="Inactive"><label class="wsr-badge-color-tag" color="disabled"></label>Inactive</div>
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
    htmlCode: `<div class="wsr-float-notification" type="standard">
    <!-- Yoc can add icon here OR Delete this note -->
    <span> this a standard notification (and default) </span>
    <img class="wsr-float-notification-close" src="./wsr-icons/close-icon.svg">
    </div>`,
    jsCode: floatNotificationJs
  },
  {
    category: "Avatar - placeholder",
    attributes: [{
        attribute: "Size",
        values: ["tiny", "small", "medium", "large"]
    }],
    htmlCode: `<div class="wsr-avatar" size="tiny"><img src="./wsr-icons/avatar-icon.svg"></div>`
  },
  {
    category: "Avatar - image",
    attributes: [{
        attribute: "Size",
        values: ["tiny", "small", "medium", "large"]
    }],
    htmlCode: `<div class="wsr-avatar" size="tiny">
    <img src="http://static.wixstatic.com/media/11062b_533069931c2c46e38d1f3c01be8edf56~mv2.jpg"></div>`
  },
  {
    category: "Add Image",
    htmlCode: `<div class="wsr-image-container">
    <div class="wsr-empty-image">
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
    htmlCode: `<label class="wsr-toggle-switch" size="large">
    <input class="wsr-toggle-input" type="checkbox">
    <span class="wsr-toggle-round"></span>
    </label>`
  }
]

let comp = ''; // new component
let dropdown = ''; // attribute dropdown
window.onload = (event) => {
  // build table with for each component
  for (i = 0; i < components.length; i++) {
    let attributesHeader = '';
    let { category, attributes, htmlCode, jsCode } = components[i];
    if (attributes) { // there are attributes
      attributesHeader = '';
      dropdown = '';
      for (k = 0; k < attributes.length; k++) {
        let { attribute, values } = attributes[k];
        let dropdownOptions = '';
        for (j = 0; j < values.length; j++) {
          dropdownOptions += `<div class="attribute-dropdown-item ${j==0 ? 'selected':''}" value="${values[j]}">${values[j]}</div>`
        }
        dropdown += `<div class="attribute-container"><span>${attribute}:</span><div class="attribute-dropdown" for-attribute=${attribute} relevant-element='${category.toLowerCase().replaceAll(' ','-')}'>
        <input class="attribute-dropdown-input" type="text" value="${attributes[k].values[0]}" readonly="">
        <div class="attribute-dropdown-content">
        ${dropdownOptions}
        </div>
        </div></div>`;
        attributesHeader += `<th>${attribute}</th>`
      }
      comp = `<div class="component-item" for="${category}">
      <span>${category}</span>
      <table>
      <tbody>
      <tr>
      <th>PREVIEW</th>
      <th>ATTRIBUTES</th>
      <th>HTML CODE</th>
      ${jsCode ? `<th>JS CODE</th>` : ``}
      </tr>
      <tr>
      <td class='preview-element' name='${category.toLowerCase().replaceAll(' ','-')}'>${htmlCode.replace(/[\r\n\t]+/g,'')}</td>
      <td class="td-attributes">${dropdown}</td>
      <td class='code-element' name='${category.toLowerCase().replaceAll(' ','-')}'><xmp>${htmlCode}</xmp></td>
      ${jsCode ? `<td><xmp>${jsCode}</xmp></td>` : ``}
      </tr>
      </tbody>
      </table>
      </div>`;
    }
    else { // there are not attributes
      comp = `<div class="component-item" for="${category}">
      <span>${category}</span>
      <table>
      <tbody>
      <tr>
      <th>PREVIEW</th>
      <th>HTML CODE</th>
      ${jsCode ? `<th>JS CODE</th>` : ``}
      </tr>
      <tr>
      <td class='preview-element' name='${category.toLowerCase().replaceAll(' ','-')}'>${htmlCode.replaceAll('\n','')}</td>
      <td class='code-element' name='${category.toLowerCase().replaceAll(' ','-')}'><xmp>${htmlCode}</xmp></td>
      ${jsCode ? `<td><xmp>${jsCode}</xmp></td>` : ``}
      </tr>
      </tbody>
      </table>
      </div>`;
    }
    document.querySelector(`.components-area`).insertAdjacentHTML('beforeend', comp);
  }
  tablesEvents();
  wsrComponentsEvents();
}

/* All events on the demo page - search, open attribute dropdown, select new attribute, copy code */
function tablesEvents() {
  copyCode();
  document.querySelector('#main-search').addEventListener('input', function(e) {
    const val = this.value;
    let count = 0;
    document.querySelector('.search-empty').classList.add('hide');
    document.querySelectorAll('.component-item').forEach(function(component) {
      component.classList.add('hide');
      const componentName = component.getAttribute('for');
      if (componentName.toLowerCase().includes(val.toLowerCase())) {
        component.classList.remove('hide');
        count++;
      }
    });
    if (count < 1) {
      document.querySelector('.search-empty').classList.remove('hide');
    }
  });

  // dropdown focus
  document.querySelectorAll('.attribute-dropdown .attribute-dropdown-input').forEach(function(elm) {
    elm.addEventListener('focus', function(e) {
      document.querySelectorAll('.attribute-dropdown').forEach(function(dropdowns) {
        dropdowns.classList.remove('open-dropdown');
      })
      e.target.parentElement.classList.add('open-dropdown')
    });
  });

  // select attribute dropdown item
  document.querySelectorAll('.attribute-dropdown-item').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(e) {
      const input = e.target.parentElement.previousElementSibling;
      // input.value = e.target.getAttribute('value');
      input.setAttribute('value', e.target.getAttribute('value'));
      currentvalue = input.getAttribute('value');
      e.target.parentElement.querySelectorAll('.attribute-dropdown-item').forEach(function(sibilingItem) {
        sibilingItem.classList.remove('selected');
      })
      e.target.classList.add('selected');
      e.target.parentElement.parentElement.classList.remove('open-dropdown');
      updateTheElement(input.parentElement, input.value);
    });

    // change the component when hovering on attribute dropdown item
    let currentvalue = '';
    dropdownItem.addEventListener('mouseenter', function(e) {
      const input = e.target.parentElement.previousElementSibling;
      currentvalue = input.getAttribute('value');
      updateTheElement(input.parentElement, e.target.getAttribute('value'))
    });

    // revert the component to the last selected attribute
    dropdownItem.addEventListener('mouseout', function(e) {
      const input = e.target.parentElement.previousElementSibling;
      updateTheElement(input.parentElement, currentvalue)
    });

    // close dropdown
    document.addEventListener('click', function(e) {
      if (!e.target.classList.contains('attribute-dropdown-input')) {
        document.querySelectorAll('.attribute-dropdown').forEach(function(dropdowns) {
          dropdowns.classList.remove('open-dropdown');
        })
      }
    });
  });
}

// Update the component and its js code after selecting a new attribute
function updateTheElement(dropdownChanged, newValue) {
  let previewElement = document.querySelector(`.preview-element[name=${dropdownChanged.getAttribute('relevant-element')}]`).childNodes[0];
  let elementInputChild = previewElement.querySelector('input');
  let attr = dropdownChanged.getAttribute('for-attribute').toLowerCase();
  if (attr == "disabled" || attr == "checked") {
    elementInputChild ? elementInputChild.setAttribute(attr, newValue) : previewElement.setAttribute(attr, newValue);
    if(newValue == "false") {
      elementInputChild ? elementInputChild.removeAttribute(attr) : previewElement.removeAttribute(attr);
    }
  } else {
    previewElement.setAttribute(attr, newValue);
  }
  let codeElement = document.querySelector(`.code-element[name=${dropdownChanged.getAttribute('relevant-element')}]`);
  codeElement.innerHTML = `<xmp>${previewElement.outerHTML}</xmp>`;
  copyCode();
}

// Copy the html / js code from the table
function copyCode() {
  document.querySelectorAll('xmp').forEach(function(codeElm) {
    codeElm.addEventListener('click', function(e) {
      codeElm.classList.add('copied');
      setTimeout(function() {
        codeElm.classList.remove('copied');
      }, 1500);
      if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(codeElm);
        range.select();
      } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(codeElm);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
      }
    });
  });
}
