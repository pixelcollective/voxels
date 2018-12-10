/**
 * BLOCK: Two Column Layout
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import {
  registerBlockType,
  __,
  InnerBlocks
} from '../wp_imports'

export const edit = () => {

  const TEMPLATE = [
    ["voxels/row"]
  ];

  const TEMPLATE_LOCK = 'ALL';
  const ALLOWED_BLOCKS = ['voxels/row'];

  return (
    <div className={'wp-block-voxels-two-column-layout wp-block voxels__section'} >
      <InnerBlocks template={ TEMPLATE } allowedBlocks={ALLOWED_BLOCKS} templateLock={ true } />
    </div>
  );
}

export const save = () => {
  return (
    <div className={'wp-block-voxels-two-column-layout wp-block voxels__two-column-block'} >
      <InnerBlocks.Content />
    </div>
  );
}

registerBlockType( 'voxels/two-column-layout', {
  title: __( 'Two Column Layout' ),
  description: 'Two column layout for posts and pages',
  icon: 'layout',
  category: 'common',
  keywords: [
    __( 'Materialize' ),
    __( 'Layout' ),
  ],
  attributes: {
    name: {
      type: 'string'
    }
  },
  edit: edit,
  save: save,
});
