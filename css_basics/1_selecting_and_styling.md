# Selecting and Styling in CSS

CSS (Cascading Style Sheets) plays a crucial role in web development by allowing developers to style and enhance the visual presentation of HTML elements. Understanding how to select elements and apply styles is fundamental to creating visually appealing web pages.

## Selecting HTML Elements:

1. **Type Selectors:**

   - Select elements based on their HTML tag. For example, to style all paragraphs, use `p { ... }`.

2. **Class Selectors:**

   - Select elements with a specific class attribute. For example, to style elements with the class "highlight," use `.highlight { ... }`.

3. **ID Selectors:**

   - Select a specific element with a unique ID attribute. For example, to style an element with the ID "header," use `#header { ... }`.

4. **Attribute Selectors:**

   - Select elements based on their attributes. For example, to style all links with the attribute `target="_blank"`, use `a[target="_blank"] { ... }`.

5. **Descendant Selectors:**
   - Select nested elements. For example, to style paragraphs within a div, use `div p { ... }`.

## Applying Styles:

1. **Properties and Values:**

   - CSS styles consist of property-value pairs. For example, `color: blue;` sets the text color to blue.

2. **Box Model:**

   - Elements in CSS are treated as boxes with content, padding, border, and margin. Adjusting these properties affects the size and spacing of elements.

3. **Font Styles:**

   - Customize text with properties like `font-family`, `font-size`, `font-weight`, and `text-align`.

4. **Backgrounds and Borders:**

   - Use properties like `background-color`, `border`, and `border-radius` to enhance the appearance of elements.

5. **Flexbox and Grid:**
   - Utilize layout techniques like Flexbox and Grid for efficient and responsive design.

## Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Selecting and Styling Example</title>
    <style>
      /* Type Selector */
      p {
        color: navy;
      }

      /* Class Selector */
      .highlight {
        background-color: yellow;
      }

      /* ID Selector */
      #header {
        font-size: 24px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div id="header">Welcome to my Website</div>
    <p>
      This is a paragraph with <span class="highlight">highlighted</span> text.
    </p>
  </body>
</html>
```
