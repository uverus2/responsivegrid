module.exports = function (grunt) {
    
        // ===========================================================================
        // CONFIGURE GRUNT ===========================================================
        // ===========================================================================
        grunt.initConfig({
    
            // get the configuration info from package.json ----------------------------
            // this way we can use things like name and version (pkg.name)
            pkg: grunt.file.readJSON('package.json'),
    
            // all of our configuration will go here
            sass: {
                dist: {
                    files: {
                        'src/css/main.css': 'src/sass/main.scss' //  1 one you making based on second file 
                    }
    
                }
            },
            cssmin: {
                target: {
                    files: {
                        'dist/css/app.min.css': 'src/css/main.css' // file 1 you are making from file 2 to minify make 1 line 
                    }
                }
            },watch: {
                scripts: {
                  files: ['src/js/*.js','src/sass/*.scss'],
                  tasks: ['default'],
                  options: {
                    spawn: false,
                  },
                },
              },
            uglify: {
                min: {
                    files: [{
                        src: [
                        
                            
                            'src/js/*.js' // looks all javaS files
                        ],
                        dest: 'dist/js/app.min.js'
                    }]
                }
            }
           
        });
    
        // ===========================================================================
        // LOAD GRUNT PLUGINS ========================================================
        // ===========================================================================
        // we can only load these if they are in our package.json
        // make sure you have run npm install so our app can find these
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');
       
        
    
        grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
    
    };