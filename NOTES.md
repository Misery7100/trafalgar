### Disabled root vars

_spaces mean margins and paddings_

+ button__text  - - - - - - - - `spaces`
+ logo                  
    - `spaces`
+ nav-menu              
    - `spaces, height (in --text-var - WTF?!)`
+ nav-menu__list        
    - `width`
+ nav-menu__item        
    - `height (in --text), a lot of spaces`
+ section               
    - `spaces (margin-bottom)`
+ section__image        
    - `spaces`
+ text-section          
    - `font-size, spaces`
+ service-card          
    - `width, height, spaces`
+ service-card__title   
    - `font-size`
+ service-card__pic     
    - `spaces (but margin is correct)`

_also disabled some properties in design-system.scss_

---

Need to sort CSS properties according to pattern. Need to create media and animation templates :/

---

### CSS sorting pattern

```CSS

.declaration-order {

  // Position --> (Nont needed for flexboxes I think)

  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  // Flex or Block model -->

  display: flex;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  // Typographic -->

  font: normal 13px/1.5 "Arial", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
  text-align: center;
  color: #333333;

  // Decor -->

  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 1;

  // Animations -->

  transition: color 1s;
  animation: ...;

  // Other -->

  will-change: auto;
}

```