[![License](https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat)](https://tldrlegal.com/license/mit-license "MIT License")
[![Build](https://travis-ci.org/mastix/Ionic-Weather-Application.svg?branch=master)](https://travis-ci.org/mastix/Ionic-Weather-Application "Build status")
# Introduction

This is a little demo project to show how to implement a hybrid application with the [Ionic Framework](http://ionicframework.com/).

# What does it do?

The application allows you to add locations (manual or via Geolocation) and to display the weather data (using the [OpenWeatherMap API](http://openweathermap.org/api)) for them.

# Prerequisites

Follow the [Android](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide) and [iOS](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide) platform guides to install required platform dependencies.

# Features

* Retrieving device Information
* Detecting the user's current location
* Storing data via LocalStorage
* Fetching JSON data from a REST API ([OpenWeatherMap API](http://openweathermap.org/api))
* Displaying a splash screen
* Using an application icon
* Concatenating and minifying JS files using Gulp
* Using JShint to lint the JS files
* Uses SASS to generate css files

# Disclaimer

Due to the fact that I only have an Android phone (and no iOS Dev Account for $99 a year) I have only tested this application on my Samsung Galaxy S5 (Android).

But now feel free to download and play with it! ;)

# Screenshots

[<img alt="weather_splash" src="https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_splash.png" width="180" height="320">](https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_splash.png)|
[<img alt="weather_list" src="https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_list.png" width="180" height="320">](https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_list.png) |
[<img alt="weather_locations" src="https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_locations.png" width="180" height="320">](https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_locations.png) |
[<img alt="weather_about" src="https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_about.png" width="180" height="320">](https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_about.png) |
[<img alt="weather_menu" src="https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_menu.png" width="180" height="320">](https://raw.githubusercontent.com/mastix/Ionic-Weather-Application/master/misc/screenshots/weather_menu.png)

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

# Option 1: Run the application on your Android device
gulp run.android

# Option 2: Run the application on your iOS device
gulp run.ios

# Option 3: Build the Android application
gulp build.android

# Option 4: Build the iOS application
gulp build.ios

# Option 5: Run the UI in your browser (Caution: You won't have device specific features when doing so (e.g. splash screen, device information (the whole about screen will not work!),...)
ionic serve --lab
```

# License

MIT
