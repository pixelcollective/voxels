import classnames from 'classnames'
import { RichText } from './../wp_imports'

function ButtonSave( props ) {
    const {
		className = '',
        align = 'center',
				size = 'normal',
				hidden = '',
        url = '', color, text, backgroundColor, borderRadius } = props

	const style = {
		borderRadius: borderRadius + 'px',
		backgroundColor: backgroundColor ? backgroundColor : undefined,
	}

	const mainClasses = classnames( [
		className,
		'voxels-button',
		`voxels-button-${align}`,
		`voxels-button-${size}`,
	] )
	if(!hidden) {
	return (
		<div className={ mainClasses } style={ style }>
			<RichText.Content
				tagName="a"
				className={ `voxels-button-inner` }
				href={ url }
				style={ { color } }
				value={ text }
			/>
		</div>
	);
	} return null;
}

export default ButtonSave