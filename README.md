# CIFP Parser

A tool to parse and process CIFP data for airport procedures.

## Requirements:

- **TypeScript Compiler**: [Download TypeScript](https://www.typescriptlang.org/)
- **Node.js (includes npm)**: [Download Node.js](https://nodejs.org/en/)

## Setup:

1. Clone the repository:

```bash
git clone https://github.com/jet2code/cifp-parser.git
```

2. Navigate to the project directory:

```bash
cd cifp-parser
```

3. Install the dependencies:

```bash
npm install
```

4. Compile the TypeScript code:

```bash
tsc
```

## Run:

Get a procedure for an airport:

```bash
npm run main [airport] [procedure]
```

See a list of procedures for an airport:

```bash
npm run main [airport]
```

## Examples:

Get the EWR4 departure for KEWR airport:

```bash
npm run main KEWR EWR4
```

Get a list of procedures for KEWR airport:

```bash
npm run main KEWR
```

