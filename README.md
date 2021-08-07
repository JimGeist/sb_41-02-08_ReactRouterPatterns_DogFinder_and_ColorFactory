# sb_41-02-08_ReactRouterPatterns_DogFinder_and_ColorFactory
 
## Technology Stack
- **Front-end**: ReactJS
- **Back-end**: n/a

## Assignment Details

Build two applicaitons -- a Dog Finder and a Color Factory -- that route to different components / functions based on the chosen item. 

**Part 1: React Router Dog Finder**

The purpose of Dog Finder was to make use of the `<Switch>` component in React Router as well as handle url parameters.

**Part 2: React Router Color Factory**

The purpose of Color Factory was to use React Router in slightly more difficult application since it involved retaining user input instead of using a static structure with values as with Dog Finder. 

The Color Factory also made use of some browser `history` to handle the routing when a new color is added. The assignment called for a color preview page but instead of a new page, a div is displayed with the color for the background.


Both applications definitely require reorganization as there is too much business logic in `App`. The Color Factory would definitely benefit from component restructuring as well. Both applications have some styling.

Each application, **** and **** are in their own folder. There is no common `App` component that is called that offers a choice. 
- The **Dog Finder** source is in folder `src_1-dogfinder`.
- The **Color Factory** source is in folder `src_2-color`.

There were no component tests created for either Part 1 or Part 2.

## Additional Details

**Enhancements**
- None.

**Difficulties**
- It seemed like a simple exercise. Stumbling areas is around the data destructuring. What I have not been able to nail down is whether the difficulty is with destructuring or if there was something missing elsewhere. A common one was using the destructured array from props and `.map()` generates an error because it is not on an iterable component. 


