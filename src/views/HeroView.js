/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class HeroView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/HeroController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = HeroView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

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
    const proxies = HeroView.Controller !== HeroView ? transformProxies(this.props.children) : {
      'mint': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\designcode-tutorial-edbf6-b81850493a5da.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-hero af-class-wf-section">
            <div className="af-class-hero-container w-container">
              <div className="af-class-content-block">
                <h1 data-w-id="d9a18383-f450-f3de-bdb2-d0d09a39688d" style={{opacity: 0, WebkitTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-herotitle"><span className="af-class-text-span">Emblem</span><span className="af-class-text-span-2"><br />Some CTA about how dope all this is</span></h1>
                <div className="af-class-cta">Mint an Emblem</div><img src="images/dice.jpeg" loading="lazy" sizes="(max-width: 479px) 110.015625px, (max-width: 767px) 27vw, (max-width: 991px) 172px, 225px" srcSet="images/dice.jpeg 500w, images/dice.jpeg 1200w" alt className="af-class-heroimage" />
                <div data-w-id="93cd602d-8fcf-33e6-fd90-4a004e83a035" style={{opacity: 0, WebkitTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="af-class-itemsleft">0/10000 left at 0.123 ETH</div>
                <div data-hover="false" data-delay={0} className="af-class-dropdown w-dropdown">
                  <div className="af-class-dropdown-toggle w-dropdown-toggle">
                    <div className="w-icon-dropdown-toggle" />
                    <div>How many do you want to mint?</div>
                  </div>
                  <nav className="w-dropdown-list">
                    <a href="#" className="w-dropdown-link">1</a>
                    <a href="#" className="w-dropdown-link">2</a>
                    <a href="#" className="w-dropdown-link">3</a>
                    <a href="#" className="w-dropdown-link">4</a>
                    <a href="#" className="w-dropdown-link">5</a>
                  </nav>
                </div>
                {map(proxies['mint'], props => <a data-w-id="4893bcf7-e23d-616c-0acb-e689b9b21e57" style={{opacity: 0, WebkitTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, -20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} href="#" {...{...props, className: `af-class-mintbutton w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Mint</React.Fragment>}</a>)}
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default HeroView

/* eslint-enable */