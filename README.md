# DummmyBcHeSaidSo
https://daringfireball.net/projects/markdown/syntax

I vim'd  
Do you even vim bro?  

vin commands:  
i is insert  
escape to stop inserting  
:wq is quit with save  
:quit! is force quit without save  
  
to get out either type colon :  
either wq or quit!  

LISTS  

Markdown supports ordered (numbered) and unordered (bulleted) lists.  
  
Unordered lists use asterisks, pluses, and hyphens — interchangably — as list markers:

*   Red
*   Green
*   Blue
is equivalent to:

+   Red
+   Green
+   Blue
and:

-   Red
-   Green
-   Blue
Ordered lists use numbers followed by periods:

1.  Bird
2.  McHale
3.  Parish

Links  
  
This is [an example](http://example.com/ "Title") inline link.  
  
[This link](http://example.net/) has no title attribute.  
Will produce:  
  
<p>This is <a href="http://example.com/" title="Title">
an example</a> inline link.</p>  
  
<p><a href="http://example.net/">This link</a> has no
title attribute.</p>  

Images
Inline image syntax looks like this:

![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
That is:

An exclamation mark: !;
followed by a set of square brackets, containing the alt attribute text for the image;
followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes.
Reference-style image syntax looks like this:

![Alt text][id]
Where “id” is the name of a defined image reference. Image references are defined using syntax identical to link references:

[id]: url/to/image  "Optional title attribute"

AUTOMATIC LINKS

Markdown supports a shortcut style for creating “automatic” links for URLs and email addresses: simply surround the URL or email address with angle brackets. What this means is that if you want to show the actual text of a URL or email address, and also have it be a clickable link, you can do this:

<http://example.com/>
Markdown will turn this into:

<a href="http://example.com/">http://example.com/</a>
Automatic links for email addresses work similarly, except that Markdown will also perform a bit of randomized decimal and hex entity-encoding to help obscure your address from address-harvesting spambots. For example, Markdown will turn this:

<address@example.com>
into something like this:

<a href="&#x6D;&#x61;i&#x6C;&#x74;&#x6F;:&#x61;&#x64;&#x64;&#x72;&#x65;
&#115;&#115;&#64;&#101;&#120;&#x61;&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;
&#109;">&#x61;&#x64;&#x64;&#x72;&#x65;&#115;&#115;&#64;&#101;&#120;&#x61;
&#109;&#x70;&#x6C;e&#x2E;&#99;&#111;&#109;</a>
which will render in a browser as a clickable link to “address@example.com”.

(This sort of entity-encoding trick will indeed fool many, if not most, address-harvesting bots, but it definitely won’t fool all of them. It’s better than nothing, but an address published in this way will probably eventually start receiving spam.)

BACKSLASH ESCAPES

Markdown allows you to use backslash escapes to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax. For example, if you wanted to surround a word with literal asterisks (instead of an HTML <em> tag), you can use backslashes before the asterisks, like this:

\*literal asterisks\*
Markdown provides backslash escapes for the following characters:

\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark

