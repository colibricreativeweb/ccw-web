# Colibri Creative Web &middot; ![Release Status](https://img.shields.io/badge/release-v1.0.0-bgreen) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![tailwind version](https://img.shields.io/badge/tailwind-3.0.23-cyan)](https://tailwindcss.com)

This is a crafted website using [Tailwind CSS](https://tailwindcss.com) in a Next.js project + Contentful.

## :triangular_ruler: Features
- Styles are ure built using [Tailwindcss](https://tailwindcss.com/)
- Css styles use [Postcss](https://postcss.org/)
- [Contentful](https://www.contentful.com/) integration
- Uses [Material Icons](https://material.io/resources/icons/?style=baseline)

## :telescope: Install and run
```bash
yarn
# then
yarn run setup
# then
yarn run develop
```
The process will ask for your credentials which can be found on your contentful settings. 
## :hammer: Build Commands
```bash
yarn run build
# then
yarn run serve
```
## :gem: Theme Customizations

### Changing Colors

The theme comes with a **tailwind.config.js** file and can be customized based on your preferred color scheme.

### Changing fonts

The theme uses [gatsby-plugin-google-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-fonts/) plugin to load google fonts. You can change font settings inside **gatsby-config.js** and **tailwind.config.js**.

### Pages and Sections

You can simply add new sections and pages in the theme by creating new contentful model and map it to the component.

#### Creating Sections

- Create a layout in your contentful account and name it like **Layout > LayoutName** (ex. Layout > Portfolio) and add your specific fields.
- Edit the **Layout** model **Content Module** settings and add your new layout to the **Accept only specified entry type** on the validation tab.
- Create a section component inside **src/sections** (ex. portfolio.js).
- Import the new component inside the **section.js** file and add it to the components array.   
- Add static query inside your new section component. Make sure that the component accepts **contentModuleId** as a prop.
```
const data = useStaticQuery(graphql`
  query {
      allContentfulLayoutPortfolio {
          edges {
              node {
                  id
                  heading
                  subheading
                  description {
                      description
                  }
                  ctaText
                  ctaUrl
                  image {
                      fluid(quality: 100) {
                          ...GatsbyContentfulFluid
                      }
                  }
              }
          }
      }
  }
`);

const content = data.allContentfulLayoutPortfolio.edges.find(edge => edge.node.id === contentModuleId);
```
- And lastly add the new section layout in your contentful layout record. By default it is named as Homepage.
- Sections can be rearranged in any order you want.

### Contentful Content Types
- **Layout** - The page layout content.
- **Layout > &ast;** - The section content which is inside the layout.
- **Menu** - Navigation menu for each layout
- **Menu Item** - Navigation links for menu
- **Contact Details** - Basic information and social media links
- **Featured Items** - About section featured items
- **Testimonial** - User testimonials
- **Pricing Plan** - Product/Service plans
- **Service Item** - Service items inside services section 

## :brain: Acknowledgments

_"Whoever loves discipline loves knowledge, but whoever hates correction is stupid."_