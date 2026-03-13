---
title: Activation
description: Activate and test your language pack in OpenCart
---

# Activation Guide

This guide explains how to activate and test your installed language pack in OpenCart 4.1.x.

## Activating the Language

### From Extensions

1. Go to **Extensions** → **Extensions**
2. Select **Language** from the dropdown
3. Find your language pack in the list
4. Click the **Edit** button (blue pencil icon)
5. Set **Status** to **Enabled**
6. Click **Save**

### Quick Activate via Status Toggle

1. Go to **Extensions** → **Extensions**
2. Select **Language** from the dropdown
3. Find your language pack
4. Click the green **Enabled** button to toggle status

## Testing the Activation

### Frontend Testing

1. Clear your browser cache
2. Visit your store homepage
3. Look for the language switcher (usually in header or footer)
4. Click to switch to your new language
5. Verify:
   - Navigation menus are translated
   - Product categories are translated
   - Buttons and labels are translated

### Backend Testing

1. Log out of admin panel
2. Log back in
3. The admin interface should now display in your language
4. Verify:
   - Menu items are translated
   - Form labels are translated
   - Error messages are translated
   - Buttons are translated

## Troubleshooting

### Language Not Appearing

If the language doesn't appear in the frontend:

1. Go to **System** → **Localization** → **Languages**
2. Verify the language is listed and **Status** is Enabled
3. Check the language code is correct (e.g., `pl` for Polish)

### Language Switcher Not Visible

If the language switcher is not showing:

1. Go to **Design** → **Layouts**
2. Edit your layout (usually "Default" or "Home")
3. Verify the **Language** module is added to a position
4. Check module settings

### Translations Not Loading

If translations are not showing:

1. Go to **Extensions** → **Extensions**
2. Select **Language**
3. Verify your language pack shows **Enabled** status
4. Try disabling and re-enabling the extension

!!! warning "Cache Issues"
    If translations don't appear after activation, clear the OpenCart cache:
    - Go to **Dashboard** → Click the gear icon
    - Click **Clear Cache**

## Verification Checklist

Use this checklist to verify successful activation:

- [ ] Language shows "Enabled" in Extensions list
- [ ] Language appears in System → Localization → Languages
- [ ] Language switcher visible on frontend
- [ ] Frontend displays translated content
- [ ] Admin panel displays in new language
- [ ] Products can be translated
- [ ] Categories can be translated

---

**Need help?** Post your question on [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
