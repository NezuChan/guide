---
title: "Contributing"
description: "How to contribute the guide site"
date: "2022-10-18T17:17:56.247Z"
image: "https://i.imgur.com/b1NVloO.jpg"
---

<div class="container mx-4 h-auto w-auto rounded-md bg-white px-6 py-10 shadow-lg dark:bg-deep-purple-570530 md:mx-auto">
  <article class="prose lg:prose-xl">
    <h3 dark:text-white>Submitting a Pull Request (PR)</h3>
    <p class="text-lg dark:text-white">Before you submit your Pull Request (PR) consider the following guidelines:</p>
    <ul class="list-disc">
      <li class="dark:text-white">Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate existing efforts.</li>
      <li class="dark:text-white">Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design upfront helps to ensure that we're ready to accept your work.</li>
      <li class="dark:text-white">Fork the repository</li>
      <li class="dark:text-white">In your forked repository, make your changes in a new git branch:</li>
      <pre>git checkout -b my-fix-branch master</pre>
      <li class="dark:text-white">Commit your changes using a descriptive commit message that follows our <a href="#commit-message">commit message conventions</a>.</li>
      <pre>git commit --all</pre>
      <li class="dark:text-white">Push your branch to GitHub:</li>
      <pre>git push origin my-fix-branch</pre>
      <li class="dark:text-white">In GitHub, send a pull request to guide:master.</li>
    </ul>

    <h3 id="commit-message" class="dark:text-white">Commit Message Format</h3>
    <p class="text-lg dark:text-white">We have very precise rules over how our Git commit messages must be formatted. This format leads to easier to read commit history.</p>
    <h4>Commit Message</h4>
    <pre>
&lt;type&gt;(&lt;scope&gt;): &lt;short summary&gt;
   │      │             │
   │      │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
   │      │
   │      └─⫸ Commit Scope: File name or folder name without the extensions.
   │
   └─⫸ Commit Type: chore|feat|fix|
    </pre>
  </article>
</div>

