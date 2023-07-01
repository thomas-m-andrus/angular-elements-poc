# AngularElements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

# Purpose
I am trying to understand Angular Elements because I have two existing apps, one is an angular 11 app with a component I want to re-use in an angularjs app. So I have set up a base project that then has a separate project for exporting an angular element similar to what I wish to accomplish with the existing I will apply this knowledge to.

# References
[tutorial used to build this project](https://micklawitzke.medium.com/build-web-components-out-of-an-existing-angular-app-with-angular-elements-7dacf84b2fb3)

# Development

```
npm run start
```
This will run the base app.

```
npm run start-elements
```
This will run a preview of the Element

# Build

```
npm run build-elements
```
This will generate an Angular Element in the dist folder and then it will compress all the relevent files together in the ***native-elements*** folder that gets generated. You can then take the ***awesome-component.js*** and include it on any file.

# Using the Element
Once I generate the element I have been using the following *index.html* file to use the element:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Testing the News Web Component</title>
    <base href="/" />
  </head>
  <body>
    <div>mellony</div>

      <awesome-component id="my-awesome-component" name="Sally"></awesome-component>

      <script type="text/javascript" src="awesome-componet.js"></script>
      <script>
        const button = document.getElementById("my-awesome-component");

        // Step 2: Define the event listener function
        function handleClick() {
          console.log("changing to danial");
          button.setAttribute('name', 'danial')
          // Additional actions or logic can be performed here
        }

        // Step 3: Add the event listener
        button.addEventListener("click", handleClick);
      </script>
  </body>
</html>
```
# Current Predicament
So everything works okay thus far! This is what the component looks like:

![basic look of component](./angular-elements/src/assets/general-look-of-component.png)

It's not very exciting but it serves its purpose. It has a ***name*** input, a *click* event emitter, and it uses a child component.

***PROBLEM!*** However, when using the element in the index.html I am getting the following error:

![error](./angular-elements/src/assets/error.png)

I think it is coming from the index file in the projects/elements/src/index.html, but I'm not really sure how that file fits into Angular elements.