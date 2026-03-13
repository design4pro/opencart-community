# Zensical Markdown Extensions Reference

Complete guide to markdown features available in Zensical.

## Basic Markdown

Zensical supports all standard markdown:
- Headings (`#` to `######`)
- Bold (`**text**`) and italic (`*text*`)
- Lists (ordered and unordered)
- Links (`[text](url)`)
- Blockquotes (`> quote`)
- Horizontal rules (`---`)

## Admonitions (Callouts)

### Basic Syntax

Start with `!!!` followed by type, indent content by 4 spaces:

```markdown
!!! note
    This is a note.
```

### Supported Types

| Type | Default Title |
|------|---------------|
| `note` | Note |
| `abstract` | Abstract |
| `info` | Info |
| `tip` | Tip |
| `success` | Success |
| `question` | Question |
| `warning` | Warning |
| `failure` | Failure |
| `danger` | Danger |
| `bug` | Bug |
| `example` | Example |
| `quote` | Quote |

### Custom Titles

```markdown
!!! warning "Custom Warning Title"
    Your warning content here.
```

### No Title

```markdown
!!! note ""
    Content without title or icon.
```

### Collapsible Blocks

```markdown
??? note
    Collapsed by default (click to expand)

???+ note
    Expanded by default
```

### Inline Admonitions

```markdown
!!! info inline end "Right aligned"
    Sidebar content

!!! info inline "Left aligned"
    Inline content
```

### Nested Admonitions

```markdown
!!! note
    Outer note

    !!! warning
        Nested warning
```

## Code Blocks

### Basic Highlighting

````markdown
```python
def hello():
    print("Hello, World!")
```
````

### Supported Languages

Common languages: python, javascript, typescript, bash, json, yaml, toml, html, css, sql, php, ruby, go, rust, java, c, cpp, csharp, swift, kotlin

### Line Numbers

````markdown
```python {linenums="1"}
def hello():
    print("Hello")
```
````

### Highlighting Lines

````markdown
```python {hl_lines="2 3"}
def hello():
    print("Highlighted")
    print("Also highlighted")
```
````

### Inline Code

Use backticks: `` `code` ``

## Tables

### Basic Table

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

### Aligned Columns

```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L    |   C    |      R|
```

### Tables with Footnotes

```markdown
| A    | B    |
|------|------|
| Cell | Cell[^1]

[^1]: Footnote text
```

## Task Lists

```markdown
- [ ] Unchecked task
- [x] Checked task
```

## Tabs (Content Tabs)

=== "Tab 1 Title"
    Content for tab 1

=== "Tab 2 Title"
    Content for tab 2

=== "Tab 3 Title"
    Content for tab 3

## Footnotes

```markdown
Here is a footnote[^1].

[^1]: Here is the footnote text.
```

## Math

### Block Math

```markdown
$$
E = mc^2
$$
```

### Inline Math

```markdown
Inline math: $E = mc^2$
```

## Tooltips

```markdown
[Hover text](tooltip "Tooltip content")
```

## Emoji

Use emoji codes or direct emoji:
- `:warning:` → ⚠️
- `:rocket:` → 🚀
- `:book:` → 📖

## Links

### Internal Links

```markdown
[Link to page](other-page)
[Link with title](other-page "Title")
```

### External Links

```markdown
[External](https://example.com)
```

## Images

```markdown
![Alt text](image.png)

![Alt text](image.png "With title")
```

### Figure with Caption

```markdown
![Image description](image.png)
*Figure: Caption text*
```

## Attribute Lists

Add attributes to elements:

```markdown
![Image](image.png){width=100}

[Link](url){target=_blank}
```

## Keyboard Keys

```markdown
++ctrl+c++  → Ctrl+C
++ctrl+v++  → Ctrl+V
```

## Strikethrough

```markdown
~~deleted text~~
```
