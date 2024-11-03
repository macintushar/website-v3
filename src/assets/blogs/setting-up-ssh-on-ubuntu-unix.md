---
title: How to Set Up SSH on Ubuntu / Unix Systems
description: A step-by-step guide on how to set up SSH on Ubuntu / Unix systems.
date: '2024/11/03'
categories:
  - ssh
  - github
  - linux
published: true
---

If you’re like me, you always struggle to set up the GitHub SSH on every new machine because it’s a process you rarely do and rarely have to do again.

The guides you get online are also tricky to understand if it’s your first time doing it. So, if you’re going to do it for the first time or have done it way too many times that you can’t even count, here’s your easy guide on how to do it on Ubuntu.

## Step 0: Create and Log In to Your GitHub Account

As you can tell, having a GitHub account is the primary step and must be done before doing any other actions.

## Step 1: Open Your Terminal and Type the Following Commands

Go to the .ssh folder to create your SSH Key for GitHub.

```bash
cd ~/.ssh
```

After navigating to the .ssh folder, use the ssh-keygen command to generate your SSH Key.

```bash
ssh-keygen -o -t rsa “[YOUR_EMAIL_HERE]”
```

Press the enter key to save the file name and leave the passphrase empty. After you do this, you’ll see some random art the command generates.

After that, run:

```bash
cat id_rsa.pub
```

To view the key. You should copy the key printed in your Terminal, which starts with “ssh-rsa.”

## Step 2: Go to GitHub

Or type in this URL: [https://github.com/settings/keys](https://github.com/settings/keys)

And click on the “New SSH Key” button.

Add your key and the Title for your new SSH Key.

## Step 3: Start Using GitHub

After you add the key, you should be able to create any repository and commit to it directly from the Terminal.

## Conclusion

Now you can use GitHub with SSH on your Ubuntu machine securely. If you encounter any issues, refer to the GitHub SSH documentation for further troubleshooting.
