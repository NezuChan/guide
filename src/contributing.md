---
title: "Contributing"
description: "How to contribute the guide site"
date: "2022-10-18T17:17:56.247Z"
image: "https://i.imgur.com/b1NVloO.jpg"
---

<div className="container mx-4 h-auto w-auto rounded-md bg-white px-6 py-10 shadow-lg dark:bg-deep-purple-570530 md:mx-auto">
    <article className="prose lg:prose-xl">
      <h3 className="dark:text-white">Submitting a Pull Request (PR)</h3>
      <p className="text-lg dark:text-white">
        Before you submit your Pull Request (PR) consider the following
        guidelines:
      </p>
      <ul className="list-disc">
        <li className="dark:text-white">
          Search GitHub for an open or closed PR that relates to your
          submission. You don't want to duplicate existing efforts.
        </li>
        <li className="dark:text-white">
          Be sure that an issue describes the problem you're fixing, or
          documents the design for the feature you'd like to add. Discussing the
          design upfront helps to ensure that we're ready to accept your work.
        </li>
        <li className="dark:text-white">Fork the repository</li>
        <li className="dark:text-white">
          In your forked repository, make your changes in a new git branch:
        </li>
        <pre>git checkout -b my-fix-branch master</pre>
        <li className="dark:text-white">
          Commit your changes using a descriptive commit message that follows
          our <a className="dark:text-white" href="#commit-message">commit message conventions</a>.
        </li>
        <pre>git commit --all</pre>
        <li className="dark:text-white">Push your branch to GitHub:</li>
        <pre>git push origin my-fix-branch</pre>
        <li className="dark:text-white">
          In GitHub, send a pull request to guide:master.
        </li>
      </ul>

      <h3 className="dark:text-white" id="commit-message">
        Commit Message Format
      </h3>
      <p className="text-lg dark:text-white">
        We have very precise rules over how our Git commit messages must be
        formatted. This format leads to easier to read commit history.
      </p>
      <h4 className="dark:text-white">Commit Message Header</h4>
      <pre>
                &lt;type&gt;(&lt;scope&gt;): &lt;short summary&gt;
   │      │             │
   │      │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
   │      │
   │      └─⫸ Commit Scope: File name or folder name without the extensions.
   │
   └─⫸ Commit Type: chore|feat|fix|
      </pre>

      <h3 className="dark:text-white">Component</h3>

      <p className="dark:text-white">
        To help you contribute, we have prepared guide for you to use while
        contributing to our page
      </p>
    </article>

    <DiscordMessages className="rounded">
      <DiscordMessage
        avatar={"https://i.kagchi.my.id/nezuko.png"}
        bot={true}
        verified={true}
        author="NezukoChan"
        style={{
          prose: "!important"
        }}
      >
        {" "}
        Hello ! I will be your assistant from now on !{" "}
      </DiscordMessage>
    </DiscordMessages>

    <article className="prose lg:prose-xl">
      <p className="dark:text-white">
        There are much of Discord component supported by
        @skyra/discord-components-react. as above, an example message component
        in Discord
      </p>
      <h4 className="dark:text-white">Slash Command Usage</h4>
    </article>

    <DiscordMessages className="rounded">
      <DiscordMessage
        avatar={"https://i.kagchi.my.id/nezuko.png"}
        bot={true}
        verified={true}
        author="NezukoChan"
      >
        <DiscordCommand
          slot="reply"
          profile="favna"
          command="/ping"
        ></DiscordCommand>
        Pong!
      </DiscordMessage>
      <DiscordMessage
        avatar={"https://i.kagchi.my.id/nezuko.png"}
        bot={true}
        verified={true}
        author="NezukoChan"
        ephemeral
      >
        <DiscordReply
          slot="reply"
          avatar={"https://i.kagchi.my.id/nezuko.png"}
          bot={true}
          verified={true}
          author="NezukoChan"
          command
        >
          Pong!
        </DiscordReply>
        Took 100ms.
      </DiscordMessage>
    </DiscordMessages>
  </div>
