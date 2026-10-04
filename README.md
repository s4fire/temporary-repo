# Miruro PreMiD Activity

A custom PreMiD activity for [Miruro](https://www.miruro.tv/) that shows the anime and episode currently being watched in Discord Rich Presence.

## What this setup does

This setup runs the custom Miruro activity through the PreMiD development environment and automatically starts it in the background when Windows boots.

You only need to keep **Activity Developer Mode** enabled in PreMiD. You do **not** need to manually open PowerShell and start the activity every time.

## Step 1 — Install the prerequisites

If they are not already installed, install:

- Node.js (LTS)
- Git
- PreMiD browser extension
- Discord

Make sure Node.js is added to your Windows PATH during installation.

## Step 2 — Clone the repository

Open PowerShell and run:

```powershell
cd $HOME
git clone https://github.com/s4fire/temporary-repo.git
```

This downloads the repository into:

```text
C:\Users\<YourUsername>\temporary-repo
```

## Step 3 — Enable PreMiD Developer Mode

1. Open Zen Browser.
2. Open the PreMiD extension.
3. Open its settings.
4. Enable **Activity Developer Mode**.

Leave Developer Mode enabled while you want to use the custom Miruro activity.

## Step 4 — Fix the Node.js PATH if needed

If PowerShell says that `node` or `npx` is not recognized, run:

```powershell
$env:Path += ";C:\Program Files\nodejs"
```

This tells the current PowerShell session where Node.js and `npx` are installed.

## Step 5 — Go to the PreMiD Activities workspace

The working setup uses the PreMiD Activities workspace inside the repository:

```powershell
cd "$HOME\temporary-repo\Activities"
```

If your repository is installed somewhere else, replace the path with your actual location.

## Step 6 — Start the Miruro activity

Run:

```powershell
npx pmd dev "Miruro"
```

When the activity starts successfully, PreMiD should connect to the running development activity.

Now open Miruro in Zen Browser and start watching an episode. Your Discord Rich Presence should update with the Miruro activity.

### What this command does

`npx pmd dev "Miruro"`:

- Targets the Miruro activity.
- Compiles `presence.ts` into executable code while the development process is running.
- Starts the local development connection used by the PreMiD extension.
- Sends the activity's Rich Presence data through PreMiD to Discord.

## Step 7 — Make it start automatically with Windows

If you do not want to manually open PowerShell and run the command every time, create a Windows Startup shortcut.

1. Press **Win + R**.
2. Enter:
   `shell:startup`
3. Press Enter.
4. Right-click inside the folder → **New → Shortcut**.
5. Use this command, replacing `USER` with your Windows username:

```text
powershell.exe -WindowStyle Hidden -Command "Set-Location 'C:\Users\USER\temporary-repo\Activities'; $env:Path += ';C:\Program Files\nodejs'; npx pmd dev 'Miruro'"
```

6. Click **Next**.
7. Name the shortcut something like **PreMiD Miruro Activity**.
8. Click **Finish**.

Windows will then launch the development process automatically when you sign in. The PowerShell window is hidden, so you do not have to keep a visible terminal open.

### What the startup command does

```text
powershell.exe -WindowStyle Hidden -Command "Set-Location 'C:\Users\USER\temporary-repo\Activities'; $env:Path += ';C:\Program Files\nodejs'; npx pmd dev 'Miruro'"
```

It:

- Starts PowerShell without showing a window.
- Moves into the PreMiD Activities workspace.
- Adds Node.js to the current session's PATH.
- Starts the Miruro development activity automatically.
- Keeps the local PreMiD connection running in the background.

This means the activity is available automatically after Windows starts, without you manually opening a terminal.

## What the commands you may encounter actually mean

### Fixing the PATH

```powershell
$env:Path += ";C:\Program Files\nodejs"
```

This adds the Node.js installation directory to the current PowerShell session so commands such as `node` and `npx` can be found.

### Commands that did not work

You may see people suggest:

```powershell
npx @premid/cli build
npx @premid/dev
npx pmd build
```

These are **not required for this setup**. In testing, the standalone npm package approach either failed to resolve the expected package or expected the full PreMiD workspace structure.

The working setup uses the PreMiD Activities workspace and:

```powershell
npx pmd dev "Miruro"
```

### Starting the development activity

```powershell
npx pmd dev "Miruro"
```

This starts the Miruro activity in development mode and connects it to the PreMiD extension.

### Automatic background startup

```text
powershell.exe -WindowStyle Hidden -Command "Set-Location 'C:\Users\USER\temporary-repo\Activities'; $env:Path += ';C:\Program Files\nodejs'; npx pmd dev 'Miruro'"
```

This is simply the same working command automated through Windows Startup, with the PowerShell window hidden.

## Troubleshooting

### `npx` is not recognized

Run:

```powershell
$env:Path += ";C:\Program Files\nodejs"
```

Then try the command again.

If that still fails, verify that Node.js is installed and check where it was installed.

### The Activities folder does not exist

Make sure you are using the repository/workspace that contains the PreMiD Activities structure. The command must be run from the directory containing the relevant PreMiD activity workspace.

### The activity does not appear in Discord

Check these in order:

1. Discord is running.
2. PreMiD is installed and enabled.
3. **Activity Developer Mode** is enabled.
4. `npx pmd dev "Miruro"` is running successfully.
5. Zen is open on a Miruro watch page.
6. Wait a few seconds for the Rich Presence to update.

### The Startup shortcut does nothing

First run this manually in PowerShell:

```powershell
cd "$HOME\temporary-repo\Activities"
$env:Path += ";C:\Program Files\nodejs"
npx pmd dev "Miruro"
```

If that works, check that the Startup shortcut uses the correct Windows username and repository path.

## Updating the activity

If the activity is updated on GitHub:

```powershell
cd "$HOME\temporary-repo"
git pull
```

Then restart the running activity if necessary.

## Important

You must keep **Activity Developer Mode enabled** in PreMiD for this custom development activity to work.

The Windows Startup shortcut is what makes the development process start automatically. You do not need to manually launch PowerShell after it has been configured.

## Need help?

If something goes wrong, copy this entire README and paste it into Gemini. Tell Gemini what you were trying to do and include the **exact error message** you received.

For example:

> I am following this README to set up the Miruro PreMiD activity. I got this error: [paste the exact error here]

**Do not paraphrase the error if you can avoid it — paste the exact PowerShell/terminal output.** That gives Gemini much more useful information for figuring out what went wrong.
