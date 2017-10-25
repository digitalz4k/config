# React Native
Platform configurations using the latest SDKs

## Android - Support API 19 to 26

##### BuildGradle Project
```
...
dependencies {
    ...
    classpath 'com.android.tools.build:gradle:3.0.0'
}
```

##### BuildGradle App
```
android {
    compileSdkVersion 26
    defaultConfig {
        ...
        minSdkVersion 19
        targetSdkVersion 26
    }
    ...
}

dependencies {
    ...
    implementation 'com.android.support:appcompat-v7:26.1.0'
    ...
}
```

##### Gradle distribution
```
distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip
```

##### Gradle properties
```
org.gradle.jvmargs=-Xmx1536m
```
