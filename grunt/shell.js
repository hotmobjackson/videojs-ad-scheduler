module.exports = {

  bower: {
    command: 'bower install'
  },

  // does not need to compile.
  videojs: {
    command: [
      // 'npm install',
      // 'bower install',
      // 'grunt'
    ].join('&&'),
    options: {
      stderr: true,
      execOptions: {
        cwd: './bower_components/video.js'
      }
    }
  },

  // Since bower version does not contains jshintrc, we can only define each tasks sepaeately.
  videojs_contrib_ads: {
    command: [
      'npm install',
      // 'bower install',
      'grunt'
    ].join(' && '),
    // command: 'grunt',
    options: {
      stderr: true,
      execOptions: {
        cwd: './bower_components/videojs-contrib-ads'
      }
    }
  },

  videojs_contrib_hls: {
    command: [
      'npm install',
      'npm run-script build'
    ].join('&&'),
    // command: 'grunt',
    options: {
      stderr: true,
      execOptions: {
        cwd: './bower_components/videojs-contrib-hls'
      }
    }
  },

  // Do not need to compile
  videojs_contrib_media_sources: {
    command: [
      // 'npm install',
      // 'bower install',
      // 'grunt'
    ].join('&&'),
    options: {
      stderr: true,
      execOptions: {
        cwd: './bower_components/videojs-contrib-media-sources'
      }
    }
  },

  // Do not need to compile
  // videojs_sublime_skin: {
  //   command: [
  //     // 'npm install',
  //     // 'bower install',
  //     // 'grunt'
  //   ].join('&&'),
  //   options: {
  //     stderr: true,
  //     execOptions: {
  //       cwd: './bower_components/videojs-sublime-skin'
  //     }
  //   }
  // },

  // use precompiled version instead of source version
  vmap_client_js: {
    command: [
      // 'npm install',
      // below will failed under win32
      // 'npm run-script test',
      // 'npm run-script bundle'
    ].join(' && '),
    // command: 'grunt',
    options: {
      stderr: true,
      execOptions: {
        cwd: './bower_components/vmap-client-js'
      }
    }
  },

  // use precompiled version instead of source version
  vast_client_js: {
    command: [
      // 'npm install',
      // below will failed under win32
      // 'npm test',
      // 'npm run-script bundle'
    ].join(' && '),
    // command: 'grunt',
    options: {
      stderr: true,
      execOptions: {
        cwd: './bower_components/vast-client-js'
      }
    }
  },

  copylib: {
    command: [
      // 'cp <%= bower_components %>/bootstrap/dist/js/bootstrap.js ./lib/',
      // 'cp <%= bower_components %>/bootstrap/dist/fonts/* ./lib/fonts/',
      // 'cp <%= bower_components %>/bootstrap/dist/css/*.min.css ./lib/css/',
      // 'cp <%= bower_components %>/jquery/dist/jquery.js ./lib/',
      // 'cp <%= bower_components %>/vast-client-js/vast-client.js ./lib/',
      // 'cp <%= bower_components %>/vmap-client-js/vmap-client.js ./lib/',
      // 'cp <%= bower_components %>/videojs/dist/video-js/video.dev.js ./lib/',
      'cp <%= bower_components %>/video.js/dist/video-js.swf ./lib/',
      'cp <%= bower_components %>/video.js/dist/video-js.swf ./dist/',
      // 'cp <%= bower_components %>/videojs/dist/video-js/video-js.swf ./dist/',
      // 'cp ./lib/video-js.swf ./dist/',
      'cp <%= bower_components %>/video.js/dist/video.js ./lib/',
      'cp <%= bower_components %>/video.js/dist/font/* ./lib/font/',
      'cp <%= bower_components %>/video.js/dist/lang/* ./lib/lang/',
      'cp <%= bower_components %>/video.js/dist/ie8/* ./lib/ie8/',
      'cp <%= bower_components %>/video.js/dist/video-js.css ./lib/',
      'cp -rf ./lib/font/* ./dist/font/',
      'cp -rf ./lib/lang/* ./dist/lang/',
      // 'cp <%= bower_components %>/videojs-contrib-ads/src/videojs.ads.js ./lib/',
      // 'cp <%= bower_components %>/videojs-contrib-ads/src/videojs.ads.css ./lib/',
      'cp <%= bower_components %>/videojs-contrib-hls/dist/videojs-contrib-hls.js ./lib/',
      // 'cp <%= bower_components %>/videojs-contrib-media-sources/src/videojs-media-sources.js ./lib/',
      // 'cp <%= bower_components %>/videojs-sublime-skin/dist/videojs-sublime-skin.css ./lib/',
    ].join('&&')
  }

};
