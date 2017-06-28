Note: This follows a MVC setup.

* Model - communicates with the backend
* Controller - handles data manipulation (if any)
* View - displays content dynamically

# Creating a new page
1. Start by making a copy of __Template and rename the folder to the page name
2. If the page needs to be accessible from the navbar, update _Shared/components/nav-bar/index.html

# Components
**IMPORTANT: Server MUST be running for components to work!**

Components are elements that need to exist in multiple pages such as the navbar. They are loaded dynamically when the page loads using AJAX calls so the server must be running. Components share the same file structure as a page.
## Creating new components
* When creating new components be sure to create targets in the pages that it is being used (`<div id="nav_bar"></div>`)
* In _Shared/scripts/utils.js create a new function that loads the component and call it in `$(document).ready(function() {...})`
* Component dependencies (style sheets and javascript) should be included in the index.html for the component
