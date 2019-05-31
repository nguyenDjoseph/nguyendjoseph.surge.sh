import React, { Component } from 'react';
import Typist from 'react-typist';
import classNames from 'classnames';

export default class Content extends Component {
  constructor(props, context) {
    super(props, context);
    this.content = this.content.bind(this)
  };

  content() {
    const homeClasses = classNames({
      'home': true,
      'moveUpHome': true,
    })

    const aboutProjectClasses = classNames({
      'about-projects-container': true,
      'visible': true,
      'moveUpAbout': true
    })

    const aboutBox = classNames({
      'about-box': true,
    })

    const customTypist = classNames({
      'custom-typist': true,
      'Typist': true,
    })

    const underline = classNames({
      'underline': true
    })

    const highlight = classNames({
      'highlight': true
    })

    return (
      <div>
        <div className={homeClasses}>
          <Typist className={customTypist} cursor={{ hideWhenDone: true }}>
            <Typist.Delay ms={500} />
              <h1>Joseph Nguyen</h1>
            <Typist.Delay ms={500} />
              Software Engineer
            <Typist.Delay ms={500} />
          </Typist>
        </div>
        <div className={aboutProjectClasses}>
          <div className={aboutBox}>
              <h4 className="hdr"><u>About me</u></h4>
              <h5>Hello! I{`'`}m currently studying CS at <span className={highlight}>UCSC</span> and will graduate in 2020.
              Right now, I'm interested in <span className={underline}>fullstack web development</span> and have been self teaching myself different languages and frameworks for the last 3 years.</h5>
              <h4 className="hdr"><u>Skills</u></h4>
              <div className="skills-container">
              <div className="skill">
                <svg viewBox="0 0 128 128">
                  <path fill="#F0DB4F" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
                </svg>
              </div>
              <div className="skill">
                <svg viewBox="0 0 128 128">
                  <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                </svg>
              </div>
              <div className="skill">
              <i class="devicon-react-original colored"></i>
              </div>
              <div className="skill">
              <svg viewBox="0 0 128 128">
                <path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
              </svg>
              </div>
            </div>
            <h4 className="hdr"><u>Social/Resume/Contact</u></h4>
            <div className="social-container">
              <a className="socialz" href="https://www.linkedin.com/in/joseph-nguyen-017167139/"><i className="fab fa-linkedin-in"></i></a>
              <a className="socialz" href="https://github.com/nguyendjoseph"><i className="fab fa-github"></i></a>
              <a className="socialz" href="https://github.com/nguyendjoseph"><i className="far fa-file-alt"></i></a>
              <a className="socialz" href="mailto:nguyendjoseph@gmail.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return(
      <div>
        {this.content()}
      </div>
    )
  };
}
