# CIFP Parser

A tool to parse and process CIFP data for airport procedures using X-Plane's CIFP.

## Prerequisites

Before you can build and run this Tauri app, you need:

- [Rust](https://rustup.rs/)
- [Node.js and npm](https://nodejs.org/)
- Tauri CLI: Install using `npm install -g tauri`
- Proper system dependencies for your OS as detailed in [Tauri's setup guide](https://tauri.app/v1/guides/getting-started/prerequisites).

## Cloning the Repo

First, clone the repo to your local machine:

```bash
git clone https://github.com/jet2code/cifp-parser.git
cd cifp-parser
```

Now, switch to the `tauri-app` branch:

```bash
git checkout tauri-app
```

## Installation

Before building the Tauri app, you need to install the necessary npm packages:

```bash
npm install
```

## Building the Tauri App

Once you've installed all dependencies, you can proceed to build the Tauri app:

```bash
npm run tauri build
```

This will build the app and place the resulting binary in the `src-tauri/target` directory (the exact location may vary based on your OS).

## Running the App

If you just want to test the app without building it, you can run:

```bash
npm run tauri dev
```

This will start the Tauri development server and launch the app in a window.
