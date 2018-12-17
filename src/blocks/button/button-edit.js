import classnames from 'classnames'
import {
	__,
	RichText,
} from './../wp_imports'

function ButtonEdit( props ) {
    const {
        className = '',
        align = 'center',
        size = 'small',
        color,
        text = '',
        backgroundColor = '#0095da',
        borderRadius = 4,
        isSelected = null,
        hidden = '',
        onFocus = () => {},
        onChange = () => {},
    } = props

    const style = {
        borderRadius: borderRadius + 'px',
        backgroundColor: backgroundColor ? backgroundColor : undefined,
    }

    const mainClasses = classnames( [
        className,
        `wp-block-voxels-button`,
        `wp-block-voxels-button-${align}`,
        `wp-block-voxels-button-${size}`,
    ] )

    if(!hidden) {
        return (
            <span className={mainClasses} style={style} data-is-placeholder-visible={RichText.isEmpty(text)}>
                <div className={`wp-block-voxels-button-inner`}>
                    <RichText
                        tagName={"span"}
                        placeholder={__("Enter Text")}
                        value={text} onChange={onChange}
                        formattingControls={["bold", "italic", "strikethrough"]}
                        className={`blocks-button__inline-link wp-block-voxels-button-${align} `}
                        style={{ color }} onFocus={onFocus}
                        isSelected={isSelected}
                        keepPlaceholderOnFocus
                    />
                </div>
            </span>
        );
    } return null;
}

export default ButtonEdit