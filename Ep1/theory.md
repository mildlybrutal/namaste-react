Theory questions of Ep1:

1. What is Emmet ?
   Ans. It is the special feature in vs code which it will give us the full html boilerplate automatically. To use it, we need to type "!".

2. Difference between a Library and Framework?
   Ans. Main reason is Inversion of control.
   Library: Programmer can call to perform specific tasks. The developer is in control of when and which library functions to call. Ex: J query
   Framework. Provides a structure or skeleton for the developers to build their app. In a framework, the control is inverted - the framework calls the developer's code at the right time. ex: React, Angular, Django

3. What is CDN? Why do we use it?
   Ans. A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.
   CDN in react is used to get the react superpowers inside us.

4. Why is React known as React?
   Ans. React is known as "React" because of the way it "reacts" to changes in state.

5. What is crossorigin in script tag?
   Ans. CORS, or Cross-Origin Resource Sharing, is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originate

6. What is diference between React and ReactDOM ?
   Ans. React operates only the basic elements where as ReactDOM handles the whole DOM tree

7. What is difference between react.development.js and react.production.js files via CDN?
   Ans.` react.development.js` is used for development purposes and not applicable for production level code whereas
   `react.production.js` is used for production purposes.

8. What is async and defer?
   Ans. async: The script is executed asynchronously with the rest of the page. This means the script is fetched in parallel to the HTML parsing, and executed as soon as it is available. This can interrupt the parsing of the HTML document.
   defer: the script is fetched in parallel (like async), but it is executed only after the HTML document has been completely parsed. This means it doesn't block the HTML parsing and waits until the page is ready.

Theory questions of EP2:

1.  What is NPM ?  
    Ans. NPM manages the packages we install . Its full form is not "node package manager".

2.  What is `Parcel/Webpack`? Why do we need it?
    Ans. It is commonly used a bundler for JavaScript applications. It is used to bundle the code and assets into a single file. It is used to minify the code and assets.

3.  What is `.parcel-cache` ?
    Ans. It is a cache folder created by parcel to store the cache files.

4.  What is `npx` ?
    Ans. npx is a package runner tool . It is used to execute packages without installing them globally.

5.  What is difference between `dependencies` vs `devDependencies` ?
    Ans. `devDependencies` are basically required for developers and it not optimized for production whereas `dependencies` are optimized for production.

6.  What is Tree Shaking?
    Ans. Removing the un-used code is called Tree Shaking. It is automatically done by `Parcel`.

7.  What is Hot Module Replacement?
    Ans. Hot Module Replacement (HMR) is a feature to inject updated modules into the active runtime. It allows all kinds of modules to be updated at runtime without the need for a full refresh.

8.  - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
      Ans. Dev build, HMR, Caching, File Watching Algorithm, HTTPs
      HTTPs -> Parcel gives us an option to build our web app in HTTPs mode, we can do it by , npm i parcel -HTTPs
      Caching -> It leads us to build fastly, installs all the tools fastly
      HMR -> It allows all kinds of modules to be updated at runtime without the need for a full refresh.

9.  - What is `.gitignore`? What should we add and not add into it?
      Ans. It is used to filter the files that should not push it to the github. We should add the files which we can recreate for ex. node_modules. We should not add the essential files into the .gitignore.

10. - What is the difference between `package.json` and `package-lock.json` ?
      Ans. package.json tracks the version and it is config of npm where package-lock.json helps to handle the node_modules configs.

11. - Why should I not modify `package-lock.json`?
      Ans. To manage same versions of dependencies everywhere.

12. What is `node_modules` ? Is it a good idea to push that on git?
    Ans. All the packages , dependencies and files gathered from parcel. No, its not a good idea to push the code on git as these files are large and we can also recreate them.

13. What is the `dist` folder?
    Ans. The `dist` folder contains the final versions of your files that are optimized for production use. This includes minified JavaScript and CSS files, optimized images, and any other assets that have been processed to ensure they are as efficient as possible.

14. What is `browserlists` ?
    Ans. Using this we can make our web app accessible for everyone who has previous versions of different browsers as well as specific location.
