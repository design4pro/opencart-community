---
title: Installation
description: How to purchase and install DESIGN4ᴾᴿᴼ language packs for OpenCart
---

# Installation Guide

This guide will walk you through the process of purchasing and installing DESIGN4ᴾᴿᴼ language packs for OpenCart 4.1.x.

## Requirements

Before installing, ensure you have:

- **OpenCart 4.1.x** - Our extensions only support OpenCart 4.1.x
- **Admin Access** - You need administrator privileges to install extensions
- **FTP Access** (optional) - Required only if automatic installation fails

## Purchase

1. Visit the [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=48243)
2. Search for "DESIGN4ᴾᴿᴼ" or the specific language pack
3. Purchase the extension
4. Download the extension files from your account

## Installation

### Method 1: OpenCart Installer (Recommended)

1. **Log in to Admin Panel**
   - Navigate to your OpenCart admin panel
   - Go to **Extensions** → **Installer**

2. **Upload Extension**
   - Click the **Upload** button
   - Select the extension file (`.ocmod.zip`)
   - Wait for upload to complete

3. **Install Extension**
   - Go to **Extensions** → **Extensions**
   - Select **Language** from the extension type dropdown
   - Find your language pack in the list
   - Click the **Install** button (green plus icon)

### Method 2: Manual Upload

If the automatic installer fails:

1. Extract the extension ZIP file
2. Upload the contents to your OpenCart root directory via FTP
3. Go to **Extensions** → **Extensions**
4. Select **Language** from the dropdown
5. Click **Install** next to your language pack

## Verification

After installation, verify the language pack is installed:

1. Go to **Extensions** → **Extensions**
2. Select **Language** from the dropdown
3. You should see your language pack listed with status **Enabled**

!!! success "Installation Complete"
    The language pack is now installed. Continue to the [Configuration Guide](configuration.md) to set up your store.

## Troubleshooting

If you encounter issues during installation:

- **Upload failed**: Check file permissions and PHP upload limits
- **Extension not appearing**: Clear the extension cache
- **Error messages**: Check the [Troubleshooting](../troubleshooting/index.md) section

## Next Steps

- [Configure your store settings](configuration.md)
- [Activate the language](activation.md)

---

**Need help?** Post your question on [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
