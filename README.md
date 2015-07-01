# Introduction

This is a little demo project to show how to implement a hybrid application with the [Ionic Framework](http://ionicframework.com/).

# What does it do?

The application allows you to add locations (manual or via Geolocation) and to display the weather data (using the [OpenWeatherMap API](http://openweathermap.org/api)) for them.

# Prerequisites

Follow the [Android](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide) and [iOS](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide) platform guides to install required platform dependencies.

# Features

* Retrieving Device Information
* Detecting the user's current location
* Storing data via LocalStorage
* Fetching JSON data from a REST API
* Displaying a splash screen
* Using an application icon
* Concatenates and minifies JS files
* Uses JShint to lint the JS files
* Uses SASS to generate css files

# Disclaimer

Due to the fact that I only have an Android phone (and no iOS Dev Account fpr $99 a year) I have only tested this application on my Samsung Galaxy S5.

But now feel free to download and play with it! ;)

# How to start

```bash
# Fetch the source code
git clone https://github.com/mastix/Ionic-Weather-Application.git
cd Ionic-Weather-Application

# If you don't have gulp, bower, ionic and cordova installed, run the following command
npm install -g gulp bower ionic cordova

# Install all necessary tools, plugins and platforms by running the following commands
npm install
ionic state restore
gulp

# Run the application on your android device (if you need IOS support you have to install the ios platform)
ionic run android
```

# License

MIT
