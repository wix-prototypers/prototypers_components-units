/* This file allows us to save long code (html / js) separately.
So you can define a variable with the long code and use it in wsr_components.js file.
Use a consistent name depending on the component ! */

 const loaderButtonJs = `
document.querySelectorAll('.pcu-button-loader').forEach(function (elm) {
  elm.addEventListener('click', function (e) {
    var loaderTxt = document.getElementById("pcu-button-loader-txt");
    var loaderIcon = document.getElementById("pcu-button-loader-icon");
    loaderTxt.style.display = "none";
    loaderIcon.style.display = "block";
    setTimeout(() => {
      loaderTxt.style.display = "block";
      loaderIcon.style.display = "none";
    }, 2000);
  });
});
`

const dockingPanelHTML=`
<div class="pcu-docking-panel-outer">
      <div class="pcu-docking-panel-inner">
        <div data-direction="top" class="pcu-docking-direction top">
          <div data-hook="top-direction" class="pcu-docking-point"></div>
        <div class="pcu-docking-line"></div>
        </div>
        <div class="pcu-docking-rail left">
          <div data-direction="left" class="pcu-docking-direction left ">
            <div data-hook="left-direction" class="pcu-docking-point"></div>
            <div class="pcu-docking-line"></div>
          </div>
        </div>
        <div class="pcu-docking-element center">
          <div class="pcu-docking-plane-button-outer ">
            <div class="pcu-docking-plane-button">
              <div class="pcu-docking-point"></div>
            </div>
        </div>
      </div>
      <div class="pcu-docking-rail right">
        <div data-direction="right" class="pcu-docking-direction right ">
          <div data-hook="right-direction" class="pcu-docking-point"></div>
            <div class="pcu-docking-line"></div>
          </div>
        </div>
        <div data-direction="bottom" class="pcu-docking-direction bottom ">
          <div data-hook="bottom-direction" class="pcu-docking-point"></div>
          <div class="pcu-docking-line"></div>
        </div>
      </div>
    </div>
`
const dockingPanelJs=`
document.querySelectorAll('.docking-point').forEach(function(elm) {
  elm.addEventListener('click', function(e) {
    if(e.target.parentElement.classList.contains('direction-docked')){
      e.target.parentElement.classList.remove('direction-docked')
    }
    else{
      e.target.parentElement.classList.add('direction-docked')
    }
  });
});
`
const searchFieldJs = `document.querySelectorAll('.topbar-search-input').forEach(function(elm) {
  elm.addEventListener('focus', function(e) {
    e.target.parentElement.classList.add('pcu-field-has-focus')
  });

  elm.addEventListener('focusout', function(e) {
    e.target.parentElement.classList.remove('pcu-field-has-focus')
  });
});`

const dropdownJs = `// dropdown focus
document.querySelectorAll('.pcu-dropdown .pcu-text-input').forEach(function(elm) {
  elm.addEventListener('focus', function(e) {
    e.target.parentElement.classList.add('pcu-field-has-focus')
  });
});

// select dropdown item
document.querySelectorAll('.pcu-dropdown-item').forEach(function(dropdownItem) {
  dropdownItem.addEventListener('click', function(e) {
    const input = e.target.parentElement.previousElementSibling;
    input.value = e.target.getAttribute('value');
    e.target.parentElement.querySelectorAll('.pcu-dropdown-item').forEach(function(sibilingItem) {
      sibilingItem.classList.remove('selected');
    })
    e.target.classList.add('selected');
    e.target.parentElement.parentElement.classList.remove('pcu-field-has-focus');
  });

  // close dropdown
  document.addEventListener('click', function(e) {
    if(!e.target.classList.contains('pcu-dropdown-input')) {
      document.querySelectorAll('.pcu-dropdown').forEach(function(dropdowns) {
        dropdowns.classList.remove('pcu-field-has-focus');
      })
    }
  });
});`

const badgeJs = `// dropdown focus
document.querySelectorAll('.pcu-dropdown .pcu-text-input').forEach(function(elm) {
  elm.addEventListener('focus', function(e) {
    e.target.parentElement.classList.add('pcu-field-has-focus')
  });
});

// select dropdown item & and cahnge the background color
document.querySelectorAll('.pcu-dropdown[skin="badge"] .pcu-dropdown-content .pcu-dropdown-item').forEach(function(dropdownItem) {
  dropdownItem.addEventListener('click', function(e) {
    const input = e.target.parentElement.previousElementSibling;
    input.value = e.target.getAttribute('value');
    e.target.parentElement.querySelectorAll('.pcu-dropdown-item').forEach(function(sibilingItem) {
      sibilingItem.classList.remove('selected');
    })
    e.target.classList.add('selected');
    e.target.parentElement.parentElement.classList.remove('pcu-field-has-focus');
    let color = e.target.children[0].getAttribute('color');
    input.setAttribute('color', color)
  });
});`

const floatNotificationJs = `// remove this notification (after clicking on the x icon)
document.querySelectorAll('.pcu-float-notification .pcu-float-notification-close').forEach(function(elm) {
  elm.addEventListener('click', function(e) {
    e.target.parentElement.classList.add('remove-notification')
  });
});`

const modalJs = `
function displayModal(opacity, zIndex, modalId) {
  let modalSelector ='';

  if (opacity == 0) {
    modalSelector = ".pcu-modal-wrapper"
  }
  if (opacity == 1) {
    modalSelector = "#" + modalId
  }

  document.querySelectorAll(\`\${modalSelector}\`).forEach(function (modal) {
    modal.style.opacity = opacity;
    modal.style.zIndex = zIndex;
  });
}

function animationModalCard(scaleVal) {
  document.querySelectorAll('.pcu-modal-card').forEach(function (card) {
    card.style.transform = \`scale(\${scaleVal})\`
  });
}

displayModal(0, -1)

document.querySelectorAll('.pcu-button-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let modalId = btn.getAttribute("openmodalid");
    displayModal(1, 5000, modalId);
    animationModalCard("1")
  });
});

document.querySelectorAll('.closeModal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    displayModal(0, -1)
    animationModalCard("0.93")
  });
});
`

const popoverMenuJs = `document.querySelectorAll('.pcu-popover-menu').forEach(function(popoverMenu) {
  popoverMenu.addEventListener('click', function (e) {
    this.classList.toggle('pcu-open-popover');
  });
});`

const datePickerHtml = `  <div class="pcu-dropdown pcu-date-picker">
<span class="pcu-input-affix"><svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
<path d="M19,6 L17,6 L17,7 L16,7 L16,6 L8,6 L8,7 L7,7 L7,6 L5,6 L5,9 L19,9 L19,6 Z M19,10 L5,10 L5,19 L19,19 L19,10 Z M17,5 L19,5 C19.5522847,5 20,5.44771525 20,6 L20,19 C20,19.5522847 19.5522847,20 19,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,6 C4,5.44771525 4.44771525,5 5,5 L7,5 L7,4 L8,4 L8,5 L16,5 L16,4 L17,4 L17,5 Z">
</path>
</svg></span>
<input class="pcu-text-input pcu-dropdown-input" type="text" placeholder="Select an option" value="09/14/2021" readonly>
<div class="pcu-dropdown-content">
<div class="pcu-date-picker-content">
<div class="pcu-date-picker-header">
<button class="pcu-date-picker-btn pcu-date-picker-prev-month"><svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" class="s316">
<path d="M9.12210136,12 L16.0596461,18.9393399 C16.352647,19.2321253 16.3528218,19.706999 16.0600364,20 C15.7672509,20.293001 15.2923772,20.2931757 14.9993763,20.0003903 L7,12 L14.9993763,3.99960971 C15.2923772,3.70682428 15.7672509,3.70699902 16.0600364,4 C16.3528218,4.29300098 16.352647,4.76787468 16.0596461,5.0606601 L9.12210136,12 Z">
</path>
</svg></button>
<span class="pcu-date-picker-month-year">June 2021</span>
<button class="pcu-date-picker-btn pcu-date-picker-next-month"><svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px" class="s316">
<path d="M8.22083109,4 C8.51380539,3.70718788 8.9886791,3.70731936 9.28149122,4.00029365 L17.2763084,12 L9.28047689,19.9997063 C8.98766478,20.2926806 8.51279106,20.2928121 8.21981676,20 C7.92684246,19.7071879 7.92671099,19.2323142 8.21952311,18.9393399 L15.1555752,12 L8.22053744,5.06066013 C7.92772532,4.76768583 7.92785679,4.29281212 8.22083109,4 Z">
</path>
</svg></button>
</div>
<div class="table-cont front">
<table>
<thead>
<tr>
<td>Mo</td>
<td>Tu</td>
<td>We</td>
<td>Th</td>
<td>Fr</td>
<td>Sa</td>
<td>Su</td>
</tr>
</thead>
<tbody>
<tr class="row-1">
<td class="pcu-calendar-day gray-day" day="30"><span>30</span></td>
<td class="pcu-calendar-day gray-day" day="31"><span>31</span></td>
<td class="pcu-calendar-day" day="01"><span>1</span></td>
<td class="pcu-calendar-day" day="02"><span>2</span></td>
<td class="pcu-calendar-day" day="03"><span>3</span></td>
<td class="pcu-calendar-day" day="04"><span>4</span></td>
<td class="pcu-calendar-day" day="05"><span>5</span></td>
<td class="pcu-calendar-day" day="06"><span>6</span></td>
<td class="pcu-calendar-day" day="07"><span>7</span></td>
<td class="pcu-calendar-day" day="08"><span>8</span></td>
<td class="pcu-calendar-day" day="09"><span class="today-indication">9</span></td>
<td class="pcu-calendar-day" day="10"><span>10</span></td>
<td class="pcu-calendar-day" day="11"><span>11</span></td>
<td class="pcu-calendar-day" day="12"><span>12</span></td>
<td class="pcu-calendar-day" day="13"><span>13</span></td>
<td class="pcu-calendar-day selected" day="14"><span>14</span></td>
<td class="pcu-calendar-day" day="15"><span>15</span></td>
<td class="pcu-calendar-day" day="16"><span>16</span></td>
<td class="pcu-calendar-day" day="17"><span>17</span></td>
<td class="pcu-calendar-day" day="18"><span>18</span></td>
<td class="pcu-calendar-day" day="19"><span>19</span></td>
<td class="pcu-calendar-day" day="20"><span>20</span></td>
<td class="pcu-calendar-day" day="21"><span>21</span></td>
<td class="pcu-calendar-day" day="22"><span>22</span></td>
<td class="pcu-calendar-day" day="23"><span>23</span></td>
<td class="pcu-calendar-day" day="24"><span>24</span></td>
<td class="pcu-calendar-day" day="25"><span>25</span></td>
<td class="pcu-calendar-day" day="26"><span>26</span></td>
<td class="pcu-calendar-day" day="27"><span>27</span></td>
<td class="pcu-calendar-day" day="28"><span>28</span></td>
<td class="pcu-calendar-day" day="29"><span>29</span></td>
<td class="pcu-calendar-day" day="30"><span>30</span></td>
<td class="pcu-calendar-day gray-day" day="01"><span>1</span></td>
<td class="pcu-calendar-day gray-day" day="02"><span>2</span></td>
<td class="pcu-calendar-day gray-day" day="03"><span>3</span></td>
<td class="pcu-calendar-day gray-day" day="04"><span>4</span></td>
<td class="pcu-calendar-day gray-day" day="05"><span>5</span></td>
<td class="pcu-calendar-day gray-day" day="06"><span>6</span></td>
<td class="pcu-calendar-day gray-day" day="07"><span>7</span></td>
<td class="pcu-calendar-day gray-day" day="08"><span>8</span></td>
<td class="pcu-calendar-day gray-day" day="09"><span>9</span></td>
<td class="pcu-calendar-day gray-day" day="10"><span>10</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>`

const datePickerJs = `document.querySelectorAll('.pcu-calendar-day').forEach(function(dropdownItem) {
  dropdownItem.addEventListener('click', function(e) {
    document.querySelectorAll('.pcu-calendar-day').forEach(function(day) { day.classList.remove('selected'); });
    const dayBtn = e.target.parentElement;
    if(!dayBtn.classList.contains('gray-day')) {
      dayBtn.classList.add('selected');
      let theDay = dayBtn.getAttribute('day');
      dayBtn.closest('.pcu-date-picker').children[1].value = '09/' + theDay + '/2021';
    }
  });
});`

const tableHtml = `<div class="pcu-table-main-header">
</div>
<div>
<table class="pcu-table">
<tbody>
<tr class="pcu-table-header">
<th><input class="pcu-checkbox-input pcu-table-select-all" type="checkbox"></th>
<th>Apply at checkout</th>
<th>Discount type</th>
<th>Discount name</th>
<th>Status</th>
<th></th>
<th style="width:0;"></th>
</tr>
<tr class="pcu-table-row">
<td>
<input class="pcu-checkbox-input" type="checkbox">
</td>
<td>Automatic</td>
<td>Basic Discount</td>
<td>
<span style="line-height: 2;">Untitle discount</span>
</td>
<td>Active</td>
<td class="pcu-td-more-options">
<div class="pcu-popover-menu"  dir="left">
<button class="pcu-button pcu-icon-button" skin="inverted" size="medium">
<img src="../pcu-wsr/wsr-icons/more-icon.svg">
</button>
<div class="pcu-popover pcu-popover-menu-content">
<span class="pcu-popover-menu-item">Add New Items</span>
<span class="pcu-popover-menu-item">Edit This Item</span>
<span class="pcu-popover-menu-item">Delete This Item</span>
</div>
</div>
</td>
<td style="width:0; position: relative;">
<div class="pcu-popover-menu"  dir="left">
<div class="pcu-popover pcu-popover-menu-content">
<span class="pcu-popover-menu-item">Add New Items</span>
<span class="pcu-popover-menu-item">Edit This Item</span>
<span class="pcu-popover-menu-item">Delete This Item</span>
</div>
</div>
</td>
</tr>
<tr class="pcu-table-row">
<td>
<input class="pcu-checkbox-input" type="checkbox">
</td>
<td>Automatic</td>
<td>Basic Discount</td>
<td>
<span style="line-height: 2;">Untitle discount</span>
</td>
<td>Active</td>
<td class="pcu-td-more-options">
<div class="pcu-popover-menu"  dir="left">
<button class="pcu-button pcu-icon-button" skin="inverted" size="medium">
<img src="../pcu-wsr/wsr-icons/more-icon.svg">
</button>
<div class="pcu-popover pcu-popover-menu-content">
<span class="pcu-popover-menu-item">Add New Items</span>
<span class="pcu-popover-menu-item">Edit This Item</span>
<span class="pcu-popover-menu-item">Delete This Item</span>
</div>
</div>
</td>
<td style="width:0; position: relative;">
<div class="pcu-popover-menu" dir="left">
<div class="pcu-popover pcu-popover-menu-content" >
<span class="pcu-popover-menu-item">Add New Items</span>
<span class="pcu-popover-menu-item">Edit This Item</span>
<span class="pcu-popover-menu-item">Delete This Item</span>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>`

const tableJs = `// open more menu
document.querySelectorAll('.pcu-popover-menu').forEach(function(popoverMenu) {
  popoverMenu.addEventListener('click', function (e) {
    this.classList.toggle('pcu-open-popover');
  });

  // select all checkbox
  document.querySelectorAll('.pcu-table-select-all').forEach(function(popoverMenu) {
    popoverMenu.addEventListener('change', function(e) {
      const table = e.target.parentNode.closest('.pcu-table');
      if(e.target.checked) {
        table.querySelectorAll('.pcu-checkbox-input').forEach(function(checkbox) {
          checkbox.checked = true;
        });
      } else {
        table.querySelectorAll('.pcu-checkbox-input').forEach(function(checkbox) {
          checkbox.checked = false;
        });
      }
    });
  });
});`

const collapseJs=`
document.querySelectorAll('.pcu-collapse-input').forEach(function (collapseInput) {
  collapseInput.onchange = toggleCollpase;
});

function toggleCollpase(){
  let collapsible = this.closest('.pcu-collapse-container').querySelector('.pcu-collapse-collapsible');
  collapsible.classList.toggle('pcu-slidedown')
  collapsible.classList.toggle('pcu-slideup')
}
`

const sliderJs = `
document.querySelectorAll('.pcu-slider-input').forEach((sliderField) => {
  changesSliderWidth(sliderField, sliderField.getAttribute('value'))
});

/* Update the background width of the slider after changing the value
PARAMETERS: name = for get the relevant input field, value = the selected value */
function changesSliderWidth(sliderInput, value) {
  const inputMin = sliderInput.getAttribute('min');
  const inputMax = sliderInput.getAttribute('max');
  const gapValues = inputMax - inputMin;
  const inputStep = sliderInput.getAttribute('step');
  const sumSteps = gapValues / inputStep;
  const sliderWidth = 175; // The width set for the slider
  const stepWidth = sliderWidth / sumSteps;
  const currentVal = value;
  const finalVal = currentVal - inputMin; // The current value is less than the initial value
  const moveSteps = finalVal / inputStep;
  const finalWidth = Math.round(moveSteps * stepWidth); //
  // append the new slider style
  const styleTagID = \`pcu-slider-input-\${sliderInput.name}-styling\`;
  const newStyling = \`.pcu-slider-input[name=\${sliderInput.name}]::after{width:\${finalWidth}px}\`;
  const sliderStyleTag = document.getElementById(styleTagID);
  // if there is an exsit style for this slider - update the style tag conent, if not - create a new style tag
  if (sliderStyleTag) {
    sliderStyleTag.innerHTML = newStyling;
  } else {
    document.head.insertAdjacentHTML('beforeend', \`<style id='\${styleTagID}'>\${newStyling}</style>\`)
  }
}
document.querySelectorAll('.pcu-slider input').forEach((inputChanged) => {
  inputChanged.addEventListener('input', function (e) {
    const inputElm = e.target;
    let selectedValue = inputElm.value;
    changesSliderWidth(inputElm, selectedValue);
    // let spinnerField = document.querySelector('.pcu-input-number');
    // spinnerField.value = selectedValue;
    if (inputElm.classList.contains('pcu-input-number')) { // need to update the slider value
      let sliderField = document.querySelector('.pcu-slider-input');
      sliderField.value = selectedValue;
    }
    if (e.target.classList.contains('pcu-slider-input')) { // need to update the spinner value
      let spinnerField = document.querySelector('.pcu-input-number');
      spinnerField.value = selectedValue;
    }
  })
})
`
