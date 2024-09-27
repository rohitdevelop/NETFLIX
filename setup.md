 ## how to setup a tailwindcss

 step 1: Run the following 
 commands

```
npm install -D taiwindcss 
npx tailwindcss init
```
step2: update tailwind.conf.js file to include this line:
```
conrtent: ["*.html],
```

step3: creat src/input .css to inslude:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

step4: Include the src/output.css file to your html

step5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```