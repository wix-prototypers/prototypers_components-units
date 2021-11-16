// This code builds the index.html view (tables, preview ...) and functionality

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
