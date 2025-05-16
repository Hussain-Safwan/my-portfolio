import React from "react";

const FeedContents = (props) => {
  return (
    <div className="feed-contents">
      <div className="intro">
        <p>Hello, I am Hussain Md. Safwan.</p>
        <p>
          you aren't satisfied with the build tool and configuration choices,
          you can `eject` at any time. This command will remove the single build
          dependency from your project. Instead, it will copy all the
          configuration files and the transitive dependencies (webpack, Babel,
          ESLint, etc) right into your project so you have full control over
          them.
        </p>
        <p>
          All of the commands except `eject` will still work, but they will
          point to the copied scripts so you can tweak them. At this point
          you're on your own. You don't have to ever use `eject`. The curated
          feature set is suitable for small and middle deployments, and you
          shouldn't feel obligated to use this feature. However we understand
          that this tool wouldn't be useful if you couldn't customize it when
          you are ready for it. ## Learn More You can learn more in the
        </p>
      </div>

      <div className="section news">
        <h2 className="header">News</h2>
      </div>

      <div className="section publications">
        <h2 className="header">Publications</h2>
      </div>

      <div className="section projects">
        <h2 className="header">Projects</h2>
      </div>

      <div className="section contacts">
        <h2 className="header">Contacts</h2>
      </div>
    </div>
  );
};

export default FeedContents;
