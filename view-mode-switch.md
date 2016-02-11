
view mode switch - two html files, and the javascript switches between the two
or! one html file.
It's the same content,  but a different layout/presentation/CSS property difference
   -can we use the event listener to switch class from >one layout< to >second layout<
# View Mode Switch:

## What does it do?

This website presents a grid of grouped elements. Inside each element, there's an icon-font, a title, a price, a brief description, and an add-to-cart button. On clicking the layout icon-font (grid/row), the layout changes from blocks to lines. The content does not change.

### What interactive elements exist?

*  The add to cart
*  The font-icons representing the layout

### How do you interact with them?

*  Add to cart hovers
*  Layout Icons hover, and then click

### What visual effects are produced by interacting?

* Add to cart, on hover, changes color. On mouseout, color reverts
* Layout Icons mouse in - changes color. Mouse out, color reverts
* Layout icons control layout - when clicked, goes to inline v block display.
   * This grouping doesn't change every element to inline v block. it keeps all of the sub-groups of each li grouping together.

## How does it do it?

* addEventListener("click", fxn, t/f)
   * this is for the layout icon font. This changes layout, acts on a display property on the <ul> level
* addEventListener("mousein/out", fxn, t/f)
   * this acts on the icon font of the layout icon font and the add to cart buttons

### What existing HTML elements are changed?

* none. I don't think any HTML elements are changed.

### What new HTML elements are created?

* I dont' think anything is created, just displayed differently

### What CSS styles are used to produce the effect?

* hover.
* display (inline v block v inline-block)
