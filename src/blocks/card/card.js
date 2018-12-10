/**
 * BLOCK: Card Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import classnames from 'classnames'
import { CardIcon } from './../icons'
import ButtonEdit from './../button/button-edit'
import ButtonSave from './../button/button-save'
import PanelButtonSettings from './../components/panel-button-settings'

import {
  registerBlockType,
  __,
  PanelColorSettings,
  Button,
  IconButton,
  Dashicon,
  SelectControl,
  RangeControl,
  Toolbar,
  InspectorControls,
  RichText,
  BlockControls,
  AlignmentToolbar,
  URLInput,
  PanelBody,
  Fragment,
} from './../wp_imports'

export const edit = (props) => {

  const {
    isSelected,
    editable,
    setState,
    className,
    setAttributes
  } = props;

  const {
    heading,
    tagline,
    des,
    headingColor,
    taglineColor,
    desColor,
    buttonHidden,
    buttonURL,
    buttonText,
    buttonColor,
    buttonTextColor,
    size,
    cornerButtonRadius,
    contentAlign
  } = props.attributes;

  const mainClasses = classnames([
    className,
    'voxels-card',
  ])

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
          title={__('Text Colors')}
          colorSettings={[
            {
              value: headingColor,
              onChange: (colorValue) => setAttributes({ headingColor: colorValue }),
              label: __('Heading Color'),
            },
            {
              value: taglineColor,
              onChange: (colorValue) => setAttributes({ taglineColor: colorValue }),
              label: __('Tagline Color'),
            },
            {
              value: desColor,
              onChange: (colorValue) => setAttributes({ desColor: colorValue }),
              label: __('Description Color'),
            },
          ]}
        >
        </PanelColorSettings>
        <PanelButtonSettings
          initialOpen={false}
          buttonHidden={buttonHidden}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          buttonSize={size}
          buttonBorderRadius={cornerButtonRadius}
          onChangeButtonHidden={(value) => setAttributes({buttonHidden: value})}
          onChangeButtonColor={(value) => setAttributes({ buttonColor: value })}
          onChangeButtonTextColor={(value) => setAttributes({ buttonTextColor: value })}
          onChangeButtonSize={(value) => { setAttributes({ size: value }) }}
          onChangeButtonBorderRadius={(value) => setAttributes({ cornerButtonRadius: value })}
        />
      </InspectorControls>
      <div className={mainClasses}>
        <RichText
          tagName={'h4'}
          value={heading}
          className={'voxels-card-heading'}
          onChange={(text) => setAttributes({ heading: text })}
          style={{
            color: headingColor,
            textAlign: contentAlign
          }}
          keepPlaceholderOnFocus
        />
        <RichText
          tagName={'p'}
          value={tagline}
          className={'voxels-tagline'}
          onChange={(text) => setAttributes({ tagline: text })}
          style={{
            color: taglineColor,
            textAlign: contentAlign
          }}
          keepPlaceholderOnFocus
        />
        <RichText
          tagName={'p'}
          value={des}
          className={'voxels-card-des'}
          onChange={(text) => setAttributes({ des: text })}
          style={{
            color: desColor,
            textAlign: contentAlign
          }}
          keepPlaceholderOnFocus
        />
          <ButtonEdit hidden={buttonHidden}   size={size} align={contentAlign} color={buttonTextColor} backgroundColor={buttonColor} text={buttonText} borderRadius={cornerButtonRadius}
            onChange={(text) => setAttributes({ buttonText: text })} />
      </div>
      {isSelected && !buttonHidden && (
        <form
          onSubmit={(event) => event.preventDefault()}
          className={`blocks-button__inline-link voxels-button-${contentAlign}`}
          style={{ marginTop: 10 }}
        >
          <Fragment>
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
            </Fragment>
        </form>
      )}
    </Fragment>
  )
}

export const save = (props) => {

  const { className } = props
  const {
    heading,
    tagline,
    des,
    headingColor,
    taglineColor,
    desColor,
    buttonHidden,
    buttonURL,
    buttonText,
    buttonColor,
    buttonTextColor,
    size,
    cornerButtonRadius,
    contentAlign
  } = props.attributes;

  const mainClasses = classnames([
    className,
    'voxels-card',
  ])

  return (
    <div className={mainClasses}>
      {!RichText.isEmpty(heading) && (
        <RichText.Content
          tagName="h4"
          style={{ color: headingColor, textAlign: contentAlign }}
          value={heading}
        />
      )}
      {!RichText.isEmpty(tagline) && (
        <RichText.Content
          tagName="p"
          className='voxels-tagline'
          style={{ color: taglineColor, textAlign: contentAlign }}
          value={tagline}
        />
      )}
      {!RichText.isEmpty(des) && (
        <RichText.Content
          tagName="p"
          className='voxels-card-des'
          style={{ color: desColor, textAlign: contentAlign }}
          value={des}
        />
      )}
        <ButtonSave hidden={buttonHidden} size={size} url={buttonURL} align={contentAlign} color={buttonTextColor} text={buttonText} backgroundColor={buttonColor} borderRadius={cornerButtonRadius} />
    </div>
  );
}

const schema = {
  heading: {
    source: 'html',
    selector: '.voxels-card h4',
    default: __('Your Headline Here')
  },
  tagline: {
    source: 'html',
    selector: '.voxels-tagline',
    default: __('This is a supporting tagline')
  },
  des: {
    source: 'html',
    selector: '.voxels-card-des',
    default: __('The Headline concept and buttressing tagline are followed by a brief description. Remember to set an image and BAM! You\'ve got yourself a card 👏🏽')
  },
  headingColor: {
    type: 'string',
  },
  taglineColor: {
    type: 'string',
  },
  desColor: {
    type: 'string',
  },
  buttonURL: {
    type: 'string',
    source: 'attribute',
    selector: '.voxels-button-inner',
    attribute: 'href',
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
  buttonHidden: {
    type: 'string',
    default: '',
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
    default: 'left',
  },
}

/**
 * Register: Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('voxels/card', {
  title: __('Card'),
  icon: CardIcon,
  category: 'common',
  keywords: [
    __('Card'),
    __('voxels'),
  ],
  attributes: schema,
  edit,
  save,
});
