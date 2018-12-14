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

