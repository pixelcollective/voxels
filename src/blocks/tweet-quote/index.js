import { TwitterIcon } from './../icons'
import Inspector from './inspect'

import classnames from 'classnames'

import { __,
      registerBlockType,
      RichText,
      Fragment,
      InspectorControls,
      PanelColorSettings } from '../wp_imports';

export default registerBlockType('voxels/click-to-tweet', {
  title: __('Click to tweet', 'voxels'),
  description: __('Lets users share content to Twitter', 'voxels'),
  category: 'common',
  icon: {
    background: '#0084b4',
    foreground: '#FFF',
    src: <TwitterIcon color='#fff' />
  },
  keywords: ['twitter'],
  attributes: {
    content: {
      type: 'string'
    },
    hashtags: {
      type: 'string'
    },
    twitterIntent: {
      type: 'string',
      default: 'https://twitter.com/intent/tweet?text='
    },
    bubbleColor: {
      type: 'string',
      default: 'rgb(68, 198, 232)'
    },
    bubbleBottomColor: {
      type: 'string',
      default: 'rgb(0, 115, 168)'
    }
  },
  edit: props => {
    const { attributes, className, setAttributes } = props;
    const { content, bubbleColor, bubbleBottomColor } = attributes;

    return (
      <Fragment>

        <Inspector {...{ attributes, setAttributes }} />
        <InspectorControls>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: bubbleColor,
                onChange: colorValue =>
                  setAttributes({ bubbleColor: colorValue }),
                label: __("Top bubble background color")
              },
              {
                value: bubbleBottomColor,
                onChange: colorValue =>
                  setAttributes({ bubbleBottomColor: colorValue }),
                label: __("Bottom bubble background color")
              }
            ]}
          />
        </InspectorControls>

        <div className={className}>
          <RichText
            tagName="div"
            format="string"
            value={content}
            className={`__content`}
            onChange={content => setAttributes({ content })}
            placeholder={"Your tweetable content"}
            style={{ backgroundColor: bubbleColor }}
          />
          <footer
            className={`__footer`}
            style={{ backgroundColor: bubbleBottomColor }}
          >
            <TwitterIcon /> Tweet this
            <div
              className={`__footer-triangle`}
              style={{ borderTop: `20px solid ${bubbleBottomColor}` }}
            />
          </footer>
        </div>
      </Fragment>
    );
  },
  save: props => {
    const { attributes, className } = props;
    const { content, hashtags, bubbleColor, bubbleBottomColor } = attributes;

    let tweetAction =
      attributes.twitterIntent + encodeURIComponent(attributes.content);
    attributes.hashtags
      ? (tweetAction += encodeURIComponent(" " + attributes.hashtags))
      : null;

    return (
      <div className={className}>
        <div className={`__content`} style={{ backgroundColor: bubbleColor }}>
          {content} {hashtags}
        </div>
        <footer className={`__footer`} style={{ backgroundColor: bubbleBottomColor }}>
          <a href={tweetAction}>
            <TwitterIcon /> Tweet this
          </a>
          <div className={`__footer-triangle`} style={{ borderTop: `20px solid ${bubbleBottomColor}` }} />
        </footer>
      </div>
    );
  }
});
