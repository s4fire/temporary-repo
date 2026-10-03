# Miruro PreMiD Activity

A custom PreMiD activity for [Miruro](https://www.miruro.tv/) that shows the anime and episode currently being watched in Discord Rich Presence.

## Quick setup — one command

If you already have Git, Node.js 20+ and the PreMiD browser extension installed, open **PowerShell** and paste this:

```powershell
git clone https://github.com/s4fire/temporary-repo.git; cd temporary-repo; npm install; npx pmd dev "Miruro"
```

This clones the repository, enters the folder, installs the required dependencies, and starts the Miruro activity in development mode.

If that works, you should eventually see output similar to:

```
Found 0 errors. Watching for file changes.
Compiled Miruro!
Connected to the extension!
Activity sent to the extension!
```

Then open Miruro in your browser and the activity should appear in Discord.

> **Important:** PreMiD's current Activities workflow requires Node.js 20 or newer. The official Activities repository uses `npm install` and `npx pmd dev <activity-name>` for development. Do not use the old `premid-cli` command.

## If the one-command setup does not work

Run the commands one at a time so you can see exactly which step fails.

### Step 1 — Clone the repository

```powershell
git clone https://github.com/s4fire/temporary-repo.git
```

You should see Git download the repository.

### Step 2 — Enter the repository

```powershell
cd temporary-repo
```

Your PowerShell prompt should now end in something similar to:

```
...\\temporary-repo>
```

### Step 3 — Install the dependencies

```powershell
npm install
```

Let this finish completely. It may take a while because the repository installs the PreMiD CLI and its dependencies.

### Step 4 — Start the Miruro activity

```powershell
npx pmd dev "Miruro"
```

Keep this PowerShell window open while you use the activity. It watches the activity files for changes and sends the development activity to the PreMiD extension.

## PreMiD setup

Before testing the activity:

1. Install the PreMiD browser extension.
2. Open the PreMiD extension settings.
3. Enable **Activity Developer Mode**.
4. Run `npx pmd dev "Miruro"` from the repository folder.
5. Open a Miruro watch page, for example an anime episode.
6. Check Discord for the Rich Presence.

The activity is designed to detect Miruro watch pages, the anime title, the selected episode, the episode title when available, and the anime artwork when available.

## Common errors and fixes

### `git is not recognized`

Git is not installed or is not available in your PATH.

Install Git, restart PowerShell, and run:

```powershell
git --version
```

If a version number appears, retry Step 1.

### `node is not recognized` or `npm is not recognized`

Node.js is not installed correctly or PowerShell was opened before Node.js was installed.

Close PowerShell, open a new PowerShell window, and run:

```powershell
node --version
npm --version
```

Node.js 20 or newer is required.

### `git clone` says the destination already exists

You probably already cloned the repository.

Instead of cloning it again, enter the existing folder:

```powershell
cd temporary-repo
```

Then continue with:

```powershell
npm install
npx pmd dev "Miruro"
```

### `npm install` fails

First make sure you are inside the repository:

```powershell
Get-Location
```

The path should end in `temporary-repo`.

Then retry:

```powershell
npm install
```

If npm reports a specific package, permission, or build error, use the first error in the output rather than the final summary line when diagnosing it.

Do **not** use `npm audit fix --force` as a general fix for installation problems.

### `npm ERR! 404 Not Found` for `premid-cli`

That usually means an outdated command was used.

Do **not** run:

```powershell
npx premid-cli dev
```

Use the current repository CLI instead:

```powershell
npx pmd dev "Miruro"
```

### `pmd` starts but Miruro is not found

Make sure the command is being run from the root of this repository:

```powershell
cd temporary-repo
npx pmd dev "Miruro"
```

The activity name is **Miruro**, including the capital `M`.

### `Found 0 errors` but Discord shows nothing

Check these in order:

1. Make sure the PreMiD browser extension is running.
2. Make sure **Activity Developer Mode** is enabled.
3. Make sure the PowerShell window running `npx pmd dev "Miruro"` is still open.
4. Make sure you are actually on a Miruro watch page.
5. Check the PowerShell window for:
   `Connected to the extension!`
   and
   `Activity sent to the extension!`

### `Connected to the extension!` appears, but the activity disappears

The activity only sets a presence when it detects a Miruro watch page with an anime title and a matching episode.

Open a URL in the Miruro watch format and wait a few seconds for the activity to update.

### The activity shows the wrong episode

The activity reads Miruro's selected `?ep=` URL value and matches it to the corresponding episode control on the page.

Try switching episodes normally on Miruro and wait a few seconds for the presence to update. The development process must remain running.

## Updating an existing installation

If you already cloned this repository, do not clone it again. Open PowerShell in the repository and run:

```powershell
cd temporary-repo
git pull
npm install
npx pmd dev "Miruro"
```

## Stopping the activity

When you are finished testing, press:

```
Ctrl + C
```

in the PowerShell window running the development command.

## Requirements

- Windows PowerShell
- Git
- Node.js 20+
- PreMiD browser extension
- PreMiD Activity Developer Mode enabled
- Discord

Official PreMiD documentation recommends Node.js 20+ and the `npx pmd dev <activity-name>` workflow for developing Activities.
