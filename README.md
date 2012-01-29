# SampleProject
This is a JavaScript project skeleton.

# Usage
*TODO:* This project doesn't have any working code yet.

# Building SampleProject

1. Run `rake` to build SampleProject. Two builds will be placed in the `dist/` directory.
  * `sampleproject.js` and `sampleproject.min.js` - unminified and minified
    builds.

If you are building under Linux, you will need a JavaScript runtime for
minification. You can either install nodejs or `gem install
therubyracer`.

# How to Run Tests

This project [Jasmine](http://pivotal.github.com/jasmine/) for BDD testing.

1. Install Ruby 1.9.2+. There are many resources on the web can help; one of the best is [rvm](http://rvm.beginrescueend.com/).

2. Install Bundler: `gem install bundler`

3. Run `bundle` inside the project root to install the gem dependencies.

4. Run `bundle exec rakep` to build the tests and copy the necessary files into `tests/source`

5. To start the development server, run `bundle exec rackup`.

6. Then visit: `http://localhost:9292/tests/index.html`. 