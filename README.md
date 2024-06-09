This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## node version
_node version 20

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash

# using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: install dependencies

```bash

yarn setup

# or
_yarn install
_npx pod-install
```

## Step 4: run the app
```bash
_check node virsion is 20
_yarn setup  #(yarn install && npx pod-install)
_yarn start 
#ios
_yarn ios
#andriod
_yarn android
```

## folder and file structure

.
├── App.tsx
├── apis
│   └── EndPoints.ts
├── assets
│   ├── svg
│   
├── components
│   ├── DetailsRepository
│   │   ├── CardRepository.tsx
│   ├── UIElements
│   │   ├── Button
│   │   │   ├── Button.style.ts
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── SafeAreaView.tsx
│   │   ├── Layout
│   │   │   ├── Header.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── index.ts
│   │   ├── PageLoader.tsx
│   │   ├── Loader.tsx
│   │   ├── Gradient.tsx
│   │   ├── ActivityLoader
│   │   │   
│   │   └── Text
│   │       ├── Text.style.ts
│   │       ├── Text.tsx
│   │       ├── index.ts
│   │       └── textTypes.ts
│   └── Main
│   │   ├── form.tsx
│   ├── Error.tsx
│   ├── NotFound.tsx
│   ├── ErrorBoundry.tsx
│   ├── ErrorFallback.tsx
├── config
│   ├── appQueryClient.ts
│   └── axiosInstance.ts
├── helpers
├── hooks
│   ├── useGetInfiniteQuery.ts
│   ├── useGetUser.ts
│   ├── useNavigation.ts
│   └── useRoute.ts
├── navigation
│   ├── MainNavigation.tsx
│   └── routes.ts
├── screens
│   ├── Main
│   │   ├── Main.tsx
│   │   └── index.ts
│   └── DetailsRepository
│       ├── DetailsRepository.tsx
│       └── index.ts
├── styles
│   ├── addShadow.ts
│   ├── colors.ts
│   ├── icons.ts
│   └── unit.ts
├──types
│    ├── repo.d.ts
│    ├── userData.d.ts
│    └── global.d.ts
├── i18next
│    ├── en.ts
│    └── index.ts
.


## Libraries used
    # @react-navigation/native
    # @react-navigation/native-stack
    # @tanstack/query-async-storage-persister
    # @tanstack/query-sync-storage-persister
    # @tanstack/react-query
    # @tanstack/react-query-persist-client
    # axios
    # i18next
    # lodash,
    # react
    # react-i18next
    # react-native
    # react-native-bootsplash
    # react-native-linear-gradient
    # react-native-mmkv
    # react-native-restart
    # react-native-safe-area-context
    # react-native-screens
    # react-native-svg
    # react-native-svg-transformer
    # react-native-toast-message
    # url-join