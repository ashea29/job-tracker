# ProspectTracker


## Project Description

A simple job search tracker app, built with React

## Project Links

- [github repo](https://git.generalassemb.ly/ashea27/job-tracker)
- [deployment]()

## Wireframes

- [Home](https://res.cloudinary.com/ashea27/image/upload/v1578684041/seir-1118_project2/Home_d2zgnr.png)
- [CreateProspect](https://res.cloudinary.com/ashea27/image/upload/v1578684064/seir-1118_project2/CreateProspect_swxxqz.png)
- [ProspectDetails](https://res.cloudinary.com/ashea27/image/upload/v1578684091/seir-1118_project2/ProspectDetails_e2liaa.png)
- [React architecture](https://res.cloudinary.com/ashea27/image/upload/v1578684491/seir-1118_project2/React_Architecture_Overview_g7jgzj.png)


### MVP/PostMVP

#### MVP
- Main page where a user can see all their current job contacts (called 'prospects' in-app)
- User can click on each prospect and open a page displaying detailed information
- User can see a map showing the location of the company (Google Maps API)


#### PostMVP
- User can create new prospects that are added to main page
- User can create a to-do list for each prospect
- Add Firebase for data persistence and Google Authentication
- Allow user to get directions to the company in-app (via Google Directions API)
- Allow user to add any relevant events for a prospect to their Google Calendar
- Render an aggregated list of To-Do's for all prospects on the main user page


## Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Home Component | H | 3hrs| 3.5hrs | 3.5hrs |
| ProspectDetails Component | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 4hrs| 5hrs | 5hrs |
| CreateProspect Component | H | 3hrs| 3hrs | 3hrs |
| CreateForm Component | H | 2hrs| 1.5hrs | 1.5hrs |
| Other Components / Restructuring | H | 3hrs| 3hrs | 3hrs |
| Styling | H | 4hrs| 3.5hrs | 3.5hrs |
| Total |  | 22hrs| 23hrs | 5hrs |

All time frames include research, setting up Routes, and some basic styling along the way.

In addition, the large amounts of time for some of these items, as well as the overages, were due to several extenuating circumstances. I have tried to account for all these the best that I can in filling out the table above.

## Additional Libraries

FontAwesome for icons

 Other than that, there were nitially two 3rd party NPM packages, but in the current build there are none.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
class Map extends Component{
  componentDidMount(){
    this.mapDataFetch()
  }

  mapDataFetch = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }
  
  initMap = () => {
    const thisPosition = {lat: this.props.lat, lng: this.props.lng}
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: thisPosition,
      zoom: 14
    })

    const marker = new window.google.maps.Marker({position: thisPosition, map: map})
    console.log(marker)
  }
```

## Issues and Resolutions
 I encountered issues mostly in trying to configure the Google Maps API to work in React (which is why the 3rd party NPM packages were brought in). When these proved not to solve the problem, I scrapped them and did more research until I came upon the answer in a YouTube tutorial, which showed how to implement a map in plain React.