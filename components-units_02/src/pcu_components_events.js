/* This file includes all the component events.
We need to copy all js code we created here to understand how the event works on the demo page (index.html).
NOTE: Please be sure to use a separator with the element name ! */


function pcuComponentsEvents() {

  /* ---------------------- Loader Button ---------------------- */
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

  /* --------------------------- Docking Panel --------------------------- */
  document.querySelectorAll('.pcu-docking-point').forEach(function (elm) {
    elm.addEventListener('click', function (e) {
      if (e.target.parentElement.classList.contains('direction-docked')) {
        e.target.parentElement.classList.remove('direction-docked')
      }
      else {
        e.target.parentElement.classList.add('direction-docked')
      }
    });
  });
  /* --------------------------- Search Field --------------------------- */
  document.querySelectorAll('.topbar-search-input').forEach(function (elm) {
    elm.addEventListener('focus', function (e) {
      e.target.parentElement.classList.add('pcu-field-has-focus')
    });

    elm.addEventListener('focusout', function (e) {
      e.target.parentElement.classList.remove('pcu-field-has-focus')
    });
  });


  /* --------------------------- Dropdown --------------------------- */
  // dropdown focus
  document.querySelectorAll('.pcu-dropdown .pcu-text-input').forEach(function (elm) {
    elm.addEventListener('click', function (e) {
      e.target.parentElement.classList.add('pcu-field-has-focus')
    });
  });

  // select dropdown item
  document.querySelectorAll('.pcu-dropdown-item').forEach(function (dropdownItem) {
    dropdownItem.addEventListener('click', function (e) {
      const input = e.target.parentElement.previousElementSibling;
      input.value = e.target.getAttribute('value');
      e.target.parentElement.querySelectorAll('.pcu-dropdown-item').forEach(function (sibilingItem) {
        sibilingItem.classList.remove('selected');
      })
      e.target.classList.add('selected');
      e.target.parentElement.parentElement.classList.remove('pcu-field-has-focus');
    });

    // close dropdown
    document.addEventListener('click', function (e) {
      if (!e.target.classList.contains('pcu-dropdown-input')) {
        document.querySelectorAll('.pcu-dropdown').forEach(function (dropdowns) {
          dropdowns.classList.remove('pcu-field-has-focus');
        })
      }
    });
  });


  /* --------------------------- Badge --------------------------- */
  // dropdown focus
  document.querySelectorAll('.pcu-dropdown .pcu-text-input').forEach(function (elm) {
    elm.addEventListener('focus', function (e) {
      e.target.parentElement.classList.add('pcu-field-has-focus')
    });
  });

  // select dropdown item & and cahnge the background color
  document.querySelectorAll('.pcu-dropdown[skin="badge"] .pcu-dropdown-content .pcu-dropdown-item').forEach(function (dropdownItem) {
    dropdownItem.addEventListener('click', function (e) {
      const input = e.target.parentElement.previousElementSibling;
      input.value = e.target.getAttribute('value');
      e.target.parentElement.querySelectorAll('.pcu-dropdown-item').forEach(function (sibilingItem) {
        sibilingItem.classList.remove('selected');
      })
      e.target.classList.add('selected');
      e.target.parentElement.parentElement.classList.remove('pcu-field-has-focus');
      let color = e.target.children[0].getAttribute('color');
      input.setAttribute('color', color)
    });
  });


  /* --------------------------- Float Notification --------------------------- */
  // remove this notification (after clicking on the x icon)
  document.querySelectorAll('.pcu-float-notification .pcu-float-notification-close').forEach(function (elm) {
    elm.addEventListener('click', function (e) {
      e.target.parentElement.classList.add('remove-notification')
    });
  });


  /* --------------------------- Modal --------------------------- */
  function displayModal(opacity, zIndex, modalId) {
    let modalSelector = '';

    if (opacity == 0) {
      modalSelector = ".pcu-modal-wrapper"
    }
    if (opacity == 1) {
      modalSelector = "#" + modalId
    }

    document.querySelectorAll(`${modalSelector}`).forEach(function (modal) {
      modal.style.opacity = opacity;
      modal.style.zIndex = zIndex;
    });
  }

  function animationModalCard(scaleVal) {
    document.querySelectorAll('.pcu-modal-card').forEach(function (card) {
      card.style.transform = `scale(${scaleVal})`
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

  /* --------------------------- Popover Menu --------------------------- */
  document.querySelectorAll('.pcu-popover-menu').forEach(function (popoverMenu) {
    popoverMenu.addEventListener('click', function (e) {
      this.classList.toggle('pcu-open-popover');
    });
  });


  /* --------------------------- Date Picker --------------------------- */
  document.querySelectorAll('.pcu-calendar-day').forEach(function (dropdownItem) {
    dropdownItem.addEventListener('click', function (e) {
      document.querySelectorAll('.pcu-calendar-day').forEach(function (day) {
        day.classList.remove('selected');
      });
      const dayBtn = e.target.parentElement;
      if (!dayBtn.classList.contains('gray-day')) {
        dayBtn.classList.add('selected');
        let theDay = dayBtn.getAttribute('day');
        dayBtn.closest('.pcu-date-picker').children[1].value = '09/' + theDay + '/2021';
      }
    });
  });


  /* --------------------------- Table --------------------------- */
  // open more menu
  // document.querySelectorAll('.pcu-popover-menu').forEach(function(popoverMenu) {
  //   popoverMenu.addEventListener('click', function (e) {
  //     this.classList.toggle('pcu-open-popover');
  //   });
  // });

  // select all checkbox
  document.querySelectorAll('.pcu-table-select-all').forEach(function (popoverMenu) {
    popoverMenu.addEventListener('change', function (e) {
      const table = e.target.parentNode.closest('.pcu-table');
      if (e.target.checked) {
        table.querySelectorAll('.pcu-checkbox-input').forEach(function (checkbox) {
          checkbox.checked = true;
        });
      } else {
        table.querySelectorAll('.pcu-checkbox-input').forEach(function (checkbox) {
          checkbox.checked = false;
        });
      }
    });
  });

  /* --------------------------- Collapse Expand --------------------------- */
  document.querySelectorAll('.pcu-collapse-input').forEach(function (collapseInput) {
    collapseInput.onchange = toggleCollpase;
  });

  function toggleCollpase() {
    let collapsible = this.closest('.pcu-collapse-container').querySelector('.pcu-collapse-collapsible');
    collapsible.classList.toggle('pcu-slidedown')
    collapsible.classList.toggle('pcu-slideup')
  }

  /* --------------------------- Slider --------------------------- */
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
    const styleTagID = `pcu-slider-input-${sliderInput.name}-styling`;
    const newStyling = `.pcu-slider-input[name=${sliderInput.name}]::after{width:${finalWidth}px}`;
    const sliderStyleTag = document.getElementById(styleTagID);
    // if there is an exsit style for this slider - update the style tag conent, if not - create a new style tag
    if (sliderStyleTag) {
      sliderStyleTag.innerHTML = newStyling;
    } else {
      document.head.insertAdjacentHTML('beforeend', `<style id='${styleTagID}'>${newStyling}</style>`)
    }
  }
  document.querySelectorAll('.pcu-slider input').forEach((inputChanged) => {
    const inputChangedParent = inputChanged.closest('.pcu-slider ');
    inputChanged.addEventListener('input', function (e) {
      const inputElm = e.target;
      let selectedValue = inputElm.value;
      changesSliderWidth(inputElm, selectedValue);
      // let spinnerField = document.querySelector('.pcu-input-number');
      // spinnerField.value = selectedValue;
      if (inputElm.classList.contains('pcu-input-number')) { // need to update the slider value
        let sliderField = inputChangedParent.querySelector('.pcu-slider-input');
        sliderField.value = selectedValue;
      }
      if (e.target.classList.contains('pcu-slider-input')) { // need to update the spinner value
        let spinnerField = inputChangedParent.querySelector('.pcu-input-number');
        spinnerField.value = selectedValue;
      }
    })
  })
}


