# prototypers_components-units
This project includes component units (e.g. WSR components, inputs, tooltips ...) that we can use in our prototypes quickly and easily.

### How to Use?
1. Copy the relevant CSS link (CDN link) to your prototype project:

###### Wix-Style-React components:
```
https://cdn.jsdelivr.net/gh/wix-prototypers/prototypers_components-units@3/components-units_02/pcu-wsr/wsr_components.css
```
2. Open this [link](https://wix-prototypers.github.io/prototypers_components-units/components-units_02/src/index.html){:target="\_blank"} and search for the component you need.
3. Copy the component code and use it in your prototype code.

<b>Note:</b> There are components that include wsr-icons, you can copy the wsr_icons folder from the this projcet to your prototype project or add the relevant icon yourself.

Enjoy! 😎

### Contribute a Component
1. Create your component code - html, css and js (if exists).

```
▪️ Start each class in 'pcu-' and select clear classes (See existing components).

▪️ If your component contains several states (designs), please do so by changing a attribute.
  Note - The attribute must be in the main parent of the component.
  
▪️ JS - Use vanilla javascript, the project doesn't contain JQuery.
```

2. Create a new branch in this repository.
3. Add your CCS code to relevant CSS file (For example, if it is a wsr component so add it to ```wsr_components.css```).
4. Add your JS code to ```pcu_components_events.js```.
5. Open the relevant JS file (For example, if it is a wsr component so ```wsr_components.js```).
6. Add your component according to the following object.

``` javascript
{
  category: // [Unique] - the name of the component
  
  attributes: // [Optional] - if your component has attributes 
  [{
    attribute: // The name of the attribute as it is in the component itself
    values: [ ] // Existing values as they are in the component
  }],
  htmlCode: // The html code of the element,
  jsCode: // [Optional] - The js code of the element
}
```

###### Example - component with attributes
``` javascript
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
}
```

###### Example - component without attributes
``` javascript
{
  category: "Text Feild",
  htmlCode: `<input class="pcu-text-input" type="text" placeholder="This is a placeholder">`
}
```

<b>Note:</b> The readability of the files is very important, so if the html code or js code of your component is long, please copy them to the variables in ```pcu_components_long_code.js``` and use the variables in the object you are adding.

7. Commit your changes (in your branch) and do Publish.
8. Create a “pull request” and write an explanation about the changes (please don’t do merge).

Thanks! 🖤
