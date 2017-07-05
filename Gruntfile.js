module.exports = function(grunt) {
	const mozjpeg = require('imagemin-mozjpeg');
	grunt.initConfig({
		responsive_images: {
		    myTask: {
		      options: {
		        sizes: [{
		          width: 100,
		          height: 75,
		        }]
		      },
		      files: [{
	                expand: true,
	                cwd: 'src/views/images/',
	                src: ['pizzeria.jpg'],
	                dest: 'src/views/images/'
	            }]
	        }
		  },
	    imagemin: {
	        png: {
	        	options: {
	                optimizationLevel: 7
	            },
	            files: [{
	                expand: true,
	                cwd: 'src/img/',
	                src: ['**/*.png'],
	                dest: 'dist/img/'
	            },
	            {
	                expand: true,
	                cwd: 'src/views/images/',
	                src: ['**/*.png'],
	                dest: 'dist/views/images/'
	            }]
	        },
	        jpg: {
	        	options: {
	                progressive: true,
	                use: [mozjpeg()]
	            },
	            files: [{
	                expand: true,
	                cwd: 'src/img/',
	                src: ['**/*.jpg'],
	                dest: 'dist/img/'
	            },
	            {
	                expand: true,
	                cwd: 'src/views/images/',
	                src: ['**/pizzeria.jpg'],
	                dest: 'dist/views/images/'
	            }]
	        }
	    },
	    uglify: {
		   dist: {
		      files: [{
		         'dist/js/perfmatters.min.js': ['src/js/perfmatters.js'],
		      },
		      {
		      	'dist/views/js/main.min.js': ['src/views/js/main.js']
		      }]
		   }
		},
		cssmin: {
		   dist: {
		      files: [{
		         'dist/css/print.min.css': ['src/css/print.css']
		      },
		      {
		      	'dist/views/css/bootstrap-grid.min.css': ['src/views/css/bootstrap-grid.css']
		      },
		      {
		      	'dist/views/css/style.min.css': ['src/views/css/style.css']
		      }]
		  }
		},
		htmlmin: {
		   dist: {
		      options: {
		         removeComments: true,
		         collapseWhitespace: true
		      },
		      files: [{
		         expand: true,
		         cwd: 'src',
		         src: '**/*.html',
		         dest: 'dist/'
		      }]
		   }
		},
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images', 'imagemin', 'uglify', 'cssmin', 'htmlmin']);

}
