import { __,
      InspectorControls,
      PanelBody,
      TextareaControl  } from '../wp_imports';

const { compose, withState } = wp.compose;
const { Component } = wp.element; // ???

class Inspector extends Component {

  render() {

    const {
      attributes: { hashtags },
      setAttributes
    } = this.props

    return (
      <InspectorControls>

        <PanelBody title={ __( 'Hashtags', 'voxels' ) }>

          <TextareaControl
            label={ __( 'Hashtags', 'voxels' ) }
            help={ __( 'Will be automatically appended to end of tweet', 'voxels' ) }
						onChange={ hashtags => setAttributes( { hashtags } ) }
            value={ hashtags }
            rows='2'
					/>
        </PanelBody>

      </InspectorControls>
    )
  }
}

export default compose([
  withState({ preview: false }),
])(Inspector);
