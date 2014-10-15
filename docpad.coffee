# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {

  env: 'development'
  outPath: 'out'
  
  #===========================================
        
  environments:

    development: #------------------------DEV
      plugins:

        #grunt
        #no uglification of scripts
        grunt:
          writeAfter: ['concat']


    production: #------------------------PROD

      enabledPlugins:
        sass: false
      ignoreCustomPatterns: /css.sass/

      plugins:

        #natural htmlmin (via docpad, apparently)
        #uglification and cache-busting of scripts
        grunt:
          writeAfter: ['concat', 'uglify']

}

# Export the DocPad Configuration
module.exports = docpadConfig
