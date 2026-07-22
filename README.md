# Scrimba Solo Project - Components Library

This is a solo project from Scrimba's Advanced React course, titled "Component Library." It involves developing four reusable React components, using a provided Figma design file as a reference. 

Additionally, two extra components (tooltips and toasts) were completed as stretch goals.


## Tech Stack

- React
- Vite (with HMR)
- @vitejs/plugin-react 
- ESLint (custom rules)
- Babel
- React Compiler enabled
## Dependencies

- "react": "^19.2.7",
- "react-dom": "^19.2.7"
## Installation

Install with package manager of choice.

```bash
npm install Solo Project Component Library
# or
yarn add Solo Project Component Library
# or
pnpm add Solo Project Component Library
```
    
## Components Overview


| Component     | Description      |
| ------------- | ------------- |
| [Badges](#1-badges-component)| Accepts a color property to render background and text colors based on the value. Also accepts a text or child property to display content. |
| [Banners](#2-banners-component) | Accepts a status prop with four values—success, warning, error, or neutral—to render a themed styled component accordingly. Supports a text or child prop for content, rendering as either single-line (if only title prop) or multi-line (if title plus text or child props). |
| [Cards](#3-cards-component) | Accepts icon and background color props; includes a hover style state. |
| [Testimonials](#4-testimonials-component) | Two versions: with or without image testimonial components. Uses a helper to render the body based on whether it's a with-image or without-image component. |
| [Tooltips](#5-tooltips-component) | This component supports two styles—bold and light—for different modes or themes. The color styling changes dynamically based on the mode you pass in: either bold or light. It has a hovering effect that works with the JSX element or text you provide as the hoveredContent prop.|
| [Toasts](#6-toasts-component)| Uses React Portals to position a single toast at the bottom right of the document body. Accepts a status prop (success, warning, info, error) that dynamically determines styling. Optional props include show delay and hide delay in milliseconds to control toast appearance and dismissal. |

- Each component has its own dedicated CSS file stored within the same folder as the component, ensuring styles 'CSS classes' are isolated and maintainable.

- Console warning messages are logged if required or expected props are not provided, and default prop values are used instead.
## 1. Badges Component

![App Screenshot](https://different-marmoset-f7b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb93cdbdd-78d5-4315-ac59-3c29fb496092%2FUntitled.png?table=block&id=3d98c5cc-86ae-410a-a9b8-4314678daa32&spaceId=a10d5439-ecf5-4fcd-9ead-c11a466086e4&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

### Props
|  Prop Name  |  Value  |  Default |
|---|---|---|
|  color  |  gray, red, yellow, green, blue, indigo, purple, pink |  gray |
|  shape  |  square, pill  | square   |
|  text | any user‑provided string  |  n/a |
|  children |  any user‑provided string | n/a  |
 
*The children prop takes precedence over text prop. Either text or children prop can be passed in for badge text value.*


### Usage/Examples - Badges

```javascript
import Badge from './components/Badges/Badge'

function App() {
  return (
    {/* Badge - Square Version */}
      <Badge color="gray" shape="square" text="Badge" />
      <Badge color="red" shape="square" text="Badge" />
      <Badge color="yellow" shape="square" text="Badge"  />
      <Badge color="green" shape="square" text="Badge"  />
      <Badge color="blue" shape="square" text="Badge" />
      <Badge color="indigo" shape="square" text="Badge"  />
      <Badge color="purple" shape="square" text="Badge"  />
      <Badge color="pink" shape="square" text="Badge" />   

  
    
    {/* Badge - Pill Version */}
      <Badge color="gray" shape="pill" text="Badge" /> 
      <Badge color="red" shape="pill" text="Badge" />
      <Badge color="yellow" shape="pill" text="Badge" />
      <Badge color="green" shape="pill" text="Badge"  />
      <Badge color="blue" shape="pill" text="Badge" />
      <Badge color="indigo" shape="pill" text="Badge" />
      <Badge color="purple" shape="pill" text="Badge" />
      <Badge color="pink" shape="pill" text="Badge" />
  )
}
```
<img src="src\assets\examples\badges_example.PNG" alt="Badges component example" width="500">

## 2. Banners Component

![App Screenshot](https://different-marmoset-f7b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2f3f64a1-b6a0-4801-abdc-3a05a4fd9c8e%2FUntitled.png?table=block&id=53027875-d1c8-4ef6-ab80-8d37a8062207&spaceId=a10d5439-ecf5-4fcd-9ead-c11a466086e4&width=1500&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

### Props
| Prop Name | Values  | Default   |  Layout Behavior (Single-line or Multi-line)  |
| ----- | -------- | ----------- |---|
| status | success, warning, error, neutral  | neutral | Does not affect layout  |
|   title    |any user‑provided string  | n/a  | Required (with the "text" or "children" prop) for a multiline layout. Otherwise, it defaults to a single-line layout. |
|   text    | any user‑provided string | n/a | If omitted → single‑line; if provided (with title) → multiline |
|   children    | any user‑provided string | n/a  | If omitted → single‑line; if provided (with title) → multiline  |
 
*The children prop takes precedence over text prop. Either text or children prop can be passed in for badge text value.*


### Usage/Examples -  Banners


```javascript
import Banner from './components/Banners/Banner'

function App() {
  return (
     {/* Banner - Single-line Version */}
    <Banner status="success" title="Congratulations!" />
    <Banner status="warning" title="Attention" />
    <Banner status="danger" title="There is a problem with your application" />
    <Banner status="neutral" title="Update available" /> 

    {/* Banner - Multi-line Version */}
    <Banner status="success" title="Congratulations" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
    <Banner status="warning" title="Attention" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
    <Banner status="danger" title="There is a problem with your application" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
    <Banner status="neutral" title="Update available" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." /> 
  )
}
```
<img src="src\assets\examples\banners_example.PNG" alt="Banners component example" width="500">

## 3. Cards Component

![App Screenshot](https://different-marmoset-f7b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9de2142-f975-4ca4-9800-16137f6a0b24%2FUntitled.png?table=block&id=14157a75-3697-4a62-a90f-bd803d0e47ca&spaceId=a10d5439-ecf5-4fcd-9ead-c11a466086e4&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)


### Props
|  Prop Name | Values  |  Default |
|---|---|---|
|  icon |  any valid image source (.svg, .png, .jpg, etc.) | default SVG icon  |
|  icon_backgroundColor | any valid CSS color (hex, rgb, rgba, hsl, named colors)  | #3F75FE  |
|  icon_alt |  any user‑provided string |  Icon |
|  title | any user‑provided string  | n/a   |
|  text |  any user‑provided string |  n/a |
 

### Usage/Examples -  Cards


```javascript
import Card from "./components/Cards/Card"

function App() {
  return (
    {/* Card with custom background color */}
    <Card icon_backgroundColor='#2589bd' title='Easy Deployment' text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' />
    
    {/* Card with default icon properties */}
    <Card title='Easy Deployment' text='Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.' /> 
  )
}
```
<img src="src\assets\examples\cards_example.PNG" alt="Cards component example" width="500">

## 4. Testimonials Component

**Includes two render variants and one helper component (TestimonialQuote) that decides which version to display.**

- Image Testimonial → rendered when hasImage = true

- Logo Testimonial → rendered when hasImage = false

- Helper component (TestimonialQuote) → receives preconfigured props and conditionally renders one of two versions (with image or without image) based on computed or passed-in prop values from the specific component version being utilized.

![App Screenshot](https://different-marmoset-f7b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F14ff3251-fb19-43cb-bcbc-7a88c4c252b5%2FUntitled.png?table=block&id=2f936582-783f-4ea0-8dcf-3c9fb76ab0bc&spaceId=a10d5439-ecf5-4fcd-9ead-c11a466086e4&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)

<img src="src\assets\examples\testimonials_design.PNG" alt="Testimonials component design" width="500">


### Props - (Image Testimonial) TestimonialWithImage Component
|  Prop Name | Values  | Default  |  Behavior |
|---|---|---|---|
|  desktopImage |  any valid image source (.svg, .png, .jpg, etc.) |  default SVG |  required for image version |
|  mobileImage |  any valid image source (.svg, .png, .jpg, etc.) | default SVG  |  used on smaller screens|
|  imageAlt  |  any user-provided string  |  Testimonial image |  accessibility alt text |
| quote  | any user-provided string  |   |  testimonial text |
| author  | any user-provided string   | n/a  |   name of person giving testimonial|
| role  | any user-provided string   | n/a  |  author's role/title |
| viewport  | desktop, mobile   | mobile  |  controls layout version|

### Props - (Logo Testimonial - No Image Version) TestimonialWithoutImage Component
|  Prop Name | Values  | Default  |  Behavior |
|---|---|---|---|
|  logo |  any valid image source (.svg, .png, .jpg, etc.) |  default SVG |  required for image version |
|  logoImageAlt  |  any user-provided string  |  Testimonial image |  accessibility alt text |
| quote  | any user-provided string  |   |  testimonial text |
| author  | any user-provided string   | n/a  |   name of person giving testimonial|
| role  | any user-provided string   | n/a  |  author's role/title |
| viewport  | desktop, mobile   | mobile  |  controls layout version|
 

### Usage/Examples -  Testimonials


```javascript
import TestimonialWithImage from './components/Testimonials/TestimonialWithImage'
import TestimonialWithoutImage from './components/Testimonials/TestimonialWithoutImage'

function App() {
  return (
        {/* Testimonial with image - desktop version */}
        <TestimonialWithImage quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.' author='May Andersons' role='Workcation, CTO' viewport='desktop' />

        {/* Testimonial with image - mobile version */}
        <TestimonialWithImage quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.' author='May Andersons' role='Workcation, CTO' viewport='mobile' />
        
        {/* Testimonial with no image - desktop version */}
        <TestimonialWithoutImage quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' author='May Andersons' role='Workcation, CTO' viewport='desktop' />

        {/* Testimonial with image - mobile version */}
        <TestimonialWithoutImage quote='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.' author='May Andersons' role='Workcation, CTO' viewport='mobile' />
  )
}
```
<img src="src\assets\examples\testimonialsImage_example.PNG" alt="Testimonials with image component example" width="500">

<img src="src\assets\examples\testimonialsNoImage_example.PNG" alt="Testimonials with no image component example" width="500">



## 5. Tooltips Component

- You can pass custom SVG icons into this component. To have the icon color automatically match the component's mode and variant styles, simply set the SVG's fill and/or stroke attributes to currentColor. Keep in mind that SVGs with hardcoded colors will display in their original colors.

![App Screenshot](https://different-marmoset-f7b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9578243-305e-4db4-a303-0535a2b13958%2FUntitled.png?table=block&id=44f92078-7ee0-4e84-a8cb-ad0a93b849de&spaceId=a10d5439-ecf5-4fcd-9ead-c11a466086e4&width=1220&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)


### Props

| Prop Name  | Value  |  Default | Behavior  |
|---|---|---|---|
|  variant | achromatic, blue, purple, green  | achromatic   | controls the component’s visual style  |
| mode   | light, bold  | light  |  Determines color theme |
|  svgElement | svg Element | default svg | custom SVGs can inherit color via currentColor  |
|  title  | any user-provided string  | n/a   | main heading text |
|  text  | any user-provided string  |  n/a  |  body text |
|  hoveredContent  | any user passed jsx or text value  |  n/a  | content displayed on hover |

### Usage/Examples -  Tooltips

```javascript
import Tooltip from "./components/Tooltips/Tooltip"

function App() {
  return (
        {/* Tooltip component - light mode  */}

        <Tooltip variant='achromatic' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
        <Tooltip variant='blue' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
        <Tooltip variant='purple' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
        <Tooltip variant='green' mode='light' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />

        {/* Tooltip component - bold mode */}
        
        <Tooltip variant='achromatic' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
        <Tooltip variant='blue' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
        <Tooltip variant='purple' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
        <Tooltip variant='green' mode='bold' title="Archive notes" text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur." hoveredContent="Archive Notes" />
  )
}
```
<img src="src\assets\examples\tooltips_example.gif" alt="Tooltip component example" width="500">

## 6. Toasts Component

![App Screenshot](https://different-marmoset-f7b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc96f27e4-a364-431e-acbe-63c111991673%2FUntitled.png?table=block&id=f9ca44b5-f806-415a-87ed-f9644ed36dc8&spaceId=a10d5439-ecf5-4fcd-9ead-c11a466086e4&width=1310&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl)


### Props
| Prop Name  | Values   |  Default  | Behavior  |
|---|---|---|---|
| toast_icon  | any valid image source (.svg, .png, .jpg, etc.)  |  default svg icon | decorator icon  |
| toast_icon_alt  | any user-provided string   | default toast icon alt  |  accessibility alt text |
| title  | any user-provided string  | n/a  |  main heading text |
| text  |  any user-provided string |  n/a |  body text |
| show_delay_ms  |  any positive number (ms) |  2000 ms (2 seconds) | Delay before the popup appears  |
|  hide_delay_ms | any positive number (ms)  | 4000 ms (4 seconds)   | Delay before the popup disappears  |

### Usage/Examples -  Toasts


```javascript
import Toast from "./components/Toasts/Toast"

function App() {
  return (
    {/* Toast component - Single popup bottom right corner of screen */}

    // <Toast status="success" title="Success" text="Your work has been saved" />
    // <Toast status="warning" text="A network error was detected" />
    // <Toast status="error" text="Please re-save your work again" />
    <Toast status="information" title="Information" text="Please read updated information" show_delay_ms={3000} hide_delay_ms={6000}  /> 
  )
}
```
<img src="src\assets\examples\toasts_example.gif" alt="Toasts component example" width="500" style="border: 3px solid #000; border-radius: 8px;">

## License

This project is licensed under the MIT License.  
See the [License](./License) file for details.



## Acknowledgements/References

 - [React Component Library Info Page - Scrimba](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Figma Design File for React Component Library - Scrimba](https://www.figma.com/design/8z3MzQUTw2STq71aHbjYaF/Component-Library?node-id=399-132&p=f)