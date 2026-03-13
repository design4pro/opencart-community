---
title: Troubleshooting
description: Common issues and solutions for DESIGN4ᴾᴿᴼ language packs
---

# Troubleshooting Guide

Solutions to common issues with our OpenCart language packs.

## Installation Issues

### Extension Not Installing

**Symptoms**: Upload fails or extension doesn't appear in list

**Solutions**:

1. **Check file permissions**
   - Ensure `/storage/` is writable
   - Check `/admin/` permissions

2. **Verify PHP settings**
   - Increase `upload_max_filesize` in php.ini
   - Enable `file_uploads`

3. **Clear cache**
   - Go to Dashboard → Clear cache
   - Refresh extensions page

### Installation Error Messages

| Error | Solution |
|-------|----------|
| "Archive corrupted" | Re-download extension file |
| "Permission denied" | Check folder permissions |
| "Version mismatch" | Verify OpenCart version |

## Language Not Working

### Language Not Appearing

**Symptoms**: Installed language doesn't show in frontend

**Solutions**:

1. **Verify installation**
   - Go to Extensions → Extensions → Language
   - Confirm status shows "Enabled"

2. **Check language definition**
   - Go to System → Localization → Languages
   - Verify language is listed
   - Check status is Enabled

3. **Clear cache**
   - System → Maintenance → Clear Cache
   - Refresh browser (Ctrl+F5)

### Translations Not Loading

**Symptoms**: English shows instead of translated text

**Solutions**:

1. **Enable language in settings**
   - Go to System → Settings → Local
   - Set default language

2. **Check language pack status**
   - Extensions → Extensions → Language
   - Click Edit on your language
   - Verify Status = Enabled

3. **Reinstall language pack**
   - Uninstall existing version
   - Clear cache
   - Install fresh copy

## Frontend Issues

### Language Switcher Not Visible

**Symptoms**: Can't switch between languages

**Solutions**:

1. **Add language module**
   - Go to Design → Layouts
   - Edit your layout
   - Add Language module

2. **Check module position**
   - Verify module is in visible area
   - Try different position (header/footer)

3. **Check module status**
   - Go to Extensions → Modules
   - Verify Language module is enabled

### Broken Layout After Language Switch

**Symptoms**: Page layout breaks when switching language

**Solutions**:

1. **Clear cache**
   - System → Maintenance → Clear Cache
   - Refresh page

2. **Check theme compatibility**
   - Some themes may need updates
   - Contact theme developer

3. **Check custom CSS/JS**
   - Disable custom scripts temporarily
   - Test with default theme

## Backend Issues

### Admin Panel in Wrong Language

**Symptoms**: Admin shows wrong language after install

**Solutions**:

1. **Check user language setting**
   - Go to your profile (top right)
   - Set Administration Language

2. **Check system default**
   - System → Settings → Local
   - Verify Administration Language

### Missing Translation in Admin

**Symptoms**: Some admin texts are still in English

**Solutions**:

1. **Verify language pack is current**
   - Check for updates on Marketplace

2. **Report missing translation**
   - Post on [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/bug-reports)

## Performance Issues

### Slow Page Load

**Symptoms**: Pages load slowly with new language

**Solutions**:

1. **Enable caching**
   - System → Settings → Server
   - Enable cache

2. **Optimize images**
   - Compress language flag images
   - Use sprite for flags

## Advanced Troubleshooting

### Manual Language Installation

If automatic installation fails:

1. Upload language files via FTP:
   - `/catalog/language/pl/` (storefront)
   - `/admin/language/pl/` (admin)

2. Add language in System → Localization → Languages

3. Clear all caches

### Database Issues

If you suspect database corruption:

1. Backup database
2. Reinstall language pack
3. Restore if needed

---

**Still having issues?** Post your problem on [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
