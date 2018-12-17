/**
 * BLOCK: Inner Content Area
 *
 */
import {
  registerBlockType,
  __,
  InnerBlocks
} from '../wp_imports'

export const edit = () => {

  const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/image', 'voxels/button'];
  const TEMPLATE = [['core/heading']];

  return (
    <div className={'wp-block-voxels-inner-content-area voxels__content-area voxels__column'}>
      <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } templateLock={ false } />
    </div>
  );
}

export const save = () => {
  return (
    <div className={'wp-block-voxels-content-area voxels__content-area'}>
      <InnerBlocks.Content />
    </div>
  )
}

registerBlockType("voxels/inner-content-area", {
  title: __("Content Area"),
  description: "Area for content in multiple column layouts",
  icon: "layout",
  category: "common",
  keywords: [__("Materialize"), __("Layout")],
  attributes: {
    name: {
      type: "string"
    }
  },
  edit: edit,
  save: save
});
