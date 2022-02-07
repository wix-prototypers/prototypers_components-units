/* This file includes:
(1) The components array with all the components.
(2) The js code that builds and manage the demo page (index.html) */

/* Array with all the components, Note that there is a legality to the structure, so if you want to add a new
component - Please read the instructions in the README file ! */
const baseui_components = [
  {
    category: "Regular Button",
    htmlCode: `
    <div class="pcu-horizontal-thumbnails">
      <label for="pcu-thumbnail-left">
        <input id="pcu-thumbnail-left" class="pcu-thumbnail-input" type="radio" name="thunbnails">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g fill="none" fill-rule="evenodd" class="thumbnail-align-left">
            <path fill="#80b1ff" d="M11.6363636,9 L11.6363636,29 L9.63636364,29 L9.63636364,9 L11.6363636,9 Z M24.6363636,20 C25.7403636,20 26.6363636,20.896 26.6363636,22 L26.6363636,25 C26.6363636,26.104 25.7403636,27 24.6363636,27 L15.6363636,27 C14.5323636,27 13.6363636,26.104 13.6363636,25 L13.6363636,22 C13.6363636,20.896 14.5323636,20 15.6363636,20 L24.6363636,20 Z"></path>
            <path fill="#3885ff" d="M21.6363636,18 L15.6363636,18 C14.5323636,18 13.6363636,17.104 13.6363636,16 L13.6363636,13 C13.6363636,11.896 14.5323636,11 15.6363636,11 L21.6363636,11 C22.7403636,11 23.6363636,11.896 23.6363636,13 L23.6363636,16 C23.6363636,17.104 22.7403636,18 21.6363636,18"></path>
          </g>
        </svg>
      </label>
      <label for="pcu-thumbnail-center">
        <input id="pcu-thumbnail-center" class="pcu-thumbnail-input" type="radio" name="thunbnails">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g fill="none" fill-rule="evenodd" class="thumbnail-align-center">
              <path fill="#80b1ff" d="M20,18 L20,20 L25,20 C26.104,20 27,20.896 27,22 L27,22 L27,25 C27,26.104 26.104,27 25,27 L25,27 L20,27 L20,29 L18,29 L18,27 L13,27 C11.896,27 11,26.104 11,25 L11,25 L11,22 C11,20.896 11.896,20 13,20 L13,20 L18,20 L18,18 L20,18 Z M20,9 L20,11 L18,11 L18,9 L20,9 Z"></path>
              <path fill="#3885ff" d="M22,18 L16,18 C14.896,18 14,17.104 14,16 L14,13 C14,11.896 14.896,11 16,11 L22,11 C23.104,11 24,11.896 24,13 L24,16 C24,17.104 23.104,18 22,18"></path>
          </g>
        </svg>
      </label>
      <label for="pcu-thumbnail-right">
        <input id="pcu-thumbnail-right" class="pcu-thumbnail-input" type="radio" name="thunbnails">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
          <g fill="none" fill-rule="evenodd" class="thumbnail-align-right">
              <path fill="#80b1ff" d="M28.3636364,9 L28.3636364,29 L26.3636364,29 L26.3636364,9 L28.3636364,9 Z M22.3636364,20 C23.4676364,20 24.3636364,20.896 24.3636364,22 L24.3636364,22 L24.3636364,25 C24.3636364,26.104 23.4676364,27 22.3636364,27 L22.3636364,27 L13.3636364,27 C12.2596364,27 11.3636364,26.104 11.3636364,25 L11.3636364,25 L11.3636364,22 C11.3636364,20.896 12.2596364,20 13.3636364,20 L13.3636364,20 Z"></path>
              <path fill="#3885ff" d="M24.3636364,13 C24.3636364,11.896 23.4676364,11 22.3636364,11 L16.3636364,11 C15.2596364,11 14.3636364,11.896 14.3636364,13 L14.3636364,16 C14.3636364,17.104 15.2596364,18 16.3636364,18 L22.3636364,18 C23.4676364,18 24.3636364,17.104 24.3636364,16 L24.3636364,13 Z"></path>
          </g>
        </svg>
      </label>
    </div>
    `
  }
]
{/* <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
<g fill="none" fill-rule="evenodd" class="thumbnail-align-center">
    <path fill="#80b1ff" d="M20,18 L20,20 L25,20 C26.104,20 27,20.896 27,22 L27,22 L27,25 C27,26.104 26.104,27 25,27 L25,27 L20,27 L20,29 L18,29 L18,27 L13,27 C11.896,27 11,26.104 11,25 L11,25 L11,22 C11,20.896 11.896,20 13,20 L13,20 L18,20 L18,18 L20,18 Z M20,9 L20,11 L18,11 L18,9 L20,9 Z"></path>
    <path fill="#3885ff" d="M22,18 L16,18 C14.896,18 14,17.104 14,16 L14,13 C14,11.896 14.896,11 16,11 L22,11 C23.104,11 24,11.896 24,13 L24,16 C24,17.104 23.104,18 22,18"></path>
</g>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
<g fill="none" fill-rule="evenodd" class="thumbnail-align-right">
    <path fill="#80b1ff" d="M28.3636364,9 L28.3636364,29 L26.3636364,29 L26.3636364,9 L28.3636364,9 Z M22.3636364,20 C23.4676364,20 24.3636364,20.896 24.3636364,22 L24.3636364,22 L24.3636364,25 C24.3636364,26.104 23.4676364,27 22.3636364,27 L22.3636364,27 L13.3636364,27 C12.2596364,27 11.3636364,26.104 11.3636364,25 L11.3636364,25 L11.3636364,22 C11.3636364,20.896 12.2596364,20 13.3636364,20 L13.3636364,20 Z"></path>
    <path fill="#3885ff" d="M24.3636364,13 C24.3636364,11.896 23.4676364,11 22.3636364,11 L16.3636364,11 C15.2596364,11 14.3636364,11.896 14.3636364,13 L14.3636364,16 C14.3636364,17.104 15.2596364,18 16.3636364,18 L22.3636364,18 C23.4676364,18 24.3636364,17.104 24.3636364,16 L24.3636364,13 Z"></path>
</g>
</svg> */}