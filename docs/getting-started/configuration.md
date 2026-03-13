---
title: Configuration
description: Configure OpenCart for multiple languages
---

# Configuration Guide

After installing a language pack, you need to configure OpenCart to use multiple languages in your store.

## Language Settings

### Set Default Language

1. Go to **System** → **Settings**
2. Click **Edit** on your store
3. Navigate to the **Local** tab
4. Set **Language** to your preferred language
5. Set **Administration Language** to your preferred language
6. Click **Save**

### Add Languages to Your Store

1. Go to **System** → **Localization** → **Languages**
2. Click **Add New**
3. Fill in the language details:

| Field | Value for Polish | Value for Lithuanian |
|-------|------------------|----------------------|
| Language Name | Polish | Lithuanian |
| Code | pl | lt |
| Locale | pl-pl,pl,polish | lt-lt,lt,lithuanian |
| Status | Enabled | Enabled |
| Sort Order | 1 | 2 |

4. Click **Save**

## Store Configuration

### Multi-Language Settings

1. Go to **System** → **Settings**
2. **Edit** your store
3. Navigate to **Local** tab
4. Configure:
   - **Country**: Set default country
   - **Zone**: Set default region/state
   - **Currency**: Set default currency
   - **Length Class**: Set default length unit
   - **Weight Class**: Set default weight unit

### SEO URL Settings

For multi-language SEO URLs:

1. Go to **System** → **Settings**
2. **Edit** your store
3. Navigate to **Server** tab
4. Enable **SEO URLs**

!!! note
    Make sure your `.htaccess` file is properly configured for SEO URLs.

## Language Switcher

### Adding Language Switcher to Header

1. Go to **Design** → **Layouts**
2. **Edit** the Header layout (or create new)
3. Add the **Language** module to the **Header** position
4. Click **Save**

### Adding Language Switcher to Footer

1. Go to **Design** → **Layouts**
2. **Edit** the Footer layout (or create new)
3. Add the **Language** module to the **Footer** position
4. Click **Save**

## Category and Information Pages

For multi-language content:

1. Go to **Catalog** → **Categories** (or **Information**)
2. **Edit** each category/page
3. You will see language tabs at the top
4. Enter translations for each language
5. Click **Save**

## Product Translations

To translate products:

1. Go to **Catalog** → **Products**
2. **Edit** a product
3. Use language tabs to enter translations for:
   - Product Name
   - Description
   - Meta Title
   - Meta Description
   - Tags
4. Click **Save**

## Next Steps

- [Activate the language in your store](activation.md)

---

**Need help?** Post your question on [GitHub Discussions](https://github.com/design4pro/opencart-community/discussions/categories/q-a)
