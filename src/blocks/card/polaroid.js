/**
 * BLOCK: Polaroid Block.
 *
 * ♫ Sh-sh-sh-shake you... ♫
 * 🙌🏽 🙌🏽 🙌🏽 🙌🏽 🙌🏽 🙌🏽 🙌🏽 🙌🏽 🙌🏽 🙌🏽
 *
 */

import classnames from 'classnames'
import { CardIcon } from './../icons'
import ButtonEdit from './../button/button-edit'
import ButtonSave from './../button/button-save'
import PanelButtonSettings from './../components/panel-button-settings'
import ImageUploadPlaceholder from './../components/image-upload-placeholder'

import {
  registerBlockType,
  __,
  PanelColorSettings,
  IconButton,
  Dashicon,
  InspectorControls,
  RichText,
  BlockControls,
  AlignmentToolbar,
  URLInput,
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
    des,
    mediaID,
    mediaURL,
    headingColor,
    desColor,
    buttonURL,
    buttonText,
    buttonColor,
    buttonHidden,
    buttonTextColor,
    size,
    cornerButtonRadius,
    contentAlign
  } = props.attributes;

  const mainClasses = classnames([
    className,
    '.wp-block-voxels-card',
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
              value: desColor,
              onChange: (colorValue) => setAttributes({ desColor: colorValue }),
              label: __('Description Color'),
            },
          ]}
        >
        </PanelColorSettings>
        <PanelButtonSettings
          initialOpen={false}
          buttonColor={buttonColor}
          buttonTextColor={buttonTextColor}
          buttonSize={size}
          buttonHidden={buttonHidden}
          buttonBorderRadius={cornerButtonRadius}
          onChangeButtonHidden = {(value) => setAttributes ({ buttonHidden: value })}
          onChangeButtonColor={(value) => setAttributes({ buttonColor: value })}
          onChangeButtonTextColor={(value) => setAttributes({ buttonTextColor: value })}
          onChangeButtonSize={(value) => { setAttributes({ size: value }) }}
          onChangeButtonBorderRadius={(value) => setAttributes({ cornerButtonRadius: value })}
        />
      </InspectorControls>
      <div className={mainClasses}>
        <ImageUploadPlaceholder
          className='.wp-block-voxels-card-image-container'
          imageID={mediaID}
          imageURL={mediaURL}
          onRemove={() => { setAttributes({ mediaURL: '', mediaID: '' }) }}
          onChange={({ url, id }) => { setAttributes({ mediaURL: url, mediaID: id }) }}
        />
        <RichText
          tagName={'h4'}
          value={heading}
          className={'.wp-block-voxels-card-heading'}
          onChange={(text) => setAttributes({ heading: text })}
          style={{
            color: headingColor,
            textAlign: contentAlign
          }}
          keepPlaceholderOnFocus
        />
        <RichText
          tagName={'p'}
          value={des}
          className={'.wp-block-voxels-card-des'}
          onChange={(text) => setAttributes({ des: text })}
          style={{
            color: desColor,
            textAlign: contentAlign
          }}
          keepPlaceholderOnFocus
        />
        {!buttonHidden && (
        <ButtonEdit hidden={buttonHidden} size={size} align={contentAlign} color={buttonTextColor} backgroundColor={buttonColor} text={buttonText} borderRadius={cornerButtonRadius}
          onChange={(text) => setAttributes({ buttonText: text })}
        />
        )}
      </div>
      {isSelected && !buttonHidden && (
        <form
          onSubmit={(event) => event.preventDefault()}
          className={`blocks-button__inline-link voxels-button-${contentAlign}`}
          style={{ marginTop: 10 }}
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
  )
}

export const save = (props) => {

  const { className } = props
  const {
    heading,
    des,
    mediaURL,
    headingColor,
    desColor,
    buttonURL,
    buttonText,
    buttonColor,
    buttonHidden,
    buttonTextColor,
    size,
    cornerButtonRadius,
    contentAlign
  } = props.attributes;

  const mainClasses = classnames([
    className,
    '.wp-block-voxels-card',
  ], {
      'has-image': mediaURL,
    })

  return (
    <div className={mainClasses}>
      {mediaURL && <div className="voxels-card-image-container" style={{ backgroundImage: `url(${mediaURL})`, textAlign: contentAlign }} data-src={mediaURL} />}
      {!RichText.isEmpty(heading) && (
        <RichText.Content
          tagName="h4"
          style={{ color: headingColor, textAlign: contentAlign }}
          value={heading}
        />
      )}
      {!RichText.isEmpty(des) && (
        <RichText.Content
          tagName="p"
          className='.wp-block-voxels-card-des'
          style={{ color: desColor, textAlign: contentAlign }}
          value={des}
        />
      )}
      {buttonText && !!buttonText.length && (
        <ButtonSave hidden={buttonHidden} size={size} url={buttonURL} align={contentAlign} color={buttonTextColor} text={buttonText} backgroundColor={buttonColor} borderRadius={cornerButtonRadius} />
      )}
    </div>
  );
}

const schema = {
  mediaID: {
    type: "number"
  },
  mediaURL: {
    type: "string",
    source: "attribute",
    selector: ".wp-block-voxels-card-image-container",
    attribute: "data-src"
  },
  heading: {
    source: "html",
    selector: ".wp-block-voxels-card h4",
    default: __("Your Headline Here")
  },
  des: {
    source: "html",
    selector: ".wp-block-voxels-card-des",
    default: __(
      "Spectrum designator equarium dignity. Forensia tonne palor, a quastridian nun."
    )
  },
  headingColor: {
    type: "string"
  },
  desColor: {
    type: "string"
  },
  buttonURL: {
    type: "string",
    source: "attribute",
    selector: ".wp-block-voxels-button-inner",
    attribute: "href"
  },
  buttonText: {
    source: "html",
    selector: ".wp-block-voxels-button-inner",
    default: __("Button")
  },
  buttonHidden: {
    type: "string"
  },
  buttonColor: {
    type: "string"
  },
  buttonTextColor: {
    type: "string",
    default: "#ffffff"
  },
  size: {
    type: "string",
    default: "normal"
  },
  cornerButtonRadius: {
    type: "number",
    default: 4
  },
  contentAlign: {
    type: "string",
    default: "left"
  }
};

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
registerBlockType('voxels/polaroid', {
  title: __('Polaroid'),
  icon: CardIcon,
  category: 'common',
  keywords: [
    __('voxels'),
    __('Card'),
    __('Polaroid'),
  ],
  attributes: schema,
  edit,
  save,
});
