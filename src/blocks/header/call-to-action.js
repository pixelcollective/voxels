/**
 * BLOCK: call-to-action block
 *
 */
import { BrowserLayoutIcon } from '../icons'
import ButtonEdit from '../button/button-edit'
import ButtonSave from '../button/button-save'
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

registerBlockType('voxels/call-to-action', {
  title: __('Call to Action'),
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
    buttonHidden: {
      type: 'string',
      default: '',
    },
    buttonURL: {
      type: 'string',
      source: 'attribute',
      selector: '.voxels-button-inner',
      attribute: 'href',
    },
    titleColor: {
      type: 'string',
      default: '#ffffff',
    },
    subtitleColor: {
      type: 'string',
      default: '#ffffff',
    },
    buttonText: {
      source: 'html',
      selector: '.voxels-button-inner',
      default: __('Button')
    },
    buttonColor: {
      type: 'string',
    },
    buttonTextColor: {
      type: 'string',
      default: '#ffffff',
    },
    size: {
      type: 'string',
      default: 'normal',
    },
    cornerButtonRadius: {
      type: 'number',
      default: 4,
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
      buttonURL,
      buttonText,
      buttonColor,
      buttonTextColor,
      cornerButtonRadius,
      buttonHidden,
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
      'voxels-call-to-action',
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
          <PanelButtonSettings
            initialOpen={false}
            buttonColor={buttonColor}
            buttonTextColor={buttonTextColor}
            buttonSize={size}
            buttonHidden={buttonHidden}
            buttonBorderRadius={cornerButtonRadius}
            onChangeButtonHidden={buttonHidden => setAttributes({ buttonHidden }) }
            onChangeButtonColor={(value) => setAttributes({ buttonColor: value })}
            onChangeButtonTextColor={(value) => setAttributes({ buttonTextColor: value })}
            onChangeButtonSize={(value) => { setAttributes({ size: value }) }}
            onChangeButtonBorderRadius={(value) => setAttributes({ cornerButtonRadius: value })}
          />
        </InspectorControls>
        <div className={mainClasses} style={mainStyle}>
          <div className='voxels-call-to-action-wrapper'>
            <RichText
              tagName='h2'
              className='voxels-call-to-action-title'
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
              className='voxels-call-to-action-subtitle'
              placeholder={subtitle.default}
              value={subtitle}
              onChange={(value) => setAttributes({ subtitle: value })}
              style={{
                textAlign: contentAlign,
                color: subtitleColor
              }}
            />
            {!buttonHidden && (
            <ButtonEdit hidden={buttonHidden} size={size} align={contentAlign} color={buttonTextColor} backgroundColor={buttonColor} text={buttonText} borderRadius={cornerButtonRadius}
              onChange={(text) => setAttributes({ buttonText: text })}
            />
            )}
          </div>
        </div>
        {isSelected && !buttonHidden && (
          <form
            key={'form-link'}
            onSubmit={(event) => event.preventDefault()}
            className={`blocks-button__inline-link voxels-button-${contentAlign}`}
          >
            <Dashicon icon={'admin-links'} />
            <URLInput
              value={buttonURL}
              onChange={(value) => setAttributes({ buttonURL: value })}
            />
            <IconButton
              icon={'editor-break'}
              label={__('Apply')}
              type={'submit'}
            />
          </form>
        )}
      </Fragment>
    );
  },

  save: function (props) {
    const { className } = props
    const {
      buttonURL,
      buttonText,
      buttonColor,
      buttonHidden,
      buttonTextColor,
      cornerButtonRadius,
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
      'voxels-call-to-action',
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
        <div className='voxels-call-to-action-wrapper'>
          {!RichText.isEmpty(title) && (
            <RichText.Content
              tagName='h2'
              className='voxels-call-to-action-title'
              style={{ color: titleColor }}
              value={title}
            />
          )}
          {!RichText.isEmpty(subtitle) && (
            <RichText.Content
              tagName='p'
              className='voxels-call-to-action-subtitle'
              style={{ color: subtitleColor }}
              value={subtitle}
            />
          )}
          {buttonText && !!buttonText.length && !buttonHidden && (
            <ButtonSave hidden={buttonHidden} size={size} url={buttonURL} align={contentAlign} color={buttonTextColor} text={buttonText} backgroundColor={buttonColor} borderRadius={cornerButtonRadius} />
          )}
        </div>
      </div>
    );
  },
});
