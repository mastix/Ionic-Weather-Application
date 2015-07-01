# Introduction

This is a little demo project to show how to implement a hybrid application with the [Ionic Framework](http://ionicframework.com/).

# What does it do?

The application allows you to add locations (manual or via Geolocation) and to display the weather data (using the [OpenWeatherMap API](http://openweathermap.org/api)) for them.

# Features

* Retrieving Device Information
* Detecting the user's current location
* Storing data via LocalStorage
* Fetching JSON data from a REST API
* Displaying a splash screen
* Using an application icon
* Concatenates and minifies JS files
* Uses SASS to generate css files

Feel free to download and play with it! ;)

# How to start

```bash
git clone https://github.com/mastix/Ionic-Weather-Application.git
cd Ionic-Weather-Application

# If you don't have gulp, bower, ionic and cordova already installed
npm install -g gulp bower ionic cordova

# Install all necessary tools, plugins and platforms
npm install
ionic state restore
gulp

# Run the application on your android device (if you need IOS support you have to install the ios platform)
ionic run android
```

# License

MIT
