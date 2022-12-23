# SCAD ReactJS Assessment

## How to run
This application should run with minimum setup. The only main requirement is Node version 14.x. You should be able to start this application by running the commands below.
- npm install
- npm start

The build of the app you will see will be missing the functionality you would need to include to make it fully functional.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br><br>   
## Finish this project by completing the bulleted items below
- Apply proper CSS treatment to the facility image within each card
- Apply proper CSS treatment to the "New" label that shows up on the facility image
- Populate the "Amenties" list that shows up in the modal container to display those for the requested location
- Make the "Location" filter functional by: 
  - The "locations" prop on the LocationSelect component needs to be populated form the store. Hint- see mapStateToProps in src/components/LocationSelect.jsx
  - Populating the drop-down with the available locations. The value of each option should match the "id" property of the location from the json feed.
  - Adding mapDispatchToProps to send the approrpiate action to dispatch and update the pickedLocation in the store.
- Style the footer content appropriately
### Things to know
- Redux store is being utilized for globalized state management
- Facilities and Locations are generated from the following feed - https://html.scad.edu/facilities-test/
- Actions are created in - src/actions/facilityActions.js
- Reducers are created in - src/reducers/facilityReducer.js
- Amentities values are updated in the store when the "Amenties" button is clicked
- The Locations component (Locations.jsx) looks at the store pickedlocation value to determine which facilities are visible. See src/components/Locations.jsx <br>  <br> 

*** 
### Your Notes
[your notes here]