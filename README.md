1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById means that you can only select an ID, not classes. getElementsByClassName means that you can only select classes, not an ID. So these two are fixed. But with querySelector you can select any ID, class, or tag. With querySelectorAll you can select multiple classes or tags.

2. How do you create and insert a new element into the DOM?
Ans: By using createElement you can create new elements, and with appendChild you can insert an element.

3. What is Event Bubbling and how does it work?
Ans: Event bubbling means you can access or start the event that is placed on the child with the parent. The parent will respond to the event that is placed on the child.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation means that you can place a single event in the parent instead of placing events in the child. This is helpful when there are multiple children and you have to place the same event in each child. Instead of placing the event on multiple children, you can place the event in the parent, so you will be able to access the event from all the children.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is used to stop the default feature of a web browser, and stopPropagation() is used to stop the event bubbling feature of JavaScript so the event placed in the child can’t be accessed by the parent.
