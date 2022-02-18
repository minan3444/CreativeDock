### Requeriments

- Installing [Node.js](https://nodejs.org/es/download/)  (My version is v16.14.0)
- installing [git bash](https://git-scm.com/downloads)
- Installing Visual Studio (My version is 1.64.2 (Universal) 
- Installing cucumber gherkin add-on in visual studio

### Requeriments mobile

- Java Development Kit [(JDK)](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133155.html)
  - Add environment variables to **JAVA_HOME** 
- [Appium](https://appium.io/downloads/) Desktop. My version is v16.14.0
- [Android Studio](https://developer.android.com/studio/index.html)
  
**SDK Platform**: Android 10 

**SDK tools**:
    - Android SDK Build Tools.
    - Andorid SDK Command Line Tools.
    - Android Emulator.
    - Android SDK Platform-tools.

**Android Virtual Device Manager**.
  - Add below pathes to your .zshrc file in mac
  - export ANDROID_HOME=/YOUR_PATH_TO/android-sdk
  - export PATH=$PATH:$ANDROID_HOME/platform-tools
  - export PATH=$PATH:$ANDROID_HOME/tools
  - export PATH=$PATH:$ANDROID_HOME/tools/bin
  - export PATH=$PATH:$ANDROID_HOME/emulator
 
**npm Installations**
  - npm install -g appium-doctor
  - appium-doctor --android
  
```bash
npm install (My version is 8.3.1)
```
Execute  test scenarios from command line in project directory use below command

```bash
    npm run wdio-mobile
```
- Before you executed test scenarios check capabilities values in wdio.mobile.conf.ts in you local environment. 
