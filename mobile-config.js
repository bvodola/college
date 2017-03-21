App.info({
  id: 'poli.app',
  name: 'Poli App',
  version: "0.0.1"
});

App.accessRule('*', { type: 'navigation' });

App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');

App.icons({
  iphone_2x: 'public/icons/app/ios/icons/Icon-App-60x60@2x.png',
  iphone_3x: 'public/icons/app/ios/icons/Icon-App-60x60@3x.png',
  ipad: 'public/icons/app/ios/icons/Icon-App-76x76@1x.png',
  ipad_2x: 'public/icons/app/ios/icons/Icon-App-76x76@2x.png',
  ios_settings: 'public/icons/app/ios/icons/Icon-App-29x29@1x.png',
  ios_settings_2x: 'public/icons/app/ios/icons/Icon-App-29x29@2x.png',
  ios_settings_3x: 'public/icons/app/ios/icons/Icon-App-29x29@3x.png',
  ios_spotlight: 'public/icons/app/ios/icons/Icon-App-40x40@1x.png',
  ios_spotlight_2x: 'public/icons/app/ios/icons/Icon-App-40x40@2x.png',
  android_mdpi: 'public/icons/app/android/mipmap-mdpi/ic_launcher.png',
  android_hdpi: 'public/icons/app/android/mipmap-hdpi/ic_launcher.png',
  android_xhdpi: 'public/icons/app/android/mipmap-xhdpi/ic_launcher.png',
  android_xxhdpi: 'public/icons/app/android/mipmap-xxhdpi/ic_launcher.png',
  android_xxxhdpi: 'public/icons/app/android/mipmap-xxxhdpi/ic_launcher.png'
});

// App.launchScreens({
//   iphone_2x:,
//   iphone5:,
//   iphone6:,
//   iphone6p_portrait:,
//   iphone6p_landscape:,
//   ipad_portrait:,
//   ipad_portrait_2x:,
//   ipad_landscape:,
//   ipad_landscape_2x:,
//   android_mdpi_portrait:,
//   android_mdpi_landscape:,
//   android_hdpi_portrait:,
//   android_hdpi_landscape:,
//   android_xhdpi_portrait:,
//   android_xhdpi_landscape:,
//   android_xxhdpi_portrait:,
//   android_xxhdpi_landscape:
// });
