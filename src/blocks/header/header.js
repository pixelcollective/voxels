/**
 * BLOCK: header block
 *
 */
import { BrowserLayoutIcon } from '../icons'
import PanelButtonSettings from '../components/panel-button-settings'
import PanelBackgroundSettings from '../components/panel-background-settings'

import {
  registerBlockType,
  __,
  IconButton,
  PanelColorSettings,
  Dashicon,
  RangeControl,
  SelectControl,
  Toolbar,
  Button,
  RichText,
  AlignmentToolbar,
  MediaUpload,
  BlockControls,
  InspectorControls,
  PanelBody,
  URLInput,
  Fragment,
} from '../wp_imports.js'

import classnames from 'classnames'

registerBlockType('voxels/header', {
  title: __('Header'),
  icon: BrowserLayoutIcon,
  category: 'common',
  keywords: [
    __('Advocacy'),
    __('Tiny Pixel Collective'),
  ],

  supports: {
    align: true,
    align: ['center', 'wide', 'full'],
  },

  attributes: {
    title: {
      source: 'html',
      selector: 'h2',
      default: __('Heading Title')
    },
    subtitle: {
      source: 'html',
      selector: 'p',
      default: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tincidunt nisit ut pretium. Duis blandit, tortor et suscipit tincidunt, dolor metus mattis neque, ac varius magna nibh ac tortor.')
    },
    titleColor: {
      type: 'string',
      default: '#ffffff',
    },
    subtitleColor: {
      type: 'string',
      default: '#ffffff',
    },
    size: {
      type: 'string',
      default: 'normal',
    },
    contentAlign: {
      type: 'string',
      default: 'center',
    },
    backgroundColor: {
      type: 'string',
      default: '#000000',
    },
    backgroundImageID: {
      type: 'number',
    },
    backgroundImageURL: {
      type: 'string',
    },
    backgroundOpacity: {
      type: 'number',
      default: 5,
    },
    fixedBackground: {
      type: 'boolean',
      default: false,
    },
  },


  edit: function (props) {
    const {
      className,
      setAttributes,
      isSelected,
      editable,
      setState
    } = props

    const {
      size,
      title,
      titleColor,
      subtitle,
      subtitleColor,
      contentAlign,
      backgroundColor,
      backgroundImageID,
      backgroundImageURL,
      backgroundOpacity,
      fixedBackground,
    } = props.attributes

    const mainClasses = classnames([
      className,
      'voxels-header',
      'voxels-has-background-opacity-' + (1 * Math.round(backgroundOpacity / 1)),
    ], {
        'voxels-has-background': backgroundColor || backgroundImageURL,
        'voxels-has-background-image': backgroundImageURL,
      })

    const mainStyle = {
      'backgroundColor': backgroundColor ? backgroundColor : undefined,
      'backgroundImage': backgroundImageURL ? `url(${backgroundImageURL})` : undefined,
      'backgroundAttachment': fixedBackground ? 'fixed' : undefined,
      '--voxels-background-color': backgroundImageURL ? backgroundColor : undefined,
      'textAlign': contentAlign ? contentAlign : undefined,
    }

    return (
      <Fragment>
        <BlockControls>
          <AlignmentToolbar
            value={contentAlign}
            onChange={(newAlign) => setAttributes({ contentAlign: newAlign })}
          />
        </BlockControls>
        <InspectorControls>
          <PanelColorSettings
            initialOpen={true}
            title={__('Color Settings')}
            colorSettings={[
              {
                value: titleColor,
                onChange: (colorValue) => setAttributes({ titleColor: colorValue }),
                label: __('Title Color'),
              },
              {
                value: subtitleColor,
                onChange: (colorValue) => setAttributes({ subtitleColor: colorValue }),
                label: __('Subtitle Color'),
              },
            ]}
          >
          </PanelColorSettings>
          <PanelBackgroundSettings
            initialOpen={true}
            backgroundColor={backgroundColor}
            backgroundImageID={backgroundImageID}
            backgroundImageURL={backgroundImageURL}
            backgroundOpacity={backgroundOpacity}
            fixedBackground={fixedBackground}
            onChangeBackgroundColor={backgroundColor => setAttributes({ backgroundColor })}
            onChangeBackgroundImage={({ url, id }) => setAttributes({ backgroundImageURL: url, backgroundImageID: id })}
            onRemoveBackgroundImage={() => { setAttributes({ backgroundImageURL: '', backgroundImageID: 0 }) }}
            onChangeBackgroundOpacity={backgroundOpacity => setAttributes({ backgroundOpacity })}
            onChangeFixedBackground={value => setAttributes({ fixedBackground: !!value })}
          />
        </InspectorControls>
        <div className={mainClasses} style={mainStyle}>
          <div className='voxels-header-wrapper'>
            <RichText
              tagName='h2'
              className='voxels-header-title'
              placeholder={title.default}
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              style={{
                textAlign: contentAlign,
                color: titleColor
              }}
            />
            <RichText
              tagName='p'
              className='voxels-header-subtitle'
              placeholder={subtitle.default}
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
              style={{
                textAlign: contentAlign,
                color: subtitleColor
              }}
            />
          </div>
        </div>
      </Fragment>
    );
  },

  save: function (props) {
    const { className } = props
    const {
      size,
      title,
      titleColor,
      subtitle,
      subtitleColor,
      contentAlign,
      backgroundColor,
      backgroundImageURL,
      backgroundOpacity,
      fixedBackground,
    } = props.attributes

    const mainClasses = classnames([
      className,
      'voxels-header',
      'voxels-has-background-opacity-' + (1 * Math.round(backgroundOpacity / 1)),
    ], {
        'voxels-has-background': backgroundColor || backgroundImageURL,
        'voxels-has-background-image': backgroundImageURL,
      })

    const mainStyle = {
      'backgroundColor': backgroundColor ? backgroundColor : undefined,
      'backgroundImage': backgroundImageURL ? `url(${backgroundImageURL})` : undefined,
      'backgroundAttachment': fixedBackground ? 'fixed' : undefined,
      '--voxels-background-color': backgroundImageURL ? backgroundColor : undefined,
      'textAlign': contentAlign ? contentAlign : undefined,
    }

    return (
      <div className={mainClasses} style={mainStyle}>
        <div className='voxels-header-wrapper'>
          {!RichText.isEmpty(title) && (
            <RichText.Content
              tagName='h2'
              className='voxels-header-title'
              style={{ color: titleColor }}
              value={title}
            />
          )}
          {!RichText.isEmpty(subtitle) && (
            <RichText.Content
              tagName='p'
              className='voxels-header-subtitle'
              style={{ color: subtitleColor }}
              value={subtitle}
            />
          )}
        </div>
      </div>
    );
  },
});
