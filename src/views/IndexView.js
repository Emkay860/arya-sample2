/* eslint-disable */

import React from 'react';
import { createScope, map, transformProxies } from './helpers';
import HeroView from './HeroView';

const scripts = [
  {
    loading: fetch(
      'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61942219f61c831bef23ca98'
    ).then((body) => body.text()),
    isAsync: false,
  },
  {
    loading: fetch('js/webflow.js').then((body) => body.text()),
    isAsync: false,
  },
];

let Controller;

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller;

    try {
      Controller = require('..controllers/IndexController');
      Controller = Controller.default || Controller;

      return Controller;
    } catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView;

        return Controller;
      }

      throw e;
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html');
    htmlEl.dataset['wfPage'] = '61942219f61c83145c23ca99';
    htmlEl.dataset['wfSite'] = '61942219f61c831bef23ca98';

    scripts.concat(null).reduce((active, next) =>
      Promise.resolve(active).then((active) => {
        const loading = active.loading.then((script) => {
          new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script);

          return next;
        });

        return active.isAsync ? next : loading;
      })
    );
  }

  render() {
    const proxies =
      IndexView.Controller !== IndexView
        ? transformProxies(this.props.children)
        : {};

    return (
      <span>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\designcode-tutorial-edbf6-b81850493a5da.webflow.css);
        `,
          }}
        />
        <span className="af-view">
          <div className="af-class-body">
            <HeroView.Controller />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    );
  }
}

export default IndexView;

/* eslint-enable */
