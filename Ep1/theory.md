Theory:
1) What is Emmet ?
Ans. It is the special feature in vs code which it will give us the full html boilerplate automatically. To use it, we need to type "!".

2)  Difference between a Library and Framework?
Ans.  Main reason is Inversion of control.
    Library: Programmer can call to perform specific tasks. The developer is in control of when and which library functions to call. Ex: J query
    Framework. Provides a structure or skeleton for the developers to build their app.   In a framework, the control is inverted - the framework calls the developer's code at the right time. ex: React, Angular, Django

3) What is CDN? Why do we use it?
Ans. A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy        applications.
        CDN in react is used to get the react superpowers inside us.

4) Why is React known as React?
Ans. React is known as "React" because of the way it "reacts" to changes in state.

5) What is crossorigin in script tag?
Ans. CORS, or Cross-Origin Resource Sharing, is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web  page to be requested from another domain outside the domain from which the resource originate

6) What is diference between React and ReactDOM ?
Ans. React operates only the basic elements where as ReactDOM handles the whole DOM tree

7) What is difference between react.development.js and react.production.js files via CDN?
Ans.``` react.development.js``` is  used for development purposes and not applicable for production level code whereas 
```react.production.js``` is used for production purposes. 

8) What is async and defer?
Ans. async:  The script is executed asynchronously with the rest of the page. This means the script is fetched in parallel to the HTML parsing, and executed as soon as it is available. This can interrupt the parsing of the HTML document.
defer:  the script is fetched in parallel (like async), but it is executed only after the HTML document has been completely parsed. This means it doesn't block the HTML parsing and waits until the page is ready.