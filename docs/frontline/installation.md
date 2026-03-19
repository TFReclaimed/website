---
sidebar_position: 1
---

# Installation

Learn how to install Titanfall Frontline on your device.

## Pre-patched APK (Recommended)

:::note

If you currently have a version of Titanfall Frontline installed you will need to remove it before installing the patched version.

:::

1. Download the latest pre-patched APK from [here](https://cdn.tfflinternal.com/Frontline_1.0.7334_Patched.apk).
2. Once downloaded, there should be an option to open the file. If not, open the `Files` app or similar and navigate to the `Downloads` folder and open the APK file.
3. You may be prompted to allow installation from unknown sources. If so, follow the prompts to enable this setting.
4. If you received no errors during installation, you should now have the patched version of Titanfall Frontline installed on your device.

## Patching the APK yourself (Advanced)

:::note

This method is meant for developers.

:::

### Prerequisites

Before you begin, make sure you have:

1. Downloaded and extracted the latest version of [FrontlinePatcher](https://github.com/TFReclaimed/FrontlinePatcher/releases).
2. Installed [Apktool](https://apktool.org/docs/install).
3. Installed [Java JDK](https://adoptium.net/temurin/releases).
4. Installed [Android Studio](https://developer.android.com/studio), with Android SDK Build-Tools installed via SDK Manager.
5. Obtained a supported non-patched Titanfall Frontline APK.
    - Versions supported: 1.0.15816, 1.0.16585, 1.0.17334.
    - It is recommended to use the latest version 1.0.17334.

Place the APK in the same directory as the patcher binary.

### Patch the APK

Open a command prompt in the patcher directory and run the following command:

```bash title="Linux/Mac"
./FrontlinePatcher <apk_file> <output_apk_file>
```

```powershell title="Windows"
FrontlinePatcher.exe <apk_file> <output_apk_file>
```

Replace:

- `<apk_file>` with the path to your Titanfall: Frontline APK.
- `<output_apk_file>` with the filename/path you want for the patched APK.

:::warning

Back up the generated `frontline.keystore` file to a secure location. You will need this same keystore to sign and install future updates.

:::
