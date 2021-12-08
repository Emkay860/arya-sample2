/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61942219f61c831bef23ca98").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class FormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/FormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FormView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '61942219f61c83346323ca9b'
    htmlEl.dataset['wfSite'] = '61942219f61c831bef23ca98'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = FormView.Controller !== FormView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\designcode-tutorial-edbf6-b81850493a5da.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-animation="over-right" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="af-class-navbar w-nav">
              <div className="w-container">
                <a href="#" className="af-class-brand w-nav-brand"><img src="images/Logo-Angle.svg" loading="lazy" alt /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="http://apple.com" target="_blank" className="af-class-nav-link w-nav-link">Connect Wallet</a>
                  <a href="https://discord.gg/zwc2JYhJ" target="_blank" className="af-class-nav-link-2 w-nav-link">Discord</a>
                  <a href="https://twitter.com/AryaGhavami" className="af-class-nav-link-3 w-nav-link">Twitter</a>
                  <a href="https://twitter.com/AryaGhavami" className="af-class-nav-link-3 w-nav-link">Docs</a>
                </nav>
                <div className="w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-container w-container">
              <div className="af-class-form-block-2 w-form">
                <form id="email-form" name="email-form" data-name="Email Form"><label htmlFor="email">Email Address</label><input type="email" className="af-class-input w-input" maxLength={256} name="email" data-name="Email" placeholder="Your email" id="email" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-submit-button w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="af-class-footer af-class-wf-section">
              <div className="af-class-footer-container w-container">
                <div className="af-class-footer-content">
                  <div className="w-layout-grid af-class-footer-links">
                    <a href="#" className="af-class-link">Home</a>
                    <a href="#" className="af-class-link">Twitter</a>
                    <a href="#" className="af-class-link">Discord</a>
                    <a href="#" className="af-class-link">OpenSea</a>
                  </div>
                  <div className="af-class-footer-copyright">
                    <div className="af-class-text-block">Made with love by Arya.</div>
                    <div className="af-class-rich-text-block w-richtext">
                      <p>2021 <a href="/terms">Terms of Service</a> - <a href="/privacy">Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="af-class-newsletter">
                  <div className="af-class-text-block-2">Subscribe to receive updates. No spam, only the good stuff. </div>
                  <div className="af-class-form-block w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="af-class-form"><input type="text" className="af-class-input w-input" maxLength={256} name="Email" data-name="Email" placeholder="Your email" id="Email-3" required /><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-submit-button af-class-newsletter w-button" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default FormView

/* eslint-enable */