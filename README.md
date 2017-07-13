## Website Performance Optimization portfolio project

Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.

Original project: https://github.com/udacity/frontend-nanodegree-mobile-portfolio

Optimized to:
1. Receive gogle page score greater than 90
2. Acheive FPS rate of 60 and pizza resize time of 5ms

### Getting started

1. Check out the repository
2. cd into dir, install node modules and run grunt
  ```bash
  $> cd /path/to/your-project-folder/
  $> npm install
  $> grunt
  ```
3. cd into dist folder & start server

  ```bash
  $> cd /path/to/your-project-folder/dist/
  $> python -m SimpleHTTPServer 8080
  ```

4. Open a browser and visit localhost:8080
5. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

#### Steps taken to acheive pagespeed of 92

1. Disable google fonts
2. Download hosted images locally
3. Inline CSS

Tasks completed using grunt:
1. Resize pizzeria image
2. Compress all images
3. Minify all JS + CSS + HTML

### Steps taken to optimize pizza.html
1. In update position function, move property request outside for loop
2. In changepizza function:
	1. Only make one selector query and save it as a variable
	2. Determine the dx and new width on only the first pizza becuase it will stay consistent across all pizza's and move it outside the for loop
