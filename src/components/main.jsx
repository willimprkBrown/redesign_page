import "./main.css";
import autonodyneFront from "../assets/autonodyneFront.png";
import textGuide from "../assets/textGuide.png";
import colorGuide from "../assets/colorGuide.png";
import buttonGuide from "../assets/buttonGuide.png";
import logoGuide from "../assets/logoGuide.png";
import allGuide from "../assets/allGuide.png";
import desktopMock from "../assets/desktopMock.png";
import phoneMock from "../assets/phoneMock.png";
import tabletMock from "../assets/tabletMock.png";

import careerDesign from "../assets/careerDesign.png";
import careerRedesign from "../assets/careerRedesign.png";

import overlapDesign from "../assets/overlapDesign.png";
import overlapRedesign from "../assets/overlapRedesign.png";

import typeImageDesign from "../assets/typeImageDesign.png";
import typeImageRedesign from "../assets/typeImageRedesign.png";

import droneImageDesign from "../assets/droneImageDesign.png";
import droneImageRedesign from "../assets/droneImageRedesign.png";

import textDesign from "../assets/textDesign.png";
import textRedesign from "../assets/textRedesign.png";

import tabletRedesign from "../assets/tabletRedesign.png";
import tabletDropdownRedesign from "../assets/tabletDropdownRedesign.png";
import autonodyneFrontRedesign from "../assets/autonodyneFrontRedesign.png";

const Main = () => {
  return (
    <section className="main-container">
      <h1>Redesign Project</h1>
      <p>
        This project will focus on redesigning and recreating a website to make
        it more responsive, clean, and practical. The first step will involve
        identifying issues in the existing website design. A visual style guide
        and multiple mockups will then be created to demonstrate how the website
        should respond at different screen sizes. The website will be redesigned
        with the goal of addressing the identified issues, and the final step
        will involve implementing the redesign based on the new design concepts.
      </p>
      <h1>Website Selection</h1>
      <p>
        I chose autonodyne.com because when I was searching through it while
        applying for jobs, I found the experience to be inefficient and
        generally underdeveloped.
      </p>
      <img src={autonodyneFront} alt="autonodyne front page"></img>
      <p className="caption">autonodyne.com front page</p>
      <h1>Identifying Usability Problems</h1>
      <p>
        I analyzed the website, making observations about its functionality and
        accessibility. For functionality, I split my observations into three
        cateogories, efficiency, learnability, and memorability. As for
        accessibility, I used a tool called WebAIM WAVE, which evaluates a
        website's accessbility, to help me make observations about the
        accessibility of the website. Functional issues were not mutually
        exclusive from accessibility issues.
      </p>
      <div className="table-container">
        <h2>Functional Issues</h2>
        <table>
          <thead>
            <tr>
              <th className="divider">Efficiency</th>
              <th className="divider">Learnability</th>
              <th className="divider">Memorability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    No menu or methods to quickly access content further down
                    the page, poor efficiency.
                  </li>
                  <li>
                    Website layout includes a lot of blank space and large
                    images, making the website inefficient to navigate.
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    The website’s main method of navigation is scrolling. The
                    learnability is good since the website is simple, but lacks
                    efficient alternative ways of navigating the website.
                  </li>
                  <li>
                    {" "}
                    Users can tab through the page, but it is unclear where the
                    tab focusing will navigate to, leading to a poor experience
                    keyboard users.{" "}
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>
                    Users must scroll up and down to explore all the content, as
                    there is no header, making the memorability and
                    discoverability poor.{" "}
                  </li>
                  <li>
                    There are other pages that can be navigated to but only
                    through links in certain bodies of text. These pages are
                    hard to find and are not easily accessible.
                  </li>
                  <li>
                    The webiste consists of mainly text and images with litte
                    animation, making the website static and forgettable.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Accessibility Issues</h2>
        <table>
          <thead>
            <tr>
              <th className="divider">Accessibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    The tab focusing is poor, making it difficult to navigate
                    the page quickly with keyboard-only.
                  </li>
                  <li>
                    There were missing alternative labels for images and videos,
                    contributing to poor accessibility. This was the most common
                    issue found by the WAVE tool.
                  </li>
                  <li>
                    The website has poor responsiveness, with the website text
                    and images not adapting well to some screen sizes, making
                    text and images difficult to read and see.
                  </li>
                  <li>
                    The website has a hidden button with no functionality,
                    adding clutter for keyboard users. The website has text
                    overlaps in some places, making it difficult to read for
                    users with normal and impaired vision.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1>Visual Redesign</h1>
      <p>
        Using Figma, I created a visual style guide for the website and
        redesigned the website to address the issues I observed in the original
        website. I then created several mockups of how the website should look
        like at different screen resolutions/sizes to understand how to make the
        website more accessible to different types of users.{" "}
      </p>
      <h2>Visual Style Guide</h2>
      {/* <img src={textGuide} className='separate'></img>
            <img src={buttonGuide} className='separate'></img>
            <img src={colorGuide} className='separate'></img>
            <img src={logoGuide}></img> */}
      <img src={allGuide} className="guide"></img>
      <h2>Responsive Redesign</h2>
      <p className="caption big">Screen size: ~3840x2160px (Desktop)</p>
      <img src={desktopMock} className="separate resp"></img>
      <p className="caption big">Screen size: ~768x1024px (Tablet)</p>
      <img src={tabletMock} className="separate resp"></img>
      <p className="caption big">Screen size: ~375x667px (Phone)</p>
      <img src={phoneMock} className="resp"></img>
      <h1>Website Redesign</h1>
      <p>
        With the style guide and mockups, I then recreated the website in HTML
        and CSS, addressing the issues in the original website. The previously
        shown mockups were not perfectly followed while recreating the website,
        with slight stylistic changes being made during development. This
        redesign of the website was mainly to refine the flow and consistency of
        the website and making it more responsive at more screen sizes.
      </p>

      <h2>Navigation Bar</h2>
      <div>
        <img src={autonodyneFrontRedesign}></img>
      </div>
      <p className="caption">
        A navbar bar was added, which is expanded for desktop screen szies. The
        navbar is to help the user navigate through the website more
        efficiently. The options can be tabbed through linearly, making the
        website more accessible. The navbar is also sticky, so it will remain on
        the screen even while the user scrolls down, allowing users to always be
        able to quickly and efficiently navigate the website.
      </p>
      <div className="compare">
        <img src={tabletRedesign}></img>
        <img src={tabletDropdownRedesign}></img>
      </div>
      <p className="caption">
        The navbar is collapsed for tablet and phone screen sizes. The user can
        click on the hamburger icon to expand and close the menu, which adds
        more accessibility for smaller screens. The options in the dropdown menu
        in the mobile version can be tabbed through as well for accessbility
        reasons. Animations were also added to the opening of the dropdown menu
        to make the website feel less static and improve memorability.
      </p>

      <h2>Text Reformatting</h2>
      <div className="compare">
        <div className="image-container">
          <p className="center ba">Before</p>
          <img src={textDesign} alt="Before design" />
        </div>
        <div className="image-container">
          <p className="center ba">After</p>
          <img src={textRedesign} alt="After design" />
        </div>
      </div>
      <p className="caption">
        The text was previously inconsistent and had too little spacing in some
        places at smaller screen sizes, making the text difficult to read. The
        text would also not resize at certain screen sizes, forming large
        vertical text boxes and creating blank space that makes the website
        longer and more inefficient to navigate through. I made the text more
        spaced and consistent to improve its readability, and made the text
        resize at different screen sizes to reduce the length of the website for
        more efficient navigation.
      </p>

      <div className="compare">
        <div className="image-container">
          <p className="center ba">Before</p>
          <img src={overlapDesign} alt="Before overlap design" />
        </div>
        <div className="image-container">
          <p className="center ba">After</p>
          <img src={overlapRedesign} alt="After overlap design" />
        </div>
      </div>
      <p className="caption">
        Even at larger and more standard screen sizes, there was text overlap in
        some places making the text difficult to read. I fixed the overlap to
        make the text more readable and reformatted the layout of the text at
        different screen sizes to further improve the flow.
      </p>

      <h2>Image Reformatting</h2>
      <div className="compare">
        <div className="image-container">
          <p className="center ba">Before</p>
          <img src={droneImageDesign} alt="Before drone image design" />
        </div>
        <div className="image-container">
          <p className="center ba">After</p>
          <img src={droneImageRedesign} alt="After drone image design" />
        </div>
      </div>
      <p className="caption">
        The images at smaller screen sizes would reformat into a taller and
        non-standard arrangement, distracting from the content and making the
        website longer and more inefficient to navigate through. I reformatted
        the images to be more consistent, less distracting, and take up less
        space. The images would also shrink to a size where the contents of the
        image could not be seen well in the original website. I made the images
        scale better at different screen sizes, improving overall image
        visibility.
      </p>

      <h2>Column Reformatting</h2>
      <div className="compare">
        <div className="image-container">
          <p className="center ba">Before</p>
          <img src={typeImageDesign} alt="Before type image design" />
        </div>
        <div className="image-container">
          <p className="center ba">After</p>
          <img src={typeImageRedesign} alt="After type image design" />
        </div>
      </div>
      <p className="caption">
        The columns would shrink to a size where the image and text would be
        difficult to read and follow. I made another intermediary level of
        responsiveness to reduce the columns to 2 instead keeping 4 columns at
        certain screen sizes, keeping the items readable at all times.
      </p>

      <h2>Button Layout Reformatting</h2>
      <div className="compare">
        <div className="image-container">
          <p className="center ba">Before</p>
          <img src={careerDesign} alt="Before career design" />
        </div>
        <div className="image-container">
          <p className="center ba">After</p>
          <img src={careerRedesign} alt="After career design" />
        </div>
      </div>
      <p className="caption">
        The text in the buttons would wrap and make the button more cluttered. I
        made the buttons more spaced and had a layout such that the buttons
        would not have to shrink. Further, the buttons would appear adjacent to
        each other, taking away from the idea of a "list of jobs", making the
        purpose of the buttons more ambiguous. I placed the buttons in a more
        intuitive vertical layout to convey the metaphor of a "list of jobs"
        better while preventing the text from wrapping, improving the
        readability of the button as well.
      </p>
      <div className="conclusion">
        <h1>Conclusion</h1>
        <p>
          Overall, I believe the redesign was successful in addressing the
          issues I identified in the original website. The website is now more
          efficient, learnable, and memorable, with the addition of a navigation
          bar, improved keyboard accessbility, and more consistent styling and
          spacing. The website is also more accessible, with the tab focusing
          being more intuitive and learnable, and the text being more readable
          across varying screen sizes due. <br></br>
          <br></br>Further improvements that could be made in another redesign
          of the website include: more animations for greater memorability,
          customizable/selectable color schemes for better visibilty and
          accessbility, and a redesigned way of navigating the website, such as
          through multiple pages and more extensive navigation bar.
        </p>
      </div>
    </section>
  );
};

export default Main;
