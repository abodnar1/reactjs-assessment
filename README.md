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
## Notes Provided by Amber:

### Time Spent to Complete
The assessment took me approx. 12 hours split between 3 days to complete.
- **Day One** - approx. 5 hours spent on install, researching Node Version Manager and Redux, and orienting myself in the codebase. The first two required tasks of applying CSS were completed this day.
- **Day Two** - approx. 5 hours spent on the third and fourth required tasks of populating amentities and location filtering functionality, respectively.
- **Day Three** - approx. 2 hours spent on the fifth required task of styling the footer as well as a final refactor to remove dead code and apply styling to match the mockups. Accessibility testing was also performed during this time.

### Setup
1. Fork this repo
2. Clone it down to your local machine
3. `cd` into the root of the project directory
4. Node version 14.x is **required**. Use Node Version Manager to manage Node versions.
5. Run `npm install` to install dependencies
6. Run `npm start` to start the application
7. Open `http://localhost:3000/` in your browser to view
8. Run `ctrl` + `c` to stop at any time

### Planning
- An issue for each required task was created and tied to a project board titled *SCAD Take Home Assessment* within GitHub.
- Notion was utilized for note taking on instructions as well as documenting tasks performed each day.
- Postman was utilized to view and understand the data provided at `https://html.scad.edu/facilities-test/`.
- This was a my first time using Node Version Manager, Redux, and SASS, so I spent some time learning each one.

### Accessibility
- The application was tested cross-functionally for a Mac on Google Chrome, Safari, and Firefox to ensure display and functionality worked correctly.
- The application is tab-able and can be navigated without the use of a mouse.
- Lighthouse in the Chrome Dev Tools was used to audit accessibility. The audit returned a score of 96% for both mobile and desktop screen sizes. Point deduction stemmed from a lack of contrast between the background and foreground colors which I left untouched as to match the mockups more accurately.
<img width="160" alt="articles-wireframe" src="https://user-images.githubusercontent.com/99693359/209725806-72441894-cd29-4fcf-81a1-6683ffb4615a.png">

### Additional Notes
- I followed an Agile workflow.
- I created branches for each required task and utilized a pull request template to summarize changes made. 
- In the PR titled `Feature/css new label styling #7`, I made an additional comment regarding the "New" tag on facility images and provided screenshots of its styling.
- Error handling could be added so the user knows when the data fails to fetch or takes a long time to load.
- Overall, this was a really fun assessment and it introduced me to three new technologies I haven't worked with before. I look forward to reviewing the work with the hiring team.

