# Imai Website
## Getting Started
Refer to [the Jekyll docs](https://jekyllrb.com/docs/).

 - Additionally, install `github-pages` gem
  ```
  gem install github-pages
  ```

 - To build the website, run `bundle exec jekyll build` in the command line with Jekyll set up.
 
 - The website cannot be hosted without building it first.

## Updating the menu
### Adding a new dish
Edit the yml file at `_data/menu.yml`:
  - `name`: Accepts any text. Name of the dish
  - `price`: Accepts any text. Price of the dish, including unit (e.g., $4.99)
  - `description`: Accepts any text. Blurb about the dish, (i.e., ingredients or subtext)
  - `vegetarian`: Only accepts `true` or `false`. Shows a leaf next to the dish in the menu
  - `spicy`: Only accepts positive integers ≥ 1. Shows multiple fire icons depending on the integer

### Adding a new section
  - Edit the html file at `menu.html`:
    - Add a line with this template:
      ```liquid
        {% include menu-section.html id="unique-id" name="Section name" subtitle="Text below section name" %}
      ```
      + Ensure that the `id` is not shared by other sections of the menu
      + Usage of `subtitle` is optional
      + Place the line where you would want the section to be appear in the menu

  - Edit the yml file at `_data/menu.yml`:
    - Start a new section with the header matching the unique id, e.g.,
      ```yml
       unique-id:
         - name: Example food
           price: $4.20
           description: Edible
           vegetarian: true
           spicy: 3

         - name: Example food
           price: $10.00
           description: Contains exotic butter
           spicy: 1
       ```


## Adding notices
Edit the file at `_layouts/default.html`:
 - Uncomment the notice by removing the `{% comment %}` and `{% endcomment %}` tags
 - Change the content of the note:
    + `type`:
      * `info`: blue background, circle with i inside
      * `alert`: red background, diamond with ! inside
      * `warn`: yellow background, triangle with ! inside

    + `title`:
      * self explanatory, can insert raw html, but will be bolded

    + `content`:
      * also self explanatory, can insert raw html
