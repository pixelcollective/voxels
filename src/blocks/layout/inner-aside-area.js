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

  const ALLOWED_BLOCKS = ['voxels/card', 'voxels/polaroid', 'core/image'];

  return (
    <div className={'wp-block-voxels-aside-area voxels__aside-area'}>
      <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
    </div>
  );
}

export const save = () => {
  return (
    <div className={'wp-block-voxels-aside-area voxels__aside-area'}>
      <InnerBlocks.Content />
    </div>
  );
}

registerBlockType('voxels/inner-aside-area', {
  title: __('Aside Area'),
  description: 'Area for asides in multiple column layouts',
  icon: 'layout',
  category: 'common',
  keywords: [
    __('Materialize'),
    __('Layout'),
  ],
  attributes: {
    name: {
      type: 'string'
    }
  },
  edit: edit,
  save: save,
});
