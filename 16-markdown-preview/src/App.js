import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState(`### Heading

  # H1
  ## H2
  ### H3
  
  ### Bold
  
  **bold text**
  
  ### Italic
  
  *italicized text*
  
  ### Blockquote
  
  > blockquote
  
  ### Ordered List
  
  1. First item
  2. Second item
  3. Third item
  
  ### Unordered List
  
  - First item
  - Second item
  - Third item
  
  ### Code
  
  
  
  ### Horizontal Rule
  
  ---
  
  ### Link
  
  [Markdown Guide](https://www.markdownguide.org)
  
  ### Image
  
  ![alt text](https://www.markdownguide.org/assets/images/tux.png)
  
  ## Extended Syntax
  
  These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.
  
  ### Table
  
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |
  

  
  
  
  ### Footnote
  
  Here's a sentence with a footnote. [^1]
  
  [^1]: This is the footnote.
  
  ### Heading ID
  
  ### My Great Heading {#custom-id}
  
  ### Definition List
  
  term
  : definition
  
  ### Strikethrough
  
  ~~The world is flat.~~
  
  ### Task List
  
  - [x] Write the press release
  - [ ] Update the website
  - [ ] Contact the media`);

  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
