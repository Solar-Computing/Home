# Home

###### A Solar Home Project: Built with React Native

#### Contributors:
  * [Aayush Kumar](https://github.com/aayush-k "Aayush's Github")
  * [Leonie Reif](https://github.com/leoniereif "Leonie's Github")
  * [Tommaso Pieroncini](https://github.com/TommasoPieroncini "Tommaso's Github")
  * [Sujeeth Jinesh](https://github.com/SujeethJinesh "Sujeeth's Github")
 
#####  Old GitHub link: https://github.com/Solar-Computing/ReactMobileApp/
##### New GitHub link: https://github.com/Solar-Computing/Home

#### Semester Goals
The mobile team was newly formed for Fall 2016, so our goal was to get every new member acquainted with the general computing goals. For our mobile sub-team, the goal was to finish screens for the mobile interface and have it as a first prototype. We want to find a way to show the collected data in an easy to understand and palatable way. It should show figures that motivate the resident to live more sustainably and give personalized tips on how to do that. We want to design all screens needed and implement them for both Android and iOS using the React Native JavaScript framework. Below are the mock ups of the design ideas we came up with.
       
       
*Figure 6. Mockups for mobile application running on Android*

#### Progress Made
We iterated through different designs and decided on having three main screens that can be reached with an easy swiping navigation similar to the Snapchat navigation. We have all mock-up screens ready and two of the three main screens implemented. Charts were more difficult to add than expected because React Native is a very young framework and the support found online, although the community around it is growing, is still scarce.

In the end, we agreed upon a file structure that emphasizes the modularity of the React components being used across the mobile app. This structure groups all viewable pages into their own respective components, all of which we render in a global App.js component which is displayed in both the iOS and Android versions of the app. Such a design enables us to make alterations to our code anywhere and expect the same adjustments to be made across all platforms.

We developed the tab-based swiping system and we’ve brought most of the work on the Settings and Feed page to completion. Our final sprint will include working on the graphs (Data) page and ensure good overall performance of the application.

On the data management side, we have collaborated with the backend team to create different JSON object formats for the Settings page, Data page and Feed page. These objects are formed server-side, have a flexible structure and can hold a large amount of data. Data transferred to the device in this lightweight format is then easily parsed into useful information and displayed to the user in the proper context.

#### Major Innovations
Our work is innovative in the way that we are creating a cross platform application using a single language (JavaScript). React Native is a relatively new framework, and it leverages concepts that aren’t traditional to native Android or iOS development. By choosing to use React Native, we are able to develop for two platforms, with half the resources. This cuts down the cost of having to separate ourselves, and trying to merge our work into a design that works for both platforms.

We are also making IoT data easily accessible and understandable to the residents by translating it into simple charts. By giving users the chance to compare consumption over days, weeks, months, and years, we show them the direct impact of their choices. By displaying hard data like dollars saved, or notifications when they reached their goals, we create an interactive and interesting access point to the Smart Home system that helps residents understand their environmental impact and the financial benefits derived from saving energy and water.

#### Future Goals
Next semester, we’re looking forward to working more closely with the other parts of the computing team. This means that when the back end team begins collecting data, we will be ready to receive that data and begin displaying it to the user.

We are also planning to create a tablet layout that we can use for presentations.

Moreover, in order to make this into a scalable and marketable project, we want to introduce user authentication for the app. This will be covered by the React Native course we will follow over Winter break, and it is something we should be able to implement in the coming semester when working with the back end team.

Finally, while this semester we’ve mainly worked on pulling data from the server, next semester we’re going to work on posting data and acting on the Home system from the app (turning lights off and on, controlling smart sockets, et cetera...).
