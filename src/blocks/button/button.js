/**
 * BLOCK: Button Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import classnames from 'classnames'
import { ButtonIcon } from './../icons'
import ButtonEdit from './button-edit'
import ButtonSave from './button-save'
import PanelButtonSettings from './../components/panel-button-settings'

import {
	registerBlockType, // Import registerBlockType() from wp.blocks
	__,
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar,
	Dashicon,
	IconButton,
	URLInput,
	Fragment,
} from './../wp_imports'

export const edit = ( props ) => {

	const { isSelected, className, setAttributes } = props;

	const { url, text, color, textColor, buttonHidden, size, align, cornerButtonRadius } = props.attributes;

	const mainClasses = classnames( [
		'wp-block-voxels-button',
		className,
	] )

	return (
		<Fragment>
			<BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( align ) => {
						setAttributes( { align } );
					} }
					controls={ [ 'left', 'center', 'right', 'full' ] }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelButtonSettings
					initialOpen={ true }
					buttonColor={ color }
					buttonTextColor={ textColor }
					buttonSize={ size }
					buttonHidden={buttonHidden}
					buttonBorderRadius={ cornerButtonRadius }
					onChangeButtonHidden={(buttonHiddenValue) => setAttributes({ buttonHidden: buttonHiddenValue } ) }
					onChangeButtonColor={ ( colorValue ) => setAttributes( { color: colorValue } ) }
					onChangeButtonTextColor={ ( colorValue ) => setAttributes( { textColor: colorValue } ) }
					onChangeButtonSize={ ( newSize ) => { setAttributes( { size: newSize } ) } }
					onChangeButtonBorderRadius={ ( cornerRad ) => setAttributes( { cornerButtonRadius: cornerRad } ) }
				/>
			</InspectorControls>

			<ButtonEdit
				onChange={(text) => setAttributes({ text })}
				className={mainClasses}
				align={align}
				hidden={''}
				size={size}
				backgroundColor={color}
				color={textColor}
				text={text}
				borderRadius={cornerButtonRadius}
			/>

			{ isSelected && (
				<form
					onSubmit={ ( event ) => event.preventDefault() }
					className={`blocks-button__inline-link wp-block-voxels-button-${align}` }>
					<Dashicon icon={ 'admin-links' } />
					<URLInput
						value={ url }
						onChange={ ( value ) => setAttributes( { url: value } ) }
					/>
					<IconButton
						icon={ 'editor-break' }
						label={ __( 'Apply' ) }
						type={ 'submit' }
					/>
				</form>
			) }
		</Fragment>
	)
}

export const save = ( props ) => {

	const { className } = props
	const { url, text, align, color, textColor, size, buttonHidden, cornerButtonRadius } = props.attributes;

	const mainClasses = classnames( [
		className,
	] )

	const saved = <ButtonSave hidden={buttonHidden} className={ mainClasses } align={ align } size={ size } url={ url } color={ textColor } text={ text } backgroundColor={ color } borderRadius={ cornerButtonRadius } />;
  return saved;
}

export const schema = {
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	text: {
		source: 'html',
		selector: 'a',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	buttonHidden: {
		type: 'string',
		default: '',
	},
	color: {
		type: 'string',
		default: '#007ab5',
	},
	textColor: {
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
	design: {
		type: 'string',
		default: 'basic',
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
registerBlockType( 'voxels/button', {
	title: __( 'Button' ),
	icon: ButtonIcon,
	description: 'Add a customizable button',
	category: 'common',
	keywords: [
		__( 'Button' ),
	],
	attributes: schema,
	edit,
	save,
} );
