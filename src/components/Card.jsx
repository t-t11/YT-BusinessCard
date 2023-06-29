import { Buttons } from './Buttons';
import { DescriptionContents } from './DescriptionContents';
import { Footer } from './Footer';
import { NameSections } from './NameSections';

export const Card = () => {
  return (
    <div className="container">
      <main className="main-container">
        <img
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
          alt="man's face"
        />
        <div className="main-contents">
          <NameSections />
          <div className="buttons">
            <Buttons
              backgroundColor="#fff"
              color="#000"
              logo="fa-solid fa-envelope"
            >
              Email
            </Buttons>
            <Buttons
              backgroundColor="#5093E2"
              color="#fff"
              logo="fa-brands fa-linkedin"
            >
              LinkedIn
            </Buttons>
          </div>
          <div className="description">
            <DescriptionContents title="About">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </DescriptionContents>
            <DescriptionContents title="Interests">
              I wanna be a rock star!!!
            </DescriptionContents>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
